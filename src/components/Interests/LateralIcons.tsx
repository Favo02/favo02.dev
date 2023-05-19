import type { FC } from "react"

import "../../assets/styles/animations.css"

interface Props {
  children : React.ReactNode[],
  position : string,
  height : number
}

const LateralIcons : FC<Props> = ({ children, position, height }) => {

  const ICON_HEIGHT = 30
  const CHILDREN_HEIGHT = ICON_HEIGHT * children.length
  const CARD_HEIGHT = 288

  // number of icons:
  //  ((folded component height + card height) / children height (sigle icon * length)) + one spare
  const repeat = ((height + CARD_HEIGHT) / CHILDREN_HEIGHT) + 1

  const render = []
  for (let i = 0; i < repeat; i++) {
    render.push(children)
  }

  return (
    <div className={`${position} bounce-animation text-white text-3xl absolute -top-5 opacity-0 group-hover:opacity-20 transition-all duration-700`}>
      {render}
    </div>
  )
}

export default LateralIcons
