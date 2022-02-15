import Head from "next/head";
import Link from "next/link";

export default function Groupomania() {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
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
        <meta property="og:url" content="https://metatags.io/" />
        <meta
          property="og:title"
          content="Groupomania, projet 7 Openclassrooms réalisé par Mathis Barré"
        />
        <meta
          property="og:description"
          content="Groupomania le projet 7 de la formation développeur web chez Openclassrooms. Le projet consiste en la réalisation du MVP d’un réseau social interne pour l’entreprise fictive “groupomania”."
        />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta
          property="twitter:title"
          content="Groupomania, projet 7 Openclassrooms réalisé par Mathis Barré"
        />
        <meta
          property="twitter:description"
          content="Groupomania le projet 7 de la formation développeur web chez Openclassrooms. Le projet consiste en la réalisation du MVP d’un réseau social interne pour l’entreprise fictive “groupomania”."
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
      </Head>
      <div className="container">
        <Link href="/">
          <a className="mb-8 inline-block">⬅️ Accueil</a>
        </Link>
        <article
          id="fcac7802-8ca1-4788-9bdd-c5a54c3b21dd"
          className="page sans"
        >
          <header>
            <h1 className="page-title">Groupomania</h1>
          </header>
          <div className="page-body">
            <p id="5377fde7-9702-4ba5-aeb9-79731ed953d9">
              Groupomania le projet 7 de la formation développeur web chez
              Openclassrooms. Le projet consiste en la réalisation du MVP d’un
              réseau social interne pour l’entreprise fictive “groupomania”.
            </p>
            <h1 id="dff73391-21ed-4893-b839-7306ee50640e">Liens</h1>
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
            <h1 id="8e18f1e7-85c6-47e5-b8fa-aebe866e4b84">Choix techniques</h1>
            <p id="be9952dc-f73b-49f9-9842-155305f8d063">
              Le choix des technologies est laissé libre tant qu’un framework
              front-end est utilisé et que tout est fait en Javascript (front
              comme back). L’utilisation d’une base de données non relationnelle
              était interdite.
            </p>
            <h2 id="aae889b6-1a5c-446b-8571-ca9699b387d4">Choix front-end</h2>
            <p id="81c574d4-33e5-4b77-a828-0109fd4afeba">
              Côté front-end, j’ai personnellement décidé de partir sur la
              librairie React.js avec le meta-framework Next.js. On peut aussi
              noter l’utilisation de tailwindcss, headless UI et heroicons pour
              l’interface, swr et axios pour la gestion des requêtes https et du
              cache ainsi que days.js pour le traitement des dates. eslint est
              utilisé pour garantir une qualité de code optimale.
            </p>
            <h2 id="bbc916ea-9dfb-4595-8a44-192ca230c958">Choix back-end</h2>
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
            <h1 id="875a8079-a5d2-4ac8-9281-aa13de682ed3">Fonctionnalités</h1>
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

        <style jsx>
          {`
            html,
            .container {
              margin: 0;
              padding: 0;
            }
            @media only screen {
              .container {
                margin: 2em auto;
                max-width: 900px;
              }
            }

            .container {
              line-height: 1.5;
              white-space: pre-wrap;
            }

            a,
            a.visited {
              color: inherit;
              text-decoration: underline;
            }

            .pdf-relative-link-path {
              font-size: 80%;
              color: #444;
            }

            h1,
            h2,
            h3 {
              letter-spacing: -0.01em;
              line-height: 1.2;
              font-weight: 600;
              margin-bottom: 0;
            }

            .page-title {
              font-size: 2.5rem;
              font-weight: 700;
              margin-top: 0;
              margin-bottom: 0.75em;
            }

            h1 {
              font-size: 1.875rem;
              margin-top: 1.875rem;
            }

            h2 {
              font-size: 1.5rem;
              margin-top: 1.5rem;
            }

            h3 {
              font-size: 1.25rem;
              margin-top: 1.25rem;
            }

            .source {
              border: 1px solid #ddd;
              border-radius: 3px;
              padding: 1.5em;
              word-break: break-all;
            }

            .callout {
              border-radius: 3px;
              padding: 1rem;
            }

            figure {
              margin: 1.25em 0;
              page-break-inside: avoid;
            }

            figcaption {
              opacity: 0.5;
              font-size: 85%;
              margin-top: 0.5em;
            }

            mark {
              background-color: transparent;
            }

            .indented {
              padding-left: 1.5em;
            }

            hr {
              background: transparent;
              display: block;
              width: 100%;
              height: 1px;
              visibility: visible;
              border: none;
              border-bottom: 1px solid rgba(55, 53, 47, 0.09);
            }

            img {
              max-width: 100%;
            }

            @media only print {
              img {
                max-height: 100vh;
                object-fit: contain;
              }
            }

            @page {
              margin: 1in;
            }

            .collection-content {
              font-size: 0.875rem;
            }

            .column-list {
              display: flex;
              justify-content: space-between;
            }

            .column {
              padding: 0 1em;
            }

            .column:first-child {
              padding-left: 0;
            }

            .column:last-child {
              padding-right: 0;
            }

            .table_of_contents-item {
              display: block;
              font-size: 0.875rem;
              line-height: 1.3;
              padding: 0.125rem;
            }

            .table_of_contents-indent-1 {
              margin-left: 1.5rem;
            }

            .table_of_contents-indent-2 {
              margin-left: 3rem;
            }

            .table_of_contents-indent-3 {
              margin-left: 4.5rem;
            }

            .table_of_contents-link {
              text-decoration: none;
              opacity: 0.7;
              border-bottom: 1px solid rgba(55, 53, 47, 0.18);
            }

            table,
            th,
            td {
              border: 1px solid rgba(55, 53, 47, 0.09);
              border-collapse: collapse;
            }

            table {
              border-left: none;
              border-right: none;
            }

            th,
            td {
              font-weight: normal;
              padding: 0.25em 0.5em;
              line-height: 1.5;
              min-height: 1.5em;
              text-align: left;
            }

            th {
              color: rgba(55, 53, 47, 0.6);
            }

            ol,
            ul {
              margin: 0;
              margin-block-start: 0.6em;
              margin-block-end: 0.6em;
            }

            li > ol:first-child,
            li > ul:first-child {
              margin-block-start: 0.6em;
            }

            ul > li {
              list-style: disc;
            }

            ul.to-do-list {
              text-indent: -1.7em;
            }

            ul.to-do-list > li {
              list-style: none;
            }

            .to-do-children-checked {
              text-decoration: line-through;
              opacity: 0.375;
            }

            ul.toggle > li {
              list-style: none;
            }

            ul {
              padding-inline-start: 1.7em;
            }

            ul > li {
              padding-left: 0.1em;
            }

            ol {
              padding-inline-start: 1.6em;
            }

            ol > li {
              padding-left: 0.2em;
            }

            .mono ol {
              padding-inline-start: 2em;
            }

            .mono ol > li {
              text-indent: -0.4em;
            }

            .toggle {
              padding-inline-start: 0em;
              list-style-type: none;
            }

            /* Indent toggle children */
            .toggle > li > details {
              padding-left: 1.7em;
            }

            .toggle > li > details > summary {
              margin-left: -1.1em;
            }

            .selected-value {
              display: inline-block;
              padding: 0 0.5em;
              background: rgba(206, 205, 202, 0.5);
              border-radius: 3px;
              margin-right: 0.5em;
              margin-top: 0.3em;
              margin-bottom: 0.3em;
              white-space: nowrap;
            }

            .collection-title {
              display: inline-block;
              margin-right: 1em;
            }

            .simple-table {
              margin-top: 1em;
              font-size: 0.875rem;
            }

            .simple-table-header {
              background: rgb(247, 246, 243);
              color: black;
              font-weight: 500;
            }

            time {
              opacity: 0.5;
            }

            .icon {
              display: inline-block;
              max-width: 1.2em;
              max-height: 1.2em;
              text-decoration: none;
              vertical-align: text-bottom;
              margin-right: 0.5em;
            }

            img.icon {
              border-radius: 3px;
            }

            .user-icon {
              width: 1.5em;
              height: 1.5em;
              border-radius: 100%;
              margin-right: 0.5rem;
            }

            .user-icon-inner {
              font-size: 0.8em;
            }

            .text-icon {
              border: 1px solid #000;
              text-align: center;
            }

            .page-cover-image {
              display: block;
              object-fit: cover;
              width: 100%;
              max-height: 30vh;
            }

            .page-header-icon {
              font-size: 3rem;
              margin-bottom: 1rem;
            }

            .page-header-icon-with-cover {
              margin-top: -0.72em;
              margin-left: 0.07em;
            }

            .page-header-icon img {
              border-radius: 3px;
            }

            .link-to-page {
              margin: 1em 0;
              padding: 0;
              border: none;
              font-weight: 500;
            }

            p > .user {
              opacity: 0.5;
            }

            td > .user,
            td > time {
              white-space: nowrap;
            }

            input[type="checkbox"] {
              transform: scale(1.5);
              margin-right: 0.6em;
              vertical-align: middle;
            }

            p {
              margin-top: 0.5em;
              margin-bottom: 0.5em;
            }

            .image {
              border: none;
              margin: 1.5em 0;
              padding: 0;
              border-radius: 0;
              text-align: center;
            }

            .code,
            code {
              background: rgba(135, 131, 120, 0.15);
              border-radius: 3px;
              padding: 0.2em 0.4em;
              border-radius: 3px;
              font-size: 85%;
              tab-size: 2;
            }

            code {
              color: #eb5757;
            }

            .code {
              padding: 1.5em 1em;
            }

            .code-wrap {
              white-space: pre-wrap;
              word-break: break-all;
            }

            .code > code {
              background: none;
              padding: 0;
              font-size: 100%;
              color: inherit;
            }

            blockquote {
              font-size: 1.25em;
              margin: 1em 0;
              padding-left: 1em;
              border-left: 3px solid rgb(55, 53, 47);
            }

            .bookmark {
              text-decoration: none;
              max-height: 8em;
              padding: 0;
              display: flex;
              width: 100%;
              align-items: stretch;
            }

            .bookmark-title {
              font-size: 0.85em;
              overflow: hidden;
              text-overflow: ellipsis;
              height: 1.75em;
              white-space: nowrap;
            }

            .bookmark-text {
              display: flex;
              flex-direction: column;
            }

            .bookmark-info {
              flex: 4 1 180px;
              padding: 12px 14px 14px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }

            .bookmark-image {
              width: 33%;
              flex: 1 1 180px;
              display: block;
              position: relative;
              object-fit: cover;
              border-radius: 1px;
            }

            .bookmark-description {
              color: rgba(55, 53, 47, 0.6);
              font-size: 0.75em;
              overflow: hidden;
              max-height: 4.5em;
              word-break: break-word;
            }

            .bookmark-href {
              font-size: 0.75em;
              margin-top: 0.25em;
            }

            .sans {
              font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont,
                "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif,
                "Segoe UI Emoji", "Segoe UI Symbol";
            }
            .code {
              font-family: "SFMono-Regular", Menlo, Consolas, "PT Mono",
                "Liberation Mono", Courier, monospace;
            }
            .serif {
              font-family: Lyon-Text, Georgia, ui-serif, serif;
            }
            .mono {
              font-family: iawriter-mono, Nitti, Menlo, Courier, monospace;
            }
            .pdf .sans {
              font-family: Inter, ui-sans-serif, -apple-system,
                BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji",
                Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol",
                "Twemoji", "Noto Color Emoji", "Noto Sans CJK JP";
            }
            .pdf:lang(zh-CN) .sans {
              font-family: Inter, ui-sans-serif, -apple-system,
                BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji",
                Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol",
                "Twemoji", "Noto Color Emoji", "Noto Sans CJK SC";
            }
            .pdf:lang(zh-TW) .sans {
              font-family: Inter, ui-sans-serif, -apple-system,
                BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji",
                Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol",
                "Twemoji", "Noto Color Emoji", "Noto Sans CJK TC";
            }
            .pdf:lang(ko-KR) .sans {
              font-family: Inter, ui-sans-serif, -apple-system,
                BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji",
                Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol",
                "Twemoji", "Noto Color Emoji", "Noto Sans CJK KR";
            }
            .pdf .code {
              font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas,
                "PT Mono", "Liberation Mono", Courier, monospace, "Twemoji",
                "Noto Color Emoji", "Noto Sans Mono CJK JP";
            }
            .pdf:lang(zh-CN) .code {
              font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas,
                "PT Mono", "Liberation Mono", Courier, monospace, "Twemoji",
                "Noto Color Emoji", "Noto Sans Mono CJK SC";
            }
            .pdf:lang(zh-TW) .code {
              font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas,
                "PT Mono", "Liberation Mono", Courier, monospace, "Twemoji",
                "Noto Color Emoji", "Noto Sans Mono CJK TC";
            }
            .pdf:lang(ko-KR) .code {
              font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas,
                "PT Mono", "Liberation Mono", Courier, monospace, "Twemoji",
                "Noto Color Emoji", "Noto Sans Mono CJK KR";
            }
            .pdf .serif {
              font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif,
                "Twemoji", "Noto Color Emoji", "Noto Serif CJK JP";
            }
            .pdf:lang(zh-CN) .serif {
              font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif,
                "Twemoji", "Noto Color Emoji", "Noto Serif CJK SC";
            }
            .pdf:lang(zh-TW) .serif {
              font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif,
                "Twemoji", "Noto Color Emoji", "Noto Serif CJK TC";
            }
            .pdf:lang(ko-KR) .serif {
              font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif,
                "Twemoji", "Noto Color Emoji", "Noto Serif CJK KR";
            }
            .pdf .mono {
              font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier,
                monospace, "Twemoji", "Noto Color Emoji",
                "Noto Sans Mono CJK JP";
            }
            .pdf:lang(zh-CN) .mono {
              font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier,
                monospace, "Twemoji", "Noto Color Emoji",
                "Noto Sans Mono CJK SC";
            }
            .pdf:lang(zh-TW) .mono {
              font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier,
                monospace, "Twemoji", "Noto Color Emoji",
                "Noto Sans Mono CJK TC";
            }
            .pdf:lang(ko-KR) .mono {
              font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier,
                monospace, "Twemoji", "Noto Color Emoji",
                "Noto Sans Mono CJK KR";
            }
            .highlight-default {
              color: rgba(55, 53, 47, 1);
            }
            .highlight-gray {
              color: rgba(120, 119, 116, 1);
              fill: rgba(120, 119, 116, 1);
            }
            .highlight-brown {
              color: rgba(159, 107, 83, 1);
              fill: rgba(159, 107, 83, 1);
            }
            .highlight-orange {
              color: rgba(217, 115, 13, 1);
              fill: rgba(217, 115, 13, 1);
            }
            .highlight-yellow {
              color: rgba(203, 145, 47, 1);
              fill: rgba(203, 145, 47, 1);
            }
            .highlight-teal {
              color: rgba(68, 131, 97, 1);
              fill: rgba(68, 131, 97, 1);
            }
            .highlight-blue {
              color: rgba(51, 126, 169, 1);
              fill: rgba(51, 126, 169, 1);
            }
            .highlight-purple {
              color: rgba(144, 101, 176, 1);
              fill: rgba(144, 101, 176, 1);
            }
            .highlight-pink {
              color: rgba(193, 76, 138, 1);
              fill: rgba(193, 76, 138, 1);
            }
            .highlight-red {
              color: rgba(212, 76, 71, 1);
              fill: rgba(212, 76, 71, 1);
            }
            .highlight-gray_background {
              background: rgba(241, 241, 239, 1);
            }
            .highlight-brown_background {
              background: rgba(244, 238, 238, 1);
            }
            .highlight-orange_background {
              background: rgba(251, 236, 221, 1);
            }
            .highlight-yellow_background {
              background: rgba(251, 243, 219, 1);
            }
            .highlight-teal_background {
              background: rgba(237, 243, 236, 1);
            }
            .highlight-blue_background {
              background: rgba(231, 243, 248, 1);
            }
            .highlight-purple_background {
              background: rgba(244, 240, 247, 0.8);
            }
            .highlight-pink_background {
              background: rgba(249, 238, 243, 0.8);
            }
            .highlight-red_background {
              background: rgba(253, 235, 236, 1);
            }
            .block-color-default {
              color: inherit;
              fill: inherit;
            }
            .block-color-gray {
              color: rgba(120, 119, 116, 1);
              fill: rgba(120, 119, 116, 1);
            }
            .block-color-brown {
              color: rgba(159, 107, 83, 1);
              fill: rgba(159, 107, 83, 1);
            }
            .block-color-orange {
              color: rgba(217, 115, 13, 1);
              fill: rgba(217, 115, 13, 1);
            }
            .block-color-yellow {
              color: rgba(203, 145, 47, 1);
              fill: rgba(203, 145, 47, 1);
            }
            .block-color-teal {
              color: rgba(68, 131, 97, 1);
              fill: rgba(68, 131, 97, 1);
            }
            .block-color-blue {
              color: rgba(51, 126, 169, 1);
              fill: rgba(51, 126, 169, 1);
            }
            .block-color-purple {
              color: rgba(144, 101, 176, 1);
              fill: rgba(144, 101, 176, 1);
            }
            .block-color-pink {
              color: rgba(193, 76, 138, 1);
              fill: rgba(193, 76, 138, 1);
            }
            .block-color-red {
              color: rgba(212, 76, 71, 1);
              fill: rgba(212, 76, 71, 1);
            }
            .block-color-gray_background {
              background: rgba(241, 241, 239, 1);
            }
            .block-color-brown_background {
              background: rgba(244, 238, 238, 1);
            }
            .block-color-orange_background {
              background: rgba(251, 236, 221, 1);
            }
            .block-color-yellow_background {
              background: rgba(251, 243, 219, 1);
            }
            .block-color-teal_background {
              background: rgba(237, 243, 236, 1);
            }
            .block-color-blue_background {
              background: rgba(231, 243, 248, 1);
            }
            .block-color-purple_background {
              background: rgba(244, 240, 247, 0.8);
            }
            .block-color-pink_background {
              background: rgba(249, 238, 243, 0.8);
            }
            .block-color-red_background {
              background: rgba(253, 235, 236, 1);
            }
            .select-value-color-pink {
              background-color: rgba(245, 224, 233, 1);
            }
            .select-value-color-purple {
              background-color: rgba(232, 222, 238, 1);
            }
            .select-value-color-green {
              background-color: rgba(219, 237, 219, 1);
            }
            .select-value-color-gray {
              background-color: rgba(227, 226, 224, 1);
            }
            .select-value-color-opaquegray {
              background-color: rgba(255, 255, 255, 0.0375);
            }
            .select-value-color-orange {
              background-color: rgba(250, 222, 201, 1);
            }
            .select-value-color-brown {
              background-color: rgba(238, 224, 218, 1);
            }
            .select-value-color-red {
              background-color: rgba(255, 226, 221, 1);
            }
            .select-value-color-yellow {
              background-color: rgba(253, 236, 200, 1);
            }
            .select-value-color-blue {
              background-color: rgba(211, 229, 239, 1);
            }

            .checkbox {
              display: inline-flex;
              vertical-align: text-bottom;
              width: 16;
              height: 16;
              background-size: 16px;
              margin-left: 2px;
              margin-right: 5px;
            }

            .checkbox-on {
              background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E");
            }

            .checkbox-off {
              background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E");
            }
          `}
        </style>
      </div>
    </>
  );
}
