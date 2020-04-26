import { addParameters, configure, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import crfTheme from "./crfTheme";

import "../bootstrap-reboot.min.css";
import "../bootstrap.css";
import "../bootstrap-grid.css";
import "../main.css";

addParameters({
  options: {
    theme: crfTheme,
  },
});

addDecorator(
  withInfo({
    inline: true,
  })
);

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
