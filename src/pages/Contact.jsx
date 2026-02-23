export default function Contact() {
  return (
    <section>
        <div className="flex flex-col items-center justify-center min-h-screen bg-white max-w-screen overflow-x-hidden">
            <h1 className="text-5xl font-amoria">Contact</h1>
            <p className="mt-4 text-2xl font-code">Contactez-nous pour toute question ou réservation</p>
        </div>
        <div className="flex flex-col items-center">
            <h2 className="text-3xl font-amoria">Nos coordonnées</h2>
            <p className="mt-2 text-xl font-code">Email:
                <a href="mailto:contact@amoura.com" className="ml-2 text-blue-600 hover:underline">contact@amoura.com</a>
            </p>
            <p className="mt-2 text-xl font-code">Téléphone:
                <a href="tel:+1234567890" className="ml-2 text-blue-600 hover:underline">+1 234 567 890</a>
            </p>
            <p className="mt-2 text-xl font-code">Adresse:
                <span className="ml-2">123 Rue de la Gastronomie, Paris, France</span>
            </p>
        </div>
    </section>
  )
}