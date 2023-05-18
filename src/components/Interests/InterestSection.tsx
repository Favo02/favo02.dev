import type { FC } from "react"

import InterestProjectExample from "./InterestProjectExample"
import ScrollingIcons from "./ScrollingIcons"

interface props {
  title : string,
  description : string,
  languages : string,
  icons : React.ReactNode[],
  iconsRepeat : number,
  projects : string[]
}

const InterestSection : FC<{interests : props[]}> = ({ interests }) => (
  <>
    {interests.map(i =>
      <div className="relative flex flex-col w-full py-10 text-center overflow-hidden group transition-all duration-700" key={i.title}>
        <h2 className="text-2xl uppercase font-bold">
          <span className="bg-gradient-to-r from-gray-400 to-bluegray-600 bg-no-repeat bg-[size:80%_30%] bg-[position:50%_97%] group-hover:bg-[size:100%_30%] group-hover:bg-[position:0%_97%] transition-all duration-700">{i.title}</span>
        </h2>

        <p className="text-xl w-7/12 m-auto my-6 text-gray-400 group-hover:text-gray-200 transition-all duration-700">{i.description}</p>
        <p className="font-mono text-gray-500">{i.languages}</p>

        <div className="opacity-0 h-0 group-hover:h-80 group-hover:opacity-100 transition-all duration-700 flex justify-center">
          {i.projects.map(p => <InterestProjectExample key={p} name={p} />)}
        </div>

        <ScrollingIcons repeat={i.iconsRepeat} delay={false} position="left-3">
          {i.icons}
        </ScrollingIcons>

        <ScrollingIcons repeat={i.iconsRepeat} delay={true} position="right-3">
          {i.icons}
        </ScrollingIcons>
      </div>
    )}
  </>
)

export default InterestSection
