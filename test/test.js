const request = require("supertest");
const app = require("../app");

describe("REST_API", () => {
    test("GET /api/coins", (done) => {
        request(app).get("/api/coins").expect(200, done);
    });
    test("GET /api/coin/:id", (done) => {
        request(app).get("/api/coins/bitcoin").expect(200, done);
    });
    test("GET /api/coins/:ids", (done) => {
        request(app).get("/api/coins/bitcoin,ethereum").expect(200, done);
    });
});
