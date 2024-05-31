// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import ServiceDetails from "./ServiceDetails";
const Services = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div className="my-12">
      <h1 className="text-center text-3xl font-semibold mb-12">OUR SERVICES</h1>
      <div className="flex flex-wrap gap-6">
        {service?.slice(0, 3).map((service, index) => (
          <ServiceDetails key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
