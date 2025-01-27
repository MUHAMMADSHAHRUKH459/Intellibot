import React from 'react'
import Link from 'next/link'

const design = () => {
  return (
    <div>
      <section className="text-gray-400 body-font bg-gray-900 mt-[100px]">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                Showcasing Our Web Designing Projects
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded" />
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
            Explore our creative web designing projects, crafted to deliver visually stunning and user-centric websites. Each project reflects modern design principles, responsive layouts, and seamless user experiences, using the latest web technologies.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="images/design/shoe.png"
                  alt="Shoe"
                />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                <Link target='_blank' href="https://www.figma.com/proto/Sy1YQYf2IdNHAucIntTPVz/Untitled?node-id=1-2&node-type=canvas&t=4xziBamw7fG8HhMY-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1">
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  Shoes Website Designing
                </h2>
                <p className="leading-relaxed text-base">
                A visually striking and user-friendly shoe e-commerce website design created on Figma, featuring a sleek, modern layout, intuitive navigation, and responsive elements for an engaging shopping experience across all devices.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="images/design/piza.png"
                  alt="pizza"
                />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                <Link target='_blank' href="https://www.figma.com/proto/suOQT3rnaZKyHBz5GhwEkr/Untitled?node-id=8-40&node-type=canvas&t=k3BbPBh2Fi2ed6c9-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1">
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                 Pizza Website Deigning
                </h2>
                <p className="leading-relaxed text-base">
                A vibrant and appetizing pizza restaurant website design on Figma, featuring an easy-to-navigate menu, online ordering system, and a responsive layout that provides a seamless experience on all devices.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="images/design/body1.png"
                  alt="portfolio"
                />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                <Link target='_blank' href="https://www.figma.com/proto/cD1F7uVOY13HGoV2oCpGcT/Untitled?page-id=0%3A1&node-id=2-2&node-type=canvas&viewport=414%2C-79%2C0.21&t=loY1d8uJxE7rnOVF-1&scaling=scale-down&content-scaling=fixed">
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  Body Shop Designing
                </h2>
                <p className="leading-relaxed text-base">
                A sleek and modern e-commerce website design on Figma for The Body Shop, featuring an intuitive product catalog, smooth checkout process, and responsive layout for a seamless shopping experience across all devices.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="images/design/insta.png"
                  alt="Interactive UI"
                />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                <Link target='_blank' href="https://www.figma.com/design/1tSXgvJHyHisLQelDOuGqK/Instagram-UI-Kit-1.0-(Community)?m=auto&is-community-duplicate=1&fuid=1363997991963397091">
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                Instagram stories widgets:
                </h2>
                <p className="leading-relaxed text-base">
                Instagram stories view and widgets:
                Countdown
                Ask a question
                Polls
                Quiz
                Emoji Slider
                Hastags
                Mentions and locations
                Sponsored posts
                User profile
                Following/non-following profiles
                User profile's grid
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default design