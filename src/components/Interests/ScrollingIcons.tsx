import type { FC } from "react"

import "../../assets/styles/animations.css"

interface Props {
  children : React.ReactNode,
  repeat : number,
  delay : boolean,
  position : string
}

const ScrollingIcons : FC<Props> = ({ children, repeat, delay, position }) => {

  const render = []
  for (let i = 0; i < repeat; i++) {
    render.push(children)
  }

  const animation = delay ? "scrolling-animation-delay" : "scrolling-animation"

  return (
    <div className={`${animation} ${position} text-white text-3xl -top-full absolute opacity-0 group-hover:opacity-30 transition-all duration-700`}>
      {render}
    </div>
  )
}

export default ScrollingIcons
