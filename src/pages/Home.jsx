import Grill from "../assets/Grill.mp4"

export default function Home() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            'animate-[fade-slide_0.6s_ease-out_forwards]'
          )
          observer.unobserve(entry.target) // une seule fois
        }
      })
    },
    {
      threshold: 0.2, // 20% visible = déclenchement
    }
  )

  document.querySelectorAll('[data-animate]').forEach((el) => {
    observer.observe(el)
  })

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
        <div className="p-8 text-center ">
          <h2 
            className="opacity-0 will-change-transform"
            data-animate
          >
            Bienvenue chez Amoura
          </h2>
          <p>
            au plaisir de vous servir les meilleures grillades.
          </p>
        </div>
      </section>
    </div>
  )
}
