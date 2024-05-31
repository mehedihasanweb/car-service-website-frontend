import banner from "../../../public/images/banner/1.jpg";

const Banner = () => {
  return (
    <div
      className="hero min-h-[600px] mt-12"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Welcome To Our Service Center
          </h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn bg-blue-600 text-white border-none">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
