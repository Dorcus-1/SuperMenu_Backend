const Dish = require('../models/dishes');
const Menu = require('../models/menu');

exports.createDish = async (req, res) => {
    try {
      const { name, price, menuId,description } = req.body;
  
      // Validate input
      if (!name || !price || !menuId||!description) {
        return res.status(400).json({ error: 'All fields are required' });
      }
  
      // Check if menu exists
      const menu = await Menu.findByPk(menuId);
      if (!menu) {
        return res.status(404).json({ error: 'Menu not found' });
      }
      // Create dish
      const dish = await Dish.create({ name, price, menuId,description });
      res.status(201).json({ dish });
    } catch (error) {
      console.error('Error creating dish:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  // Get all dishes
  exports.getAllDishes = async (req, res) => {
    try {
      const dishes = await Dish.findAll({include:Menu});
      res.status(200).json({ dishes });
    } catch (error) {
      console.error('Error fetching dishes:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };