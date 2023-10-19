import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/mNL6DvP/toyota.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Find the Car of Your Dreams, Right Here
          </h1>
          {/* <p className="mb-5">
            Embark on your car-buying journey at our online marketplace.
            Discover handpicked, quality vehicles tailored to your style. With
            transparent listings and seamless transactions, we make finding your
            perfect ride effortless and enjoyable. Trust in our commitment to
            your satisfaction. Your dream car is just a click away—start your
            engine of possibilities today.
          </p> */}
          <Link to="/register">
            <button className="btn btn-wide btn-outline rounded-sm  text-white">
              {" "}
              Register{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
