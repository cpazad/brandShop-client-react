import { Link } from "react-router-dom"


const AddProduct = () => {
  
  const handleAddProduct = (event)=> {
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
      {/* Add Product form */}
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col">
            <div className="text-center">
              <h1 className="text-3xl font-bold">Add New Product!</h1>
              <p className="py-6 ">
               Provide proper information to add product. Read the form carefully. Please fill up all the field with relevent information
              </p>
            </div>
            <div className="card p-0 flex-shrink-0 w-4/5  shadow-2xl bg-base-100">
              <form onSubmit={handleAddProduct} className="card-body  ">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="form-control sm:col-span-3">
                    <label className="label">
                      <span className="label-text"> Name </span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Coffee Name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control sm:col-span-3">
                    <label className="label">
                      <span className="label-text">Chef</span>
                    </label>
                    <input
                      type="text"
                      name="chef"
                      placeholder="Enter Coffee Chef"
                      className="input input-bordered"
                      required
                    />
                  
                  </div>
                  <div className="form-control sm:col-span-3">
                    <label className="label">
                      <span className="label-text">Supplier</span>
                    </label>
                    <input
                      type="text"
                      name="supplier"
                      placeholder="Enter Coffee Supplifer"
                      className="input input-bordered"
                      required
                    />
                  
                  </div>
                  <div className="form-control sm:col-span-3">
                    <label className="label">
                      <span className="label-text">Taste</span>
                    </label>
                    <input
                      type="text"
                      name="taste"
                      placeholder="Enter Coffee Taste"
                      className="input input-bordered"
                      required
                    />
                  
                  </div>
                  <div className="form-control sm:col-span-3">
                    <label className="label">
                      <span className="label-text"> Category </span>
                    </label>
                    <input
                      type="text"
                      name="category"
                      placeholder="Enter coffee category"
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
                      placeholder="Enter Coffee Details"
                      className="input input-bordered"
                      required
                    />
                  
                  </div>
                  <div className="form-control sm:col-span-6">
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
                  
                  </div>
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

export default AddProduct