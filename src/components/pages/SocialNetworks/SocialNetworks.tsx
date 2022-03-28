import Image from "next/image"

export default function SocialNetworks() {
  return (
    <section className="mt-8">
      <h2 className="title-section">Rejoignez-moi !</h2>

      <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
        <SocialNetwork link="https://github.com/MathisBarre" iconUrl="/images/icons/github.svg" hoverClass="hover:bg-[#181717]" alt="GitHub" />
        <SocialNetwork link="https://linkedin.com/in/mathis-barre" iconUrl="/images/icons/linkedin.svg" hoverClass="hover:bg-[#0A66C2]" alt="LinkedIn" />
        <SocialNetwork link="https://www.youtube.com/channel/UCl3-1zqMl6YkRx0OQ3KwC_g" iconUrl="/images/icons/youtube.svg" hoverClass="hover:bg-[#FF0000]" alt="YouTube" />
        <SocialNetwork link="https://twitter.com/LeMathisBarre" iconUrl="/images/icons/twitter.svg" hoverClass="hover:bg-[#1DA1F2]" alt="Twitter" />
        <SocialNetwork link="https://www.twitch.tv/mathisbarre_" iconUrl="/images/icons/twitch.svg" hoverClass="hover:bg-[#9146FF]" alt="Twitch" />
        <SocialNetwork link="https://www.malt.fr/profile/mathisbarre" iconUrl="/images/icons/malt.svg" hoverClass="hover:bg-[#ff5c57]" alt="Malt" />
      </div>

      <div className="flex items-center justify-center h-16 mt-2 border border-gray-600 rounded">
        contact@mathisbarre.com
      </div>
    </section>
  )
}

interface SocialNetworkProps {
  link: string
  iconUrl: string
  hoverClass: string
  alt: string
}

function SocialNetwork({ link, iconUrl, hoverClass, alt }: SocialNetworkProps) {
  return (
    <a href={link}>
      <div className={`duration-75 flex items-center justify-center h-16 border border-gray-600 rounded cursor-pointer ${hoverClass} hover:border-none`}><Image width="24" height="24" src={iconUrl} alt={alt} /></div>
    </a>
  )
}