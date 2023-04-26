import { FC } from "react"

const Projects: FC = () => {
  return (
    <div className="pt-36">
      <div>
        <h1 className="text-gray-200 text-center text-3xl font-bold">Featured <span className="uppercase font-light bg-gradient-to-r from-gray-400 via-bluegray-600 to-transparent bg-no-repeat bg-[size:100%_20%] bg-[position:0_98%]">projects</span></h1>
      </div>

      <div>
        <h1 className="text-gray-200 text-center text-3xl font-bold">Other <span className="uppercase font-light bg-gradient-to-r from-gray-400 via-bluegray-600 to-transparent bg-no-repeat bg-[size:100%_20%] bg-[position:0_98%]">projects</span></h1>
      </div>
    </div>
  )
}

export default Projects
