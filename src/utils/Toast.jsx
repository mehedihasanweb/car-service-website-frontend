import { Toaster } from "react-hot-toast";

const Toast = () => {
  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 4000,

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
            },
          },
        }}
      />
    </div>
  );
};

export default Toast;
