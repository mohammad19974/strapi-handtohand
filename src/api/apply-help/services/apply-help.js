'use strict';

/**
 * apply-help service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::apply-help.apply-help');
