const express = require("express");
const steps = require("./stepsHelpers");
const router = express.Router();

router.post("/", (req, res) => {
  steps
    .add(req.body)
    .then(recipe => {
      res.status(201).json(recipe);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create recipe" });
    });
});

router.get("/:id/steps", (req, res) => {
  steps
    .getSteps(req.params.id)
    .then(recipe => res.status(200).json(recipe))
    .catch(err =>
      res
        .status(500)
        .json({ message: "Well, kiddo, looks like you'll have to wing it." })
    );
});

module.exports = router;
