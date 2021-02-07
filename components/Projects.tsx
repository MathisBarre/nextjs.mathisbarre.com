export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto">
      <div className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-16">Mes derniers projet<span className="text-primary">.</span></h2>
        <h3 className="text-xl mb-4 mt-8">Relatif à OpenClassrooms</h3>
        <div className="grid grid-cols-3 gap-4">
          <Project/>
          <Project/>
          <Project/>
        </div>
        <h3 className="text-xl mb-4 mt-8">En tant que freelance</h3>
        <div className="grid grid-cols-3 gap-4">
          <Project/>
          <Project/>
          <Project/>
        </div>
        <h3 className="text-xl mb-4 mt-8">Side projects</h3>
        <div className="grid grid-cols-3 gap-4">
          <Project/>
          <Project/>
          <Project/>
        </div>
      </div>
    </section>
  )
}
function Project() {
  return (
    <div className="aspect-w-16 aspect-h-9 bg-gray-900 rounded">

    </div>
  )
}