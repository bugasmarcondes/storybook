import React from "react";
import { storiesOf } from "@storybook/react";
import MajorBanner from "../components/major.banner";
import MinorBanner from "../components/minor.banner";

storiesOf("Component | Banners/Major", module)
  .add("With only title", () => (
    <MajorBanner
      title="Banner title"
      photo="People Outdoors/shutterstock_116403520.jpg"
    />
  ))
  .add("With all text options", () => (
    <MajorBanner
      title="Banner title"
      subtitle="Banner subtitle"
      body="Banner body"
      photo="People Outdoors/shutterstock_116403520.jpg"
    />
  ));

storiesOf("Component | Banners/Minor", module)
  .add("No pictures", () => (
    <MinorBanner
      title="Banner title"
      subtitle="Banner subtitle"
      body="Banner body"
    />
  ))
  .add("With all text options", () => (
    <MinorBanner
      title="Banner title"
      subtitle="Banner subtitle"
      body="Banner body"
      leftPhoto="Products/boots/shutterstock_66842440.jpg"
      rightPhoto="Products/boots/shutterstock_1121278055.jpg"
    />
  ));
