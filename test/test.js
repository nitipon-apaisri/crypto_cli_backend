const request = require("supertest");
const app = require("../app");

describe("REST_API", () => {
    test("GET /api/coins", (done) => {
        request(app).get("/api/coins").expect(200, done);
    });
});
describe("REST_API", () => {
    test("GET /api/coins/:id", (done) => {
        request(app).get("/api/coins/bitcoin").expect(200, done);
    });
});
