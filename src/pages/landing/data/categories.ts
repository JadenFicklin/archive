import { Cats } from "~/pages/404Cats/Cats";
import { CookieClicker } from "~/pages/cookieClicker/CookieClicker";
import { OpenAI } from "~/pages/openAI/OpenAI";
import { Spotify } from "~/pages/spotify/Spotify";

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
        subHeader:
          "Interact with unique personalities powered by the OpenAI API.",
        page: OpenAI,
      },
      {
        name: "Spotify",
        subHeader: "browse songs powered by the spotify API.",
        page: Spotify,
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
        subHeader: "learn error codes with the magic of cats",
        page: Cats,
      },
      {
        name: "Lazy Loading",
      },
    ],
  },
];
