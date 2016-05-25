/**
 * Created by Андрей on 25.05.2016.
 */
var person = require('./person.js');
var root = require('./root.js');

var routing = {
    '/': function(req,res, cookies){
        if (req.method === 'GET') {
            return root.get(req, res, cookies);
        }
    },
    '/person': function(req, res){
        if(req.method === 'GET')
            return person.get(req, res);
        else if(req.method === 'POST')
            return person.post(req, res);
    }
};

module.exports.routing = routing;