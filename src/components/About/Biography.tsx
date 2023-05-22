import type { FC } from "react"
import { Link } from "react-router-dom"

import BioPicture from "./BioPicture"

// underline
const U : FC<{ children : React.ReactNode}> = ({ children }) => (
  <span className="underline decoration-dotted underline-offset-4">{children}</span>
)

// highlight
const H : FC<{ children : React.ReactNode}> = ({ children }) => (
  <span className="font-black bg-gradient-to-r from-bluegray-100 to-bluegray-400 bg-no-repeat bg-[size:100%_90%] bg-[position:0_100%] bg-clip-text text-transparent">{children}</span>
)

// italic
const I : FC<{ children : React.ReactNode}> = ({ children }) => (
  <span className="italic">{children}</span>
)

// darker
const D : FC<{ children : React.ReactNode}> = ({ children }) => (
  <span className="opacity-70">{children}</span>
)

const Biography : FC = () => {

  const calculateAge = (birthday : Date) => {
    const ageDifMs = Date.now() - birthday.getTime()
    const ageDate = new Date(ageDifMs)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }

  return (
    <div className="text-lg text-gray-300/90">
      <span className="my-3 block">
        Hello, I am <H>Luca Favini</H>, but my friends call me <H>Favo</H>. I am a {calculateAge(new Date("August 25, 2002"))}-year-old guy living <i>(near)</i> <H>Milan, Italy</H>.
      </span>
      <BioPicture />
      <span>
        My educational background is entirely centered around <H>computer science</H>, which I am currently studying at <H>Università degli studi di Milano</H>. Currently, my main focus is on <H>continuous learning</H> and <H>practical application</H> of new technologies across various domains, including <I>web development</I>, <I>complex algorithms</I>, <I>dockerization</I> and <I>networking</I>. Find out more about my <Link to="/interests"><H>interests</H></Link> in the <Link to="/interests"><U>dedicated page</U></Link>.
      </span>

      <span className="block my-3">
        I also engage in activities unrelated to computers. I have a strong passion for playing basically <H>any sport</H>, particularly <I>football</I> and <I>ping pong</I>. However, I must admit that my <H>competitive nature</H> and desire for <H>precision</H> come into play: whether it&apos;s a casual or competitive game, I always strive to achieve victory and excel in every endeavor I pursue.
        Another thing I really enjoy is pushing my physical limits through activities such as running, cycling or hiking <I><D>(mountain &gt; seaside)</D></I>.
      </span>

      <span>
        Returning to computers: I consider myself a decent <H>competitive gamer</H>, competing under the alias of <I><H>imprudenza</H></I>. In the past, I competed in <I>Minecraft</I> <span title="ClanWar BedWars, 4v4 on PigParty or GommeHD"><U>CWBW</U></span>, becoming <span title="PigParty BedWars league, 4v4 on PigParty"><I><D><U>2018 Italian Champion</U></D></I></span> with <I><D>Rebirth</D></I>. In recent years, I transitioned to <I>Rainbow Six Siege</I>, where I secured second place in the <Link to="https://liquipedia.net/rainbowsix/PG_Nationals/2022/BeSerious/Spring" target="_blank" title="BeSerious Spring 2022"><I><D><U>2022 Italian Second Division</U></D></I></Link> with <I><D>P11</D></I>. Due to time constraints, my involvement in competitive gaming has reduced. However, I still occasionally participate in competitive tournaments for fun.
      </span>

      <span className="block my-3">
        <I>Last but not least:</I> you can recognize me IRL by the <Link to="https://upload.wikimedia.org/wikipedia/en/2/26/Papasmurf1.jpg" target="_blank"><U>smurf</U></Link> attached to my backpack.
      </span>
    </div>
  )
}

export default Biography
