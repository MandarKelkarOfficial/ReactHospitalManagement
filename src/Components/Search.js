
export default function Search() {
 

  return (
  <div className="container mt-3 mb-3 w-100" >
     <form className="d-flex w-100" role="search">
        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-success" type="submit">Search</button>
      </form>
  </div>
  );
}
