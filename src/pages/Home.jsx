import Grill from "../assets/Grill.mp4"
import { useEffect, useRef } from "react";

import FadeInOnScroll from "../components/FadeInOnScroll";

export default function Home() {
  // (global observer removed) — use <AnimatedText/> which manages observation per-element
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white max-w-screen overflow-x-hidden">
      <section className="relative h-screen w-screen overflow-hidden">
        
        {/* Vidéo en background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={Grill}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay pour lisibilité */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Contenu au-dessus */}
        <div className="relative z-10 flex items-center justify-center h-full text-white">
          <h1 className="text-5xl font-amoria">Amoura</h1> 
        </div>

      </section>
     <section>
        <div className="p-8 text-center min-h-screen space-y-4">
          
          <FadeInOnScroll>
            <p className="text-2xl md:text-3xl font-semibold">
              Bienvenue chez Amoura
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={150}>
            <p>
              au plaisir de vous servir les meilleures grillades.
            </p>
          </FadeInOnScroll>

        </div>
      </section>

    </div>
  )
}
