const Why = () => {
  return (
    <div className="bg-black sm:p-36 text-white">
        <h2 className="text-4xl pt-10"> Why YourCar? </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-10">
        <div className="text-center flex flex-col justify-center items-center">
          <img className="w-24" src="cart.png" alt="" />
          <h3 className="text-3xl py-3"> Transparent pricing </h3>
          <p> No surprises here. See how much you will pay on cars you like.</p>
        </div>
        <div className="text-center flex flex-col justify-center items-center">
          <img className="w-24" src="express.png" alt="" />
          <h3 className="text-3xl py-3"> Minutes, not hours </h3>
          <p> Time saving tools to help you find the right car in a snap.</p>
        </div>
        <div className="text-center flex flex-col justify-center items-center">
          <img className="w-24" src="car_sale.png" alt="" />
          <h3 className="text-3xl py-3"> Shop your way </h3>
          <p> Your own pace, your own space. Shop online conveniently</p>
        </div>
      </div>
    </div>
  );
};

export default Why;
