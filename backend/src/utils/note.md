## Simplified Database Schema

### Users

- `firstName`
- `lastName`
- `email`
- `password` hash the password before saving in data base
- `address`
- `phoneNumber`
- `createdAt`

### Address

- `street`
- `city`
- `state`
- `postalCode`

### Product

- `name`
- `description`
- `quantity`
- `category`
- `price` (Fixed or hourly rate as a simple string or number)
- `image`
- `createdAt`

### Comment

- `user`
- `product`
- `quantity`
- `content`
- `createdAt`

## Simplified RESTful API Endpoints

### User Authentication

- `POST /auth/register`: Register a new user.
- `POST /auth/login`: Authenticate a user.

### User Profiles

- `GET /users/:userID`: Retrieve a user profile by ID.
- `PUT /users/:userID`: Update a user profile.
- `DELETE /users/:userID`: Delete a user profile.

### Review

- `POST /reviews`: Allow a user to create a new review.
- `GET /reviews`: Retrieve all review.
- `PUT /reviews/:reviewID`: Update a service listing.
- `DELETE /reviews/:reviewID`: Remove a service listing.
