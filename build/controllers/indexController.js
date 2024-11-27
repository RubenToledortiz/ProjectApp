"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexcontroller = void 0;
class IndexControllers {
    // mostrar en la página inicial donde esta la api 
    index(req, res) {
        res.json({ text: 'La api esta en /api/lista' });
    }
}
exports.indexcontroller = new IndexControllers();
