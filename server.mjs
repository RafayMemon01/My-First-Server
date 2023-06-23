console.log("Server Was Working");
import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!' + new Date())
});

app.listen(PORT, () => {
  console.log(`Example Server listening on port ${PORT}`)
});