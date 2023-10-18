import { Link } from "react-router-dom"

const UpadateProduct = () => {
  const handleUpdateProduct = (event)=> {
    event.preventDefault();


    //Resetting the form
    event.target.reset();

  }
  return (
    <div>
     
    <div className="flex justify-start bg-base-200">
      <Link to="/">
        {" "}
        <button className="btn btn-outline btn-sm m-5 rounded-sm">
          {" "}
          Back to Home{" "}
        </button>
      </Link>
    </div>
    {/* Update Product form */}
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Update Product Details!</h1>
            <p className="py-6 ">
             Provide proper information to add product. Read the form carefully. Please fill up all the field with relevent information
            </p>
          </div>
          <div className="card p-0 flex-shrink-0 w-4/5  shadow-2xl bg-base-100">
            <form onSubmit={handleUpdateProduct} className="card-body  ">
              <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="form-control sm:col-span-3">
                  <label className="label">
                    <span className="label-text"> Name </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Product Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control sm:col-span-3">
                  <label className="label">
                    <span className="label-text"> Product Image </span>
                  </label>
                  <input
                    type="text"
                    name="image"
                    placeholder="Enter product Image Url"
                    className="input input-bordered"
                    required
                  />
                
                </div>
                <div className="form-control sm:col-span-3">
                  <label className="label">
                    <span className="label-text"> Product Type </span>
                  </label>
                  {/* <input
                    type="text"
                    name="type"
                    placeholder="Enter Product type"
                    className="input input-bordered"
                    required
                  /> */}
                  <select name="type" id="type" className=" input input-bordered">
                    <option value="new">New</option>
                    <option value="used">Used</option>
                    <option value="recondition">Recondition</option>
                  </select>
                
                </div>
                <div className="form-control sm:col-span-3">
                  <label className="label">
                    <span className="label-text"> Price </span>
                  </label>
                  <input
                    type="text"
                    name="price"
                    placeholder="Enter Product Price"
                    className="input input-bordered"
                    required
                  />
                
                </div>
                <div className="form-control sm:col-span-3">
                  <label className="label">
                    <span className="label-text"> Rating </span>
                  </label>
                  <input
                    type="text"
                    name="rating"
                    placeholder="Enter Product Rating"
                    className="input input-bordered"
                    required
                  />
                
                </div>
                <div className="form-control sm:col-span-3">
                  <label className="label">
                    <span className="label-text">Details</span>
                  </label>
                  <input
                    type="text"
                    name="details"
                    placeholder="Insert Short Description"
                    className="input input-bordered"
                    required
                  />
                
                </div>
                {/* <div className="form-control sm:col-span-6">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input
                    type="text"
                    name="photo_url"
                    placeholder="Enter Photo URL"
                    className="input input-bordered"
                    required
                  />
                
                </div> */}
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-[#f06426] text-stone-50 hover:text-black"> Add Product </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  )
}

export default UpadateProduct