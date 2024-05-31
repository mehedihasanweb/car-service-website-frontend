/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const DashboardAllServices = ({ service, handleDelete }) => {
  const { title, _id, img, price, description } = service;

  return (
    <div className="card w-96 md:h-[500px] bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-xl">Price: {price}</p>
        <p>{description?.slice(0, 100)}...</p>
        <div className="card-actions justify-end">
          <button>
            <Link to={`/service/${_id}`} className="btn bg-blue-600 text-white">
              SEE DETAILS
            </Link>
          </button>
          <button>
            <Link
              to={`/dashboard/edit-page/${_id}`}
              className="btn bg-blue-500 text-white"
            >
              EDIT
            </Link>
          </button>
          <div>
            <button
              className="btn bg-red-600 text-white"
              onClick={() => handleDelete(_id)}
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAllServices;
