'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

exports.before = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [
    (hook, next) => {
      hook.result = null;
      next(null, hook);
    }
  ],
  remove: []
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [
    // (hook, next) => {
    //   hook.result = null;
    //   next(null, hook);
    // }
  ],
  remove: []
};
