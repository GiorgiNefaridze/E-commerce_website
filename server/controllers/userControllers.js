const login = async (req, res) => {
  res.send("successfuly login");
};

const signup = async (req, res) => {
  res.send("successfuly signup");
};

module.exports = { login, signup };
