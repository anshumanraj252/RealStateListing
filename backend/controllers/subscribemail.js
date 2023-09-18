const subscribe = require("../models/subscribe");

const subscribemail = require("express").Router();

subscribemail.post("/register", async (req, res) => {
  try {
    const isExisting = await subscribe.findOne({ email: req.body.email });

    if (isExisting) {
      throw new Error("Email is already taken by another user");
    }

    // const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newSubscriber = await subscribe.create({
      email: req.body.email,
      //   password: hashedPassword,
    });

    const { email } = newSubscriber._doc;
    // const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
    //   expiresIn: "8d",
    // });

    return res.status(201).json({ email });
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

module.exports = subscribemail;
