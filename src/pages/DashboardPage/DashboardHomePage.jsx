import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";

const DashboardHomePage = () => {
  const { user } = useAuth();
  const { photoURL } = user;
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user]);
  console.log(userInfo);

  return (
    <div>
      <h2 className="text-4xl text-center font-semibold">User Profile</h2>
      <div className="flex flex-col items-center justify-center mt-12 ">
        <img
          src={photoURL}
          alt="user_photo"
          className="w-[100px] h-[100px] rounded-md mb-6"
        />
        <h2 className="text-2xl ">Name: {userInfo?.name}</h2>
        <p className="text-xl py-3">Email: {userInfo?.email}</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
          accusamus dolore nesciunt magnam dolorum hic,
          <br /> reiciendis nam beatae iusto libero, eveniet laborum ab ducimus
          accusamus dolore nesciunt magnam dolorum hic aut!
        </p>
        <Link
          to={`update-profile/get/${userInfo?._id}`}
          className="btn bg-blue-600 text-white mt-4"
        >
          Edit Profile
        </Link>
      </div>
    </div>
  );
};

export default DashboardHomePage;
