const http = require('http');

// Create the welcome message
const welcomeMessage = 'welcome my node.js';

// Create HTTP server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(welcomeMessage);
});

// Define port
const port = process.env.PORT || 3000;

// Start server if not being required by another module (like tests)
if (!module.parent) {
  server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
}

// Export server for testing
module.exports = { server, welcomeMessage };