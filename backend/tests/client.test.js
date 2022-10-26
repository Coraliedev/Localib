const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../server");

require("dotenv").config({ path: "./src/config/.env" });

/* Connecting to the database before each test. */
beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_URL);
});

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});

/* Testing the GET route. */
describe("GET /client", () => {
  it("should return all clients", async () => {
    const res = await request(app).get("/client");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

/* Testing the POST route. */
describe("POST /client", () => {
  it("should create a new client", async () => {
    const res = await request(app).post("/client").send({
      firstname: "Test Client",
      lastname: "Test Client",
      email: "test2@gmail.com",
      phone: "514-555-5555",
      birthdate: "1990-01-01",
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("firstname");
    expect(res.body.firstname).toBe("Test Client");
  });
});
