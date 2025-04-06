import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Details Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Details Page for Startup Nextjs Template",
};

const BlogDetailsPage = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                Meet Our Expert Developers: Crafting Innovative Solutions with Expertise and Passion
                </h2>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  {/* Author Info */}
                  <div className="flex flex-wrap items-center">
                    <div className="mb-5 mr-10 flex items-center">
                      <div className="mr-4">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <Image
                            src="/images/blog/srk.jpg"
                            alt="author"
                            fill
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <span className="mb-1 text-base font-medium text-body-color">
                          By <a href='https://www.linkedin.com/in/shahrukh-javed459/'><span>Shahrukh Javed</span></a>
                        </span>
                      </div>
                    </div>
                    <div className="mb-5 flex items-center">
                      <p className="mr-5 flex items-center text-base font-medium text-body-color">
                        {/* Date */}
                        Founder Of Intellibot Creation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <section className="services-section py-20">
            <h2 className="mb-8 text-center text-4xl font-bold text-black dark:text-white">
              Our Developers
            </h2>
            <div className="flex flex-wrap justify-center gap-10">
              {/* Service 1: Web Designing by Muskan Nisar */}
              <div className="service-card bg-black p-8 rounded-lg shadow-lg max-w-xs text-center">
                <h3 className="text-xl font-semibold text-black dark:text-white">
                  Web Designing by Muskan Nisar
                </h3>
                <p className="mt-4 text-base text-body-color dark:text-body-color-dark">
                  With over 2 years of experience in the field of web design, Muskan Nisar specializes in creating visually stunning and user-friendly websites. Whether you need a personal portfolio or a business website, she brings creativity and expertise to every project.
                </p>
              </div>

              {/* Service 2: Web Development by Shahrukh Javed */}
              <div className="service-card bg-black p-8 rounded-lg shadow-lg max-w-xs text-center">
                <h3 className="text-xl font-semibold text-black dark:text-white">
                  Web Development by Shahrukh Javed
                </h3>
                <p className="mt-4 text-base text-body-color dark:text-body-color-light">
                  As the founder of Intellibot Creation, Shahrukh Javed has 2 years of experience in web development. He focuses on building robust, scalable, and responsive websites that offer seamless user experiences across all devices.
                </p>
              </div>

             
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
