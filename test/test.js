import { expect } from "chai";

const helloWorld = () => "Hello World!";
describe("Hello World", function () {
    it("says hello", function () {
        expect(helloWorld()).equal("Hello World!");
    });
});
