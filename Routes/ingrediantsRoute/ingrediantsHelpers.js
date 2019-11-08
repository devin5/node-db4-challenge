const express = require("express");
const knex = require("../../data/db-config");

const find = () => {
  return knex("ingrediants");
};

const findById = id => {
  return knex("ingrediants")
    .where({ id })
    .first();
};

const add = ingrediant => {
  return knex("ingrediants").insert(ingrediant);
};

const remove = id => {
  return knex("ingrediants")
    .where({ id })
    .delete();
};

module.exports = {
  add,
  remove,
  find,
  findById
  //   findSteps,

  //   update,
  //   remove
};
