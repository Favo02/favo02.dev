import type { FC } from "react"
import React, { useEffect, useRef,useState } from "react"
import { BsArrowsCollapse, BsArrowsExpand } from "react-icons/bs"
import { Link } from "react-router-dom"

import InterestProjectExample from "./InterestProjectExample"
import LateralIcons from "./LateralIcons"

interface props {
  title : string,
  description : string,
  languages : string,
  icons : React.ReactNode[],
  projects : string[]
}

const InterestSection : FC<{interest : props}> = ({ interest }) => {

  const [isOpen, setOpen] = useState(false)

  const [height, setHeight] = useState<number | undefined>(0)
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (ref) {
      setTimeout(() => {
        setHeight(ref.current?.clientHeight)
      }, 700) // wait for transition (duration 700)
    }
  }, [isOpen])

  return (
    <div
      ref={ref} key={interest.title}
      onClick={() => setOpen(!isOpen)}
      className="cursor-pointer relative flex flex-col w-full py-8 text-center overflow-hidden group transition-all duration-700">

      <h2 className="text-2xl uppercase font-bold">
        <span className="bg-gradient-to-r from-gray-400 to-bluegray-600 bg-no-repeat bg-[size:80%_30%] bg-[position:50%_97%] group-hover:bg-[size:100%_30%] group-hover:bg-[position:0%_97%] transition-all duration-700">{interest.title}</span>
      </h2>

      <p className="text-xl w-7/12 m-auto my-6 text-gray-400 group-hover:text-gray-200 transition-all duration-700">{interest.description}</p>
      <p className="font-mono text-gray-500">{interest.languages}</p>

      <div className={`${isOpen ? "h-[22rem] opacity-100" : "h-0 opacity-0"} transition-all duration-700`}>
        <div className="flex justify-center">
          {interest.projects.map(p => <InterestProjectExample key={p} name={p} />)}
        </div>
        <p className="italic text-gray-600">
          And more... Visit
          <Link to="/projects">
            <span className="font-mono text-gray-400 tracking-tighter mx-2">/projects</span>
          </Link>
          page to view all projects.
        </p>
      </div>

      {isOpen
        ?
        <h5 className="pointer mt-6 text-sm uppercase italic text-gray-500">
            Hide related projects<BsArrowsCollapse className="inline ml-2" />
        </h5>
        :
        <h5 className="pointer mt-6 text-sm uppercase italic text-gray-500">
          Show related projects<BsArrowsExpand className="inline ml-2" />
        </h5>
      }

      <LateralIcons position="left-3" height={height ?? 0}>
        {interest.icons}
      </LateralIcons>

      <LateralIcons position="right-3" height={height ?? 0}>
        {interest.icons}
      </LateralIcons>
    </div>
  )
}

export default InterestSection
