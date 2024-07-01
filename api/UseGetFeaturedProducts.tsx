import { useEffect, useState } from "react";
import axios from "axios";

const UseGetFeaturedProducts = () => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[isFeatured][$eq]=true&populate=*`;
  console.log("URL", url);

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res: any = await axios(url);
        setResult(res.data.data);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { loading, result, error };
};

export default UseGetFeaturedProducts;
