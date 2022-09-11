import covidTracker from "../assets/covid-tracker.jpg";
import cryptoDashboard from "../assets/crypto-dashboard-min.jpg";
import cupCake from "../assets/cupcake-min.jpg";
import meetingPlanner from "../assets/meeting-planner-min.jpg";
import gaming from "../assets/gaming-min.jpg";
import imageShare from "../assets/image-share-min.jpg";
import chat from "../assets/chat-min.jpg";

export const projectData = [
  {
    url: "https://cov1dtracker.netlify.app/",
    img: covidTracker,
    title: "Covid Tracker",
    subtitle:
      "A Covid 19 tracker made in React. Showing the state of Covid 19 with charts and cards.",
    params:
      "A Covid 19 tracker that keeps track of Covid 19 through charts and cards, displaying the state of the Covid 19 for all 195 countries in the world. ",
    right: true,
  },
  {
    url: "https://leaguewelcomepage.netlify.app/",
    img: gaming,
    title: "Gaming",
    subtitle:
      "A welcome page for League of Legends. Please scroll to interact on the page.",
    params:
      "This welcome page for League of Legends lets you scroll to take you into a very interactive page where you can view champion images and read about their lore.",
    right: false,
    small: true,
    positionRight: "30%",
  },
  {
    url: "https://shareplatform.netlify.app/",
    img: imageShare,
    title: "Image Platform",
    subtitle: "A sharing platform for images",
    params:
      "A sharing platform for images where you can log into your google account and share images and save/download images.",
    right: true,
  },

  {
    url: "https://cupcake-shop.netlify.app/",
    img: cupCake,
    title: "Cookie Store",
    subtitle: "A cupcake store landing page showing cupcakes in a nice way",
    params:
      "Cupcake store landing page. Lets u browse through different flavors of cupcakes.",
    right: false,
    small: true,
    positionLeft: "30%",
  },
  {
    url: "https://meet1ngs.netlify.app/",
    img: meetingPlanner,
    title: "Meetings Planner",
    subtitle: "A meetings planner, saves meetings in Firebase database.",
    params:
      "A meetings planner that can be used for variety of tasks that you want to accomplish. Works like notes.",
    right: true,
    positionRight: "30%",
  },
  {
    url: "https://pr1vchat.netlify.app/",
    img: chat,
    title: "Chat Platform",
    subtitle:
      "A chat application made in React. Allowing users to create private chat rooms by invite only.",
    params:
      "A private chat room with the capacity of holding up to 25 members. Invite only, admin holds the account creation and is holding settings for the application.",
    right: false,
    small: true,
  },
  {
    url: "https://cryptodashboard1.netlify.app/",
    img: cryptoDashboard,
    title: "Crypto Dashboard",
    subtitle:
      "A crypto dashboard where you can see exchange rate for crypto to usd with more...",
    params:
      "A crypto dashboard that shows exchange rate for various crypto currencies to usd for example.",
    right: true,
    positionRight: "-50%",
  },
];
