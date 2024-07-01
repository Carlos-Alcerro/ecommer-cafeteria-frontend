import axios from "axios";
import { useEffect, useState } from "react";

const GetProductSlug = (slug: string | string[]) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[slug][$eq]=${slug}&populate=*`;

  useEffect(() => {
    (async () => {
      try {
        const res = await axios(url);
        setResult(res.data.data);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        console.log(error);
        setLoading(false);
      }
    })();
  }, [url]);

  return { result, loading, error };
};

export default GetProductSlug;