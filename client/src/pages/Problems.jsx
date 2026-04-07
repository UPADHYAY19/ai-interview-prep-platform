import { useNavigate } from "react-router-dom";

function Problems() {

  const navigate = useNavigate();

  const problems = [
    { id: 1, title: "Two Sum", difficulty: "Easy" },
    { id: 2, title: "Longest Substring Without Repeating Characters", difficulty: "Medium" },
    { id: 3, title: "Merge Intervals", difficulty: "Medium" },
    { id: 4, title: "Median of Two Sorted Arrays", difficulty: "Hard" }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white p-10 relative overflow-hidden">

      {/* Background Glow */}

      <div className="absolute w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-20 top-20 left-20"></div>
      <div className="absolute w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 bottom-20 right-20"></div>


      <h1 className="text-3xl font-bold mb-10">
        Coding Problems
      </h1>


      <div className="space-y-4">

        {problems.map((problem) => (

          <div
            key={problem.id}
            onClick={() => navigate(`/problem/${problem.id}`)}
            className="bg-gray-900 p-5 rounded-xl flex justify-between items-center hover:bg-gray-800 cursor-pointer transition"
          >

            <h2 className="text-lg">
              {problem.title}
            </h2>

            <span
              className={`px-3 py-1 rounded text-sm
              ${problem.difficulty === "Easy" ? "bg-green-600" :
                problem.difficulty === "Medium" ? "bg-yellow-600" :
                "bg-red-600"}`}
            >
              {problem.difficulty}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Problems;