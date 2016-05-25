/**
 * Created by Андрей on 25.05.2016.
 */

var parseCookies = function(req){
    // Parse cookies
    var cookie = req.headers.cookie,
        cookies = {};
    if (cookie) cookie.split(';').forEach(function(item) {
        var parts = item.split('=');
        cookies[(parts[0]).trim()] = (parts[1] || '').trim();
    });
    return cookies;
}

module.exports.parseCookies = parseCookies;