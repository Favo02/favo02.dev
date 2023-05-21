import type { FC } from "react"
import { BiLink } from "react-icons/bi"
import { Link } from "react-router-dom"

interface Education {
  start : string,
  end ?: string,
  name : string,
  location : string,
  description : string,
  link : string,
  isCertificate : boolean
}

const Education : FC = () => {

  const education : Education[] = [
    {
      start: "2016",
      end: "2021",
      name: "ITIS Cannizzaro",
      location: "Rho",
      description: "High school in computer science (ITIS indirizzo informatica)",
      link: "https://www.itiscannizzaro.edu.it/pagine/-informatica",
      isCertificate: false
    },
    {
      start: "2021",
      name: "English B2 First qualification",
      location: "Milan",
      description: "Cambridge English B2 qualification",
      link: "https://www.cambridgeenglish.org/exams-and-tests/first",
      isCertificate: true
    },
    {
      start: "2021",
      name: "Elements of AI course",
      location: "Online",
      description: "MinnaLearn and University of Helsinki artificial intelligence course",
      link: "https://www.elementsofai.com",
      isCertificate: true
    },
    {
      start: "2021",
      end: "present",
      name: "Università degli studi di Milano",
      location: "Milan",
      description: "Bachelor in computer science (triennale informatica)",
      link: "https://www.unimi.it/en/education/computer-science",
      isCertificate: false
    },
    {
      start: "2022",
      name: "FullStackOpen course",
      location: "Online",
      description: "University of Helsinki modern Full Stack Web Development course",
      link: "https://fullstackopen.com/en",
      isCertificate: true
    }
  ]

  return (
    <>
      {education.map(e =>
        <div key={e.name} className="flex w-full mt-6 group">
          <div className="w-1/3 text-right pr-6 text-bluegray-600 group-hover:text-bluegray-500 opacity-80 italic transition-all duration-700">{e.start}{e.end ? ` - ${e.end}` : ""}</div>
          <Link to={e.link} target="_blank">
            <h1 className="text-xl font-bold text-gray-300 group-hover:text-gray-200 transition-all duration-700">
              {e.name}, {e.location}
              <BiLink className="inline -mt-1 ml-1" />
              {e.isCertificate &&
                <span className="text-xs border font-black text-green-600/30 border-green-800/30 rounded-md ml-1 py-0.5 px-2">CERTIFICATE</span>
              }
            </h1>
            <h2 className="text-gray-500 group-hover:text-gray-400 transition-all duration-700">{e.description}</h2>
          </Link>
        </div>
      )}
    </>
  )
}

export default Education
