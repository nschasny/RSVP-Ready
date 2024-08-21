const { Event } = require('../models');

exports.createEvent = async (req, res) => {
  const { title, description, date, location } = req.body;
  
  try {
    const event = await Event.create({
      title,
      description,
      date,
      location,
      userId: req.userId
    });
    res.status(201).json({ message: 'Event created successfully', event });
  } catch (error) {
    res.status(500).json({ message: 'Error creating event', error });
  }
};

exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll({ where: { userId: req.userId } });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching events', error });
  }
};