import { Link } from "react-router-dom";

const ProductDetails = () => {
  return (
    <div className="p-10">
      <div className="card lg:card-side bg-base-100 shadow-xl rounded-sm">
        <figure>
          <img
            src="/toyota_Axios.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body w-1/2 ">
          <div className="text-left">

          <h2 className="card-title "> Model Name </h2>
          <h3 className="text-md font-bold uppercase text-themeorange"> brandname </h3>
          <p className="text-left">Click the button to listen on Spotiwhy app.</p>
          <p> Type: </p>
          <p> Price: Lakh </p>
          <p> Rating: /10 </p>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus tempora eos sequi reiciendis? Esse ducimus, eaque voluptas nisi repudiandae a similique? Maiores provident excepturi modi tempora at quasi qui illum voluptates consequatur atque praesentium a commodi adipisci pariatur laudantium placeat consectetur velit facere ex, veniam officia dolore! Laudantium necessitatibus eligendi quibusdam molestias dolorum fugiat dicta aliquid, facere earum in, possimus ipsam delectus consequuntur eius? Soluta error maiores possimus est tempore nemo vel voluptate! Aliquam possimus mollitia iure cum, esse porro unde voluptatem soluta dolorum velit reiciendis, repudiandae sed ea modi numquam sint cumque accusamus non vitae id, nesciunt similique? </p>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/mycart`}>

            <button className="btn bg-themeorange text-white hover:text-black rounded-sm">Add to Cart</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
