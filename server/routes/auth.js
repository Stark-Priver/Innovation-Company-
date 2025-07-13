const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models');
const { User } = db;

const { Role, Department } = db;

// Register
router.post('/register', async (req, res) => {
  const { firstName, lastName, email, password, role, department } = req.body;
  try {
    let user = await User.findOne({ where: { email } });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }
    const roleRecord = await Role.findOne({ where: { name: role } });
    const departmentRecord = await Department.findOne({ where: { name: department } });

    if (!roleRecord || !departmentRecord) {
      return res.status(400).json({ msg: 'Invalid role or department' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      roleId: roleRecord.id,
      departmentId: departmentRecord.id,
    });
    const payload = {
      user: {
        id: user.id,
        role: roleRecord.name,
        department: departmentRecord.name,
      },
    };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({
      where: { email },
      include: [
        { model: Role, attributes: ['name'] },
        { model: Department, attributes: ['name'] },
      ],
    });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }
    const payload = {
      user: {
        id: user.id,
        role: user.Role.name,
        department: user.Department.name,
      },
    };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
