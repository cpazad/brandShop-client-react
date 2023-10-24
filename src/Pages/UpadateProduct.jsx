import { Link, useLoaderData } from "react-router-dom"
import Swal from "sweetalert2";

const UpadateProduct = () => {
  const car = useLoaderData()
  const {_id, name, brandname, logo, image, type, price, rating, details } = car
  
  const handleUpdateProduct = (event)=> {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const brandname = form.brandname.value;
    const logo = form.logo.value;
    const image = form.image.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const details = form.details.value;
    const updateProduct = { name, brandname, logo, image, type, price, rating, details };
    fetch(`https://brand-shop-server-eknwej4dk-azadur-rahmans-projects.vercel.app/product/${_id}`,{
      method:'PUT',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(updateProduct)
    })
    .then(res =>res.json())
    .then(data => {
      console.log(data)
      if(data.modifiedCount>0) {
        Swal.fire({
          title: 'Success!',
          text: 'Coffee updated Successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        
      }
     
    })

    //Resetting the form
    // event.target.reset();

  }
// puting the image links to varibale
  const toyota = "https://i.ibb.co/HN5JTXD/toyota-new.png";
  const mitsubishi = "https://i.ibb.co/DCmJpSf/mitsubishi.png";
  const volvo = "https://i.ibb.co/CPVGL2h/volvo.png";
  const bmw = "https://i.ibb.co/nm1q3XM/bmw.png";
  const nissan = "https://i.ibb.co/Cb3BDQx/nissan-new.png";
  const honda = "https://i.ibb.co/t36Rfww/honda.png";
//---------------------------


  return (
    <div>
     {/* Go to home button */}
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
              <h1 className="text-3xl font-bold">Update Product Details!: {name}</h1>
              <p className="py-6 ">
              Provide proper information to add product. Read the form carefully. Please fill up all the field with relevent information
              </p>
            </div>
            <div className="card p-0 flex-shrink-0 w-4/5  shadow-2xl bg-base-100">
              <form onSubmit={handleUpdateProduct} className="card-body  ">
                <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="form-control sm:col-span-3">
                    <label className="label">
                      <span className="label-text"> Brand Name </span>
                    </label>

                    <select
                      name="brandname"
                      defaultValue={brandname}
                      id="brandname"
                      className=" input input-bordered"
                    >
                      <option value="toyota">Toyota</option>
                      <option value="mitsubishi"> Mitsubishi </option>
                      <option value="volvo">Volvo</option>
                      <option value="BMW">BMW</option>
                      <option value="Nissan">Nissan</option>
                      <option value="honda">Honda</option>
                    </select>
                  </div>
                  <div className="form-control sm:col-span-3">
                    <label className="label">
                      <span className="label-text"> Brand Logo </span>
                    </label>

                    <select
                      name="logo"
                      defaultValue={logo}
                      id="brandlogo"
                      className=" input input-bordered"
                    >
                      <option value={toyota}>Toyota</option>
                      <option value={mitsubishi}> Mitsubishi </option>
                      <option value={volvo}>Volvo</option>
                      <option value={bmw}>BMW</option>
                      <option value={nissan}>Nissan</option>
                      <option value={honda}>Honda</option>
                    </select>
                  </div>
                  <div className="form-control sm:col-span-3">
                    <label className="label">
                      <span className="label-text"> Name </span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      defaultValue={name}
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
                      defaultValue={image}
                      placeholder="Enter product Image Url"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control sm:col-span-3">
                    <label className="label">
                      <span className="label-text"> Product Type </span>
                    </label>
                   
                    <select
                      name="type"
                      defaultValue={type}
                      id="type"
                      className=" input input-bordered"
                    >
                      <option value="new">New</option>
                      <option value="used">Used</option>
                      <option value="recondition">Recondition</option>
                    </select>
                  </div>
                  <div className="form-control sm:col-span-3">
                    <label className="label">
                      <span className="label-text"> Price (in lakh) </span>
                    </label>
                    <input
                      type="text"
                      name="price"
                      defaultValue={price}
                      placeholder="Enter Product Price in lakh"
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
                      defaultValue={rating}
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
                      defaultValue={details}
                      placeholder="Insert Short Description"
                      className="input input-bordered"
                      required
                    />
                  </div>
               
                </div>

                <div className="form-control mt-6">
                  <button className="btn bg-[#f06426] text-stone-50 hover:text-black">
                    {" "}
                    Update Product{" "}
                  </button>
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