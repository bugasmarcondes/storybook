import React from "react";
import { storiesOf } from "@storybook/react";
import MajorBanner from "../components/major.banner";
import MinorBanner from "../components/minor.banner";
import { text } from "@storybook/addon-knobs";

storiesOf("Component | Banners/Major", module)
  .add("With only title", () => {
    // Title = label
    // Banner title = default value
    const title = text("Title", "Banner title");

    return (
      <MajorBanner
        title={title}
        photo="People Outdoors/shutterstock_116403520.jpg"
      />
    );
  })
  .add("With all text options", () => {
    const title = text("Title", "Banner title");

    return (
      <MajorBanner
        title={title}
        subtitle="Banner subtitle"
        body="Banner body"
        photo="People Outdoors/shutterstock_116403520.jpg"
      />
    );
  });

storiesOf("Component | Banners/Minor", module)
  .add("No pictures", () => {
    const title = text("Title", "Banner title");

    return (
      <MinorBanner
        title={title}
        subtitle="Banner subtitle"
        body="Banner body"
      />
    );
  })
  .add("With all text options", () => {
    const title = text("Title", "Banner title");

    return (
      <MinorBanner
        title={title}
        subtitle="Banner subtitle"
        body="Banner body"
        leftPhoto="Products/boots/shutterstock_66842440.jpg"
        rightPhoto="Products/boots/shutterstock_1121278055.jpg"
      />
    );
  });
