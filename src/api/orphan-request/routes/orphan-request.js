'use strict';

/**
 * orphan-request router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::orphan-request.orphan-request');
