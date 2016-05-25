/**
 * Created by Андрей on 25.05.2016.
 */

var get = function(req, res, cookies){
    res.writeHead(200, {
        'Set-Cookie': 'mycookie=test',
        'Content-Type': 'text/html'
    });
    var ip = req.connection.remoteAddress;
    res.write('<h1>Welcome</h1>Your IP: ' + ip);
    res.end('<pre>' + JSON.stringify(cookies) + '</pre>');
}

module.exports.get = get;