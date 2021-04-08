const express = require('express');
const router = express.Router();

// @route GET api/contacts
// @desc  Get all users contact 
// @access private 
router.get('/', (req, res) => {
  res.send('get all contacts');
});

// @route POST api/contacts
// @desc  Add new contact 
// @access private 
router.post('/', (req, res) => {
  res.send('Add contact');
});
// @route PUT api/contact:id
// @desc  Update contact 
// @access private 
router.put('/:id', (req, res) => {
  res.send('Update contact');
});
// @route DELETE api/contacts
// @desc  Delete contact 
// @access private 
router.delete('/', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;




