import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-canvas px-6">
      <div className="text-center">
        <p className="font-mono text-xs tracking-[0.18em] text-ink-muted uppercase mb-4">
          404
        </p>
        <h1 className="font-display italic text-[clamp(3rem,8vw,6rem)] leading-tight tracking-tighter text-ink mb-6">
          Lost in the void.
        </h1>
        <p className="text-ink-muted font-light mb-10 max-w-sm mx-auto">
          This page doesn't exist — or was moved. Either way, let's get you back.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-ink text-canvas-card px-7 py-3.5 rounded-full text-sm font-medium hover:bg-ink-soft transition-colors duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
