var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });

var blocks = {
    'Fixed': 'Fastened securly in position',
    'Movable': 'Capable of being moved',
    'Rotating': 'Moving in a circle around its center'
};

router.route('/')
    .post(parseUrlencoded, function(req, res){
        var newBlock = req.body;
        blocks[newBlock.name] = newBlock.description;

        res.status(201).json(newBlock.name);
    })
    .get(function(request, response){
        response.json(Object.keys(blocks));
    });

router.route('/:name')
    .all(function(req, res, next){
        var name = req.params.name;
        var block = name[0].toUpperCase() + name.slice(1).toLowerCase();

        req.blockName = block;

        next();
    })
    .get(function(req, res){
        var description = blocks[req.blockName];

        if (!description) {
            res.status(404).json('Not found');
        } else {
            res.json(description);
        }
    })
    .delete(function(req, res){
        delete blocks[req.blockName];
        response.sendStatus(200);
    });

module.exports = router; // Exports router as Node module
