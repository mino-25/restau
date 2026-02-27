import grandpa from '../assets/grandpa-historic-photo.jpg';

export default function About() {
  return (
    <section>
        <div className="flex flex-col items-center justify-center min-h-screen bg-white max-w-screen overflow-x-hidden">    
            <h1 className="text-5xl font-amoria">About</h1>
            <p className="mt-4 text-2xl font-code">Découvrez notre histoire</p>
        </div>
        <div className="flex items-center justify-center gap-20 max-w-screen px-10 py-20">
            <img src={grandpa} alt="Grand-père dans la cuisine" className="w-96 h-128 object-cover" />
            <div>
              <h2 className="text-3xl font-amoria">Notre histoire</h2>
              <p className="mt-4 text-xl font-code max-w-2xl">
                Amoura est née de la passion pour la cuisine et le désir de créer une expérience culinaire unique. 
                Fondée en 1920 crée par notre Grand père, notre restaurant s'est rapidement imposé comme une destination incontournable pour les amateurs de gastronomie. 
                Notre équipe de chefs talentueux s'inspire des saveurs du monde entier pour concocter des plats innovants et délicieux, 
                tout en mettant l'accent sur la qualité des ingrédients et le respect des traditions culinaires. Toutes nos recettes viennent de notre grand père, qui les a transmises de génération en génération, et nous sommes fiers de perpétuer cet héritage culinaire avec passion et créativité.
              </p>
            </div>
            
        </div>
    </section>
  )
}   