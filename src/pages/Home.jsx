import Grill from "../assets/Grill.mp4"
import Chef from "../assets/chef-cooking-salad.jpg"
import Salade from "../assets/chicken-salad.jpg"
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
        <div className="p-8 text-center min-h-screen space-y-10 mt-24">
          
          <FadeInOnScroll>
            <p className="text-2xl md:text-3xl font-brand">
              Bienvenue chez Amoura
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={150}>
            <p className="font-brand px-5">
              Niché au cœur de la ville, notre restaurant vous accueille dans un cadre raffiné où se rencontrent élégance, convivialité et gastronomie. Notre chef sublime des produits frais et de saison pour vous offrir une cuisine créative, délicate et généreuse. Chaque détail est pensé pour faire de votre repas une expérience unique et mémorable.
            </p>
          </FadeInOnScroll>

          <div className="flex justify-center">
            <img src={Chef} alt="Chef en train de préparer une salade" className="w-64 h-128 object-cover" />
            <img src={Salade} alt="Salade de poulet" className="w-64 h-128 object-cover" />
          </div>

        </div>
      </section>

    </div>
  )
}
