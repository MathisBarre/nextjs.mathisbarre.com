export default function Technologies() {
  return (
    <section>
      <h2 className="title-section">
        Quels sont les technologies que je maitrise ?
      </h2>
      <p className="mb-2 text-gray-200 ">
        J&apos;adore travailler avec <span className="bold">tailwindcss</span>,{" "}
        <span className="bold">React</span> et{" "}
        <span className="bold">Next.js</span> quand je fais du développement
        front-end. Côté mobile, je maitrise{" "}
        <span className=" bold">React Native</span>. Et pour les applications de
        bureau, je m&apos;amuse avec <span className="bold">Tauri</span>.
      </p>
      <p className="mb-2 text-gray-200 ">
        Côté back-end, j&apos;ai une préférence pour{" "}
        <span className="bold">Node.js</span> avec le plus souvent{" "}
        <span className="bold">Nest.js</span> et{" "}
        <span className="bold">PostgresQL</span> pour la base de données. Côté
        ORM, il faut faire simple. <span className="bold">Drizzle</span> est mon
        premier choix mais je maitrise aussi{" "}
        <span className="bold">TypeORM</span>.
      </p>

      {/* Archi, tests */}
      <p className="mb-2 text-gray-200 ">
        Pour l&apos;architecture de mes applications, je m&apos;inspire beaucoup
        de la <span className="bold">Clean Architecture</span> et de ces
        variantes mais en restant pragmatique. Tout est une question de
        compromis.
      </p>
      <p>
        Côté test, j&apos;applique le <span className="bold">test-first</span>{" "}
        le plus possible. Et je préviligie en règle général les{" "}
        <span className="bold">tests d&apos;intégrations</span> côté back-end.
      </p>
    </section>
  );
}
