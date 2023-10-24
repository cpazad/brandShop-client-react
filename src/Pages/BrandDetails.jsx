import { useParams } from "react-router-dom";
import Product from "../Components/Product";
import { useEffect, useState } from "react";
import Slider from "../Components/Slider";

const BrandDetails = () => {
  const brandnames = useParams();
  const brandname = brandnames;
  console.log('Brandname is ',typeof brandname)
  console.log("What?", brandname);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://brand-shop-server-eknwej4dk-azadur-rahmans-projects.vercel.app/product")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const brandProducts = data.filter((product) => {
          // console.log("Filtering for:", typeof brandname);
          // console.log("Product brand:", typeof product.brandname);
          return product.brandname === brandname;
        });
        console.log("filtered products", brandProducts);
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products: ", error);
      });
  }, []);

  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }

  return (
    <div>
    <Slider product={products}></Slider>

      {/* product Cards*/}
      <div>
        <p>Product No: {products.length}</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-10 bg-stone-100">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default BrandDetails;
