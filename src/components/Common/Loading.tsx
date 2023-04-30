import { FC } from "react"
import "../../assets/styles/animations.css"

const Loading : FC = () => {
  return (
    <div className="loading-animation w-8 h-8 rounded-full inline-block relative border-2 border-solid border-gray-100 box-border">
      <div className="box-border absolute left-1 top-1 border-2 border-bluegray-500 w-2 h-2 rounded-full"/>
    </div>
  )
}

export default Loading
