// test/product.test.js
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../src/app");
const Product = require("../src/models/productModel");

chai.use(chaiHttp);
const expect = chai.expect;

describe("Products API", () => {
  beforeEach(async () => {
    // Clear the database before each test
    await Product.deleteMany({});
  });

  describe("POST /api/products", () => {
    it("should create a new product", async () => {
      const res = await chai
        .request(app)
        .post("/api/products")
        .send({
          name: "Sample Product",
          description: "Sample Description",
          price: 20,
          variants: [
            {
              name: "Variant 1",
              SKU: "SKU123",
              additionalCost: 5,
              stockCount: 10,
            },
            {
              name: "Variant 2",
              SKU: "SKU456",
              additionalCost: 8,
              stockCount: 15,
            },
          ],
        });

      expect(res).to.have.status(201);
      expect(res.body).to.have.property("_id");
      expect(res.body.name).to.equal("Sample Product");
      // Add more assertions as needed
    });
  });

  describe("GET /api/products", () => {
    it("should get all products", async () => {
      // Insert sample data into the database
      await Product.insertMany([
        {
          name: "Product 1",
          description: "Description 1",
          price: 25,
          variants: [
            {
              name: "Variant 1",
              SKU: "SKU123",
              additionalCost: 5,
              stockCount: 10,
            },
          ],
        },
        {
          name: "Product 2",
          description: "Description 2",
          price: 30,
          variants: [
            {
              name: "Variant 2",
              SKU: "SKU456",
              additionalCost: 8,
              stockCount: 15,
            },
          ],
        },
      ]);

      const res = await chai.request(app).get("/api/products");

      expect(res).to.have.status(200);
      expect(res.body).to.be.an("array");
      expect(res.body).to.have.length(2);
      // Add more assertions as needed
    });
  });

  // Add more test cases for other endpoints and functionality
});
