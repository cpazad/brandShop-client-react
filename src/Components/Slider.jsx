const Slider = () => {

  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          {/* <img
            src="womanrun.jpg"
            className="w-full"
          /> */}
          {/* Hero Card */}
          <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <img src="/toyota_Axios.jpg" className="max-w-sm rounded-lg shadow-2xl" />
              <div className="w-96">
                <h1 className="text-5xl font-bold"> Toyota </h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn bg-themeorange text-white hover:text-black rounded-sm">Get Started</button>
              </div>
            </div>
          </div>
          {/* Hero card Ends */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src="/lancer.jpg" className="max-w-lg rounded-lg shadow-2xl" />
              <div className="w-96">
                <h1 className="text-5xl font-bold"> Mitsubishi </h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn bg-themeorange text-white hover:text-black rounded-sm">Get Started</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <img src="/xtrail.png" className="max-w-sm rounded-lg shadow-2xl" />
              <div className="w-96">
                <h1 className="text-5xl font-bold"> Honda </h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn bg-themeorange text-white hover:text-black rounded-sm">Get Started</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <img src="/toyota_Axios.jpg" className="max-w-sm rounded-lg shadow-2xl" />
              <div className="w-96">
                <h1 className="text-5xl font-bold"> Car </h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn bg-themeorange text-white hover:text-black rounded-sm">Get Started</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
