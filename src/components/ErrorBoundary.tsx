import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public declare props: Readonly<Props>;

  constructor(props: Props) {
    super(props);
    this.props = props;
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught component error:', error, errorInfo);
    const msg = error?.message || '';
    const isChunkLoadError =
      msg.includes('Failed to fetch dynamically imported module') ||
      msg.includes('Importing a module script failed') ||
      msg.includes('Loading chunk') ||
      error?.name === 'ChunkLoadError';

    if (isChunkLoadError) {
      try {
        const reloadKey = `urunk_boundary_reload_${window.location.pathname}`;
        if (!sessionStorage.getItem(reloadKey)) {
          sessionStorage.setItem(reloadKey, '1');
          window.location.reload();
        }
      } catch {
        // Fallback to manual reload button in ErrorBoundary UI
      }
    }
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex flex-col items-start justify-center px-6 py-20 max-w-xl mx-auto">
          <h2 className="font-serif text-primary mb-4">
            Something went wrong loading this view
          </h2>
          <p className="text-primary/80 mb-8 leading-relaxed">
            We encountered a temporary loading error. Please refresh the page to restore full functionality.
          </p>
          <button
            type="button"
            onClick={this.handleReload}
            className="bg-accent hover:bg-accent-hover text-white px-[26px] py-[16px] rounded-sm font-semibold transition-colors cursor-pointer"
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
