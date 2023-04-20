const mongoose = require("mongoose");
const supertest = require("supertest");
require("dotenv").config();

const app = require("../app");

const EMAIL = "testuser01@example.com";
const PASSWORD = "testpassword";

// Connecting to the database before each test.
beforeEach(async () => {
    await mongoose.connect(process.env.MONGODB_URI);
});

// Closing database connection after each test.
afterEach(async () => {
    await mongoose.connection.close();
});

// TEST_CASE 1
describe("POST /api/auth/createuser", () => {
    it("it should create a new user and return an authentication token", async () => {
        const user = {
            name: "Test User",
            username: "TestUser@01",
            email: EMAIL,
            password: PASSWORD,
            hasPremium: true,
        };

        const response = await supertest(app)
            .post("/api/auth/createuser")
            .send(user);

        expect(response.status).toBe(201);
    });
});

// TEST-CASE 2
describe("POST /api/auth/delete", () => {
    it("it should delete a user from auth-token", async () => {
        const token = await supertest(app).post("/api/auth/login").send({
            email: EMAIL,
            password: PASSWORD,
        });

        const response = await supertest(app)
            .delete("/api/auth/delete")
            .set({ "auth-token": token.body.authToken });

        expect(response.status).toBe(204);
    });
});