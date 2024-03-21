// evRoutes.js

const express = require('express');
const router = express.Router();
const EV = require('../models/evModel');
const { verifyToken, isAdmin } = require('../middlewares/authMiddleware');
const { body, validationResult } = require('express-validator');


// Route to get all EVs
router.get('/', async (req, res) => {
  try {
    const evs = await EV.find();
    res.json(evs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to get a single EV by ID
router.get('/:id', async (req, res) => {
  try {
    const ev = await EV.findById(req.params.id);
    if (!ev) {
      return res.status(404).json({ message: 'EV not found' });
    }
    res.json(ev);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Protected routes (require authentication)
router.use(verifyToken);

// Route to create a new EV (only admin)
router.post('/', isAdmin, async (req, res) => {
  const ev = new EV({
    make: req.body.make,
    model: req.body.model,
    year: req.body.year,
    price: req.body.price,
    range: req.body.range,
    imageUrl: req.body.imageUrl
  });


  try {
    const newEV = await ev.save();
    res.status(201).json(newEV);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to update an existing EV (only admin)
router.put('/:id', isAdmin, async (req, res) => {
  try {
    const ev = await EV.findById(req.params.id);
    if (!ev) {
      return res.status(404).json({ message: 'EV not found' });
    }
    ev.make = req.body.make;
    ev.model = req.body.model;
    ev.year = req.body.year;
    ev.price = req.body.price;
    ev.range = req.body.range;
    ev.imageUrl = req.body.imageUrl;
    const updatedEV = await ev.save();
    res.json(updatedEV);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to delete an existing EV (only admin)
router.delete('/:id', isAdmin, async (req, res) => {
  try {
    const ev = await EV.findById(req.params.id);
    if (!ev) {
      return res.status(404).json({ message: 'EV not found' });
    }
    await ev.remove();
    res.json({ message: 'EV deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
