import { Selector } from "testcafe";

export class CalculatorPage {
  button0 = Selector('[data-test="0"]');
  button1 = Selector('[data-test="1"]');
  button2 = Selector('[data-test="2"]');
  button3 = Selector('[data-test="3"]');
  button4 = Selector('[data-test="4"]');
  button5 = Selector('[data-test="5"]');
  button6 = Selector('[data-test="6"]');
  button7 = Selector('[data-test="7"]');
  button8 = Selector('[data-test="8"]');
  button9 = Selector('[data-test="9"]');
  buttonAdd = Selector('[data-test="+"]');
  buttonSubtract = Selector('[data-test="-"]');
  buttonMultiply = Selector('[data-test="X"]');
  buttonDivide = Selector('[data-test="/"]');
  buttonEqual = Selector('[data-test="="]');
  buttonClear = Selector('[data-test="C"]');
  result = Selector('[data-test="screen"]');
}
