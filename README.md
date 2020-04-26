## Overview & Why use

Rapid prototyping, Sketch or Adobe XD
Designer can see how the component developed

Storybook, is a tool for developing UI components in isolation for React, Angular and Vue

Can be used to help with your Design System

Is a second application using our components

Payment Modal, you have to pass through various steps, just to view and check the component

- Advantages
    - Easy to do UX QA
    - Easy to collaborate
    - Easy to expirement with different staers
    - Easy to implement in the app

## Installing

### storybook-bugas (from the scratch)

- yarn init -y
- yarn add react react-dom
- yarn add @storybook/react -D
- yarn add babel-loader @babel/core -D
- package.json
    - add a script for "storybook": "start-storybook"
- add /.storybook/config.js
- add /stories
- yarn run storybook

### storybook-getting-started (into existing project)

- Clone the repository https://github.com/taylonr/storybook-getting-started.git
- npx -p @storybook/cli sb init

## Creating stories

### Writing the first story

- git checkout m3-installing-storybook
- storybook/storybook-getting-started/components/form/cta-button.js
- storybook/storybook-getting-started/stories/button.stories.js
- storybook/storybook-getting-started/.storybook/config.js
- yarn run storybook

- Parts of a story
    - Group title
    - Story title
    - Story body

### Using assets

- storybook/storybook-getting-started/stories/banner.stories.js
- storybook/storybook-getting-started/package.json
    - "storybook": "start-storybook -p 6006 -s ./Images",
- restart storybook script

### Grouping stories

- storiesOf("***Component | Banners/Major***", module)