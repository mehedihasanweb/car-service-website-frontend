import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleSignIn().then((data) => {
      console.log(data?.user?.displayName);
      const userInfo = {
        name: data?.user?.displayName,
        email: data?.user?.email,
      };
      fetch("http://localhost:5000/user", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(userInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          localStorage.setItem("token", data?.token);
        });
      navigate("/");
    });
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="btn bg-blue-600 text-white w-full "
    >
      Google
    </button>
  );
};

export default SocialLogin;
