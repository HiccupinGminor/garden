"use strict";

var Reading = require('../models/Reading');

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
};
