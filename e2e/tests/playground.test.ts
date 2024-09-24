import { PlaygroundPage, TestData } from "../pages";

const playground = new PlaygroundPage();
const TESTSPEED = 0.5;

const URL =
  "https://ecommerce-playground.lambdatest.io/index.php?route=common/home";

fixture`Test on Playground`.page(URL);

test("Create a new Blogpost", async (t) => {
  await t
    .setTestSpeed(TESTSPEED)
    //.debug()
    .click(playground.blogButton)
    // click on the first blog
    .click(playground.firstBlog)
    // fill the form and submit
    .typeText(playground.name, TestData.name)
    .typeText(playground.email, TestData.email)
    .typeText(playground.comment, TestData.comment, { paste: true })

    .click(playground.postComment)
    // check if the comment was submitted successfully using the notification
    .expect(playground.notification.innerText)
    .contains(TestData.approvalNotify)

    .wait(3000);
});
