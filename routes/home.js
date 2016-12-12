
const router = require('express').Router();
const { findQuote } = require('../services/quotes');

router.get('/', findQuote, (req, res) => {
  console.log(res.quote);
  res.render('index', {
    quote: res.quote,
  });
});

module.exports = router;
