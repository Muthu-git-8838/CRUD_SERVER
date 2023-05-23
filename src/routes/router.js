const express = require("express");
const User = require("../model/userSchema");
const router = express.Router();

router.post("/add-data", async (req, res) => {
  try {
    const user = new User(req.body);
    const postData = await user.save();
    res
      .status(201)
      .send({ message: `${postData.name} data added sucessfully` });
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/get-data", async (req, res) => {
  try {
    const user = await User.find();
    if (!user) res.status(404).send({ message: "User NOT Found" });
    else res.status(200).send(user);
  } catch (e) {}
});

router.get("/get-data/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const user = await User.findById(_id);
    if (!user) res.status(404).send({ message: "User NOT Found" });
    else res.status(200).send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.patch("/edit-data/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const user = await User.findByIdAndUpdate(_id, req.body, { new: true });
    if (!user) res.status(404).send({ message: "User NOT Found" });
    else
      res
        .status(200)
        .send({ message: `${user.name} data updated successfully` });
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/delete-data/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const user = await User.findByIdAndDelete(_id);
    if (!user) res.status(404).send({ message: "User NOT Found" });
    else res.status(200).send({ message: "User deleted Successfully" });
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
