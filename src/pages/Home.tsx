import { FC } from "react"
import { Link } from "react-router-dom"

const Home : FC = () => {

  const underlineClass = "bg-gradient-to-r from-gray-400 via-bluegray-600 to-transparent bg-no-repeat bg-[size:100%_20%] bg-[position:0_90%]"

  return (
    <div className="pt-36 w-10/12 max-w-6xl m-auto text-center">
      <h1 className="text-gray-100 text-4xl font-mono tracking-tighter"><span className="text-bluegray-400">/</span>home</h1>

      <div className="mt-14 text-center text-gray-100">

        <h4 className="text-3xl uppercase font-light">Hello, I&apos;m</h4>

        <h4 className="text-5xl mt-6 font-light"><Link to="/about"><span className={`text-6xl font-bold ${underlineClass}`}>Luca</span></Link> aka <Link to="/projects"><span className={`text-6xl font-mono font-bold ${underlineClass}`}>favo02</span></Link></h4>

        <h4 className="text-2xl mt-6 italic font-light">Or should I say <Link to="/imprudenza"><span className={`pr-0.5 font-normal ${underlineClass}`}>imprudenza</span></Link>?</h4>

      </div>

      <div className="text-3xl mt-20">
        <h1 className="text-gray-100">A computer science student @ <span className={`${underlineClass}`}>unimi</span></h1>
      </div>

      <div className="mt-10 text-bluegray-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id nibh finibus, semper urna sit amet, scelerisque libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean aliquet, tortor vel placerat fringilla, sapien elit dapibus nunc, vitae sollicitudin urna tellus ac turpis. In hac habitasse platea dictumst. Phasellus suscipit luctus dapibus. Vivamus posuere arcu sit amet nisl tempor, eget scelerisque leo bibendum. Nullam felis justo, venenatis eu finibus non, sodales at elit. Sed egestas massa accumsan nisi rhoncus, nec tincidunt justo condimentum. Nam non feugiat lectus.

        Duis ultricies elementum ipsum vitae commodo. Sed ac erat arcu. Donec tristique vitae felis quis lacinia. Sed interdum nisl lacus, eu faucibus ipsum scelerisque eu. Sed sed suscipit erat, vitae blandit ipsum. Aliquam laoreet metus ut nulla volutpat, quis placerat ante posuere. Cras in lacus ut nisl hendrerit consequat in quis risus. Donec vitae imperdiet nunc. Morbi in tortor auctor, pulvinar mi eget, tristique erat.

        Cras ullamcorper urna felis, vel elementum sapien consectetur non. Sed tincidunt orci ut neque facilisis elementum. Vivamus erat mi, molestie vitae aliquet eget, efficitur sit amet tortor. Etiam malesuada, odio in pellentesque tempor, purus nisi scelerisque mi, at elementum felis ligula ac dui. Integer mollis gravida cursus. Sed nisl lacus, tempor nec mollis non, consequat et urna. Cras dignissim feugiat risus, ac gravida enim tempus in. Sed enim sapien, consequat vulputate ultricies non, accumsan vitae elit. Vivamus pulvinar cursus molestie. Donec pulvinar augue eget laoreet auctor. Sed at aliquet nisl. Curabitur sollicitudin rhoncus finibus. Duis pellentesque malesuada sodales. Donec vitae commodo sem.

        Etiam euismod urna elit, eget egestas elit imperdiet eget. Sed in diam vel purus eleifend accumsan quis eget libero. Suspendisse a faucibus sem. Aliquam pretium erat non felis dictum, nec mattis diam lobortis. Aenean ullamcorper eros id lectus tincidunt interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus risus dolor, elementum et sollicitudin nec, luctus sed metus. Quisque porta quam turpis, a eleifend ex suscipit at.

        Quisque imperdiet mi vel nisl pellentesque tincidunt. Phasellus eu purus egestas, accumsan libero ut, volutpat velit. Proin sagittis a velit vitae tristique. Etiam malesuada, sem at aliquet scelerisque, nunc ante fringilla est, vitae ornare dui erat eu nisi. Fusce ultricies urna non ex luctus pretium. Vivamus ac rhoncus lectus, vel efficitur nulla. Praesent orci lacus, varius eget maximus vel, ultricies ut lorem. Maecenas maximus id dui quis cursus. Vestibulum eu placerat nulla. Aenean ac dapibus nisl. Nulla semper neque et eros maximus, ut molestie massa tempus.
      </div>

      <div className="mt-10 text-bluegray-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id nibh finibus, semper urna sit amet, scelerisque libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean aliquet, tortor vel placerat fringilla, sapien elit dapibus nunc, vitae sollicitudin urna tellus ac turpis. In hac habitasse platea dictumst. Phasellus suscipit luctus dapibus. Vivamus posuere arcu sit amet nisl tempor, eget scelerisque leo bibendum. Nullam felis justo, venenatis eu finibus non, sodales at elit. Sed egestas massa accumsan nisi rhoncus, nec tincidunt justo condimentum. Nam non feugiat lectus.

        Duis ultricies elementum ipsum vitae commodo. Sed ac erat arcu. Donec tristique vitae felis quis lacinia. Sed interdum nisl lacus, eu faucibus ipsum scelerisque eu. Sed sed suscipit erat, vitae blandit ipsum. Aliquam laoreet metus ut nulla volutpat, quis placerat ante posuere. Cras in lacus ut nisl hendrerit consequat in quis risus. Donec vitae imperdiet nunc. Morbi in tortor auctor, pulvinar mi eget, tristique erat.

        Cras ullamcorper urna felis, vel elementum sapien consectetur non. Sed tincidunt orci ut neque facilisis elementum. Vivamus erat mi, molestie vitae aliquet eget, efficitur sit amet tortor. Etiam malesuada, odio in pellentesque tempor, purus nisi scelerisque mi, at elementum felis ligula ac dui. Integer mollis gravida cursus. Sed nisl lacus, tempor nec mollis non, consequat et urna. Cras dignissim feugiat risus, ac gravida enim tempus in. Sed enim sapien, consequat vulputate ultricies non, accumsan vitae elit. Vivamus pulvinar cursus molestie. Donec pulvinar augue eget laoreet auctor. Sed at aliquet nisl. Curabitur sollicitudin rhoncus finibus. Duis pellentesque malesuada sodales. Donec vitae commodo sem.

        Etiam euismod urna elit, eget egestas elit imperdiet eget. Sed in diam vel purus eleifend accumsan quis eget libero. Suspendisse a faucibus sem. Aliquam pretium erat non felis dictum, nec mattis diam lobortis. Aenean ullamcorper eros id lectus tincidunt interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus risus dolor, elementum et sollicitudin nec, luctus sed metus. Quisque porta quam turpis, a eleifend ex suscipit at.

        Quisque imperdiet mi vel nisl pellentesque tincidunt. Phasellus eu purus egestas, accumsan libero ut, volutpat velit. Proin sagittis a velit vitae tristique. Etiam malesuada, sem at aliquet scelerisque, nunc ante fringilla est, vitae ornare dui erat eu nisi. Fusce ultricies urna non ex luctus pretium. Vivamus ac rhoncus lectus, vel efficitur nulla. Praesent orci lacus, varius eget maximus vel, ultricies ut lorem. Maecenas maximus id dui quis cursus. Vestibulum eu placerat nulla. Aenean ac dapibus nisl. Nulla semper neque et eros maximus, ut molestie massa tempus.
      </div>
    </div>
  )
}

export default Home
