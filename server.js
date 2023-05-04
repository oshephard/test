const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
const git = require('simple-git');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/git', (req, res) => {
    const { url } = req.body;
    const date = new Date();

    git().clone(url, (err) => {
        if (err) {
            console.error(`Error cloning repository: ${err.message}`);
            res.send(500);
        }

        fs.writeFile('helloworld.txt', `hello world on ${date}!`, function(err) 
        {
            git()
                .addRemote('origin', url, (err) => {
                    if (err) {
                        console.error(`Error cloning repo: ${err.message}`);
                        res.sendStatus(500);
                    }
                    console.log(err);
                })
                .add('helloworld.txt', (err) => {
                    if (err) {
                        console.error(`Error adding file to repo: ${err.message}`);
                        res.sendStatus(500);
                    }
                    console.log(err);
                })
                .commit('Adding helloworld.txt', (err) => {
                    if (err) {
                        console.error(`Error committing changes: ${err.message}`);
                        res.sendStatus(500);
                    }
                    console.log(err);
                })
                .push(['-u', 'origin', 'master'], (err) => {
                    if (err) {
                        console.error(`Error pushing to origin: ${err.message}`);
                        res.sendStatus(500);
                    }
                    console.log(err);
                })
                .removeRemote('origin');
        });
    });

})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
