'use strict';

/**
 * orphan-request service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::orphan-request.orphan-request');
