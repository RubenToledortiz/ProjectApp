"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listController_1 = __importDefault(require("../controllers/listController"));
class listRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    //ejecutar cada metodo de list controller
    config() {
        this.router.get('/', listController_1.default.list);
        this.router.get('/:id', listController_1.default.getOne);
        this.router.post('/', listController_1.default.create);
        this.router.delete('/:id', listController_1.default.delete);
        this.router.put('/:id', listController_1.default.update);
    }
}
const listroutes = new listRoutes();
exports.default = listroutes.router;
