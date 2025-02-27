import React, { useEffect } from "react";

export default function FallingPixels() {
    useEffect(() => {
        const canvas = document.getElementById("falling-pixels");
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const pixels = [];
        const numPixels = 20;

        for (let i = 0; i < numPixels; i++) {
            pixels.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 4,
                speed: Math.random() * 2,
            });
        }

        function drawPixels() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "rgb(184, 250, 145)";

            for (let pixel of pixels) {
                ctx.fillRect(pixel.x, pixel.y, pixel.size, pixel.size);
                pixel.y += pixel.speed;

                if (pixel.y > canvas.height) {
                    pixel.y = 0;
                    pixel.x = Math.random() * canvas.width;
                }
            }

            requestAnimationFrame(drawPixels);
        }

        drawPixels();

        return () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        };
    }, []);

    return <canvas id="falling-pixels" style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}></canvas>;
}
