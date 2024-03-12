import { useContext, useEffect, useState } from "react";
import {authContext} from "../Context/AuthContext"
import ProductsTable from "../Components/ProductsTable";



function Dashboard() {
  let {logoutUser,authState} = useContext(authContext);
  const [data,setData] = useState([]);

  useEffect(()=>{
    fetchData();
  },[]);

  async function fetchData(){
    try {
      let res = await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products');
      let finalRes = await res.json();
      console.log(finalRes.data);
      setData(finalRes.data);
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={logoutUser}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{authState.token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Products table */}
        {<ProductsTable data={data}/>}
      </div>
    </div>
  );
}

export default Dashboard;
