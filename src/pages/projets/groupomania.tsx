import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import GroupomaniaBanner from "../../../public/images/groupomania-banner.png";

export default function Groupomania() {
  return (
    <>
      <Head>
        <title>
          Groupomania, projet 7 Openclassrooms réalisé par Mathis Barré
        </title>
        <meta
          name="title"
          content="Groupomania, projet 7 Openclassrooms réalisé par Mathis Barré"
        />
        <meta
          name="description"
          content="Groupomania le projet 7 de la formation développeur web chez Openclassrooms. Le projet consiste en la réalisation du MVP d’un réseau social interne pour l’entreprise fictive “groupomania”."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Groupomania, projet 7 Openclassrooms réalisé par Mathis Barré"
        />
        <meta
          property="og:description"
          content="Groupomania le projet 7 de la formation développeur web chez Openclassrooms. Le projet consiste en la réalisation du MVP d’un réseau social interne pour l’entreprise fictive “groupomania”."
        />

        <meta
          property="twitter:title"
          content="Groupomania, projet 7 Openclassrooms réalisé par Mathis Barré"
        />
        <meta
          property="twitter:description"
          content="Groupomania le projet 7 de la formation développeur web chez Openclassrooms. Le projet consiste en la réalisation du MVP d’un réseau social interne pour l’entreprise fictive “groupomania”."
        />
      </Head>
      <main className="container max-w-3xl px-4 pt-4 pb-16 mx-auto sm:pt-16 sm:px-6">
        <Link href="/">
          <a className="mb-4 inline-flex items-center bg-white bg-opacity-20 duration-75 hover:bg-opacity-25 px-2 py-1 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="mr-2">Accueil</span>
          </a>
        </Link>
        <Image
          className="rounded"
          src={GroupomaniaBanner}
          width={1920}
          height={1080 / 2}
          alt="groupomania illustration banner"
        />
        <div className="grid grid-cols-3 gap-x-2">
          <a
            href="https://groupomania.mathisbarre.com"
            className="border duration-75 border-gray-700 rounded hover:bg-gray-800 text-center py-2 flex items-center justify-center"
            target="_blank" rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                clipRule="evenodd"
              />
            </svg>
            Site live
          </a>
          <a
            href="https://github.com/MathisBarre/Groupomania_front-end"
            className="border duration-75 border-gray-700 rounded hover:bg-gray-800 text-center py-2 flex items-center justify-center"
            target="_blank" rel="noreferrer"
          >
            <svg className="h-5 w-5 mr-2" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path fill="white" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            Github front-end
          </a>
          <a
            href="https://github.com/MathisBarre/Groupomania_back-end"
            className="border duration-75 border-gray-700 rounded hover:bg-gray-800 text-center py-2 flex items-center justify-center"
            target="_blank" rel="noreferrer"
          >
            <svg className="h-5 w-5 mr-2" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path fill="white" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            Github back-end
          </a>
        </div>
        <article className="prose prose-invert mt-8">
          <header>
            <h1 className="page-title">Groupomania</h1>
          </header>
          <div className="page-body">
            <p id="5377fde7-9702-4ba5-aeb9-79731ed953d9">
              Groupomania le projet 7 de la formation développeur web chez
              Openclassrooms. Le projet consiste en la réalisation du MVP d’un
              réseau social interne pour l’entreprise fictive “groupomania”.
            </p>
            <h2 id="8e18f1e7-85c6-47e5-b8fa-aebe866e4b84">Choix techniques</h2>
            <p id="be9952dc-f73b-49f9-9842-155305f8d063">
              Le choix des technologies est laissé libre tant qu’un framework
              front-end est utilisé et que tout est fait en Javascript (front
              comme back). L’utilisation d’une base de données non relationnelle
              était interdite.
            </p>
            <h3 id="aae889b6-1a5c-446b-8571-ca9699b387d4">Choix front-end</h3>
            <p id="81c574d4-33e5-4b77-a828-0109fd4afeba">
              Côté front-end, j’ai personnellement décidé de partir sur la
              librairie React.js avec le meta-framework Next.js. On peut aussi
              noter l’utilisation de tailwindcss, headless UI et heroicons pour
              l’interface, swr et axios pour la gestion des requêtes https et du
              cache ainsi que days.js pour le traitement des dates. eslint est
              utilisé pour garantir une qualité de code optimale.
            </p>
            <h3 id="bbc916ea-9dfb-4595-8a44-192ca230c958">Choix back-end</h3>
            <p id="c5ab543c-b9c9-4247-8959-d48d3a0fe492">
              Pour le back-end, j’ai utilisé fastify (alternative à express.js,
              voir {""}
              <a href="https://dev.to/romainlanz/why-you-should-drop-expressjs-in-2021-711">
                pourquoi ?
              </a>
              ) avec Prisma ORM.
            </p>
            <p id="05238d80-4ba4-4836-a047-81725e9f158b">
              Swagger est utilisé pour la documentation automatiquement générée
              ainsi qu’eslint pour la qualité du code.
            </p>
            <h2 id="875a8079-a5d2-4ac8-9281-aa13de682ed3">Fonctionnalités</h2>
            <p id="490f8610-51f0-4a94-8bd8-f2c0ec2e5e6e">
              Les fonctionnalités principales sont les suivantes :
            </p>
            <ul
              id="c3f1ed44-1194-47e9-98a1-f55abcf1442a"
              className="bulleted-list"
            >
              <li style={{ listStyleType: "disc" }}>
                Authentification
                <ul
                  id="13af1b30-758e-4b84-b6c0-ddd71b1ab168"
                  className="bulleted-list"
                >
                  <li style={{ listStyleType: "circle" }}>
                    Gestion de l’authentification via JWT (JSON Web Token)
                  </li>
                </ul>
                <ul
                  id="71aa8045-9d39-4d38-8153-1172cb9a5970"
                  className="bulleted-list"
                >
                  <li style={{ listStyleType: "circle" }}>
                    Création d’un page de création de compte et d’une page de
                    connexion
                  </li>
                </ul>
              </li>
            </ul>
            <ul
              id="c02bb542-de71-449d-8985-20b1de0bfc7d"
              className="bulleted-list"
            >
              <li style={{ listStyleType: "disc" }}>
                Gestion utilisateur avec photo de profil, adresse e-mail et
                pseudonyme modifiable
              </li>
            </ul>
            <ul
              id="a69e276e-4877-4073-a623-f9f02ec584df"
              className="bulleted-list"
            >
              <li style={{ listStyleType: "disc" }}>
                Création et modification (de ses publications uniquement) de
                publications contenant des GIFs
              </li>
            </ul>
            <ul
              id="cbb3efcc-2f7d-4a5e-ad6f-ce0e932b38ff"
              className="bulleted-list"
            >
              <li style={{ listStyleType: "disc" }}>
                Ajout et modification de commentaires sur n’importe quelle
                publications.
              </li>
            </ul>
            <p id="cd378bd1-a728-44a1-ae2e-dc287c848726" />
          </div>
        </article>
      </main>
    </>
  );
}
