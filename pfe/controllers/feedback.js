const catchAsyncError = require("../middleware/catchAsyncError");
const feedbackModel = require("../models/feedback");

const route = require("express").Router();

route.post("/create_msg", async (req, res, next) => {
try {
    const { firstName, lastName, email, msg } = req.body;
    const newMsg = new feedbackModel({
    firstName,
    lastName,
    email,
    msg,
    });
    feedbackModel.create(newMsg).then((RESPONSE) => {
    res.status(200).json({ message: "msg sent successfully" });
    });
} catch (error) {
    console.error(error); // Log the error to the console
    res.status(500).send("An error occurred");
}
});

route.put(
"/update_msg/:id",
catchAsyncError(async (req, res, next) => {
    const id = req.params.id;
    try {
    const updateMsg = await feedbackModel.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
    );
    res.status(201).json(updateMsg);
    } catch (error) {
      console.error(error); // Log the error to the console
    res.status(500).send("An error occurred");
    }
})
);

route.delete(
"/delete_msg/:id",
catchAsyncError(async (req, res, next) => {
    const id = req.params.id;
    try {
    await feedbackModel.findByIdAndDelete(id);
    res.status(200).json({ message: "msg is deleted." });
    } catch (error) {
      console.error(error); // Log the error to the console
    res.status(500).send("An error occurred");
    }
})
);

const allMsg = async (req, res, next) => {
try {
    const feedback = await feedbackModel.find({});

    if (feedback.length === 0) {
    return res.status(404).json({ message: "No messages found." });
    }

    res.status(200).json(feedback);
} catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
}
};

route.get("/all_Msg", catchAsyncError(allMsg));

route.get(
"/get_mdg/:id",
catchAsyncError(async (req, res, next) => {
    const id = req.params.id;
    try {
    const feedback = await feedbackModel.findById(id);
        res.status(200).json(feedback);
    } catch (error) {
      console.error(error); // Log the error to the console
    res.status(500).send("An error occurred");
    }
})
);

module.exports = route;
