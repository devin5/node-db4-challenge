const express = require("express");
const knex = require("../../data/db-config");

const find = () => {
  return knex("steps");
};

const findById = id => {
  return knex("steps")
    .where({ id })
    .first();
};

const add = step => {
  return knex("steps").insert(step);
};

const remove = id => {
  return knex("steps")
    .where({ id })
    .delete();
};

const getSteps = id => {
  return knex("steps").where("recipe_id", "=", id);
};

module.exports = {
  add,
  remove,
  find,
  findById,
  getSteps
};
