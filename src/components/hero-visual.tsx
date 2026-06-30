"use client";

import Image from "next/image";
import type { CSSProperties, PointerEvent } from "react";
import { useCallback, useEffect, useState } from "react";

import { Signature } from "@/components/signature";

const serviceNodes = [
  {
    label: "Backend API",
    angle: "-90deg",
    mobileLeft: "64%",
    mobileTop: "22%",
  },
  {
    label: "Сайты",
    angle: "-38deg",
    mobileLeft: "80%",
    mobileTop: "37%",
  },
  {
    label: "Автоматизация",
    angle: "14deg",
    mobileLeft: "79%",
    mobileTop: "63%",
  },
  {
    label: "Парсеры",
    angle: "66deg",
    mobileLeft: "62%",
    mobileTop: "73%",
  },
  {
    label: "Telegram-боты",
    angle: "118deg",
    mobileLeft: "33%",
    mobileTop: "73%",
  },
  {
    label: "AI-сервисы",
    angle: "170deg",
    mobileLeft: "21%",
    mobileTop: "43%",
  },
  {
    label: "Безопасность",
    angle: "222deg",
    mobileLeft: "31%",
    mobileTop: "29%",
  },
];

export function HeroVisual() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [transform, setTransform] = useState(
    "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)",
  );

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(query.matches);

    updatePreference();
    query.addEventListener("change", updatePreference);

    return () => query.removeEventListener("change", updatePreference);
  }, []);

  const handlePointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (prefersReducedMotion) {
        return;
      }

      const rect = event.currentTarget.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const rotateX = (0.5 - y) * 8;
      const rotateY = (x - 0.5) * 12;

      setTransform(
        `perspective(1200px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(1.02)`,
      );
    },
    [prefersReducedMotion],
  );

  const resetTransform = useCallback(() => {
    setTransform("perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)");
  }, []);

  return (
    <div
      data-hero-visual
      aria-label="Визуальная карточка разработчика"
      className="relative mx-auto w-full max-w-2xl"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTransform}
      style={{
        transform,
        transformStyle: "preserve-3d",
        transition: "transform 260ms ease-out",
      }}
    >
      <style jsx>{`
        @keyframes hero-constellation-orbit {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes hero-constellation-counter-orbit {
          to {
            transform: rotate(-360deg);
          }
        }

        .orbit-constellation {
          animation-duration: 58s;
          animation-iteration-count: infinite;
          animation-name: hero-constellation-orbit;
          animation-timing-function: linear;
          height: 0;
          left: 50%;
          position: absolute;
          top: 50%;
          transform-origin: 0 0;
          width: 0;
        }

        .orbit-path {
          border: 1px solid rgba(147, 197, 253, 0.42);
          border-radius: 9999px;
          box-shadow:
            0 0 26px rgba(96, 165, 250, 0.16),
            inset 0 0 24px rgba(96, 165, 250, 0.07);
          height: calc(var(--orbit-radius) * 2);
          left: 50%;
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          width: calc(var(--orbit-radius) * 2);
        }

        .orbit-node {
          height: 0;
          left: 0;
          position: absolute;
          top: 0;
          transform: rotate(var(--orbit-angle))
            translateX(var(--orbit-radius));
          transform-origin: 0 0;
          width: 0;
        }

        .orbit-anchor {
          background: rgba(147, 197, 253, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.45);
          border-radius: 9999px;
          box-shadow: 0 0 14px rgba(96, 165, 250, 0.45);
          height: 6px;
          left: 0;
          position: absolute;
          top: 0;
          transform: translate(-50%, -50%);
          width: 6px;
        }

        .orbit-chip-offset {
          transform: translateX(var(--chip-offset));
          transform-origin: 0 0;
        }

        .orbit-angle-counter {
          transform: rotate(calc(-1 * var(--orbit-angle)));
          transform-origin: 0 0;
        }

        /* The group orbits as one system; each chip counter-rotates to stay readable. */
        .orbit-spin-counter {
          animation-duration: 58s;
          animation-iteration-count: infinite;
          animation-name: hero-constellation-counter-orbit;
          animation-timing-function: linear;
          transform-origin: 0 0;
        }

        .orbit-chip {
          transform: translate(-50%, -50%);
        }

        .hero-visual-card:hover .orbit-chip {
          box-shadow: 0 0 22px rgba(96, 165, 250, 0.24);
        }

        @media (max-width: 640px) {
          .orbit-constellation,
          .orbit-spin-counter {
            animation: none;
          }

          .orbit-constellation {
            inset: 0;
            height: auto;
            position: absolute;
            transform: none;
            width: auto;
          }

          .orbit-node {
            left: var(--orbit-mobile-left);
            top: var(--orbit-mobile-top);
            transform: none;
          }

          .orbit-anchor,
          .orbit-path {
            display: none;
          }

          .orbit-chip-offset,
          .orbit-angle-counter,
          .orbit-spin-counter {
            transform: none;
          }

          .orbit-chip {
            transform: translate(-50%, -50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .orbit-constellation,
          .orbit-spin-counter {
            animation: none;
          }
        }
      `}</style>

      <div className="hero-visual-card relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] p-4 text-white shadow-2xl shadow-blue-950/35 backdrop-blur sm:p-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_26%,rgba(96,165,250,0.24),transparent_30%),radial-gradient(circle_at_76%_68%,rgba(139,92,246,0.2),transparent_34%),linear-gradient(155deg,rgba(15,23,42,0.72),rgba(2,6,23,0.9))]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(147,197,253,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(147,197,253,0.18)_1px,transparent_1px)] [background-size:34px_34px]" />
        <div className="absolute left-1/2 top-10 h-44 w-44 -translate-x-1/2 rounded-full bg-blue-400/15 blur-3xl" />

        <div className="relative flex min-h-[560px] flex-col justify-between gap-7 rounded-xl border border-white/10 bg-slate-950/45 p-4 sm:min-h-[620px] sm:p-6">
          <div className="pointer-events-none absolute inset-x-8 top-8 h-px bg-gradient-to-r from-transparent via-blue-300/35 to-transparent" />
          <div className="pointer-events-none absolute bottom-32 left-8 right-8 h-px bg-gradient-to-r from-transparent via-violet-300/25 to-transparent" />

          <div
            data-hero-orbit-frame
            className="relative flex min-h-[390px] items-center justify-center sm:min-h-[450px]"
            style={
              {
                "--orbit-radius": "118px",
                "--chip-offset": "16px",
              } as CSSProperties
            }
          >
            <div className="absolute size-80 rounded-full bg-blue-500/10 blur-3xl sm:size-[25rem]" />
            <div className="absolute size-88 rounded-full bg-[conic-gradient(from_160deg,transparent_0deg,rgba(96,165,250,0.08)_42deg,transparent_92deg,rgba(139,92,246,0.07)_148deg,transparent_220deg)] opacity-45 blur-md sm:size-[27rem]" />

            <div className="relative flex size-28 items-center justify-center rounded-full border border-blue-200/15 bg-black/20 shadow-[0_0_70px_rgba(37,99,235,0.4)] backdrop-blur sm:size-[7.5rem]">
              <div className="absolute inset-1.5 rounded-full border border-white/[0.06] bg-[radial-gradient(circle_at_50%_35%,rgba(96,165,250,0.18),transparent_66%)]" />
              <div
                data-hero-avatar-core
                className="relative size-24 overflow-hidden rounded-full border border-white/25 bg-slate-950 shadow-2xl shadow-blue-950/40 sm:size-[6.5rem]"
              >
                <Image
                  src="/leonid-avatar.jpg"
                  alt="Аватар разработчика"
                  fill
                  priority
                  sizes="(min-width: 640px) 104px, 96px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,transparent_42%,rgba(2,6,23,0.22)_100%)]" />
              </div>
            </div>

            <div className="orbit-path" />

            <div className="orbit-constellation">
              {serviceNodes.map((node) => (
                <div
                  key={node.label}
                  className="orbit-node"
                  style={
                    {
                      "--orbit-angle": node.angle,
                      "--orbit-mobile-left": node.mobileLeft,
                      "--orbit-mobile-top": node.mobileTop,
                    } as CSSProperties
                  }
                >
                  <span className="orbit-anchor" aria-hidden="true" />
                  <div className="orbit-chip-offset">
                    <div className="orbit-angle-counter">
                      <div className="orbit-spin-counter">
                        <div className="orbit-chip w-max whitespace-nowrap rounded-lg border border-blue-200/20 bg-slate-950/75 px-1.5 py-1 text-[8px] font-medium text-blue-50 shadow-lg shadow-blue-950/25 backdrop-blur-md sm:px-1.5 sm:py-1 sm:text-[8px]">
                          {node.label}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            data-signature="hero"
            className="relative z-10 mx-auto w-full max-w-sm rounded-xl border border-blue-300/20 bg-slate-950/78 px-5 py-4 text-center shadow-2xl shadow-blue-950/30 backdrop-blur"
          >
            <Signature
              text="Leonid Bolbachan"
              fontSize={16}
              color="#ffffff"
              duration={1.5}
              delay={0.2}
              inView={false}
              className="mx-auto block h-14 max-w-full opacity-95 drop-shadow-[0_0_18px_rgba(96,165,250,0.38)]"
            />
            <div className="mt-2 text-xs font-medium tracking-wide text-slate-300">
              Leonid Bolbachan
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
