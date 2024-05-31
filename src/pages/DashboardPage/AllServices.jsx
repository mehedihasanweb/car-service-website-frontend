import { useEffect, useState } from "react";
import DashboardAllServices from "../../components/dashboard/DashboardAllServices";
import Toast from "../../utils/Toast";
import toast from "react-hot-toast";

const AllServices = () => {
  const [allService, setAllService] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/service/")
      .then((res) => res.json())
      .then((data) => setAllService(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/service/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        const remaining = allService.filter((service) => service._id !== id);
        toast("✅ Service Delete successfully!!");
        return setAllService(remaining);
      });
  };

  return (
    <div>
      <h2 className="text-center font-semibold text-4xl pb-16">ALL SERVICES</h2>
      <div className="flex justify-center items-center gap-12 flex-wrap">
        {allService?.map((service, index) => (
          <DashboardAllServices
            key={index}
            service={service}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <Toast />
    </div>
  );
};

export default AllServices;
