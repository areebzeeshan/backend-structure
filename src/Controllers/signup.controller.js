const SignUp = require("../Services/signup.services");
const signup = new SignUp();

const signUp = async (req, res) => {
  try {
    const user = await signup.submit(req);
    if (user) {
      return res.status(200).json({
        success: true,
        data: [user],
        message: "signed up successfully!",
      });
    }

    return res.status(422).json({
      succes: false,
      data: [],
      message: ["something went wrong, please try again!"],
    });
  } catch (error) {
    return res.status(500).json({
      succes: false,
      data: [],
      message: error.message,
    });
  }
};

const getSignup = async (req, res) => {
  try {
    const response = await signup.getSignup();
    if (response) {
      return res.status(200).json({
        succes: true,
        data: [response],
        message: "Data fetched successfully!",
      });
    }
  } catch (error) {
    return res.status(500).json({
      succes: false,
      data: [],
      message: "error in get api of signup",
    });
  }
};

const login = async (req, res) => {
  try {
    const login_response = await signup.login(req);
    if (login_response) {
      return res.status(200).json({
        succes: true,
        data: [login_response],
        message: "Logged in successfully!",
      });
    }

    return res.status(422).json({
      succes: false,
      data: [],
      message: "username or password is incorrect",
    });
  } catch (error) {
    return res.status(500).json({
      succes: false,
      data: [],
      message: error.message,
    });
  }
};

module.exports = { signUp, getSignup, login };
