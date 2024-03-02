import { useEffect, useState } from "react"

const useImage  = (fileName : string) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [image, setImage] = useState(null)

  useEffect(() => {
    const fetchImage = async () => {
      setLoading(true)

      const response = await import(`../assets/images/${fileName}`)
      setImage(response.default)

      setLoading(false)
    }

    fetchImage()
  }, [fileName])

  return {
    loading,
    image
  }
}

export default useImage
