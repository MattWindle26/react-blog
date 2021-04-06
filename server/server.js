const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const app = express();
const bcrypt = require('bcrypt');
const saltRounds = 10;


app.use(cors());

MongoClient.connect("mongodb+srv://matt:Burnley123@cluster0.z54br.mongodb.net/react_blog_posts?retryWrites=true&w=majority", { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database');
        const db = client.db("react_blog_posts");
        const postCollection = db.collection('posts')


        app.use(bodyParser.urlencoded({ extended: true }));

        app.get('/', (req, res) => {

        });

        app.get('/posts', (req, res) => {
            db.collection("posts").find().toArray()
                .then(results => {
                    res.send(results);
                })
        });

        app.post('/add', (req, res) => {
            console.log(req.body);
            postCollection.insertOne(req.body)
                .then(result => {
                    res.redirect('http://localhost:3000/')
                })
        });

        app.listen(3001, () => {
            console.log("listening on port 3001");
        })
    })
    .catch(error => console.error(error))

// XTKRsgKdmIJoaK5f

