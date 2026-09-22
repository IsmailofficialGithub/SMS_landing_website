import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  buttonText: string;
  buttonLink?: string;
  imageAlt?: string;
  accentColor?: string;
  onClick?: () => void;
}

interface InteractiveCardGalleryProps {
  cards: CardProps[];
  className?: string;
  cardHeight?: string;
  columns?: 1 | 2 | 3 | 4;
  hoverScale?: number;
  transitionDuration?: number;
}

const CardItem = ({
  title,
  description,
  imageSrc,
  buttonText,
  buttonLink,
  imageAlt,
  accentColor = "yellow",
  onClick,
}: CardProps) => {
  const handleClick = (e: React.MouseEvent) => {
    if (buttonLink) {
      if (!onClick) return;
      e.preventDefault();
    }
    onClick?.();
  };

  return (
    <div className="relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg group h-full">
      <div
        className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 ease-out group-hover:scale-110"
        style={{
          backgroundImage: `url('${imageSrc}')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="relative flex flex-col items-center justify-end w-full h-full text-white p-6">
        <h2 className="text-2xl font-bold !text-white text-center transform transition-transform duration-500 group-hover:-translate-y-2">{title}</h2>
        <p className="mt-2 italic text-sm !text-white text-center opacity-90">{description}</p>
        <div className="overflow-hidden mt-4">
          <button
            className={`transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 px-6 py-2 bg-[var(--brand-blue)] text-white font-bold text-xs uppercase tracking-wide rounded-lg hover:opacity-90 focus:outline-none`}
            onClick={handleClick}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export function InteractiveCardGallery({
  cards,
  className,
  cardHeight = "h-64",
  columns = 4,
  hoverScale = 1.1,
  transitionDuration = 700,
}: InteractiveCardGalleryProps) {
  const getGridCols = () => {
    switch (columns) {
      case 1: return "grid-cols-1";
      case 2: return "sm:grid-cols-2";
      case 3: return "sm:grid-cols-2 lg:grid-cols-3";
      case 4: 
      default: return "sm:grid-cols-2 lg:grid-cols-4";
    }
  };

  return (
    <div 
      className={cn(
        `grid gap-4 p-4 max-w-screen-lg mx-auto ${getGridCols()}`,
        className
      )}
      style={{ 
        "--hover-scale": hoverScale, 
        "--transition-duration": `${transitionDuration}ms` 
      } as React.CSSProperties}
    >
      {cards.map((card, index) => (
        <div key={index} className={cn("group", cardHeight)}>
          <CardItem {...card} />
        </div>
      ))}
    </div>
  );
}