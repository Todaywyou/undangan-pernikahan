import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const flowerImages = ["/bunga1.png", "/bunga2.png", "/bunga3.png"];

export default function FlowerRain() {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    const total = 15;
    const arr = [];

    for (let i = 0; i < total; i++) {
      arr.push({
        id: i,
        img: flowerImages[Math.floor(Math.random() * flowerImages.length)],
        left: Math.random() * 100,
        size: 20 + Math.random() * 25,
        delay: Math.random() * 5,
        duration: 7 + Math.random() * 6,
        rotate: Math.random() * 360,
      });
    }

    setFlowers(arr);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {flowers.map((flower) => (
        <motion.img
          key={flower.id}
          src={flower.img}
          alt="bunga jatuh"
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: "110vh",
            opacity: [0.6, 1, 0.6],
            rotate: flower.rotate,
            x: [-20, 20, -10],
          }}
          transition={{
            duration: flower.duration,
            delay: flower.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            left: `${flower.left}%`,
            width: `${flower.size}px`,
          }}
        />
      ))}
    </div>
  );
}
