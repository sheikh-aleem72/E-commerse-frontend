import React from "react";
import { ErrorBoundary } from "react-error-boundary";

function CustomErrorBoundaryUI({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="alert alert-error">
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  );
}

export default function CustomErrorBoundary({ children }) {
  return (
    <ErrorBoundary
      FallbackComponent={CustomErrorBoundaryUI}
      onReset={window.location.reload()}
    >
      {children}
    </ErrorBoundary>
  );
}
