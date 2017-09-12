var MongoClient = require('mongodb').MongoClient;

function connect() {
	return new Promise(function (resolve, reject) {
		MongoClient.connect('mongodb://localhost:27017/schooldb', function (err, db) {
			if (err) {reject(err);
                console.log(err);
            };
			resolve(db);
		});
	});
}

module.exports = connect;