const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling if userId is not a number
  const user = users.find(user => user.id === parseInt(userId));
  if (!user) {
    // Missing proper error handling.  Should return 404
    res.send('User not found'); 
  } else {
    res.json(user);
  }
});

// ... other routes ...

app.listen(3000, () => console.log('Server listening on port 3000'));