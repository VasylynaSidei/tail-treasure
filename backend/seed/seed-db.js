import mongoose from "mongoose";
import { faker } from "@faker-js/faker";
import "dotenv/config";

import { Review } from "../src/models/ReviewModel.js";
import { User } from "../src/models/UserModel.js";
// import { Rating } from "../src/models/RatingModel.js";

// IIFE -> Imediatly Invoked Function expression
(async () => {
  try {
    // ! connect to database
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("connected to db");

    // ! delete all the Review
    // purging the data/database
    await Review.deleteMany({}); // deleting all the documents within a collection
    console.log("reviews deleted");

    // ! delete all the Users
    await User.deleteMany({});
    console.log("users deleted");

    // ! create bunch of new records (based on fake data)
    // "populate" -> what were doing is populating/making a load of new document for our collection
    const newReview = Array.from(
      { length: 10 },
      () =>
        new Review({
          productId: faker.number.int({ min: 1, max: 100000 }),
          userId: mongoose.Types.ObjectId(),
          rating: faker.number.int({ min: 1, max: 5 }),
          comment: faker.lorem.sentence(),
          createdAt: faker.date.past(),
        })
    );

    await Review.insertMany(newReview);
    console.log("inserted new reviews");

    // ! create a bunch of fake users

    await Promise.all(
      Array.from({ length: 10 }, async () => {
        const newUser = new User({
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          email: faker.internet.email(),
          password: faker.internet.password(),
          address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            postalCode: faker.location.zipCode(),
            country: faker.location.country(),
          },
          phoneNumber: faker.phone.phoneNumber(),
        });

        return newUser.save();
      })
    );
    console.log("inserted new users");
  } catch (error) {
    console.error(error);
  } finally {
    mongoose.connection.close();
  }
})();
