import axios from "axios";
import { useEffect, useState } from "react";

const GetCategoryProducts = (slug: string | string[]) => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?populate=*&filters[category][slug][$eq]=${slug}`;

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await axios(url);
        setResult(res.data.data);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        console.log(error);
      }
    })();
  }, [url]);

  return { result, error, loading };
};

export default GetCategoryProducts;
