
import Slider from '../Components/Slider'
import Product from '../Components/Product'

const Test = () => {
  return (
    <div>
        <Slider></Slider>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 p-10 bg-slate-900'>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
        </div>
    </div>
  )
}

export default Test