interface Interest {
  title : string,
  description : string,
  languages : string,
  icons : React.ReactNode[],
  projects : {
    name : string,
    owner : string
  }[]
}

export default Interest
