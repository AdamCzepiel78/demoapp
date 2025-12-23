import request from "supertest";
import app from "../src/app.js";  // Note: include .js extension with ES modules

describe("Express App", () => {
  describe("GET /", () => {
    it("should return hello world message", async () => {
      const response = await request(app).get("/");

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("message", "Hello World!");
    });
  });

  describe("GET /health", () => {
    it("should return health status", async () => {
      const response = await request(app).get("/health");

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("status", "OK");
      expect(response.body).toHaveProperty("timestamp");
      expect(response.body).toHaveProperty("service", "demoapp");
    });
  });
});
