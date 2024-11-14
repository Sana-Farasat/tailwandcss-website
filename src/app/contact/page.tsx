export default function Contact() {
  return (
    <main>
      <form
        action="#"
        className=" border-4 border-gray-400 mx-2 my-12 rounded-xl py-10 md:mx-28 lg:mx-52 xl:mx-96"
      >
        <legend className="text-2xl ml-4 md:ml-28">Name:</legend>
        <input
          type="text"
          placeholder="Enter your name..."
          className="text-2xl ml-2 md:ml-28"
        />

        <legend className="text-2xl ml-4 md:ml-28">Email:</legend>
        <input
          type="email"
          placeholder="Enter your email..."
          className="text-2xl ml-2 md:ml-28"
        />
        <legend className="text-2xl ml-4 md:ml-28">Phone:</legend>
        <input
          type="tel"
          placeholder="Enter your number..."
          className="text-2xl ml-2 md:ml-28"
        />
        <legend className="text-2xl ml-4 md:ml-28">Message:</legend>
        <textarea
          name="message"
          placeholder="Write message here..."
          rows={4}
          cols={24}
          className="text-2xl ml-2 md:ml-28 rounded-md"
        ></textarea>
      </form>

      <button className="bg-blue-800 text-white font-bold text-2xl px-10  py-3 rounded-xl  ml-28  md:ml-[45%] hover:bg-blue-600 transition-colors">
        Send
      </button>
    </main>
  );
}
