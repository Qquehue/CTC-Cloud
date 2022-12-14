var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.get("/", function (req, res) {
    dashController.testar(req, res);
});

router.get("/listarCaminhao", function (req, res) {
    dashController.listarCaminhao(req, res);
});

router.get("/listar", function (req, res) {
    avisoController.listar(req, res);
});

module.exports = router;