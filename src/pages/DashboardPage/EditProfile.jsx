import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const EditProfile = () => {
  const user = useLoaderData();
  const token = localStorage.getItem("token");
  console.log(token);
  const handleUpdateProfile = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const age = form.age.value;
    const mobile = form.mobile.value;

    const userInfo = { name, age, mobile };
    console.log(userInfo);

    fetch(`http://localhost:5000/user/${user?._id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then(() => toast("✅ Profile Updated successfully"));
  };

  return (
    <div>
      <h2 className="text-4xl font-semibold text-center">Update Profile</h2>
      <form onSubmit={handleUpdateProfile}>
        <div className="flex flex-col">
          <label htmlFor="" className="text-xl ">
            Name
          </label>
          <input
            type="text"
            name="name"
            defaultValue={user?.name}
            placeholder="Name"
            className="my-3 w-full px-2 py-2 border border-gray-500 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-xl ">
            Email
          </label>
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            disabled
            placeholder="Email"
            className="my-3 w-full px-2 py-2 border border-gray-500 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-xl ">
            Age
          </label>
          <input
            type="text"
            name="age"
            placeholder="Age"
            className="my-3 w-full px-2 py-2 border border-gray-500 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-xl ">
            Mobile
          </label>
          <input
            type="text"
            name="mobile"
            placeholder="Mobile"
            className="my-3 w-full px-2 py-2 border border-gray-500 rounded-md"
          />
        </div>

        <input
          type="submit"
          value={"Update Profile"}
          className="my-3 text-center w-full px-2 py-2 border border-gray-500 rounded-md bg-blue-600 text-white"
        />
      </form>
    </div>
  );
};

export default EditProfile;
