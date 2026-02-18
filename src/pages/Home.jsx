import Grill from "../assets/Grill.mp4"
import Chef from "../assets/chef-cooking-salad.jpg"
import Salade from "../assets/chicken-salad.jpg"
import ChefFire from "../assets/chef-cooking-fire.jpg"
import Table from "../assets/young-waitress-setting-table.jpg"
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
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl font-amoria">Amoura</h1> 
          <h2 className="mt-4 text-2xl font-code">Une expérience d'excellence</h2>
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

          <FadeInOnScroll>
            <p className="font-brand px-60">
              Venez découvrir les spécialités de la terre et de la mer avec l'expertise de notre chef.
              Les saveurs authentiques et les présentations soignées de nos plats vous promettent une expérience culinaire inoubliable.
              La carte évolue au fil des saisons pour vous offrir le meilleur de chaque période de l'année, avec des ingrédients frais et locaux soigneusement sélectionnés.

            </p>
          </FadeInOnScroll>

        </div>

        <div className="flex items-center justify-center bg-black/98 text-white p-16 space-x-40 mt-24">
          <img src={ChefFire} alt="Chef en train de cuisiner au feu" className="w-96 h-128 object-cover" />
          <p className="px-10 font-brand w-1/3">
            Notre chef prépare les plats avec passion et expertise.
            Chaque assiette est une œuvre d'art culinaire, alliant saveurs, textures et présentation pour offrir une expérience gastronomique inoubliable.
            Le savoir-faire de notre chef se reflète dans chaque plat, où la créativité et la maîtrise technique se conjuguent pour émerveiller vos papilles.
            Notre chef s'engage à utiliser des ingrédients de qualité et à créer des plats qui ravissent les sens, faisant de chaque repas une expérience mémorable pour nos clients.

          </p>
        </div>

        <div className="mt-24 space-y-10 p-8">
          <FadeInOnScroll>
            <p className="text-center text-xl font-brand">Nous vous acceuillerons à l'occasion de nos prochaines ouvertures !</p>
          </FadeInOnScroll>
          <img src={Table} alt="Serveuse en train de mettre la table" className="w-full h-96 object-cover" />
        </div>
      </section>

    </div>
  )
}
