import useImage from "../../hooks/useImage"

import Loading from "./Loading"

interface Props {
  fileName : string,
  alt : string,
  className ?: string
}

const DynamicImage = ({ fileName, alt, className } : Props) => {
  const { loading, image } = useImage(fileName)

  if (loading) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-black/80">
        <Loading />
      </div>
    )
  }

  return (
    <img
      className={className}
      src={image ?? undefined}
      alt={alt}
    />
  )
}

export default DynamicImage
