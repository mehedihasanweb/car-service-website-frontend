import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleSignIn().then((result) => {
      console.log(result);
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
