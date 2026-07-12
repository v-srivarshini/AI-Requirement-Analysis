const validateProject = (req, res, next) => {
  const { projectName, companyName, description } = req.body;

  if (!projectName || !companyName || !description) {
    return res.status(400).json({
      success: false,
      message: "Please fill all project fields",
    });
  }

  next();
};

const validateRequirement = (req, res, next) => {
  const { project, title, description } = req.body;

  if (!project || !title || !description) {
    return res.status(400).json({
      success: false,
      message: "Please fill all requirement fields",
    });
  }

  next();
};

module.exports = {
  validateProject,
  validateRequirement,
};