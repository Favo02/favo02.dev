import type { FC } from "react"

import Biography from "../components/About/Biography"
import EducationBox from "../components/About/EducationBox"
import type EducationEntry from "../interfaces/EducationEntry"

import "../assets/styles/animations.css"

const experience : EducationEntry[] = [
  {
    start: "Feb 2024",
    end: "May 2024",
    name: "Programming Tutor",
    location: "Università degli studi di Milano",
    description: "Tutor for \"Programmazione I\" course (in Golang)",
    link: "https://mameli.docenti.di.unimi.it/pls-tutoring/wiki/WikiStart"
  }
]

const education : EducationEntry[] = [
  {
    start: "2021",
    end: "present",
    name: "Università degli studi di Milano",
    location: "Milan",
    description: "Bachelor in computer science (triennale informatica)",
    link: "https://www.unimi.it/en/education/computer-science"
  },
  {
    start: "2016",
    end: "2021",
    name: "ITIS Cannizzaro",
    location: "Rho",
    description: "High school in computer science (ITIS indirizzo informatica)",
    link: "https://www.itiscannizzaro.edu.it/pagine/-informatica"
  }
]

const certificates : EducationEntry[] = [
  {
    start: "2022",
    name: "FullStackOpen course",
    location: "Online",
    description: "University of Helsinki modern Full Stack Web Development course",
    link: "https://fullstackopen.com/en",
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
    name: "English B2 First qualification",
    location: "Milan",
    description: "Cambridge English B2 qualification",
    link: "https://www.cambridgeenglish.org/exams-and-tests/first",
    isCertificate: true
  }
]

const About : FC = () => (
  <div className="w-10/12 max-w-5xl m-auto">
    <div className="text-gray-300 relative mt-10">
      <Biography />

      <h3 className="text-xl italic text-gray-400 text-center mt-8 font-light">You can find my <span className="font-bold">contact information</span> and <span className="font-bold">socials</span> in the footer of every page.</h3>
    </div>

    <EducationBox title="Experience" entries={experience} />

    <EducationBox title="Education" entries={education} />

    <EducationBox title="Certificates" entries={certificates} />

    <h3 className="italic text-gray-400 text-center mt-8 font-light">My <span className="font-bold">Curriculum Vitae</span> and <span className="font-bold">Certificates</span> are available upon request. Contact me.</h3>

  </div>
)

export default About
