# Express.js Route Handler Missing Error Handling

This repository demonstrates a common error in Express.js route handlers: missing error handling for invalid input and not returning appropriate HTTP status codes.

The `bug.js` file shows a route that attempts to retrieve a user by ID. However, it lacks proper error handling for scenarios where:

1. The `userId` is not a valid number.
2. A user with the given ID does not exist.

The `bugSolution.js` file provides a corrected version with improved error handling and proper HTTP status code responses.