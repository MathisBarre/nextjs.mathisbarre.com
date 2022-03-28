export default function Contact() {
  return (
    <section>
      <h2 className="flex flex-col flex-wrap items-start md:items-center md:flex-row title-section">
        <span>Lancer une discussion.</span>
      </h2>

      <form action="https://formspree.io/f/xeqvzpnz" method="POST">
        <div className="flex flex-col mb-2">
          <label htmlFor="_replyto" className="mb-1 font-bold">Adresse e-mail</label>
          <input type="_replyto" name="_replyto" id="_replyto" className="p-2 text-gray-900 rounded" />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="message" className="mb-1 font-bold">Message</label>
          <textarea name="message" id="message" className="p-2 text-gray-900 rounded" rows={6}></textarea>
        </div>
        <input type="submit" value="Envoyer la lettre d'amour" className="block w-full p-2 rounded cursor-pointer text-primary-700 bg-primary-200 hover:bg-primary-500" />
      </form>
    </section>
  )
}