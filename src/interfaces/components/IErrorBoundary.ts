export interface IErrorBoundary {
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}
