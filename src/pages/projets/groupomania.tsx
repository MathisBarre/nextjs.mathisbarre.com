import Head from "next/head";
import Link from "next/link";

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
          <a className="mb-8 flex items-center">
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
            Accueil
          </a>
        </Link>
        <article
          className="prose prose-invert"
        >
          <header>
            <h1 className="page-title">Groupomania</h1>
          </header>
          <div className="page-body">
            <p
              id="5377fde7-9702-4ba5-aeb9-79731ed953d9"
            >
              Groupomania le projet 7 de la formation développeur web chez
              Openclassrooms. Le projet consiste en la réalisation du MVP d’un
              réseau social interne pour l’entreprise fictive “groupomania”.
            </p>
            <h2 id="dff73391-21ed-4893-b839-7306ee50640e">Liens</h2>
            <p id="4fa59767-7aa2-441d-8ccd-b1accb04bb47">
              <strong>Site live : </strong>

              <a href="https://groupomania.mathisbarre.com">
                https://groupomania.mathisbarre.com
              </a>

              <em>
                (version de démo incomplète, veuillez cloner le projet pour en
                juger la qualité)
              </em>
            </p>
            <p id="9622ecf2-a7ad-4120-92b9-2ab1878bf8ab">
              <strong>Repository front-end : </strong>
              <a href="https://github.com/MathisBarre/Groupomania_front-end">
                https://github.com/MathisBarre/Groupomania_front-end
              </a>
            </p>
            <p id="c77693ac-6d1c-4008-a413-297b0cc4ff5e">
              <strong>Repository du back-end : </strong>

              <a href="https://github.com/MathisBarre/Groupomania_back-end">
                https://github.com/MathisBarre/Groupomania_back-end
              </a>
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
