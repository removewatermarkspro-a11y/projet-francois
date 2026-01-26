"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        // Attempt to autoplay on mount, but handle browser blocking
        const playAudio = async () => {
            if (audioRef.current) {
                try {
                    audioRef.current.volume = 0.4; // Soft volume
                    await audioRef.current.play();
                    setIsPlaying(true);
                } catch (err) {
                    // Autoplay blocked
                    console.log("Autoplay blocked, waiting for interaction");
                    setIsPlaying(false);
                }
            }
        };

        playAudio();

        // Add global click listener to unlock audio if needed
        const handleInteraction = () => {
            if (!hasInteracted && audioRef.current && audioRef.current.paused) {
                playAudio();
                setHasInteracted(true);
            }
        };

        window.addEventListener('click', handleInteraction, { once: true });
        return () => window.removeEventListener('click', handleInteraction);
    }, [hasInteracted]);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <Button
                onClick={togglePlay}
                className="rounded-full w-12 h-12 p-0 flex items-center justify-center bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 text-white shadow-lg transition-all duration-500"
                aria-label={isPlaying ? "Désactiver la musique" : "Activer la musique"}
            >
                {isPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
            </Button>
            <audio ref={audioRef} src="/relaxation.mp3" loop />
        </div>
    );
}
