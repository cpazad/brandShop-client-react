import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const Product = ({product}) => {
  console.log(product)
  const {_id,brandname,name, image, type, price, rating} = product
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl rounded">
        <figure className="pl-5 w-2/5">
          <img className="w-48" src={image} alt="Movie" />
        </figure>
        <div className="card-body w-3/5 text-left">
          <h2 className="card-title"> {name} </h2>
          <h3 className="text-md font-bold uppercase text-themeorange"> {brandname} </h3>
          <p> Type: {type} </p>
          <p> Price: {price} Lakh </p>
          <p> Rating: {rating}/10 </p>
          {/* <p> Details: {details} </p> */}
          <div className="card-actions justify-start">
            <Link to={`/productdetails/${_id}`}>
              <button className="btn btn-sm btn-outline text-themeorange rounded-sm">
                {" "}
                Details{" "}
              </button>
            </Link>

            <Link to={`/updateproduct/${_id}`}>
              <button className="btn btn-sm btn-outline text-themeorange rounded-sm">
                {" "}
                Update{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
Product.propTypes= {
  product:PropTypes.object
}
