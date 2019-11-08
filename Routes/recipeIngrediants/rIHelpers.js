const express = require("express");
const knex = require("../../data/db-config");

const add = rI => {
  return knex("recipe_ingrediants").insert(rI);
};

const getShoppingList = id => {
  return knex("recipe_ingrediants as r")
    .join("ingrediants as i", "i.id", "=", "r.ingrediant_id")
    .where("recipe_id", "=", id)
    .select("i.name", "r.quantity");
};

module.exports = {
  add,
  getShoppingList
};
