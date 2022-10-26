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
describe("GET /vehicle", () => {
  it("should return all vehicles", async () => {
    const res = await request(app).get("/vehicle");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

/* Testing the POST route. */
describe("POST /vehicle", () => {
  it("should create a new vehicle", async () => {
    const res = await request(app).post("/vehicle").send({
      brand: "brand1",
      model: "model1",
      matriculation: "matriculation3",
      state: "B",
      locationPrice: 100,
      type: "Moto",
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("brand");
    expect(res.body.brand).toBe("brand1");
  });
});

/* Testint get vehicle by id. */
describe("GET /vehicle/:id", () => {
  it("should return a vehicle", async () => {
    const res = await request(app).get("/vehicle/6358e95c4028c70a9219c2d4");
    expect(res.statusCode).toBe(200);
    expect(res.body.brand).toBe("brand1");
  });
});

/* Testing the PUT route. */
describe("PUT /vehicle/:id", () => {
  it("should update a vehicle", async () => {
    const res = await request(app)
      .put("/vehicle/6339fb28bf00f017bdb653da")
      .send({
        brand: "brand2",
      });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("brand");
    expect(res.body.brand).toBe("brand2");
  });
});

/* Testing the DELETE route. */
describe("DELETE /vehicle/:id", () => {
  it("should delete a vehicle", async () => {
    const res = await request(app).delete("/vehicle/6339fb1abf00f017bdb653d6");
  });
});