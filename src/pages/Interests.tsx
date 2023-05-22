import type { FC } from "react"
import { FaJava, FaPython } from "react-icons/fa"
import { SiExpress, SiMongodb, SiPostgresql,SiReact, SiTailwindcss } from "react-icons/si"
import { TbBrandGolang, TbBrandJavascript,TbBrandTypescript } from "react-icons/tb"

import InterestSection from "../components/Interests/InterestSection"

import "../assets/styles/animations.css"

interface Interest {
  title : string,
  description : string,
  languages : string,
  icons : React.ReactNode[],
  projects : string[]
}

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
      "projects": ["advent-of-code", "cloudflight-coding-contest-2023"]
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
      "projects": ["favo02.dev"]
    },
    {
      "title": "Open source software",
      "description": "I like to share open source software I develop, such as GNOME shell extensions or simple utilities for competitive programming.",
      "languages": "Javascript, Java",
      "icons": [
        <FaJava key="Java" />,
        <TbBrandJavascript key="Javascript" />
      ],
      "projects": ["workspaces-by-open-apps", "java-algorithms-and-structures"]
    }
  ]

  return (
    <div className="w-10/12 max-w-6xl m-auto mt-12 mb-20 text-gray-200 divide-y-2 divide-bluegray-600/50 divide-dashed  bg-gray-400 bg-opacity-20 rounded-xl backdrop-blur-lg shadow-xl shadow-black">

      <InterestSection interests={interests} />

    </div>
  )
}

export default Interests
