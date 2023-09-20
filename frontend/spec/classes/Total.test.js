import Total from "../../classes/Total";

describe("Total Class", () => {
  it("should create a new class object with a value of 0", () => {
    const total = new Total();
    expect(total.getTotal()).toEqual(0);
  })

  it("should increment the value when the incrementTotal function is invoked", () => {
    const total = new Total();
    expect(total.getTotal()).toEqual(0);
    total.incrementTotal();
    expect(total.getTotal()).toEqual(1);
  })
})


