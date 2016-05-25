/**
 * Created by Андрей on 25.05.2016.
 */
var http = require('http'),
    cookiesParser = require('./cookiesParser.js'),
    cache = require('./cache.js'),
    logger = require('./logger.js'),
    routing = require('./routing.js');

http.createServer(function (req, res) {

    // cookies parsing
    var cookies = cookiesParser.parseCookies(req);
    logger.log(req);

    if (cache.cache[req.url] && req.method === 'GET') {
        console.log("Getting " + req.url + " from cache.");
        res.writeHead(200);
        res.end(cache.cache[req.url]);
    }else{
        //Routing
        var route = routing.routing[req.url];
        if(typeof(route) == 'function') route(req, res, cookies);
        else {
            res.writeHead(404);
            res.end('Path not found');
        }
    }

}).listen(80);