import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="about flex flex-col md:flex-row items-center bg-white p-8 md:p-16">
      {/* Left Section for Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image width={1000} height={1000}
          src="/pic.jpg" 
          alt=""
          className="rounded-md h-3/4 w-3/4"
        />
      </div>
      {/* Right Section for Content */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">ABOUT ME</h1>
        <h2 className="text-xl text-purple-950 font-semibold mb-4">Rubina Memon Web - Developer</h2>
        <p className="text-gray-600 mb-6">
        I created this blog to share captivating content and connect with amazing readers like you.

       Powered by cutting-edge technologies like Sanity CMS this blog ensures data is managed effortlessly and posts stay fresh and dynamic.

       My goal is simple to craft a smooth and enjoyable reading experience for you filled with up-to-date and engaging stories.

       Thank you for being here—happy reading.
        </p>

      </div>
    </div>
  );
};

export default About;