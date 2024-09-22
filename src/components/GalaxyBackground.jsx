import React, { useRef, useEffect } from "react";

export const galaxySpiral = (canvas, ctx, speed = 0.0001) => {
  const stars = initializeStars(canvas, 900);
  let rotation = 0;

  function initializeStars(canvas, starCount) {
    const stars = [];
    for (let i = 0; i < starCount; i++) {
      const distance = Math.random() * canvas.width * 0.7;
      const angle = Math.random() * Math.PI * 2;
      stars.push({
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        radius: Math.random() * 1.5 + 0.5,
        color: `hsl(${Math.random() * 20 + 200}, 10%, ${
          Math.random() * 30 + 60
        }%)`,
        angle: angle,
        distance: distance,
      });
    }
    return stars;
  }

  function drawStars(ctx, stars, rotation, speed) {
    stars.forEach((star) => {
      const x = Math.cos(star.angle) * star.distance;
      const y = Math.sin(star.angle) * star.distance;

      ctx.beginPath();
      ctx.arc(x, y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = star.color;
      ctx.fill();

      star.angle += speed / (star.distance * 0.00008);
    });
  }

  return () => {
    // Use a slightly transparent black to keep the trails
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)"; // Semi-transparent black
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(rotation);

    drawStars(ctx, stars, rotation, speed);

    ctx.restore();

    rotation += speed;
  };
};

const GalaxyBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const animateGalaxy = galaxySpiral(canvas, ctx, 0.0003);

    const animate = () => {
      animateGalaxy();
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Clean up the animation on component unmount
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default GalaxyBackground;
