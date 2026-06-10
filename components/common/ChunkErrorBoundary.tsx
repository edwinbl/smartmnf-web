"use client";

import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

const CHUNK_ERROR_PATTERNS = [
  /ChunkLoadError/i,
  /Loading chunk [\d]+ failed/i,
  /Failed to fetch dynamically imported module/i,
  /Importing a module script failed/i,
];

const STORAGE_KEY = "__chunk_reload_attempt";

function isChunkLoadError(err: unknown): boolean {
  const msg = err instanceof Error ? `${err.name} ${err.message}` : String(err);
  return CHUNK_ERROR_PATTERNS.some((re) => re.test(msg));
}

/**
 * Catches stale lazy-chunk failures (typically after a fresh deploy invalidates
 * hashed chunk filenames the open tab still references) and triggers a single
 * full reload to fetch the new manifest. Subsequent failures fall through to
 * the fallback UI so we don't infinite-loop.
 */
export class ChunkErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: unknown): State {
    if (isChunkLoadError(error)) {
      try {
        const attempted = sessionStorage.getItem(STORAGE_KEY);
        if (!attempted) {
          sessionStorage.setItem(STORAGE_KEY, "1");
          window.location.reload();
          return { hasError: false };
        }
      } catch {
        // sessionStorage may be unavailable; fall through to fallback UI.
      }
    }
    return { hasError: true };
  }

  componentDidCatch(): void {
    // Clear the reload flag once we've successfully rendered something new.
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) {
        sessionStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      /* noop */
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="min-h-screen grid place-items-center p-6 text-center">
            <div>
              <h1 className="text-xl font-semibold mb-2">Something went wrong</h1>
              <p className="text-sm text-muted-foreground mb-4">
                The page failed to load. Please refresh to try again.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium"
              >
                Reload
              </button>
            </div>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
