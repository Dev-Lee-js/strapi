'use strict';

const {parseMultipartData, sanitizeEntity} = require("strapi-utils");
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async create(ctx){

        let entity;

        let user = ctx.state.user.id;

        ctx.request.body.author = user;

        if(ctx.is("multipart")){
            const {data, files} = parseMultipartData(ctx);
            entity = await strapi.services.workspace.create(data, {files});
        } else {
            entity = await strapi.services.workspace.create(ctx.request.body);
        }

        return sanitizeEntity(entity, {model: strapi.models.workspace});
    }
};
