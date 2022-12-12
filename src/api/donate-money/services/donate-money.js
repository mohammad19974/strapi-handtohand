'use strict';

/**
 * donate-money service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::donate-money.donate-money');
