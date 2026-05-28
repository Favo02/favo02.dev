import type { FC } from "react"
import { Link } from "react-router-dom"

import "../assets/styles/animations.css"

const Interests : FC = () => (
  <>
    <h4 className="mt-4 text-2xl text-gray-200 text-center">My tech <span className="font-bold bg-gradient-to-r from-gray-400 via-bluegray-600 to-transparent bg-no-repeat bg-[size:100%_15%] bg-[position:0_98%]">interests</span>.</h4>

    <div className="scroll-mt-40 max-w-4xl m-auto mt-10 px-20 py-14 bg-gray-400 bg-opacity-20 rounded-xl backdrop-blur-lg shadow-xl shadow-black">

      <h4 className="text-2xl text-gray-200 text-center">This page needs a <span className="font-bold bg-gradient-to-r from-gray-400 via-bluegray-600 to-transparent bg-no-repeat bg-[size:100%_15%] bg-[position:0_98%]">major update</span>. As soon as I find some <i>willpower</i> to write some <i>Typescript</i>, I&apos;ll fix it.</h4>

      <h4 className="mt-4 text-2xl text-gray-200 text-center">Meanwhile you can check the <span className="font-bold bg-gradient-to-r from-gray-400 via-bluegray-600 to-transparent bg-no-repeat bg-[size:100%_15%] bg-[position:0_98%]"><Link to="https://github.com/Favo02" target="_blank">README of my GitHub profile</Link></span>, it is pretty up to date.</h4>

    </div>
  </>
)

export default Interests
