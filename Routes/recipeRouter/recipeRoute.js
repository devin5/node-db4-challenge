const express = require("express");
const recipes = require("./recipeHelpers");
const router = express.Router();

router.get("/:id", (req, res) => {
  const { id } = req.params;

  recipes
    .findById(id)
    .then(recipe => {
      if (recipe) {
        res.json(recipe);
      } else {
        res
          .status(404)
          .json({ message: "Could not find recipe with given id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get recipe" });
    });
});

router.get("/", (req, res) => {
  recipes
    .find()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get recipes" });
    });
});

router.post("/", (req, res) => {
  recipes
    .add(req.body)
    .then(recipe => {
      res.status(201).json(recipe);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create recipe" });
    });
});
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  recipes
    .remove(id)
    .then(deleted => {
      if (deleted) {
        res.json(id);
      } else {
        res
          .status(404)
          .json({ message: "Could not find recipe with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to delete recipe" });
    });
});

module.exports = router;
