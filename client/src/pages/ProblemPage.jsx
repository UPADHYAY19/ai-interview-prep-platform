import { useParams } from "react-router-dom";
import Editor from "@monaco-editor/react";
import { useState } from "react";

function ProblemPage() {

  const { id } = useParams();

  const templates = {

    javascript: `function solve() {

}`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

int main() {

    return 0;
}`,

    python: `def solve():
    pass

if __name__ == "__main__":
    solve()
`,

    java: `public class Main {
    public static void main(String[] args) {

    }
}`

  };

  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState(templates.javascript);
  const [output, setOutput] = useState("Click Run Code to see output...");



  // Run Code Button (temporary)

  const runCode = () => {

    setOutput("Running code...\n\n(Output will appear here when backend is connected)");

  };



  return (

    <div className="flex h-screen bg-gray-950 text-white">

      {/* LEFT SIDE */}

      <div className="w-1/2 flex flex-col border-r border-gray-800">

        {/* Header */}

        <div className="p-6 border-b border-gray-800">

          <h1 className="text-2xl font-bold mb-2">
            Problem {id}: Two Sum
          </h1>

          <span className="bg-green-600 text-sm px-3 py-1 rounded">
            Easy
          </span>

        </div>



        {/* Tabs */}

        <div className="flex gap-6 px-6 py-3 border-b border-gray-800 text-gray-400">

          <div className="cursor-pointer hover:text-white">
            Description
          </div>

          <div className="cursor-pointer hover:text-white">
            Solutions
          </div>

          <div className="cursor-pointer hover:text-white">
            Submissions
          </div>

        </div>



        {/* Description */}

        <div className="p-6 overflow-y-auto flex-1">

          <p className="text-gray-400 mb-6">
            Given an array of integers nums and an integer target,
            return indices of the two numbers such that they add up to target.
          </p>

          <h2 className="font-semibold mb-2">
            Example
          </h2>

          <pre className="bg-gray-900 p-4 rounded-lg text-sm">
{`Input: nums = [2,7,11,15], target = 9
Output: [0,1]`}
          </pre>

        </div>

      </div>



      {/* RIGHT SIDE */}

      <div className="w-1/2 flex flex-col">

        {/* Editor Header */}

        <div className="flex justify-between items-center px-6 py-3 border-b border-gray-800 bg-gray-900">

          <span className="font-semibold">
            Code Editor
          </span>

          <select
            value={language}
            onChange={(e) => {

              const lang = e.target.value;

              setLanguage(lang);
              setCode(templates[lang]);

            }}
            className="bg-gray-800 px-3 py-1 rounded text-sm"
          >

            <option value="javascript">JavaScript</option>
            <option value="cpp">C++</option>
            <option value="python">Python</option>
            <option value="java">Java</option>

          </select>

        </div>



        {/* Monaco Editor */}

        <Editor
          height="70%"
          theme="vs-dark"
          language={language}
          value={code}
          onChange={(value) => setCode(value || "")}
        />



        {/* Bottom Section */}

        <div className="border-t border-gray-800 bg-gray-900">

          {/* Buttons */}

          <div className="flex justify-between items-center p-4">

            <div className="flex gap-4">

              <button
                onClick={runCode}
                className="px-6 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700"
              >
                Run Code
              </button>

              <button className="px-6 py-2 bg-green-600 rounded-lg hover:bg-green-700">
                Submit
              </button>

            </div>

          </div>



          {/* Output Console */}

          <div className="p-4 bg-black text-green-400 font-mono text-sm h-36 overflow-y-auto border-t border-gray-800">

            {output}

          </div>

        </div>

      </div>

    </div>

  );

}

export default ProblemPage;