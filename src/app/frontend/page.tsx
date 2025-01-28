import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const frontend = () => {
  return (
    <div>
      <section className="text-gray-400 body-font bg-gray-900 mt-[100px]">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                Showcasing Our Frontend Projects
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded" />
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
              Explore our innovative frontend projects, designed to create intuitive and visually appealing user interfaces. Each project highlights modern UI/UX principles and cutting-edge web technologies.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/images/frontend/body.png"
                  alt="The Body Shop"
                  width={500}
                  height={400}
                />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                  <Link target="_blank" href="https://mileston-3-project.vercel.app/">
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  The Body Shop
                </h2>
                <p className="leading-relaxed text-base">
                  A sleek and visually engaging e-commerce website built to showcase beauty and skincare products, featuring responsive design with Nextjs and Tailwind Css.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/images/frontend/yumspot.png"
                  alt="YumSpot"
                  width={500}
                  height={400}
                />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                  <Link target="_blank" href="https://yum-spot.vercel.app/">
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  YumSpot Restaurant Website
                </h2>
                <p className="leading-relaxed text-base">
                  A sleek restaurant website showcasing menus, offers, and reservations with responsive design using HTML, CSS, and JavaScript.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/images/frontend/mn.png"
                  alt="portfolio"
                  width={500}
                  height={400}
                />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                  <Link target="_blank" href="https://horse-theme-portfolio.vercel.app/">
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  Portfolio Website
                </h2>
                <p className="leading-relaxed text-base">
                  A responsive portfolio to showcase skills and projects, built with modern frontend technologies like HTML, CSS And Javascript.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/images/frontend/comforty.png"
                  alt="Interactive UI"
                  width={500}
                  height={400}
                />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                  <Link target="_blank" href="https://ui-ux-hackathon-lemon.vercel.app/">
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  Interactive User Interface
                </h2>
                <p className="leading-relaxed text-base">
                  Engaging and user-friendly interface designs focused on seamless navigation and enhanced user experience, built using Next.js and designed with Figma.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default frontend;
