import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const tours = [
  {
    key: 1,
    img: tour1,
    title: "Tibet Adventure",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    tourDetails: {
      location: "china",
      duration: "6 days",
      price: "$2100",
      date: "october 1th, 2020",
    },
  },
  {
    key: 2,
    img: tour2,
    title: "best of java",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    tourDetails: {
      location: "indonesia",
      duration: "11 days",
      price: "$1400",
      date: "august 26th, 2020",
    },
  },
  {
    key: 3,
    img: tour3,
    title: "explore hong kong",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    tourDetails: {
      location: "hong kong",
      duration: "8 days",
      price: "$5000",
      date: "september 15th, 2020",
    },
  },
  {
    key: 4,
    img: tour4,
    title: "kenya highlights",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    tourDetails: {
      location: "kenya",
      duration: "20 days",
      price: "$3300",
      date: "december 5th, 2019",
    },
  },
];

export const pageLinks = [
  { key: 1, href: "home" },
  { key: 2, href: "about" },
  { key: 3, href: "services" },
  { key: 4, href: "tours" },
];

export const socialLinks = [
  { key: 1, icon: "facebook" },
  { key: 2, icon: "twitter" },
  { key: 3, icon: "squarespace" },
];

export const services = [
  {
    key: 1,
    title: "saving money",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    icon: "fas fa-wallet fa-fw",
  },
  {
    key: 2,
    title: "endless hiking",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    icon: "fas fa-tree fa-fw",
  },
  {
    key: 3,
    title: "amazing comfort",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    icon: "fas fa-socks fa-fw",
  },
];
