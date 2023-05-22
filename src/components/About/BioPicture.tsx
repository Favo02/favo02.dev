import type { FC } from "react"

import propic1 from "../../assets/images/about/Propic1.webp"
import propic2 from "../../assets/images/about/Propic2.webp"
import roundtext from "../../assets/images/about/RoundText.webp"

const BioPicture : FC = () => (
  <div
    className="float-right w-80 h-80 relative group rounded-full m-4"
    style={{ shapeOutside: "circle()" }}
  >
    <img className="absolute rounded-full" src={propic1} />
    <img className="absolute rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" src={propic2} />
    <img className="rotate-animation absolute rounded-full opacity-40" src={roundtext} />
  </div>
)

export default BioPicture
