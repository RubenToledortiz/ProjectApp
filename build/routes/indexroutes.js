"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    //ejecutar el metodo index al entrar en la página principal
    config() {
        this.router.get('/', indexController_1.indexcontroller.index);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
