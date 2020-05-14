import React from "react";
import addons from "@storybook/addons";
import { STORY_CHANGED } from "@storybook/core-events";

class SeeAlsoPanel extends React.Component {
  state = {
    seeAlso: {},
  };

  setData = (seeAlso) => {
    this.setState({
      seeAlso,
    });
  };

  clearState = () => {
    this.setState({
      seeAlso: null,
    });
  };

  componentDidMount() {
    const { api } = this.props;
    api.on("pluralsightSeeAlso/storySelected", this.setData);
    api.on(STORY_CHANGED, this.clearState);
  }

  componentWillUnmount() {
    const { api } = this.props;
    api.off("pluralsightSeeAlso/storySelected", this.setData);
    api.off(STORY_CHANGED, this.clearState);
  }

  render() {
    const { seeAlso } = this.state;
    const { api } = this.props;

    return seeAlso ? (
      <a onClick={() => api.selectStory(seeAlso.story)}>{seeAlso.label}</a>
    ) : null;
  }
}

addons.register("pluralsight-see-also", (api) => {
  addons.addPanel("pluralsight-see-also/panel", {
    title: "See also",
    render: ({ key }) => <SeeAlsoPanel key={key} api={api} />,
  });
});
