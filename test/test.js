const request = require("supertest");
const app = require("../app");

describe("REST_API", () => {
    test("GET /api/coins", (done) => {
        request(app).get("/api/coins").expect(200, done);
    });
});
