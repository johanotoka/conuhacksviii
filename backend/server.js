const express = require('express');
const app = express();

// Set up middleware, routes, and other configurations

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
