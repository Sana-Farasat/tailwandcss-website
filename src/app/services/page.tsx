import Image from "next/image";

export default function Services() {
  return (
    <main>
      <div>
        <h2 className="text-center text-black font-bold text-3xl my-16 lg:text-4xl  ">
          Online Programs and remote consultations are available for individuals
          not in close proximity to our facility.
        </h2>
      </div>

      <p className="text-center text-black font-bold text-xl my-16 lg:text-2xl">
        With each passing year, requests for online-based services become
        increasingly louder and more persistent. This makes sense﹘not everyone
        lives near one of our Draper facility, nor can they make a meeting in
        person every time. In order to accommodate these individuals, we have
        worked to alter our weekly procedures so that our clients can get the
        same attention they would have received if they were able to meet in
        person, as well as access to the same services.
      </p>

      <p className="text-center text-black font-bold text-xl my-16 lg:text-2xl ">
        Thanks to remote conferencing, our team of personal trainers and
        nutritionists will be able to still see your progress and offer advice
        and teachings regarding your questions and concerns. They will also be
        able to instruct you on how to exercise with the tools at your disposal
        and how also to gather data on your progress that you can share with
        them﹘otherwise this service would be provided to you in person.
      </p>
      <div className="h-24 w-11/12 ml-4 md:ml-8 lg:ml-12 xl:mx-28">
        <Image
          src="/service.png"
          alt="Dietary image"
          height={800}
          width={1000}
          className=" h-auto mx-auto lg:h-96 w-11/12"
        />
      </div>

      <div className="bg-blue-800 h-96 w-full mt-96">
        <h2 className="text-white font-extrabold text-center py-16 text-3xl md:text-4xl lg:text-6xl">
          Start Your Transformation Now
        </h2>

        <button className="bg-white text-blue-800 font-bold text-xl px-3  py-1 rounded-xl  mx-6 my-3 md:mx-48 lg:mx-72 lg:text-2xl lg:px-5 lg:py-3 xl:mx-[33%] hover:bg-blue-600 transition-colors">
          Schedule an in person consultation
        </button>

        <button className="bg-white text-blue-800 font-bold text-xl px-3  py-1 rounded-xl mx-9  md:mx-48 md:px-6 lg:mx-72 lg:text-2xl lg:px-10 lg:py-4 xl:mx-[33%] hover:bg-blue-600 transition-colors">
          Schedule an online consultation
        </button>
      </div>
    </main>
  );
}
