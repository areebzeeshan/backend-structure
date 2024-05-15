const { helperService } = require("../Helpers/helper");
const signUpModel = require("../Model/SignUp.model");

class SignUp {
  async submit(req) {
    try {
      const { fullName, email, phone, password } = req.body;
      const hashedPassword = await helperService.encryptPassword(password);
      const user = new signUpModel({
        fullName: fullName,
        email: email,
        phone: phone,
        password: hashedPassword,
      });
      await user.save();

      return user;
    } catch (error) {
      console.log("Error in sign up services : ", error);
    }
  }

  async getSignup() {
    try {
      const response = await signUpModel.find();
      return response;
    } catch (error) {
      throw error;
    }
  }

  async login(req) {
    try {
      const { email, password } = req.body;
      const user = await signUpModel.findOne({ email });
      if (
        user &&
        (await helperService.comparePassword(password, user.password))
      ) {
        return true;
      }

      return false;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = SignUp;
