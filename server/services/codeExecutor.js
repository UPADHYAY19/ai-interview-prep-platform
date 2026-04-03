const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const { v4: uuidv4 } = require("uuid");

const tempDir = path.join(__dirname, "..", "temp");

if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir);
}

const runCode = (code, language, input = "") => {
  return new Promise((resolve, reject) => {

    const id = uuidv4();
    let filePath;
    let command;

    // ---------- C++ ----------
    if (language === "cpp") {

      filePath = path.join(tempDir, `${id}.cpp`);
      fs.writeFileSync(filePath, code);

      const outputFile = path.join(tempDir, `${id}.exe`);

      command = `g++ "${filePath}" -o "${outputFile}" && "${outputFile}"`;

    }

    // ---------- Python ----------
    else if (language === "python") {

      filePath = path.join(tempDir, `${id}.py`);
      fs.writeFileSync(filePath, code);

      command = `python "${filePath}"`;

    }

    // ---------- Java ----------
    else if (language === "java") {

      const className = `Main${id}`;
      filePath = path.join(tempDir, `${className}.java`);

      fs.writeFileSync(filePath, code);

      command = `javac "${filePath}" && java -cp "${tempDir}" ${className}`;

    }

    else {
      return reject("Language not supported");
    }

    const process = exec(command, (error, stdout, stderr) => {

      if (error) {
        console.error("Execution Error:", stderr);
        return reject(stderr || error.message);
      }

      resolve(stdout.trim());
    });

    // pass input manually
    if (input) {
      process.stdin.write(input);
      process.stdin.end();
    }

  });
};

module.exports = runCode;