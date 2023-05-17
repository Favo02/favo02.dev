import type { FC } from "react"
import { MdKeyboardDoubleArrowRight } from "react-icons/md"
import { Link } from "react-router-dom"

interface content {
  title : string,
  path : string,
  text : string
}

const OverlappingCards : FC<{content : content[]}> = ({ content }) => (
  <div className="flex justify-center max-w-6xl m-auto">
    {content.map(c => <Card key={c.title} c={c} />)}
  </div>
)

const Card : FC<{ c : content }> = ({ c }) => (
  <div className="flex flex-col relative h-72 w-full bg-gray-400 bg-opacity-20 backdrop-blur-lg rounded-xl -ml-12 first:ml-0 shadow-xl shadow-black hover:-translate-y-5 group/card left-0 peer peer-hover:left-10 transition-all duration-700">
    <h3 className="basis-1/6 text-2xl font-bold text-gray-100 ml-5 mt-5">{c.title}</h3>

    <div className="basis-1/6 relative mx-auto max-h-1 w-5/6">
      <div className="absolute w-full h-full bg-gray-700" />
      <div className="absolute w-0 h-full bg-gradient-to-r from-bluegray-600 to-gray-200 group-hover/card:w-full transition-all duration-700" />
    </div>

    <h4 className="basis-3/6 p-7 px-10 text-lg text-gray-400 group-hover/card:text-bluegray-400 transition-all duration-700">{c.text}</h4>

    <Link to={c.path} className="w-5/6 mx-auto px-4 py-2 rounded-lg group-hover/card:border-4 border-gray-300 hover:border-bluegray-400 transition-all duration-700 group/button">
      <h3 className="inline font-mono text-gray-300 group-hover/button:text-bluegray-300 transition-all duration-700">{c.path}</h3>
      <MdKeyboardDoubleArrowRight className="inline ml-0 w-0 group-hover/card:w-4 group-hover/card:ml-2 text-gray-300 group-hover/button:text-bluegray-300 transition-all duration-700" />
    </Link>
  </div>
)

export default OverlappingCards
