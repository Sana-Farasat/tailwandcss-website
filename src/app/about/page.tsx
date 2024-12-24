import Image from "next/image";

export default function About() {
  return (
    <main className="max-w-[1500px] mx-auto mt-12 md:mt-20 border-4 border-blue-800  rounded-xl md:mx-16 my-8 md:my-20">
      <h2 className="text-center font-bold mt-10 mb-5 text-3xl text-blue-800 md:text-5xl ">
        Welcome to SF – Your Partner in Health and Fitness
      </h2>
      <p className=" text-base text-justify md:text-xl lg:text-2xl mx-8 mb-16 text-gray-800  md:mx-16 md:mb-20 ">
        At SF, we believe that health is not just a goal, but a lifestyle. Our
        mission is to empower individuals to live active, balanced, and
        sustainable lives through personalized fitness plans, expert coaching,
        and nutrition guidance. We&apos;’re here to help you achieve your health
        and fitness goals—whether you&apos;’re just getting started or looking
        to take your fitness journey to the next level.
      </p>

      <div>
        <Image
          src="/about1.jpg"
          alt="Heroimage"
          height={200}
          width={200}
          layout="responsive"
          className="h-52"
        />
      </div>

      <br />
      <br />

      <h2 className="text-center font-bold mb-5 text-3xl text-blue-800 md:text-5xl ">
        <strong>Our Story </strong> From Struggles to Strength
      </h2>
      <p className=" text-base text-justify md:text-xl lg:text-2xl mx-8 mb-16 text-gray-800 md:mx-16 md:mb-20 ">
        Our journey in health and fitness started from a place of personal
        transformation. After facing my own health challenges, I realized how
        powerful fitness and proper nutrition can be in changing one&apos;’s
        life. I&apos;’ve personally experienced the difference that a tailored
        workout and a balanced diet can make, not only physically but mentally
        as well.
        <br />
        I decided to take my passion for fitness and wellness to the next level
        by becoming a Certified Personal Trainer, Nutrition Coach, and Yoga
        Instructor. Now, I&apos;’m committed to helping others find their
        strength, boost their confidence, and transform their lives, just as I
        did.
        <br />
        It&apos;’s this personal experience that drives our approach. We
        don&apos;’t just provide fitness plans—we offer a journey that&apos;’s
        customized to YOUR unique needs and goals.
      </p>

      <div>
        <Image
          src="/about2.jpg"
          alt="Heroimage"
          height={200}
          width={300}
          layout="responsive"
          className="h-96 w-full"
        />
      </div>
      <br />
      <br />

      <h2 className="text-center font-bold mb-5 text-3xl text-blue-800 md:text-5xl">
        Our Mission
      </h2>
      <p className="text-base text-justify md:text-xl lg:text-2xl mx-8 mb-16 text-gray-800 md:mx-16 md:mb-20 ">
        Our mission at SF is simple: to inspire and guide people towards living
        healthier, happier, and more active lives. We focus on creating
        personalized fitness programs, nutritional guidance, and mental wellness
        strategies that are realistic, sustainable, and tailored to YOU.
        We&apos;’re dedicated to making fitness accessible, enjoyable, and
        achievable for everyone, no matter where you are on your fitness
        journey.
      </p>
      <div>
        <Image
          src="/about3.avif"
          alt="Heroimage"
          height={200}
          width={300}
          layout="responsive"
          className="h-96 w-full"
        />
      </div>
    </main>
  );
}
