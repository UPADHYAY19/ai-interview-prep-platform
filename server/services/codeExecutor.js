// Import required modules
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const { v4: uuidv4 } = require("uuid");

// Path for temporary code storage
const tempDir = path.join(__dirname, "..", "temp");

// Create temp directory if it doesn't exist
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir);
}

// Main function to run user code
const runCode = (code, language, input = "") => {
  return new Promise((resolve, reject) => {

    // Generate unique id for file name
    const id = uuidv4();

    let filePath;
    let command;
    let outputFile;

    // ===============================
    // C++ Execution
    // ===============================
    if (language === "cpp") {

      // Create temporary cpp file
      filePath = path.join(tempDir, `${id}.cpp`);
      fs.writeFileSync(filePath, code);

      // Output executable file
      outputFile = path.join(tempDir, `${id}.exe`);

      // Compile and run command
      command = `g++ "${filePath}" -o "${outputFile}" && "${outputFile}"`;
    }

    // ===============================
    // Python Execution
    // ===============================
    else if (language === "python") {

      // Create temporary python file
      filePath = path.join(tempDir, `${id}.py`);
      fs.writeFileSync(filePath, code);

      // Run python file
      command = `python "${filePath}"`;
    }

    // ===============================
    // Java Execution
    // ===============================
    else if (language === "java") {

      // Java class must match filename
      const className = `Main${id}`;
      filePath = path.join(tempDir, `${className}.java`);

      fs.writeFileSync(filePath, code);

      // Compile and run java program
      command = `javac "${filePath}" && java -cp "${tempDir}" ${className}`;
    }

    else {
      return reject("Language not supported");
    }

    // Execute command with timeout protection
    const process = exec(
      command,
      { timeout: 5000 }, // stop execution after 5 seconds
      (error, stdout, stderr) => {

        // Cleanup temporary files after execution
        try {
          if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
          if (outputFile && fs.existsSync(outputFile)) fs.unlinkSync(outputFile);
        } catch (cleanupError) {
          console.error("Cleanup error:", cleanupError);
        }

        // Handle execution errors
        if (error) {

          // Timeout protection (infinite loop prevention)
          if (error.killed) {
            return reject("Execution timed out (possible infinite loop)");
          }

          console.error("Execution Error:", stderr);
          return reject(stderr || error.message);
        }

        // Return program output
        resolve(stdout.trim());
      }
    );

    // Pass input to the program
    if (input) {
      process.stdin.write(input);
      process.stdin.end();
    }

  });
};

// Export function
module.exports = runCode;