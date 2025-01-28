import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const backend = () => {
  return (
    <div>
      <section className="text-gray-400 body-font bg-gray-900 mt-[100px]">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                Showcasing Our Backend Projects
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded" />
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
              Explore our robust backend projects, crafted to deliver seamless functionality and efficient data management. Each project showcases modern backend principles and advanced server-side technologies.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/images/backend/merce.png"
                  alt="Fully Functional"
                  width={400}
                  height={300}
                />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                  <Link target="_blank" href="https://e-commerce-website-rouge-eight.vercel.app/">
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  Fully Functional E-commerce Website
                </h2>
                <p className="leading-relaxed text-base">
                  This e-commerce platform is designed to be dynamic and SEO-optimized, delivering blazing-fast performance similar to Amazon. It includes multiple features and functionalities that enhance both the user experience and operational efficiency. Ensures smooth data flow and real-time updates for product inventory.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/images/backend/shop.png"
                  alt="Shop"
                  width={400}
                  height={300}
                />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                  <Link target="_blank" href="https://shopcom-eight.vercel.app/">
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  Shop.com Fully Functional Website
                </h2>
                <p className="leading-relaxed text-base">
                  Shop.com Highlights Sanity CMS Integration: Enabled dynamic product management and real-time updates. Add-to-Cart: Built a seamless cart system with live updates. Dynamic Routing: Used Next.js for engaging product pages. Responsive UI: Designed a mobile-friendly interface with Tailwind CSS.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/images/backend/intell.png"
                  alt="Blog"
                  width={400}
                  height={300}
                />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                  <Link target="_blank" href="https://sanity-blog-website-sigma.vercel.app/">
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  Intellibot Creation Blog
                </h2>
                <p className="leading-relaxed text-base">
                  Dynamic Routing: Seamless blog navigation with no reloads. Seamless experience for users to explore various blogs without any page reloads. Responsive Design: Adapts to all screen sizes. Real-Time Updates: Instantly publish blogs via Sanity.io. User-Friendly UI: Clean design for effortless browsing. SEO Optimized: Enhanced visibility and rankings.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/images/backend/medical.png"
                  alt="Medical"
                  width={400}
                  height={300}
                />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                  <Link target="_blank" href="https://shifa-zone.vercel.app/">
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  Shifa Zone Medical Website
                </h2>
                <p className="leading-relaxed text-base">
                  Book appointments with healthcare providers Describe their symptoms to receive preliminary guidance Built with HTML and Tailwind CSS, this site is fully responsive and optimized to provide a seamless experience across all devices. From concept to completion, this project is a step towards bridging the gap between technology and healthcare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default backend
