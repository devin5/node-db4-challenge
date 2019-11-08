const express = require("express");
const ingrediants = require("./ingrediantsHelpers");
const router = express.Router();

router.get("/", (req, res) => {
  ingrediants
    .find()
    .then(ingrediants => {
      res.json(ingrediants);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get recipes" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  ingrediants
    .findById(id)
    .then(ingrediant => {
      if (ingrediant) {
        res.json(ingrediant);
      } else {
        res
          .status(404)
          .json({ message: "Could not find ingrediant with given id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get ingrediant" });
    });
});

router.post("/", (req, res) => {
  ingrediants
    .add(req.body)
    .then(ingrediant => {
      res.status(201).json(ingrediant);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create ingrediant" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  ingrediants
    .remove(id)
    .then(deleted => {
      if (deleted) {
        res.json(id);
      } else {
        res
          .status(404)
          .json({ message: "Could not find ingrediant with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to delete ingrediants" });
    });
});

module.exports = router;
