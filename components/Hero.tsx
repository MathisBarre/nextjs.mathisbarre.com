// IMPORT NEXT.JS COMPONENTS --------//
import Image from "next/image"

// IMPORT COMPONENTS ----------------//
import Credit from "@/components/Credit"

export default function Hero() {
  return (
    <header className="flex items-center justify-center bg-gray-900 h-192 sm:h-144 bg-hero bg-cover bg-center relative">
      <div className="hidden sm:flex sm:items-center ">
        <Image
          className="hidden rounded-full"
          src="/images/profil.jpg"
          layout="fixed"
          height="120"
          width="120"
          quality="100"
          priority
        />
      </div>
      <div className="flex flex-col px-4">
        <div className="flex flex-col">
          <p className="text-5xl font-black">Mathis Barré</p>
          <p className="text-3xl mb-2 tracking-widest">Développeur web</p>
          <div className="flex flex-col sm:flex-row">
            <button className="text-lg bg-primary rounded py-0.5 px-4 mb-2 sm:mb-0 sm:mr-2 sm:w-44">Voir mes projets</button>
            <button className="text-lg border border-white bg-black bg-opacity-30 rounded py-0.5 px-4 sm:w-44">Me contacter</button>
          </div>
        </div>
      </div>
      <p className="absolute bottom-0 right-0 text-white text-opacity-20 p-2"><Credit/></p>
    </header>
  )
}