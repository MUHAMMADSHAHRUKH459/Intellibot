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
    tags: ["Web Designing"],
    publishDate: "2023-09-15",
  },
  {
    id: 2,
    title: "Explore Our Expert Web Development Services",
    paragraph:
      "We specialize in creating dynamic, user-friendly, and responsive websites and AI chatbots tailored to your business needs. From frontend design to backend functionality, we bring your vision to life with cutting-edge technology.",
    image: "/images/blog/webdev.jpg",
    author: {
      name: "Shahrukh Javed",
      image: "/images/blog/srk.jpg",
      designation: "Web & Chatbot Developer",
    },
    tags: ["Frontend & Backend"],
    publishDate: "2022-09-27",
  },
  {
    id: 3,
    title: "Revolutionize Your Business with Digital Marketing",
    paragraph:
      "Unlock the full potential of your business with data-driven digital marketing strategies. From boosting brand visibility to driving conversions, we tailor every solution to your unique goals for maximum impact.",
    image: "/images/blog/webd.jpg",
    author: {
      name: "Ahmed Raza Nisar",
      image: "/images/blog/ahmed1.jpg",
      designation: "Digital Marketer",
    },
    tags: ["Digital Marketing"],
    publishDate: "2023-10-10",
  },
];

export default blogData;


