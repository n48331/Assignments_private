var db = openDatabase('mydatabase', '1.0', 'Testing Database', 2 * 1024 * 1024);
console.log(db);

db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS Todo(id unique, task, deadline, completed)');//sql query
    tx.executeSql('INSERT INTO Todo (id, task, deadline, completed) VALUES (1, "Design Webapp","15 June","Completed")');
    tx.executeSql('INSERT INTO Todo (id, task, deadline, completed) VALUES (2, "Create Fronend","16 June","Completed")');
    tx.executeSql('INSERT INTO Todo (id, task, deadline, completed) VALUES (3, "Develop Backend","30 June","Not completed")');
    tx.executeSql('INSERT INTO Todo (id, task, deadline, completed) VALUES (4, "Deploy","5 July","Not completed")');

    console.log('Table Created');
});


db.transaction(function (tx) {
    tx.executeSql('SELECT * FROM Todo', [], function (tx, results) {
        var todo = results.rows
        var len = todo.length
        for (var i = 0; i < len; i++) {
            console.log(results.rows[i].task);
            document.getElementById('todo').innerHTML += (
                '<li>' + '<span class="task">' + todo[i].task + '</span>' +
                '<span class="dl">' + todo[i].deadline + '</span>' + 
                '<span class="complete">' + todo[i].completed + '</span>' + '</li>')
        }
    });
})


