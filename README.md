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

<hr>

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

<hr>

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

### Theming storybook

- storybook-getting-started/.storybook/crfTheme.js
- storybook-getting-started/.storybook/config.js
- hierarchyRootSeparator
    - storiesOf("Component ***|*** Banners/Major", module)
- hierarchySeparator
    - storiesOf("Component | Banners ***/*** Major", module)
- panelPosition
    - can be at the bottom or right side
- isToolShown, isFullScreen, showNav (boolean values)

### Common issues and reminders

- If the story doesn't show up, check the filename, which must be in its correct form (xxx.stories.js)
- If components are not styled, remember to check if CSS is imported in component or in /.storybook/config.js
- Assets missing, check storybook script in package.json

<hr>

## Using add-ons

- Navigation pane (at the left, list of stories)
- *Story preview (at the top, + / - / refresh)
- *Panels (at the bottom)

\*Where add-ons are used most

- Decorators, are wrapper components
- Always check if the installed add-on is registered in /.storybook/addons.js

### With info

- Shows how to use the components
- Started having problems when trying to execute storybook, and solved...
    1. deleted /node_modules
    2. npx -p @storybook/cli sb init
    3. npm install
    4. npm run storybook
- storybook-getting-started/stories/button.stories.js
- storybook-getting-started/.storybook/config.js

### Knobs

- Allow us to dynamically change the data, and see how that data would perform on the component
    1. storybook-getting-started/.storybook/config.js
    2. storybook-getting-started/stories/banner.stories.js
    3. storybook-getting-started/.storybook/addons.js
- Knobs could be Boolean, Number, Object, Select, Date, Files
    - https://github.com/storybooks/storybook/tree/master/addons/knobs

### Override configs

- storybook-getting-started/stories/banner.stories.js
    - We can set configurations Globally, Group level or Story level
- We can also set Info Options like Header and Source, Prop Tables, Styles, Max Props
    - https://github.com/storybooks/storybook/tree/master/addons/info
- Complete list of addons
    - https://storybook.js.org/addons

<hr>

## Creating an Add-on

### Creating an add-on
### Creating the panel
### Receiving data

- Select story, Event fired, Panel added, Event fired
- Displaying data inside the panel

- storybook/storybook-tutorial/seeAlso/register.js
- storybook/storybook-tutorial/.storybook/addons.js
- storybook/storybook-tutorial/seeAlso/index.js
- storybook/storybook-tutorial/stories/banner.stories.js

### Storybook API

- getChannel, provides a channel so that you can communicate between the story and the Storybook manager. This is how we fired our story selected event.
- register, provides storybook api to your addon.
- addPanel, create a new panel.
- selectStory, selectInCurrentKind (select story)
- setQueryParams, getQueryParams (url)
- onStory(), (when user navigates between stories)

<hr>

## Deploying Storybook and Next Steps

- storybook/storybook-tutorial/package.json
- add "-s ./Images"
- run script "build-storybook"
- storybook will generate a path for the output
- static hosting options (locally or via netlify, aws)

- https://storybook.js.org/docs/basics/introduction/ (click in edit this page)
- https://storybook.js.org/community/