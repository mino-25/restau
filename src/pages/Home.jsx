import Grill from "../assets/Grill.mp4"

export default function Home() {
  return (
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
  )
}
