const express = require('express');
const sqlite3 = require('sqlite3');

const app = express();
const port = 4000;
const cors = require('cors');
app.use(cors());

const db = new sqlite3.Database('./db/mabdd.db');
app.use(express.json());

function getRandomInt(module) {
    let min = 0;
    let max = 0;
    switch(module){
        case 1: { 
            min = Math.ceil(1001);
            max = Math.floor(1475);
            break;
        }
        case 2: { 
            min = Math.ceil(min);
            max = Math.floor(max);
            break;
        }
        case 3: { 
            min = Math.ceil(min);
            max = Math.floor(max);
            break;
        }
        case 4: { 
            min = Math.ceil(min);
            max = Math.floor(max);
            break;
        }
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
app.get('/question', (req, res) => {
    let module = req.query.module;
    let id = getRandomInt(Number(module)); 
    db.all(`SELECT * FROM bdd where id = ? AND Module = ?`, [id, module], (err, rows) => {
    if (err) {
        res.status(500).json({ error: err.message });
    }
    res.json(rows);
    });
});

app.get('/', (req, res) => {
    let id = getRandomInt(1001, 1475); 
    res.json({id: id});
});

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});