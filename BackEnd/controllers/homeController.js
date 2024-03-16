// controllers/homeController.js

// Function to handle GET request to the home page
exports.getHomePage = (req, res) => {
    // Render the home page template (home.pug)
    res.render('home', { title: 'Home Page' });
};
