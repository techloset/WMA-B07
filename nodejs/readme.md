1. Query Parameters
Use Case: Filtering, sorting, or small data.
// Client sends
GET /api/data?filter=active&page=2

// Server (Node.js with Express)
app.get('/api/data', (req, res) => {
  const { filter, page } = req.query;
  res.json({ filter, page });
});

2. Route Parameters
Use Case: Identifying resources.
// Client sends
GET /api/user/123

// Server (Node.js with Express)
app.get('/api/user/:id', (req, res) => {
  const { id } = req.params;
  res.json({ userId: id });
});
3. Request Body
Use Case: Sending structured data.
// Client sends (POST request with JSON body)
POST /api/data
Content-Type: application/json
{
  "name": "John",
  "age": 30
}

// Server (Node.js with Express)
app.post('/api/data', (req, res) => {
  const { name, age } = x
  res.json({ received: { name, age } });
});

4. HTTP Headers
Use Case: Metadata like tokens.
// Client sends
GET /api/data
Authorization: Bearer abc123

// Server (Node.js with Express)
app.get('/api/data', (req, res) => {
  const token = req.headers['authorization'];
  
  res.json({ token });
});
5. Cookies
// Client sends
GET /api/data
Cookie: session_id=xyz789

// Server (Node.js with Express + Cookie-Parser)
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/api/data', (req, res) => {
  const sessionId = req.cookies.session_id;
  res.json({ sessionId });
});

6. socketio
7. graphql
8. server event