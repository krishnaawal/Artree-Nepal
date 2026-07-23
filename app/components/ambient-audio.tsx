"use client";

import { useEffect, useRef, useState } from "react";

export default function AmbientAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.42;

    const start = () => {
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    };
    const startOnce = () => {
      start();
      window.removeEventListener("pointerdown", startOnce);
      window.removeEventListener("keydown", startOnce);
    };

    start();
    window.addEventListener("pointerdown", startOnce, { once: true });
    window.addEventListener("keydown", startOnce, { once: true });
    return () => {
      window.removeEventListener("pointerdown", startOnce);
      window.removeEventListener("keydown", startOnce);
      audio.pause();
    };
  }, []);

  function toggleAudio() {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().then(() => setPlaying(true));
    } else {
      audio.pause();
      setPlaying(false);
    }
  }

  return (
    <div className={`sound-dock ${playing ? "is-playing" : "is-muted"}`}>
      <audio ref={audioRef} src="/audio/language-protest.wav" loop preload="auto" aria-hidden="true" />
      <button type="button" className="sound-toggle" onClick={toggleAudio} aria-label={playing ? "Mute language protest sound" : "Play language protest sound"}>
        <span className="sound-orbit orbit-one" />
        <span className="sound-orbit orbit-two" />
        <span className="sound-glyph" aria-hidden="true">{playing ? "◖◗" : "—"}</span>
        <span className="sound-copy"><b>{playing ? "Sound on" : "Sound off"}</b><small>language / protest</small></span>
      </button>
    </div>
  );
}
