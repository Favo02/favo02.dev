// temporary fetch from local file
// backend will manage this with a database

import colorsFile from "../utils/colors.json"

interface colors {
  [key : string] : { color : string | null }
}

const colors : colors = colorsFile

const getColor = async (language : string) => {
  return colors[language].color
}

const colorsService = {
  getColor
}

export default colorsService
