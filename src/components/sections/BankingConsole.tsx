"use client";

import { useRef, useState } from "react";

interface Props { onToast: (msg: string) => void; }

export default function BankingConsole({ onToast }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setIsPaused(false);
      onToast("Video reanudado.");
    } else {
      video.pause();
      setIsPaused(true);
      onToast("Video pausado.");
    }
  };

  return (
    <aside id="demo" className="relative mx-auto w-full max-w-md lg:mx-0">
      <div className="absolute -inset-6 rounded-full bg-orange-300/20 blur-3xl" aria-hidden="true" />
      <div className="cut relative overflow-hidden border border-white/70 bg-white/68 p-3 shadow-console backdrop-blur-2xl">
        <div className="relative overflow-hidden rounded-[inherit] bg-slate-950">
          <video ref={videoRef} className="aspect-[9/16] w-full object-cover" src="/innova-nation-loop.mp4" autoPlay loop muted playsInline aria-label="Demostración de Innova Nation" onPlay={() => setIsPaused(false)} onPause={() => setIsPaused(true)} />
          <button type="button" onClick={togglePlayback} className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-slate-950/85 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur transition hover:bg-slate-950" aria-label={isPaused ? "Reanudar video" : "Pausar video"}>
            <iconify-icon icon={isPaused ? "solar:play-linear" : "solar:pause-linear"} className="text-lg" />
            {isPaused ? "Reanudar" : "Pausar"}
          </button>
        </div>
      </div>
    </aside>
  );
}
