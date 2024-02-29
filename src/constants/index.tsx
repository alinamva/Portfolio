/// <reference types="vite-plugin-svgr/client" />
import usercard from "/assets/usercard.png";
import budgetapp from "/assets/budgetapp.png";
import todoapp from "/assets/todoapp.png";
import weatherapp from "/assets/weatherapp.png";
import techyes from "/assets/techyes.png";
import rickandmorty from "/assets/rickandmorty.png";
import gameapp from "/assets/gameapp.png";
import framermotion from "/assets/framermotion.png";
import tictactoe from "/assets/tictactoe.png";

import React from "../../public/assets/reacticon.svg?react";
import JS from "../../public/assets/js.svg?react";
import TS from "../../public/assets/ts.svg?react";
import Tailwind from "../../public/assets/tailwind.svg?react";

export const Data = [
  {
    id: 9,
    title: "Tic Tac Toe",
    image: tictactoe,
    lgs: [
      <React className="w-10 h-10 dark:fill-white fill-black" />,
      <TS className="w-10 h-10 dark:fill-white fill-black" />,
      <Tailwind className="w-10 h-10 dark:fill-white fill-black" />,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    link: "https://tic-tac-toe-one-eta.vercel.app/",
  },
  {
    id: 8,
    title: "Game App",
    image: gameapp,
    lgs: [
      <React className="w-10 h-10 dark:fill-white fill-black" />,
      <JS className="w-10 h-10 dark:fill-white fill-black" />,
      <Tailwind className="w-10 h-10 dark:fill-white fill-black" />,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    link: "https://game-store-prod.vercel.app/",
  },
  {
    id: 7,
    title: "Framer Motion Project",
    image: framermotion,
    lgs: [
      <React className="w-10 h-10 dark:fill-white fill-black" />,
      <TS className="w-10 h-10 dark:fill-white fill-black" />,
      <Tailwind className="w-10 h-10 dark:fill-white fill-black" />,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    link: "https://framer-motion-pied-seven.vercel.app/",
  },
  {
    id: 6,
    title: "Rick and Morty",
    image: rickandmorty,
    lgs: [
      <React className="w-10 h-10 dark:fill-white fill-black" />,
      <JS className="w-10 h-10 dark:fill-white fill-black" />,
      <Tailwind className="w-10 h-10 dark:fill-white fill-black" />,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    link: "https://rick-and-morty-alinamva.vercel.app/",
  },
  {
    id: 5,
    title: "Tech Yes",
    image: techyes,
    lgs: [
      <React className="w-10 h-10 dark:fill-white fill-black" />,
      <JS className="w-10 h-10 dark:fill-white fill-black" />,
      <Tailwind className="w-10 h-10 dark:fill-white fill-black" />,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    link: "https://techyes-ten.vercel.app/",
  },
  {
    id: 4,
    title: "Weather App",
    image: weatherapp,
    lgs: [
      <React className="w-10 h-10 dark:fill-white fill-black" />,
      <JS className="w-10 h-10 dark:fill-white fill-black " />,
      <Tailwind className="w-10 h-10 dark:fill-white fill-black" />,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    link: "https://weather-app-alinamva.vercel.app/",
  },
  {
    id: 3,
    title: "Todo App",
    image: todoapp,
    lgs: [
      <React className="w-10 h-10 dark:fill-white fill-black" />,
      <TS className="w-10 h-10 dark:fill-white fill-black" />,
      <Tailwind className="w-10 h-10 dark:fill-white fill-black" />,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    link: "https://todo-app-alinamva.vercel.app/",
  },
  {
    id: 2,
    title: "Budget App",
    image: budgetapp,
    lgs: [
      <React className="w-10 h-10 dark:fill-white fill-black" />,
      <TS className="w-10 h-10 dark:fill-white fill-black" />,
      <Tailwind className="w-10 h-10 dark:fill-white fill-black" />,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    link: "https://budget-app-alinamva.vercel.app/",
  },
  {
    id: 1,
    title: "User Card",
    image: usercard,
    lgs: [
      <React className="w-10 h-10 dark:fill-white fill-black" />,
      <TS className="w-10 h-10 dark:fill-white fill-black" />,
      <Tailwind className="w-10 h-10 dark:fill-white fill-black" />,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    link: "https://user-card-phi.vercel.app/",
  },
];
