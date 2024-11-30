import { CookieClicker } from "~/pages/cookieClicker/CookieClicker";
import { OpenAI } from "~/pages/openAI/OpenAI";

export const categories = [
  {
    category: "Arcade",
    categorySubs: [
      {
        name: "Cookie Clicker",
        subHeader: "Click the cookie and buy assets to earn coins!",
        page: CookieClicker,
      },
      {
        name: "Rock Paper Scissors",
      },
      {
        name: "Balloon Pop",
      },
      {
        name: "Build Your Own Song",
      },
      {
        name: "Fishing",
      },
      {
        name: "Pet Feeder",
      },
      {
        name: "Shop",
      },
    ],
  },
  {
    category: `API's`,
    categorySubs: [
      {
        name: "OpenAi",
        subHeader: "Different AI chatbots",
        page: OpenAI,
      },
      {
        name: "Spotify",
      },
      {
        name: "Pokemon",
      },
      {
        name: "Movie",
      },
      {
        name: "Translator",
      },
    ],
  },
  {
    category: "Coding Components",
    categorySubs: [
      {
        name: "Form",
      },
      {
        name: "Graph",
      },
      {
        name: "Todo List",
      },
      {
        name: "Paint",
      },
      {
        name: "ThreeJs",
      },
      {
        name: "Image Carousel",
      },
      {
        name: "Cursor Follow Types",
      },
      {
        name: "Survey",
      },
      {
        name: "Contact Form",
      },
      {
        name: "Time Capsule",
      },
      {
        name: "Dropdown",
      },
    ],
  },
  {
    category: `Blog`,
    categorySubs: [
      {
        name: "404 Cats",
      },
      {
        name: "Lazy Loading",
      },
    ],
  },
];
