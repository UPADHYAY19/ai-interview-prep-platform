const runCode = require("../services/codeExecutor");

exports.runCodeHandler = async (req, res) => {
  try {

    const { code, language, input } = req.body;

    if (!code || !language) {
      return res.status(400).json({
        message: "Code and language are required"
      });
    }

    const output = await runCode(code, language, input);

    res.json({
      message: "Code executed successfully",
      output
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: error.message
    });

  }
};