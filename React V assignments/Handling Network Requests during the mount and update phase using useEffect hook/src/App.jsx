import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { PostItem } from "./components/PostItem";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetchData();
  }, [page]);

  async function fetchData() {
    try {
      setIsLoading(true);
      let res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=2&_page=${page}`
      );
      let data = await res.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }
  return (
    <>
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        <div>
          <PostItem data={data} />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {page==1?null:<button onClick={()=>{
              if(page>1){
                setPage(page - 1)
              }
            }}>Prev</button>}
            <p>{page}</p>
            <button onClick={()=>{setPage(page + 1)}}>Next</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
