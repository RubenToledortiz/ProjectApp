"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class GamesControllers {
    index(req, res) {
        database_1.default.query('DESCRIBE lista');
        res.json('lista');
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const comida = yield database_1.default.query('SELECT * FROM lista');
            res.json(comida);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const listado = yield database_1.default.query('SELECT * FROM lista WHERE id = ?', [id]);
            if (listado.length > 0) {
                return res.json(listado[0]);
            }
            res.status(404).json({ text: "El item no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO lista set ?', [req.body]);
            res.json({ message: 'compra guardada' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM lista where id = ?', [id]);
            res.json({ message: "compra eliminada" });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE lista set ? where id = ?', [req.body, id]);
            res.json({ message: "compra actualizada" });
        });
    }
}
const gamesController = new GamesControllers();
exports.default = gamesController;