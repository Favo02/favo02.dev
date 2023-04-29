interface Repository {
  id : number,
  name : string,
  full_name : string,
  description : string,
  license : string,
  private : boolean,
  fork : boolean,
  language : string,
  created_at : string,
  pushed_at : string,
  svn_url : string
}

export default Repository
