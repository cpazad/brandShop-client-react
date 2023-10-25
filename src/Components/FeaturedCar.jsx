

const FeaturedCar = () => {
  return (
    <div className="hero py-24  bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-96">
          <h1 className="text-3xl font-bold text-orange-500">
            Discover the All-New Toyota Crown!
          </h1>
          <p className="py-6">
            Experience the all-new Toyota Crown with premium comfort & powerful
            hybrid performance.
          </p>
        </div>
        <div className="aspect-video">
          <iframe
            className="w-96 md:w-[500px] h-48 md:h-full"
            src="https://www.youtube.com/embed/P6VdEuMuIdA"
            title="Discover the All-New Toyota Crown"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCar;
