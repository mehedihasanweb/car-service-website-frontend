import { useLoaderData } from "react-router-dom";
import Toast from "../../utils/Toast";
import toast from "react-hot-toast";
import { useState } from "react";

const EditPage = () => {
  const service = useLoaderData();
  console.log(service);

  const [title, setTitle] = useState(service.title);
  const [brand, setBrand] = useState(service.brand);
  const [price, setPrice] = useState(service.price);
  const [description, setDescription] = useState(service.description);
  const [img, setImg] = useState(service.img);

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const img = form.image_url.value;

    const updateData = { title, brand, price, description, img };
    console.log(service);

    fetch(`http://localhost:5000/service/${service._id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        toast("✅ service edited successfully!!");
      });
  };

  return (
    <>
      <h1 className="text-5xl font-bold text-center pt-20">UPDATE A SERVICE</h1>
      <div className="my-16 min-h-screen">
        <form onSubmit={handleUpdate}>
          <div className="lg:flex items-center justify-center gap-16">
            <div className="mt-4">
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                required
                className="bg-gray-100 p-4 w-full lg:w-[350px] border border-black rounded-lg"
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                name="brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder="Brand"
                className="bg-gray-100 p-4 w-full lg:w-[350px] border border-black rounded-lg"
              />
            </div>
          </div>

          <div className="lg:flex items-center justify-center gap-16">
            <div className="mt-4">
              <input
                type="text"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
                className="bg-gray-100 p-4 w-full lg:w-[350px] border border-black rounded-lg"
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="bg-gray-100 p-4 w-full lg:w-[350px] border border-black rounded-lg"
              />
            </div>
          </div>

          <div className="lg:flex items-center justify-center gap-16">
            <div className="mt-4">
              <input
                type="text"
                name="image_url"
                value={img}
                onChange={(e) => setImg(e.target.value)}
                placeholder="IMAGE_URL"
                className="bg-gray-100 p-4 w-full lg:w-[350px] border border-black rounded-lg"
              />
            </div>
          </div>

          <div className="mt-4 flex justify-center items-center">
            <input
              type="submit"
              value="Update Product"
              className="btn mt-4 w-full lg:w-[600px] bg-red-500 text-white p-4"
            />
          </div>
        </form>
      </div>
      {/* <Toaster position="top-center" reverseOrder={false} /> */}
      <Toast />
    </>
  );
};

export default EditPage;
