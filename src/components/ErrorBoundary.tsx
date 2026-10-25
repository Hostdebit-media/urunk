import React, { Component, ErrorInfo, ReactNode } from 'react';
import { RefreshCw, AlertTriangle } from 'lucide-react';

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
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-20 text-center max-w-lg mx-auto">
          <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-6 border border-accent/20">
            <AlertTriangle size={32} />
          </div>
          <h2 className="text-2xl font-serif font-bold text-primary mb-3">
            Something went wrong loading this view
          </h2>
          <p className="text-primary/70 text-sm mb-8 leading-relaxed">
            We encountered a temporary loading error. Please refresh the page to restore full functionality.
          </p>
          <button
            onClick={this.handleReload}
            className="bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-xl font-medium text-sm transition-all shadow-sm hover:shadow-md flex items-center gap-2 cursor-pointer"
          >
            <RefreshCw size={16} />
            <span>Reload Page</span>
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
