import { useEffect, useState } from "react";

const Loader = () => {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=20`
        );
        const json = await response.json();
        setData((pre) => [...pre, ...json]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

    const handleScroll = (e) => {
      const scrollHeight = e.target.documentElement.scrollHeight;
      const currentHeight =
        e.target.documentElement.scrollTop + window.innerHeight;
      if (currentHeight + 1 >= scrollHeight) {
        setOffset(offset + 5);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return data;
};

export default Loader;
