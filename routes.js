const express = require('express');
function eRoutes() {
    const router = express.Router();
    var articulos = require('./articulos/articulosRoutes')(router);
    // var department = require('./repository/department/department.routes')(router);
    return router;
}
module.exports = eRoutes;