// 'use strict';

// /**
//  * schedule controller
//  */

// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::schedule.schedule');

"use strict";

/**
 *  homepage controller
 */

const collectionType = "schedule";

const schema = require(`../content-types/${collectionType}/schema.json`);
const createPopulatedController = require("../../../helpers/populate");

module.exports = createPopulatedController(
  `api::${collectionType}.${collectionType}`,
  schema
);
