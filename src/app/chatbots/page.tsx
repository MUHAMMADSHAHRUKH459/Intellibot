import React from 'react'
import Link from 'next/link'

const chatbots = () => {
  return (
    <div>
      <section className="text-gray-400 body-font bg-gray-900 mt-[100px]">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              Showcasing Our Chatbot Development 
              <br/>
              Projects
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded" />
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
            Explore our innovative chatbot development projects, designed to provide intelligent and seamless conversational experiences. Each project showcases advanced AI capabilities, natural language understanding, and user-focused design to deliver effective and engaging chatbot solutions for various industries.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="images/chatbot/gym.png"
                  alt="gym"
                />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                <Link target='_blank' href="https://titan-fit-website.vercel.app/">
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                Transforming GYM Experiences with AI-Powered Chatbots
                </h2>
                <p className="leading-relaxed text-base">
                Our Gym AI Agent - Your Ultimate Fitness Companion!
                Our AI agent is your personal fitness assistant that:
                Creates tailored workout and meal plans.
                Offers real-time exercise tips.
                Tracks progress and keeps you motivated.Enhancing customer satisfaction with 24/7 support.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="images/chatbot/flavor.png"
                  alt="flavor"
                />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                <Link target='_blank' href="https://flavor-feast-website.vercel.app/">
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                Transforming Restaurant Experiences with AI-Powered Chatbots
                </h2>
                <p className="leading-relaxed text-base">
                Taking reservations and managing bookings instantly.
                Recommending dishes based on customer preferences.
                Answering menu, pricing, and availability queries in real-time. Handling special requests and feedback effortlessly. Enhancing customer satisfaction with 24/7 support.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="images/chatbot/medicalchat.png"
                  alt="medical"
                />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                <Link target='_blank' href="">
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                Revolutionizing Healthcare with Intelligent AI-Powered Medical Chatbots
                </h2>
                <p className="leading-relaxed text-base">
                Our AI medical chatbots offer:
                Instant health advice tailored to your needs.
                Symptom analysis and real-time answers to medical queries.
                Appointment scheduling and reminders.
                Assistance with prescriptions and health reports.
                24/7 support for enhanced patient care and convenience.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="images/chatbot/creation.png"
                  alt="Intellibot"
                />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                <Link target='_blank' href="https://intellibot-creation.vercel.app/">
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                Redefining Customer Support with AI-Driven Service Chatbots
                </h2>
                <p className="leading-relaxed text-base">
                Our AI customer service chatbots deliver:
                Instant responses to customer inquiries.
                Personalized solutions and troubleshooting.
                24/7 support to enhance customer satisfaction.
                Seamless handling of feedback and complaints.
                Efficient automation of repetitive tasks for faster service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default chatbots