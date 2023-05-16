import type { FC } from "react"
import { Link } from "react-router-dom"

import OverlappingCards from "../components/Home/OverlappingCards"

const Home : FC = () => {

  const underlineClass = "bg-gradient-to-r from-gray-400 via-bluegray-600 to-transparent bg-no-repeat bg-[size:100%_20%] bg-[position:0_90%]"

  return (
    <div className="w-10/12 max-w-6xl m-auto text-center">
      <div className="mt-14 text-center text-gray-100">

        <h4 className="text-3xl uppercase font-light">Hello, I&apos;m</h4>

        <h4 className="text-5xl mt-6 font-light">
          <Link to="/about"><span className={`text-6xl font-bold ${underlineClass}`}>Luca</span></Link>
          <span className="mx-2"> aka </span>
          <Link to="/projects"><span className={`text-6xl font-mono font-bold ${underlineClass}`}>favo02</span></Link>
        </h4>

        <h4 className="text-2xl mt-6 italic font-light">or should I say <Link to="/imprudenza"><span className={`pr-0.5 font-normal ${underlineClass}`}>imprudenza</span></Link>?</h4>

      </div>

      <div className="text-3xl mt-20">
        <h1 className="text-gray-200">
          <span>Currently studying computer science at </span>
          <Link to="https://en.wikipedia.org/wiki/University_of_Milan" target="_blank">
            <span className={`text-bluegray-100 italic ${underlineClass}`}>unimi</span>
          </Link>
        </h1>
      </div>

      <div className="my-20">
        <h1 className="text-3xl uppercase font-bold mb-10 bg-gradient-to-br from-gray-200 via-bluegray-200 to-bluegray-600 bg-clip-text text-transparent">Find out more</h1>

        <OverlappingCards content={[
          {
            "title": "Projects", "path": "/projects",
            "text": "All my projects: the works I'm proud of (and even the ones I'm not)."
          },
          {
            "title": "Interests", "path": "/interests",
            "text": "My interest in technological field: languages and technologies I am comfortable using."
          },
          {
            "title": "About me", "path": "/about",
            "text": "Who is Luca? Find out more about me in this short biography."
          }
        ]} />
      </div>

    </div>
  )
}

export default Home
