import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl rounded">
        <figure className="pl-5">
          <img className="w-48" src="toyota_Axios.jpg" alt="Movie" />
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title"> Toyota Corola </h2>
          <p> Type: Recondition </p>
          <p> Price: 18 Lakh </p>
          <p> Details: The Old Man and the sea </p>
          <div className="card-actions justify-start">
            <Link to="/productdetails">
              <button className="btn btn-sm btn-outline btn-warning rounded-sm">
                {" "}
                Details{" "}
              </button>
            </Link>

            <Link to="/updateproduct">
              <button className="btn btn-sm btn-outline btn-warning rounded-sm">
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
