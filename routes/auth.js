const express = require('express');
const router = express.Router();

// Placeholder auth route
router.get('/test', (req, res) => {
  res.json({ message: 'Auth routes working!' });
});

module.exports = router; 