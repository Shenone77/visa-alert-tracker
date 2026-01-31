const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const dataPath = path.join(__dirname, "../data/alerts.json");

const ensureFile = () => {
  if (!fs.existsSync(dataPath)) {
    fs.mkdirSync(path.dirname(dataPath), { recursive: true });
    fs.writeFileSync(dataPath, JSON.stringify([]));
  }
};

const readData = () => {
  ensureFile();
  return JSON.parse(fs.readFileSync(dataPath, "utf-8"));
};

const writeData = (data) => {
  ensureFile();
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

// GET /alerts
router.get("/", (req, res, next) => {
  try {
    let alerts = readData();
    const { country, status } = req.query;

    if (country) alerts = alerts.filter(a => a.country === country);
    if (status) alerts = alerts.filter(a => a.status === status);

    res.status(200).json(alerts);
  } catch (err) {
    next(err);
  }
});

// POST /alerts
router.post("/", (req, res, next) => {
  try {
    const alerts = readData();

    const newAlert = {
      id: Date.now(),
      country: req.body.country,
      city: req.body.city,
      visaType: req.body.visaType,
      status: "Active",
      createdAt: new Date().toISOString()
    };

    alerts.push(newAlert);
    writeData(alerts);

    res.status(201).json(newAlert);
  } catch (err) {
    next(err);
  }
});

// PUT /alerts/:id
router.put("/:id", (req, res, next) => {
  try {
    const alerts = readData();
    const index = alerts.findIndex(a => a.id == req.params.id);

    if (index === -1)
      return res.status(404).json({ message: "Alert not found" });

    alerts[index] = { ...alerts[index], ...req.body };
    writeData(alerts);

    res.status(200).json(alerts[index]);
  } catch (err) {
    next(err);
  }
});

// DELETE /alerts/:id
router.delete("/:id", (req, res, next) => {
  try {
    let alerts = readData();
    alerts = alerts.filter(a => a.id != req.params.id);
    writeData(alerts);

    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
