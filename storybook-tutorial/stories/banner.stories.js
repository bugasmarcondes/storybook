import React from "react";
import { storiesOf } from "@storybook/react";
import MajorBanner from "../components/major.banner";
import MinorBanner from "../components/minor.banner";
import { text } from "@storybook/addon-knobs";
import withSeeAlso from "../seeAlso/index";

storiesOf("Component | Banners/Major", module)
  .addDecorator(withSeeAlso)
  .addParameters({
    info: {
      // overriding default for the story group
      // inline: false,
      text: `
      ### Lorem ipsum dolor
      Sit amet consectetur adipisicing elit.
      ___
      **Quis:** dolorem repellendus adipisci recusandae.
      
      **Odio tempore:** 1
      
      **Esse ex:** aperiam quas in totam tempora architecto quod sed iure aut praesentium.`,
    },
    seeAlso: {
      label: "Minor Banner",
      story: "Component | Banners/Minor",
    },
  })
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
  .add(
    "No pictures",
    () => {
      const title = text("Title", "Banner title");

      return (
        <MinorBanner
          title={title}
          subtitle="Banner subtitle"
          body="Banner body"
        />
      );
    },
    {
      info: {
        inline: false,
      },
    }
  )
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
