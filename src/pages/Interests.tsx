import type { FC } from "react"
import { FaDocker, FaJava, FaPython } from "react-icons/fa"
import { IoMdFlag } from "react-icons/io"
import { SiC, SiExpress, SiGnubash, SiMongodb, SiPostgresql,SiReact, SiTailwindcss } from "react-icons/si"
import { TbBrandGolang, TbBrandJavascript,TbBrandTypescript } from "react-icons/tb"

import InterestSection from "../components/Interests/InterestSection"
import type Interest from "../interfaces/Interest"

import "../assets/styles/animations.css"

const Interests : FC = () => {

  const interests : Interest[] = [
    {
      "title": "Competitive programming",
      "description": "I love solving complex problems as fast as possible: the only context where I tolerate messy code. But when time is over I refactor it.",
      "languages": "Java, Go, (Python)",
      "icons": [
        <FaJava key="Java" />,
        <TbBrandGolang key="Go" />,
        <FaPython key="Python" />
      ],
      "projects": [{ name: "advent-of-code", owner: "Favo02" }, { name: "cloudflight-coding-contest-2023", owner: "Favo02" }]
    },
    {
      "title": "Full stack web development",
      "description": "Keeping up with fast evolving technologies for web development can be hard and time consuming, but the results are worth it. And I like the results.",
      "languages": "Javascript, Typescript, React, Express, Tailwind, (Mongo, Postgres)",
      "icons": [
        <TbBrandJavascript key="Javascript" />,
        <TbBrandTypescript key="Typescript" />,
        <SiReact key="React" />,
        <SiExpress key="Express" />,
        <SiTailwindcss key="Tailwind" />,
        <SiMongodb key="Mongo" />,
        <SiPostgresql key="Postgres" />
      ],
      "projects": [{ name: "favo02.dev", owner: "Favo02" }, { name: "social-network-for-music", owner: "Favo02-unimi" }]
    },
    {
      "title": "Open source software",
      "description": "I like to share open source software I develop, such as GNOME shell extensions or simple utilities for competitive programming.",
      "languages": "Javascript, Java",
      "icons": [
        <FaJava key="Java" />,
        <TbBrandJavascript key="Javascript" />
      ],
      "projects": [{ name: "workspaces-by-open-apps", owner: "Favo02" }, { name: "java-algorithms-and-structures", owner: "Favo02" }]
    },
    {
      "title": "Learning...",
      "description": "I'm always looking forward to learning and practicing new things: currently experimenting with an old PC turned into an Home Server (hosting this!) and Docker. From time to time I love to catch some flags in Security CTFs (process interaction with C and shell injection in x86-64 assembly are my favourites).",
      "languages": "Docker, Bash, C, x86-64",
      "icons": [
        <FaDocker key="docker" />,
        <SiGnubash key="bash" />,
        <IoMdFlag key="ctf" />,
        <SiC key="c" />
      ],
      "projects": [{ name: "docker-compose", owner: "Favo02" }]
    }
  ]

  return (
    <>
      <h4 className="mt-4 text-2xl text-gray-200 text-center">My tech <span className="font-bold bg-gradient-to-r from-gray-400 via-bluegray-600 to-transparent bg-no-repeat bg-[size:100%_15%] bg-[position:0_98%]">interests</span>.</h4>


      <div className="w-10/12 max-w-6xl m-auto mt-12 mb-20 text-gray-200 divide-y-2 divide-bluegray-600/50 divide-dashed  bg-gray-400 bg-opacity-20 rounded-xl backdrop-blur-lg shadow-xl shadow-black">
        {interests.map(i => <InterestSection interest={i} key={i.title} />)}
      </div>
    </>
  )
}

export default Interests
