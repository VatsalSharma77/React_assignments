import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleProductPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let { id } = useParams();
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setIsLoading(true);
    try {
      let res = await fetch(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`
      );
      let finalRes = await res.json();
      setData(finalRes.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }
  return isLoading ? (
    <div data-testid="loading-container">Loading....</div>
  ) : (
    <div data-testid="products-container">
      <div>
        <h3 data-testid="product-brand">{data.brand}</h3>
      </div>
      <div>
        <img
          data-testid="product-image"
          style={{ width: "100px" }}
          src={data.img}
          alt={data.brand}
        />
      </div>
      <div data-testid="product-category">{data.category}</div>

      <div data-testid="product-details">{data.details}</div>
      <div data-testid="product-price">{data.price}</div>
    </div>
  );
}
export default SingleProductPage;
