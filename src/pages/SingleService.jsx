import { useLoaderData } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleService = () => {
  const data = useLoaderData();
  console.log(data);

  const { img, facility, description, price, title } = data;

  return (
    <div className="md:h-[600px] grid grid-cols-1 md:grid-cols-2 gap-12  my-16">
      <figure>
        <img src={img} alt="Movie" className="w-full h-3/4 rounded-xl" />
      </figure>
      <div>
        <h2 className="text-3xl font-semibold pb-4">{title}</h2>
        <p className="text-xl font-semibold pb-4">Price: {price}</p>
        <p className="text-xl font-semibold pb-4">{description}</p>
        {facility?.map((item) => (
          <li className="text-xl font-semibold" key={item.name}>
            {item.name}
          </li>
        ))}
      </div>
    </div>
  );
};

export default SingleService;
