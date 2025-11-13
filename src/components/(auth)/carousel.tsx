"use client"

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CarouselProps {
    data: {
        image: string;
        content: string;
        color: string
    }[];
    interval?: number;
    className?: string;
}

export default function Carousel({
    data,
    interval = 6000,
    className = "",
}: CarouselProps) {
    const [index, setIndex] = useState(0);

    const safeImages = data && data.length > 0 ? data : [];

    useEffect(() => {
        const id = setInterval(() => {
            setIndex((prev) => (prev + 1) % safeImages.length);
        }, interval);
        return () => clearInterval(id);
    }, [interval, safeImages.length]);

    return (
        <div className={`relative h-full w-full overflow-hidden flex flex-col ${className}`}>
            {/* Image container */}
            <div className="relative flex-1">
                <AnimatePresence mode="popLayout">
                    <motion.img
                        key={index}
                        src={safeImages[index].image}
                        alt={`slide-${index}`}
                        className="object-cover absolute inset-0 w-full h-full rounded-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        draggable={false}
                    />
                </AnimatePresence>

            </div>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-100">
                {safeImages.map((_, i) => (
                    <motion.span
                        key={i}
                        className="w-3 h-3 rounded-full"
                        initial={false}
                        animate={{
                            backgroundColor: i === index ? "#ffffff" : "#696969",
                            opacity: i === index ? 1 : 0.6,
                        }}
                        transition={{
                            type: "spring",
                            mass: 1,
                            stiffness: 100,
                            damping: 15,
                        }}
                    />
                ))}
            </div>

            {/* content */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] min-h-40 rounded-2xl bg-white/20 backdrop-blur-xs z-50 text-[40px]">
                {safeImages.map((_, i) => (
                    <div key={i} className={cn(i === index ? "block" : "hidden", "mb-4", "text-2xl font-medium p-6 leading-[1.4] h-full bottom-1/2", data[i]?.color === "#FFFFFF" ? "text-white" : "text-black")}>
                        &quot;
                        {data[i]?.content}
                        &quot;
                    </div>
                ))}
            </div>
        </div>
    );
}