/*import React from "react";
import { Slider } from "react-slick";

const projects = [
  // Add your project data here
  // Example:
  // {-
  //   title: "Project Title",
  //   description: "Project Description",
  //   image: "path/to/image.jpg",
  //   link: "https://project-link.com"
  // }
{  title: 'Crypto Investment Site',
  description: 'A secure broker platform built with Node.js, PostgreSQL, and Express.',
  image: 'path/to/crypto-investment-site.jpg',
  live: 'https://www.nexa-exchange.com',
  github: 'https://github.com/yourusername/crypto-investment-site'
},
{  title: 'Campus Buddy',
  description: 'A platform connecting students with campus resources.',
  image: 'path/to/campus-buddy.jpg',
  live: 'https://campus-buddy.com',
  github: 'https://github.com/yourusername/campus-buddy'
}
];

const ProjectCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="my-20 px-4 md:px-20">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="p-4">
            <img src={project.image} alt={project.title} className="w-full h-auto rounded-lg" />
            <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <div className="mt-4">
              <a href={project.live} className="text-blue-500 hover:underline">View Live</a>
              <span className="mx-2">|</span>
              <a href={project.github} className="text-blue-500 hover:underline">View Code</a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectCarousel;*/
import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import projectImage from '../assets/crypto_site.png'; // Example image import, replace with actual images

const projects = [
  // Add your project data here
  // Example:
  // {
  //   title: "Project Title",
  //   description: "Project Description",
  //   image: "path/to/image.jpg",
  //   link: "https://project-link.com"
  // }
{  title: 'Crypto Investment Site',
  description: 'A secure broker platform built with Node.js, PostgreSQL, and Express.',
  image: projectImage,
  live: 'https://',
  github: 'https://github.com/yourusername/crypto-investment-site'
},
{  title: 'Campus Buddy',
  description: 'A platform connecting students with campus resources.',
  image: 'path/to/campus-buddy.jpg',
  live: 'https://campus-buddy.com',
  github: 'https://github.com/yourusername/campus-buddy'
}
];

const SampleCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };


  return (
    <div className="my-20 px-4 md:px-20">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="p-4">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
            <img src={project.image} alt={project.title} className="w-full h-auto rounded-lg" />
            <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <div className="mt-4">
              <a href={project.live} className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700">View Live</a>
              <span className="mx-2">{" "}</span>
              <a href={project.github} className="bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-700">View Code</a>
            </div>
          </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SampleCarousel;
