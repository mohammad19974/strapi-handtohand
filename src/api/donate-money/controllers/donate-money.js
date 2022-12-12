'use strict';

/**
 * donate-money controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::donate-money.donate-money');
