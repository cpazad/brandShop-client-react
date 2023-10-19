import { useEffect, useState } from "react"
import Banner from "../Components/Banner"
import Brands from "../Components/Brands"
import Why from "../Components/Why"
import FeaturedCar from "../Components/FeaturedCar"



const Home = () => {
  const [brands, setBrands] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/product')
    .then(res => res.json())
    .then(data => setBrands(data))
  },[])
  return (
    <div className="bg-base-200 min-h-screen">
      <div>
        <Banner></Banner>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 bg-slate-900 p-10">
       {
        brands.map(brand => <Brands key={brand.id} brand={brand}></Brands>)
       }
      </div>
      <div>
        <FeaturedCar></FeaturedCar>
      </div>
      <div>
        <Why></Why>
      </div>
    </div>
  )
}

export default Home