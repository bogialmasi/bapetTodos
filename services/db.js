const loki = require('lokijs');
const db = new loki('todos.dat');
function initDb(cb) {

    db.loadDatabase({}, err => {
        if(err){
            return cb(err, null);
        }
        let myModel = db.getCollection("todos");
        if (myModel === null) {
            myModel = db.addCollection("todos");
        }
        //console.log(myModel);
        db.saveDatabase(err => {
            console.log("Mentés sikerült");
        })
        cb ( null, {db, myModel});
    })
}

module.exports.initDatabase = initDb;
