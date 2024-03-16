// controllers/aboutController.js

// Function to handle GET request to the about page
exports.getAboutPage = (req, res) => {
    // Render the about page template (about.pug)
    res.render('about', { title: 'About Page' });
};
