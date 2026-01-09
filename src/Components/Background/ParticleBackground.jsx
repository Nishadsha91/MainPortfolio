import React, { useRef, useEffect, useCallback } from "react";

const CombinedBackground = () => {
    const canvasRef = useRef(null);
    const animationFrameIdRef = useRef(null);
    const particlesRef = useRef([]);

    const resizeCanvas = useCallback(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        resizeCanvas();

        // Particle class
        class Particle {
            constructor(canvas) {
                this.canvas = canvas;
                this.x = Math.random() * canvas.width;
                this.y = canvas.height + 10;
                this.size = Math.random() * 1.5 + 0.5;
                this.opacity = Math.random() * 0.5 + 0.2;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = -Math.random() * 1 - 0.5;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.opacity -= 0.001;

                // Reset when out of bounds
                if (this.y < 0 || this.opacity <= 0) {
                    this.y = this.canvas.height + 10;
                    this.x = Math.random() * this.canvas.width;
                    this.opacity = Math.random() * 0.5 + 0.2;
                }
            }

            draw(ctx) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.fill();
            }
        }

        // Initialize 10 particles
        const particles = [];
        for (let i = 0; i < 20; i++) {
            particles.push(new Particle(canvas));
        }
        particlesRef.current = particles;

        const animate = () => {
            // Black background
            ctx.fillStyle = "#000000";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const spacing = 40;
            const dotRadius = 1.5;
            const dotOpacity = 0.1;

         

            // Draw connecting lines
            for (let x = 0; x < canvas.width; x += spacing) {
                for (let y = 0; y < canvas.height; y += spacing) {
                    // Horizontal lines
                    if (x + spacing < canvas.width) {
                        ctx.strokeStyle = `rgba(255, 255, 255, 0.1)`;
                        ctx.lineWidth = 0.6;
                        ctx.beginPath();
                        ctx.moveTo(x, y);
                        ctx.lineTo(x + spacing, y);
                        ctx.stroke();
                    }
                    // Vertical lines
                    if (y + spacing < canvas.height) {
                        ctx.strokeStyle = `rgba(255, 255, 255, 0.1)`;
                        ctx.lineWidth = 0.6;
                        ctx.beginPath();
                        ctx.moveTo(x, y);
                        ctx.lineTo(x, y + spacing);
                        ctx.stroke();
                    }
                }
            }

            // Update and draw particles
            particles.forEach((particle) => {
                particle.update();
                particle.draw(ctx);
            });

            animationFrameIdRef.current = requestAnimationFrame(animate);
        };

        animate();

        window.addEventListener("resize", resizeCanvas);

        return () => {
            if (animationFrameIdRef.current) {
                cancelAnimationFrame(animationFrameIdRef.current);
            }
            window.removeEventListener("resize", resizeCanvas);
        };
    }, [resizeCanvas]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none z-0"
            style={{ background: "#000000" }}
        />
    );
};

export default CombinedBackground;