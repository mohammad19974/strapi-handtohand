'use strict';

/**
 * lookup-needs-type service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lookup-needs-type.lookup-needs-type');
