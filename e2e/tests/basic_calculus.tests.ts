import { CalculatorPage } from "../pages";

const page = new CalculatorPage();
const URL = "http://localhost:3000";
const TESTSPEED = 0.5;

fixture`Basic Calculus in React Calculator`.page(URL);

test("Addition", async (t) => {
  console.log("7+5=12");
  await t
    .setTestSpeed(TESTSPEED)
    .click(page.buttonClear)
    .click(page.button7)
    .click(page.buttonAdd)
    .click(page.button5)
    .click(page.buttonEqual)
    .expect(page.result.innerText)
    .eql("12");
});

test("Addition Wrong", async (t) => {
  console.log("7+5!=13");
  await t
    .setTestSpeed(TESTSPEED)
    .click(page.buttonClear)
    .click(page.button7)
    .click(page.buttonAdd)
    .click(page.button5)
    .click(page.buttonEqual)
    .expect(page.result.innerText)
    .notEql("13");
});

test("Multiply", async (t) => {
  console.log("7*7=49");
  await t
    .setTestSpeed(TESTSPEED)
    .click(page.buttonClear)
    .click(page.button7)
    .click(page.buttonMultiply)
    .click(page.button7)
    .click(page.buttonEqual)
    .expect(page.result.innerText)
    .eql("49")
    .wait(3000);
});
