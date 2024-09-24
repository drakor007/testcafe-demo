import { Selector } from "testcafe";

export class PlaygroundPage {
  blogButton = Selector(
    "#widget-navbar-217834 > ul > li:nth-child(3) > a > div > span"
  ); // ('.icon-left.both.nav-link .title').nth(25))
  firstBlog = Selector(
    "div.swiper-slide.swiper-slide-active > div > div.image > a > img"
  ).nth(0); // ('[class="lazy-load"]').nth(0))
  name = Selector("#input-name");
  email = Selector("#input-email");
  comment = Selector("#input-comment");
  postComment = Selector("#button-comment");
  notification = Selector('[class="alert alert-success alert-dismissible"]');
}

export const TestData = {
  name: "David Klement",
  email: "email@me.com",
  comment:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet lorem nulla, eget laoreet lectus tempus eu. Proin molestie dignissim.",
  approvalNotify:
    "Thank you for your comment. It has been submitted to the webmaster for approval.",
};
