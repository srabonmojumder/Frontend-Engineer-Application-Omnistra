"use client";

import { useMemo } from "react";

/* ── Types ──────────────────────────────────────────── */

interface ConnectionLinesProps {
  /** Scroll progress 0→1 */
  progress: number;
  /** Whether section has entered viewport */
  isVisible: boolean;
}

interface Point {
  x: number;
  y: number;
}

/* ── Path definitions ───────────────────────────────── */

// Cubic Bézier paths [start, cp1, cp2, end] in 0-100 coordinate space.
// These approximate the network mesh visible in the design.
const networkPaths: Point[][] = [
  // Upper arc: sweeps from top-left to top-right
  [
    { x: 14, y: 18 },
    { x: 30, y: -4 },
    { x: 65, y: -4 },
    { x: 86, y: 16 },
  ],
  // Left descent: top-left → left-center → bottom-left
  [
    { x: 18, y: 16 },
    { x: 14, y: 36 },
    { x: 22, y: 56 },
    { x: 26, y: 76 },
  ],
  // Right descent: top-right → right-center → bottom-right
  [
    { x: 84, y: 16 },
    { x: 88, y: 36 },
    { x: 84, y: 56 },
    { x: 82, y: 76 },
  ],
  // Bottom arc: sweeps from bottom-left to bottom-right
  [
    { x: 28, y: 78 },
    { x: 40, y: 96 },
    { x: 66, y: 96 },
    { x: 82, y: 76 },
  ],
  // Center spine: top-center → bottom-center (slight S-curve)
  [
    { x: 46, y: 14 },
    { x: 44, y: 38 },
    { x: 52, y: 62 },
    { x: 54, y: 82 },
  ],
  // Cross bridge: left-center → right-center
  [
    { x: 26, y: 34 },
    { x: 40, y: 42 },
    { x: 64, y: 36 },
    { x: 82, y: 32 },
  ],
];

const CENTER: Point = { x: 50, y: 50 };

/* ── Math helpers ───────────────────────────────────── */

function lerpPoint(p: Point, target: Point, t: number): Point {
  return {
    x: p.x + (target.x - p.x) * t,
    y: p.y + (target.y - p.y) * t,
  };
}

function easeInOutCubic(t: number): number {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function cubicBezierD(points: Point[]): string {
  const [s, c1, c2, e] = points;
  return `M ${s.x},${s.y} C ${c1.x},${c1.y} ${c2.x},${c2.y} ${e.x},${e.y}`;
}

/* ── Component ──────────────────────────────────────── */

export function ConnectionLines({ progress, isVisible }: ConnectionLinesProps) {
  // Animate all control points toward center
  const paths = useMemo(() => {
    const eased = easeInOutCubic(progress);
    return networkPaths.map((raw) =>
      raw.map((pt) => lerpPoint(pt, CENTER, eased))
    );
  }, [progress]);

  // Network fades out at ~60-85% progress
  const networkOpacity =
    progress > 0.6
      ? Math.max(0, 1 - (progress - 0.6) / 0.25)
      : 1;

  const entranceOpacity = isVisible ? 1 : 0;

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full transition-opacity duration-1000"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{ opacity: entranceOpacity * networkOpacity }}
      aria-hidden="true"
    >
      {paths.map((points, i) => (
        <path
          key={i}
          d={cubicBezierD(points)}
          fill="none"
          stroke="rgba(180, 186, 215, 0.45)"
          strokeWidth="0.18"
          strokeDasharray="0.9 0.65"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}
