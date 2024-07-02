import { ResultFilterType } from "@/types/filter";
import axios from "axios";
import { useEffect, useState } from "react";

const GetProductFileld = () => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/content-type-builder/content-types/api::product.product`;

  const [result, setResult] = useState<ResultFilterType | null>(null);
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
      }
    })();
  }, [url]);

  return { result, error, loading };
};

export default GetProductFileld;
