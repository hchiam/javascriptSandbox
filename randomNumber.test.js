const { getRandomNumber } = require("./randomNumber.js");

describe("the solution", () => {
  it("works on [0,1)", () => {
    const a = 0;
    const b = 1;
    let output = getRandomNumber(a, b);
    expect(output % 1).toBeGreaterThanOrEqual(0);
    expect(output).toBeLessThan(1);
    output = getRandomNumber(a, b);
    expect(output % 1).toBeGreaterThanOrEqual(0);
    expect(output).toBeLessThan(1);
    output = getRandomNumber(a, b);
    expect(output % 1).toBeGreaterThanOrEqual(0);
    expect(output).toBeLessThan(1);
    output = getRandomNumber(a, b);
    expect(output % 1).toBeGreaterThanOrEqual(0);
    expect(output).toBeLessThan(1);
    output = getRandomNumber(a, b);
    expect(output % 1).toBeGreaterThanOrEqual(0);
    expect(output).toBeLessThan(1);
  });

  it("works on [0,2)", () => {
    const a = 0;
    const b = 2;
    let output = getRandomNumber(a, b);
    expect(output % 1).toBeGreaterThan(0);
    expect(output).toBeLessThan(2);
    expect(output).toBeGreaterThanOrEqual(0);
    output = getRandomNumber(a, b);
    expect(output % 1).toBeGreaterThan(0);
    expect(output).toBeLessThan(2);
    expect(output).toBeGreaterThanOrEqual(0);
    output = getRandomNumber(a, b);
    expect(output % 1).toBeGreaterThan(0);
    expect(output).toBeLessThan(2);
    expect(output).toBeGreaterThanOrEqual(0);
    output = getRandomNumber(a, b);
    expect(output % 1).toBeGreaterThan(0);
    expect(output).toBeLessThan(2);
    expect(output).toBeGreaterThanOrEqual(0);
    output = getRandomNumber(a, b);
    expect(output % 1).toBeGreaterThan(0);
    expect(output).toBeLessThan(2);
    expect(output).toBeGreaterThanOrEqual(0);
  });

  it("works on [1,2)", () => {
    const a = 1;
    const b = 2;
    let output = getRandomNumber(a, b);
    expect(output % 1).toBeGreaterThan(0);
    expect(output).toBeLessThan(2);
    expect(output).toBeGreaterThanOrEqual(1);
    output = getRandomNumber(a, b);
    expect(output % 1).toBeGreaterThan(0);
    expect(output).toBeLessThan(2);
    expect(output).toBeGreaterThanOrEqual(1);
    output = getRandomNumber(a, b);
    expect(output % 1).toBeGreaterThan(0);
    expect(output).toBeLessThan(2);
    expect(output).toBeGreaterThanOrEqual(1);
    output = getRandomNumber(a, b);
    expect(output % 1).toBeGreaterThan(0);
    expect(output).toBeLessThan(2);
    expect(output).toBeGreaterThanOrEqual(1);
    output = getRandomNumber(a, b);
    expect(output % 1).toBeGreaterThan(0);
    expect(output).toBeLessThan(2);
    expect(output).toBeGreaterThanOrEqual(1);
  });

  it("works on [2,3)", () => {
    const a = 2;
    const b = 3;
    let output = getRandomNumber(a, b);
    expect(output % 1).toBeGreaterThan(0);
    expect(output).toBeLessThan(3);
    expect(output).toBeGreaterThanOrEqual(2);
    output = getRandomNumber(a, b);
    expect(output % 1).toBeGreaterThan(0);
    expect(output).toBeLessThan(3);
    expect(output).toBeGreaterThanOrEqual(2);
    output = getRandomNumber(a, b);
    expect(output % 1).toBeGreaterThan(0);
    expect(output).toBeLessThan(3);
    expect(output).toBeGreaterThanOrEqual(2);
    output = getRandomNumber(a, b);
    expect(output % 1).toBeGreaterThan(0);
    expect(output).toBeLessThan(3);
    expect(output).toBeGreaterThanOrEqual(2);
    output = getRandomNumber(a, b);
    expect(output % 1).toBeGreaterThan(0);
    expect(output).toBeLessThan(3);
    expect(output).toBeGreaterThanOrEqual(2);
  });

  it("works on [5,10)", () => {
    const a = 5;
    const b = 10;
    let output = getRandomNumber(a, b);
    expect(output % 1).toBeGreaterThan(0);
    expect(output).toBeLessThan(10);
    expect(output).toBeGreaterThanOrEqual(5);
    output = getRandomNumber(a, b);
    expect(output % 1).toBeGreaterThan(0);
    expect(output).toBeLessThan(10);
    expect(output).toBeGreaterThanOrEqual(5);
    output = getRandomNumber(a, b);
    expect(output % 1).toBeGreaterThan(0);
    expect(output).toBeLessThan(10);
    expect(output).toBeGreaterThanOrEqual(5);
    output = getRandomNumber(a, b);
    expect(output % 1).toBeGreaterThan(0);
    expect(output).toBeLessThan(10);
    expect(output).toBeGreaterThanOrEqual(5);
    output = getRandomNumber(a, b);
    expect(output % 1).toBeGreaterThan(0);
    expect(output).toBeLessThan(10);
    expect(output).toBeGreaterThanOrEqual(5);
  });
});
