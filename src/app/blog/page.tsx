import Image from "next/image";

export default function Blog() {
  return (
    <main>
      <div className="h-auto w-full">
        <Image
          src="/blog.jpg"
          alt="Blog"
          height={200}
          width={400}
          className="h-96 w-full"
        />
      </div>

      <div className="flex flex-col md:flex-row my-3 justify-evenly">
        {/* Div 1 */}
        <div className=" w-11/12 m-4 border border-x-gray-500 border-y-gray-500 md:w-96">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            {/* Blog Image */}
            <Image
              src="/blog4.jpg"
              alt="blog card"
              height={320}
              width={480}
              className="w-full h-48 object-cover"
            />
          </div>
          {/* Blog Heading */}
          <div className=" px-3 py-2 w-full md:px-6 md:py-4  ">
            <h2 className="text-pink-500 font-bold text-2xl">
              Achieving Optimal Health: How to Make a Habit That Sticks For Life
            </h2>

            {/* Blog */}

            <p className="text-gray-700 font-semibold">
              Discover how to make a habit stick for life with our comprehensive
              guide to creating healthy habits. Achieve optimal health with
              practical tips!
            </p>
          </div>
        </div>
        {/* Div 2 */}

        <div className=" w-11/12 m-4 border border-x-gray-500 border-y-gray-500 md:w-96">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            {/* Blog Image */}
            <Image
              src="/blog3.jpg"
              alt="blog card"
              height={320}
              width={480}
              className="w-full h-48 object-cover"
            />
          </div>
          {/* Blog Heading */}
          <div className="px-3 py-2 w-full md:px-6 md:py-4 ">
            <h2 className="text-pink-500 font-bold text-2xl">
              The Role of Nutrition in Chronic Disease
            </h2>

            {/* Blog */}

            <p className="text-gray-700 font-semibold">
              Explore the link between nutrition and chronic disease prevention.
              Gain insights on key nutrients, dietary strategies, and expert
              advice for optimal health.
            </p>
          </div>
        </div>
        {/* Div 3 */}
        <div className=" w-11/12 m-4 border border-x-gray-500 border-y-gray-500 md:w-96">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            {/* Blog Image */}
            <Image
              src="/blog5.jpg"
              alt="blog card"
              height={320}
              width={480}
              className="w-full h-48 object-cover"
            />
          </div>
          {/* Blog Heading */}
          <div className="px-3 py-2 w-full md:px-6 md:py-4 ">
            <h2 className="text-pink-500 font-bold text-2xl">
              What is Mindful Eating? Your Complete Guide to Enjoying Your Food
              More
            </h2>

            {/* Blog */}

            <p className="text-gray-700 font-semibold">
              Explore what mindful eating is in this complete guide, offering
              principles, benefits, and tips to savor food and enhance
              well-being. Free consultation!
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row my-3 justify-evenly">
        {/* Div 1 */}
        <div className=" w-11/12 m-4 border border-x-gray-500 border-y-gray-500 md:w-96">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            {/* Blog Image */}
            <Image
              src="/blog6.jpg"
              alt="blog card"
              height={320}
              width={480}
              className="w-full h-48 object-cover"
            />
          </div>
          {/* Blog Heading */}
          <div className="px-3 py-2 w-full md:px-6 md:py-4  ">
            <h2 className="text-pink-500 font-bold text-2xl">
              Top 5 Worst Food Ingredients for Your Immune System
            </h2>

            {/* Blog */}

            <p className="text-gray-700 font-semibold">
              Discover the top 5 worst food ingredients for immune system health
              and learn how to make healthier choices for a stronger, more
              resilient body.
            </p>
          </div>
        </div>
        {/* Div 2 */}

        <div className=" w-11/12 m-4 border border-x-gray-500 border-y-gray-500 md:w-96">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            {/* Blog Image */}
            <Image
              src="/blog1.jpg"
              alt="blog card"
              height={320}
              width={480}
              className="w-full h-48 object-cover"
            />
          </div>
          {/* Blog Heading */}
          <div className="px-3 py-2 w-full md:px-6 md:py-4 ">
            <h2 className="text-pink-500 font-bold text-2xl">
              Achieving Optimal Health: How to Make a Habit That Sticks for Life
            </h2>

            {/* Blog */}

            <p className="text-gray-700 font-semibold">
              Discover how to make a habit stick for life with our comprehensive
              guide to creating healthy habits. Achieve optimal health with
              practical tips!
            </p>
          </div>
        </div>
        {/* Div 3 */}
        <div className=" w-11/12 m-4 border border-x-gray-500 border-y-gray-500 md:w-96">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            {/* Blog Image */}
            <Image
              src="/blog2.jpg"
              alt="blog card"
              height={320}
              width={480}
              className="w-full h-48 object-cover"
            />
          </div>
          {/* Blog Heading */}
          <div className="px-3 py-2 w-full md:px-6 md:py-4 ">
            <h2 className="text-pink-500 font-bold text-2xl">
              What is Mindful Eating? Your Complete Guide to Enjoying Your Food
              More
            </h2>

            {/* Blog */}

            <p className="text-gray-700 font-semibold">
              Explore what mindful eating is in this complete guide, offering
              principles, benefits, and tips to savor food and enhance
              well-being. Free consultation!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
