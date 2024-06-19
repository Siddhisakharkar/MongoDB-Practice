show dbs
use data
db.createCollection("Students");
db.posts.insertOne({"title" : "post1"})

db.posts.insertOne(
    {
        Name : "Siddhi",
        RollNo : 90,
        Branch : "CSE",
    }
)

db.posts.insertMany([
    {
        Name : "Anagha",
        RollNo : 11,
        Branch : "CSE",
    },
    {
        Name : "Apurva",
        RollNo : 10,
        Branch : "EXTC",
    }
])

db.posts.find()
db.posts.findOne()
db.posts.find({Branch : "EXTC"})
db.posts.find({}, {Name : "Anagha", RollNo : 11})
db.posts.find({}, {_id : 0 ,Name : "Anagha", RollNo : 11})
db.posts.find({}, {category: 0})