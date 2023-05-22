import type { FC } from "react"

import Biography from "../components/About/Biography"
import Education from "../components/About/Education"

import "../assets/styles/animations.css"

const About : FC = () => (
  <div className="w-10/12 max-w-5xl m-auto">
    <div className="text-gray-300 relative mt-10">
      <Biography />
    </div>

    <div className="scroll-mt-40	max-w-4xl m-auto mt-10 pt-6 pb-8 bg-gray-400 bg-opacity-20 rounded-xl backdrop-blur-lg shadow-xl shadow-black">
      <h1 className="text-3xl text-center uppercase font-black bg-gradient-to-br pb-4 from-gray-200 via-bluegray-200 to-bluegray-600 bg-clip-text text-transparent tracking-wider">Education</h1>

      <Education />

      <h3 className="italic text-gray-400 text-center mt-8 font-light">My <span className="font-bold">Curriculum Vitae</span> and <span className="font-bold">Certificates</span> are available upon request. Contact me.</h3>
    </div>

    {/* TODO Socials */}

  </div>
)

export default About
