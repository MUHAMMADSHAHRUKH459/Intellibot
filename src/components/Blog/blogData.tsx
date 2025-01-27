import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Professional Web Designing Services for Modern Businesses",
    paragraph:
      "Create stunning, user-friendly, and responsive websites with our expert web designing solutions. Elevate your online presence with designs that captivate and engage.",
    image: "/images/blog/webd.jpg",
    author: {
      name: "Muskan Nisar",
      image: "/images/blog/muskan.jpg",
      designation: "Web Designer",
    },
    tags: ["Web Designing"]
  },
  {
    id: 2,
    title: "Explore Our Expert Web Development Services",
    paragraph:
      "We specialize in creating dynamic, user-friendly, and responsive websites tailored to your business needs. From frontend design to backend functionality, we bring your vision to life with cutting-edge technology.",
    image: "/images/blog/webdev.jpg",
    author: {
      name: "Shahrukh Javed",
      image: "/images/blog/srk.jpg",
      designation: "Web Developer",
    },
    tags: ["Frontend & Backend"]
  },
  {
    id: 3,
    title: "Revolutionize Your Business with Advanced Chatbot Development",
    paragraph:
      "Discover how our cutting-edge chatbot development services can transform customer interactions, automate workflows, and enhance user engagement. Tailored solutions to fit your business needs.",
    image: "/images/blog/chat.jpg",
    author: {
      name: "Sikandar Ali",
      image: "/images/blog/sikan.jpg",
      designation: "Gen AI Developer",
    },
    tags: ["AI Solution"]
  },
];
export default blogData;
