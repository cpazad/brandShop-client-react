import { FaEye } from "react-icons/fa";
import { BiPencil } from "react-icons/bi";
import { BsTrash3 } from "react-icons/bs";
import { Link } from "react-router-dom";

const CarCard = () => {
  
    return (
    <div>
        <div className="card m-5 card-side shadow-xl rounded bg-white">
      <figure>
        <img src="/toyota_Axios.jpg" alt="Movie" />
      </figure>
      <div className="card-body text-left flex flex-row items-center gap-5">
        <div className="justify-center">
          <h2 className="card-title"> Name: Toyata Axios </h2>
          <p> Brand: Toyota </p>
          <p> Type : Used </p>
          <p> Rating: 6/10 </p>
          <p> Taste: </p>
        </div>
        <div className="card-actions justify-end flex-col">
          <button className="btn bg-amber-500 btn-sm rounded-sm">
            <FaEye />
          </button>
          <Link to={`updateproduct`}>
            <button className="btn bg-slate-300 btn-sm rounded-sm">
              <BiPencil />
            </button>
          </Link>

          <button
            // onClick={() => handleDelete(_id)}
            className="btn bg-red-600 btn-sm rounded-sm"
          >
            <BsTrash3 />
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CarCard