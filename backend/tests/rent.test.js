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
describe("GET /rent", () => {
  it("should return all rents", async () => {
    const res = await request(app).get("/rent");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

/* Testing the POST route. */
describe("POST /rent", () => {
  it("should create a new rent", async () => {
    const res = await request(app).post("/rent").send({
      client: "6339fb2ebf00f017bdb653dd",
      vehicle: "6339fb28bf00f017bdb653da",
      startDate: "2020-10-10",
      endDate: "2020-10-10",
      price: 100,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("client");
    expect(res.body.client).toBe("6339fb2ebf00f017bdb653dd");
  });
});

/* Testint get rent by id. */
describe("GET /rent/:id", () => {
  it("should return a rent", async () => {
    const res = await request(app).get("/rent/6358ee4697b770dd418fe3e5");
    expect(res.statusCode).toBe(200);
    expect(res.body.price).toBe(100);
  });
});

/* Testing the PUT route. */
describe("PUT /rent/:id", () => {
  it("should update a rent", async () => {
    const res = await request(app)
      .put("/rent/6339fc97bf00f017bdb653e3")
      .send({
        price: 200,
      });
    expect(res.statusCode).toBe(200);
    expect(res.body.price).toBe(200);
  });
});

/* Testing the DELETE route. */
describe("DELETE /rent/:id", () => {
  it("should delete a rent", async () => {
    const res = await request(app).delete("/rent/6358ee9f14ccb67ac9a498fb");
    expect(res.statusCode).toBe(200);
  });
});



