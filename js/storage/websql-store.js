var WebSqlStore = function(appID, appDB, successCallback, errorCallback) {
	this.appID 		= appID;
	this.appDB 	= appDB;
    this.initializeDatabase = function(successCallback, errorCallback) {
        var self = this;
        var dbSize = this.appDB.length;
        this.db = window.openDatabase(this.appID, "1.0", this.appID, dbSize);
        this.db.transaction(
                function(tx) {
                    self.createTable(tx);
                    self.addData(tx, self.appDB);
                },
                function(error) {
                    console.log('Transaction error: ');
                    console.log(error);
                    if (errorCallback) errorCallback();
                },
                function() {
                    console.log('Transaction success');
                    if (successCallback) successCallback();
                }
        );
    };

    this.createTable = function(tx) {
    	var self = this;
        tx.executeSql('DROP TABLE IF EXISTS '+self.appID);
        var sql = "CREATE TABLE IF NOT EXISTS "+self.appID+" (" +
            "id VARCHAR(50) PRIMARY KEY, " +
            "category VARCHAR(50), " +
            "title VARCHAR(50), " +
            "content VARCHAR(500), " +
            "sidebar VARCHAR(500))";
        tx.executeSql(sql, null,
                function() {
                    console.log('Create table success');
                },
                function(tx, error) {
                    alert('Create table error: ' + error.message);
                });
    };

    this.addData = function(tx, data) {
        var l = data.length; 
    	var self = this;
       var sql = "INSERT OR REPLACE INTO " + self.appID +
            "(id, category, title, content, sidebar) " +
            "VALUES (?, ?, ?, ?, ?)";
        var e;
        for (var i = 0; i < l; i++) { 
            e = data[i];
            tx.executeSql(sql, [e.id, e.category, e.title, e.content, e.sidebar],
                function() {
                    console.log('INSERT success');
                },
                function(tx, error) {
                    alert('INSERT error: ' + error.message);
                }
            );
        }
    };

    this.findById = function(id, callback) {
    	var self = this;
    	this.db.transaction(
            function(tx) {

                var sql = "SELECT e.* " +
                    "FROM "+self.appID+" e " +
                    "WHERE e.id=:id";

                tx.executeSql(sql, [id], function(tx, results) {
                    callback(results.rows.length === 1 ? results.rows.item(0) : null);
                });
            },
            function(error) {
                alert("Transaction Error: " + error.message);
            }
        );
    };
    
    this.findAll = function(callback) {
    	var self = this;
    	this.db.transaction(
            function(tx) {

                var sql = "SELECT e.* " +
                "FROM "+self.appID+" e ";
                
                tx.executeSql(sql, [], function(tx, results) {
                    callback(results.rows.length >= 1 ? results.rows : []);
                });
            },
            function(error) {
                alert("Transaction Error: " + error.message);
            }
        );
    };

    this.initializeDatabase(successCallback, errorCallback);
};
