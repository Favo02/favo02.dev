import type { FC } from "react"

import ScrollingIcons from "./ScrollingIcons"

interface props {
  title : string,
  description : string,
  languages : string,
  icons : React.ReactNode[],
  iconsRepeat : number
}

const InterestSection : FC<{interests : props[]}> = ({ interests }) => (
  <>
    {interests.map(i =>
      <div className="relative flex flex-col w-full py-10 text-center overflow-hidden group opacity-80 hover:opacity-100 transition-all duration-700" key={i.title}>
        <h2 className="text-2xl uppercase font-bold">
          <span className="bg-gradient-to-r from-gray-400 to-bluegray-600 bg-no-repeat bg-[size:80%_30%] bg-[position:50%_97%]">{i.title}</span>
        </h2>

        <p className="text-xl w-7/12 m-auto my-6">{i.description}</p>
        <p className="font-mono text-gray-500">{i.languages}</p>

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
