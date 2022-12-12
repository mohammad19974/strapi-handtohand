'use strict';

/**
 * donate-money router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::donate-money.donate-money');
