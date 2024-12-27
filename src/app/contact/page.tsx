export default function Contact() {
  return (
<main className="max-w-[1500px] mx-auto">
      <form
        action="#"
        className=" border-4 border-gray-400 my-12 rounded-xl py-10  mx-4 sm:mx-28 md:mx-40 lg:mx-52 xl:mx-96"
      >
        <legend className="text-2xl ml-4 md:ml-20">Name:</legend>
        <input
          type="text"
          placeholder="Enter your name..."
          className="text-2xl w-[95%] md:w-[70%] p-2 ml-2 md:ml-20 "
        />

        <legend className="text-2xl ml-4 md:ml-20">Email:</legend>
        <input
          type="email"
          placeholder="Enter your email..."
          className="text-2xl w-[95%] md:w-[70%] p-2 ml-2 md:ml-20 "
        />
        <legend className="text-2xl ml-4 md:ml-20">Phone:</legend>
        <input
          type="tel"
          placeholder="Enter your number..."
          className="text-2xl w-[95%] md:w-[70%] p-2 ml-2 md:ml-20 "
        />
        <legend className="text-2xl ml-4 md:ml-20">Message:</legend>
        <textarea
          name="message"
          placeholder="Write message here..."
          rows={4}
          cols={24}
          className="text-2xl w-[95%] md:w-[70%] p-2 ml-2 md:ml-20 rounded-md"
        ></textarea>
      </form>
      <div className="flex justify-center items-center">
        <button className="bg-blue-800 text-white font-bold text-2xl px-10 py-3 rounded-xl  mb-8   hover:bg-blue-600 transition-colors">
          Send
        </button>
      </div>
    </main>

   
        
  );
}
