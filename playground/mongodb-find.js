const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

//    db.collection('Todos').find({
//        _id: new ObjectID('5b902d8bd57ae9412ba76cf0') 
//    }).toArray().then((docs) => {
//        console.log('Todos');
//        console.log(JSON.stringify(docs, undefined, 2));
//    }, (err) => {
//        console.log('Unable to fetch todos');
//    });
//
//    db.collection('Todos').find().count().then((count) => {
//        console.log(`Todos count: ${count}`);
//    }, (err) => {
//        console.log('Unable to fetch todos', err);
//    });
//    client.close();
    
    db.collection('Users').find({name: 'Matt'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    })
});
