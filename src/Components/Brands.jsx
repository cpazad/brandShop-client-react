import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Brands = ({ brand }) => {
  const { _id, brandname, logo } = brand;
  return (
    <>
      <Link to={`/brand/${_id}`}>
        <div className="card p-10 bg-stone-200 rounded-sm flex flex-col justify-center items-center ">
          <figure className="w-24">
            <img className="w-full" src={logo} alt="car" />
          </figure>
          <h3 className="text-2xl font-bold uppercase mt-4"> {brandname} </h3>
        </div>
      </Link>
    </>
  );
};

export default Brands;

Brands.propTypes = {
  brand: PropTypes.object,
};
