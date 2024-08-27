const {
  add,
  subtract,
  multiply,
  divide,
  modulus,
  fetchData,
} = require("./functions");

describe("Arithmetic Functions", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("subtracts 4 - 2 to equal 2", () => {
    expect(subtract(4, 2)).toBe(2);
  });

  test("multiplies 3 * 5 to equal 15", () => {
    expect(multiply(3, 5)).toBe(15);
  });

  test("divides 8 / 2 to equal 4", () => {
    expect(divide(8, 2)).toBe(4);
  });

  test("division by zero throws an error", () => {
    expect(() => {
      divide(10, 0);
    }).toThrow("Division by zero is not allowed");
  });

  test("modulus 10 % 3 to equal 1", () => {
    expect(modulus(10, 3)).toBe(1);
  });
});
describe("fetchData", () => {
  it("should fetch data from the API", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({ message: "Test message" }),
    });

    // Mock the console methods to check if they are called
    console.log = jest.fn();

    await fetchData();

    expect(console.log).toHaveBeenCalledWith({ message: "Test message" });
  });

  it("should handle errors", async () => {
    global.fetch = jest.fn().mockRejectedValue("API Error");

    // Mock the console methods to check if they are called
    console.error = jest.fn();

    await fetchData();

    expect(console.error).toHaveBeenCalledWith("API Error");
  });
});
