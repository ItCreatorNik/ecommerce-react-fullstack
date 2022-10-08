import { useEffect } from "react";
import { Product } from "../../components/product/Product"
import { Slider } from "../../components/slider/Slider"

export const Home = () => {
  const url = window.location.href;

  useEffect(() => {
    const scrollToProducts = () => {
      if (url.includes("#products")) {
        window.scrollTo({
          top: 730,
          behavior: "smooth",
        });
        return;
      }
    };
    scrollToProducts();
  }, [url]);

  return (
    <div>
      <Slider />
      <Product/>
    </div>
  )
}
