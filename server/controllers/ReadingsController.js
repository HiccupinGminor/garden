"use strict";

var Reading = require('../models/Reading');
var ErrorHandler = require('../utilities/ErrorHandler');

module.exports = {
    create: function(io) {
        return function(req, res) {
            var body = req.body,
                model;

            model = new Reading(body);
            model.save()
                .then(function(data) {
                    io.emit('readings');
                    res.status(201).send(data);
                })
                .catch(function(error) {
                    if(error.name == 'ValidationError') {
                        res.sendStatus(400);
                    }
                    else {
                        res.sendStatus(500);
                    }
                });
        }
    },

    all: function(io) {
        return function(req, res) {
            Reading.find().exec()
            .then(function(data) {
                res.send(data);
            })
            .catch(ErrorHandler);
        }
    },

    find: function(io) {
        return function(req, res) {
            Reading
            .findById(req.params.id)
            .exec()
            .then(function(data) {
                res.send(data);
            })
            .catch(function(error) {
                if(error.name == 'CastError') {
                    res.sendStatus(404);
                }
                else {
                    res.sendStatus(500);
                }
            });
        }
    }
};
