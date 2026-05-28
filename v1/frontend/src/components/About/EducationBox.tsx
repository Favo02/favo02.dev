import type { FC } from "react"
import { BiLink } from "react-icons/bi"
import { Link } from "react-router-dom"

import type EducationEntry from "../../interfaces/EducationEntry"

const Education : FC<{ title : string, entries : EducationEntry[] }> = ({ title, entries }) => (

  <div className="scroll-mt-40 max-w-4xl m-auto mt-10 pt-6 pb-8 bg-gray-400 bg-opacity-20 rounded-xl backdrop-blur-lg shadow-xl shadow-black">

    <h1 className="text-3xl text-center uppercase font-black bg-gradient-to-br pb-4 from-gray-200 via-bluegray-200 to-bluegray-600 bg-clip-text text-transparent tracking-wider">{title}</h1>

    {entries.map(e =>
      <div key={e.name} className="flex flex-col md:flex-row w-5/6 mx-auto md:w-full mt-6 group text-center">
        <div className="w-full md:w-1/3 md:text-right pr-6 text-bluegray-600 group-hover:text-bluegray-500 opacity-80 italic transition-all duration-700">{e.start}{e.end ? ` - ${e.end}` : ""}</div>
        <Link to={e.link} target="_blank">
          <h1 className="text-xl md:text-left font-bold text-gray-300 group-hover:text-gray-200 transition-all duration-700">
            {e.name}, {e.location}
            <BiLink className="inline -mt-1 ml-1" />
            {e.isCertificate &&
              <span className="text-xs border font-black text-green-600/30 border-green-800/30 rounded-md ml-1 py-0.5 px-2">CERTIFICATE</span>
            }
          </h1>
          <h2 className="text-gray-500 md:text-left group-hover:text-gray-400 transition-all duration-700">{e.description}</h2>
        </Link>
      </div>
    )}

  </div>
)

export default Education
