const express = require('express');
const axios = require('axios');
const router = express.Router();

const ETHERSCAN_API_KEY = 'UKYKC4Z4QM5ZUS912VM56ZY25XY867VJ9W';
const WALLET_ADDRESS = '0x4D7D5d6DD8263DE42A693b00F1b8c653Ae1674af';

router.get('/api/transactions', async (req, res) => {
  try {
    const url = `https://api-sepolia.etherscan.io/api?module=account&action=txlist&address=${WALLET_ADDRESS}&sort=desc&apikey=${ETHERSCAN_API_KEY}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '', name:null });
});

router.post('/', function(req, res, next) {

  res.render('index', { title: '', name:req.body.name });
});

router.get('/page1', function(req, res, next) {
  res.render('page1', { title: '', name:null });
});

router.get('/page2', function(req, res, next) {
  res.render('page2', { title: '', name:null });
});

router.get('/page3', function(req, res, next) {
  res.render('page3', { title: '', name:null });
});

router.get('/page4', function(req, res, next) {
  res.render('page4', { title: '', name:null });
});

router.get('/page5', function(req, res, next) {
  res.render('page5', { title: '', name:null });
});


module.exports = router;
