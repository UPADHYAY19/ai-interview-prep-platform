import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gray-950 text-white">

      {/* Sidebar */}

      <div className="w-64 bg-gray-900 p-6 border-r border-gray-800">

        <h1 className="text-2xl font-bold mb-10 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          InterviewAI
        </h1>

        <nav className="space-y-4">

          <div
            onClick={() => navigate("/dashboard")}
            className="p-3 rounded-lg hover:bg-gray-800 cursor-pointer"
          >
            📊 Dashboard
          </div>

          <div
            onClick={() => navigate("/problems")}
            className="p-3 rounded-lg hover:bg-gray-800 cursor-pointer"
          >
            💻 Coding Problems
          </div>

          <div className="p-3 rounded-lg hover:bg-gray-800 cursor-pointer">
            🤖 AI Interview
          </div>

          <div className="p-3 rounded-lg hover:bg-gray-800 cursor-pointer">
            📑 Submissions
          </div>

          <div className="p-3 rounded-lg hover:bg-gray-800 cursor-pointer">
            👤 Profile
          </div>

        </nav>

      </div>


      {/* Right Section */}

      <div className="flex-1 flex flex-col">

        {/* Top Navbar */}

        <div className="flex justify-between items-center px-10 py-5 border-b border-gray-800 bg-gray-900">

          <input
            type="text"
            placeholder="Search problems..."
            className="bg-gray-800 px-4 py-2 rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <div className="flex items-center gap-6">

            <div className="cursor-pointer hover:scale-110 transition">
              🔔
            </div>

            <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center font-bold">
              S
            </div>

          </div>

        </div>


        {/* Main Content */}

        <div className="p-10 relative overflow-hidden flex-1">

          {/* Background Glow */}

          <div className="absolute w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-20 top-20 left-20"></div>
          <div className="absolute w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 bottom-20 right-20"></div>


          <h1 className="text-3xl font-bold mb-8">
            Welcome Back 👋
          </h1>


          {/* Stats */}

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:bg-gray-800 transition">

              <h2 className="text-gray-400">
                Problems Solved
              </h2>

              <p className="text-3xl font-bold mt-2">
                24
              </p>

            </div>


            <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:bg-gray-800 transition">

              <h2 className="text-gray-400">
                Mock Interviews
              </h2>

              <p className="text-3xl font-bold mt-2">
                5
              </p>

            </div>


            <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:bg-gray-800 transition">

              <h2 className="text-gray-400">
                Accuracy
              </h2>

              <p className="text-3xl font-bold mt-2">
                82%
              </p>

            </div>

          </div>


          <button
            onClick={() => navigate("/problems")}
            className="mt-10 px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg hover:scale-105 transition"
          >
            Start Coding Practice
          </button>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;