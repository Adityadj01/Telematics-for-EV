// evController.js

const EV = require('../models/ev');

// Get all EVs
exports.getAllEVs = async (req, res) => {
  try {
    const evs = await EV.find();
    res.json(evs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single EV by ID
exports.getEVById = async (req, res) => {
  try {
    const ev = await EV.findById(req.params.id);
    if (!ev) {
      return res.status(404).json({ message: 'EV not found' });
    }
    res.json(ev);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new EV
exports.createEV = async (req, res) => {
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
};

// Update an existing EV
exports.updateEV = async (req, res) => {
  try {
    const ev = await EV.findById(req.params.id);
    if (!ev) {
      return res.status(404).json({ message: 'EV not found' });
    }

    ev.make = req.body.make || ev.make;
    ev.model = req.body.model || ev.model;
    ev.year = req.body.year || ev.year;
    ev.price = req.body.price || ev.price;
    ev.range = req.body.range || ev.range;
    ev.imageUrl = req.body.imageUrl || ev.imageUrl;

    const updatedEV = await ev.save();
    res.json(updatedEV);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an EV by ID
exports.deleteEV = async (req, res) => {
  try {
    const ev = await EV.findById(req.params.id);
    if (!ev) {
      return res.status(404).json({ message: 'EV not found' });
    }

    await ev.remove();
    res.json({ message: 'EV deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
