const express = require("express");
const knex = require("../../data/db-config");

const find = () => {
  return knex("recipes");
};

const findById = (id) => {

    return knex("recipes").where({id}).first();
  
}

const add = recipe => {
  return knex("recipes").insert(recipe);
};

const remove = id => {
  return knex("recipes")
    .where({ id })
    .delete();
};

module.exports = {
  add,
  remove,
  find,
  findById
};
