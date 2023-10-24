import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="hero min-h-screen bg-[#f06426]">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-9xl font-extrabold text-white"> 404 </h1>
          <p className="py-6 text-2xl font-bold text-white italic">
            Something Went Wrong
          </p>
          <Link to="/">
          <button className="btn btn-outline text-white"> Go to Home Page</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
