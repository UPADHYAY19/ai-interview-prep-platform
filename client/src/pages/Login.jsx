import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-950 overflow-hidden">

      {/* Background Glow Effects */}

      <div className="absolute w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-20 top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 bottom-10 right-10"></div>


      {/* Login Card */}

      <div className="relative bg-gray-900 p-10 rounded-2xl w-96 shadow-2xl">

        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          Welcome Back
        </h2>

        <p className="text-gray-400 text-center mb-8">
          Login to continue your interview preparation
        </p>


        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-105 transition">
          Login
        </button>


        <p className="text-gray-400 text-center mt-6">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-indigo-400 cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>

      </div>

    </div>
  );
}

export default Login;