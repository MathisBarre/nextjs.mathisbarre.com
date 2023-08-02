import Image from "next/image";
import { useState } from "react";

export default function SocialNetworks() {
  const [mailIcon, setMailIcon] = useState(CopyIcon);

  return (
    <section className="mt-8" id="social">
      <h2 className="title-section">Rejoignez-moi !</h2>

      <div className="grid gap-2 grid-cols-4">
        <SocialNetwork
          link="https://twitter.com/TheMathisBarre"
          iconUrl="/images/icons/twitter.svg"
          hoverClass="hover:bg-[#1DA1F2]"
          alt="Twitter"
        />
        <SocialNetwork
          link="https://github.com/MathisBarre"
          iconUrl="/images/icons/github.svg"
          hoverClass="hover:bg-[#181717]"
          alt="GitHub"
        />
        <SocialNetwork
          link="https://linkedin.com/in/mathis-barre"
          iconUrl="/images/icons/linkedin.svg"
          hoverClass="hover:bg-[#0A66C2]"
          alt="LinkedIn"
        />
        <SocialNetwork
          link="https://www.youtube.com/channel/UCl3-1zqMl6YkRx0OQ3KwC_g"
          iconUrl="/images/icons/youtube.svg"
          hoverClass="hover:bg-[#FF0000]"
          alt="YouTube"
        />
        {/* <SocialNetwork link="https://www.twitch.tv/mathisbarre_" iconUrl="/images/icons/twitch.svg" hoverClass="hover:bg-[#9146FF]" alt="Twitch" /> */}
        {/* <SocialNetwork link="https://www.malt.fr/profile/mathisbarre" iconUrl="/images/icons/malt.svg" hoverClass="hover:bg-[#ff5c57]" alt="Malt" /> */}
      </div>

      <div
        className="flex items-center justify-center h-16 mt-2 border border-gray-600 rounded cursor-pointer hover:bg-gray-800"
        onClick={async () => {
          try {
            navigator.clipboard.writeText("mathis.barre@live.fr");
            setMailIcon(ClipboardCheckIcon);
          } catch (error) {
            setMailIcon(ErrorIcon);
          }
        }}
      >
        <span>mathis.barre@live.fr</span>
        {mailIcon}
      </div>
    </section>
  );
}

interface SocialNetworkProps {
  link: string;
  iconUrl: string;
  hoverClass: string;
  alt: string;
}

function SocialNetwork({ link, iconUrl, hoverClass, alt }: SocialNetworkProps) {
  return (
    <a href={link}>
      <div
        className={`duration-75 flex items-center justify-center h-16 border border-gray-600 rounded cursor-pointer ${hoverClass} hover:border-none`}
      >
        <Image width="24" height="24" src={iconUrl} alt={alt} />
      </div>
    </a>
  );
}

function CopyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 ml-1"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
      <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
    </svg>
  );
}
function ErrorIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 ml-1"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
}
function ClipboardCheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 ml-1"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
      <path
        fillRule="evenodd"
        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}
