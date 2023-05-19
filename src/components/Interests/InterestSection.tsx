import type { FC } from "react"
import React, { useEffect, useRef,useState } from "react"
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

const InterestSection : FC<{interests : props[]}> = ({ interests }) => {

  const [height, setHeight] = useState<number | undefined>(0)
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (ref) {
      setHeight(ref.current?.clientHeight)
    }
  }, [])

  return (
    <>
      {interests.map(i =>
        <div
          ref={ref} key={i.title}
          className="relative flex flex-col w-full py-10 text-center overflow-hidden group transition-all duration-700">
          <h2 className="text-2xl uppercase font-bold">
            <span className="bg-gradient-to-r from-gray-400 to-bluegray-600 bg-no-repeat bg-[size:80%_30%] bg-[position:50%_97%] group-hover:bg-[size:100%_30%] group-hover:bg-[position:0%_97%] transition-all duration-700">{i.title}</span>
          </h2>

          <p className="text-xl w-7/12 m-auto my-6 text-gray-400 group-hover:text-gray-200 transition-all duration-700">{i.description}</p>
          <p className="font-mono text-gray-500">{i.languages}</p>

          <div className="opacity-0 h-0 group-hover:h-[22rem] group-hover:opacity-100 transition-all duration-700">
            <div className="flex justify-center">
              {i.projects.map(p => <InterestProjectExample key={p} name={p} />)}
            </div>
            <p className="italic text-gray-600">
              And more... Visit
              <Link to="/projects">
                <span className="font-mono text-gray-400 tracking-tighter mx-2">/projects</span>
              </Link>
              page to view all projects.
            </p>
          </div>

          <LateralIcons position="left-3" height={height ?? 0}>
            {i.icons}
          </LateralIcons>

          <LateralIcons position="right-3" height={height ?? 0}>
            {i.icons}
          </LateralIcons>
        </div>
      )}
    </>
  )
}

export default InterestSection
