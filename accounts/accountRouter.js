const express = require('express')

const db = require('../data/dbConfig')

const router = express.Router()

const Accounts ={
    create(account) {
            return db('accounts').insert(account)
          },
}

router.get('/', async (req, res) => {

    try {
        const accounts = await db('accounts');
        res.json(accounts)

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "error getting accounts", err});
    }
})


module.exports = router