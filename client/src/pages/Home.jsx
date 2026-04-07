import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (
    <div>

      {/* Navbar */}

      <nav className="flex justify-between items-center px-10 py-5 border-b border-gray-800">

        <h1
          onClick={() => navigate("/")}
          className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent cursor-pointer"
        >
          InterviewAI
        </h1>

        <div className="space-x-4">
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 border border-gray-600 rounded-lg hover:bg-gray-800 transition"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/signup")}
            className="px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
          >
            Sign Up
          </button>
        </div>

      </nav>


      {/* Hero Section */}

      <section className="text-center mt-28 px-6 max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold leading-tight">
          Master Coding Interviews <br />
          with{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            AI Powered Practice
          </span>
        </h1>

        <p className="text-gray-400 mt-6 text-lg">
          Solve coding problems, practice AI interviews, and track your progress.
        </p>

        <button
          onClick={() => navigate("/dashboard")}
          className="mt-8 px-8 py-3 bg-indigo-600 rounded-xl text-lg hover:bg-indigo-700 hover:scale-105 transition"
        >
          Start Practicing
        </button>

      </section>


      {/* Features */}

      <section className="grid md:grid-cols-3 gap-8 px-10 mt-24 max-w-6xl mx-auto">

        <div className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 hover:scale-105 transition shadow-lg">

          <h2 className="text-xl font-semibold mb-3">
            💻 Coding Practice
          </h2>

          <p className="text-gray-400">
            Solve real interview questions with test cases like LeetCode.
          </p>

        </div>


        <div className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 hover:scale-105 transition shadow-lg">

          <h2 className="text-xl font-semibold mb-3">
            🤖 AI Mock Interviews
          </h2>

          <p className="text-gray-400">
            Practice interviews with AI and get instant feedback.
          </p>

        </div>


        <div className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 hover:scale-105 transition shadow-lg">

          <h2 className="text-xl font-semibold mb-3">
            📊 Progress Tracking
          </h2>

          <p className="text-gray-400">
            Track your coding growth and interview readiness.
          </p>

        </div>

      </section>


      {/* Footer */}

      <footer className="text-center text-gray-500 mt-28 pb-10">

        © 2026 InterviewAI — Built with MERN + AI

      </footer>

    </div>
  );
}

export default Home;