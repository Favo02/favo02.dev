import { FC } from "react"
import { Link } from "react-router-dom"
import ProjectsList from "../components/Projects/ProjectsList"

const Projects : FC = () => {
  return (
    <div className="pt-36 w-10/12 max-w-6xl m-auto">
      <div>
        <h1 className="text-gray-100 text-center text-4xl font-mono tracking-tighter"><span className="text-bluegray-400">/</span>projects</h1>
        <h4 className="mt-4 text-2xl text-gray-200 text-center">Every <span className="font-bold bg-gradient-to-r from-gray-400 via-bluegray-600 to-transparent bg-no-repeat bg-[size:100%_15%] bg-[position:0_98%]">project</span> I have worked on.</h4>
      </div>

      <ProjectsList />

      <div className="text-gray-500 text-center mt-10">
        <div>This page uses <Link to="https://docs.github.com/en/rest" target="_blank" rel="noopener noreferrer" className="underline">Github v3 REST API</Link>.</div>

        <div className="italic mt-2">This page does not include private projects.</div>
        <div className="italic">This page is work in progress.</div>
      </div>
    </div>
  )
}

export default Projects
