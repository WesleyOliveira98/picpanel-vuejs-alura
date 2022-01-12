var Datastore = require('nedb')
    ,dbName = 'data.db'
    ,db;

if(!db) {
    db = new Datastore({
        filename: dbName, 
        autoload: true 
    });
}

module.exports = db;