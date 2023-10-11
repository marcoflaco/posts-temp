# Posts Temp

A Vue.js 3 application. This application lets users manipulate the order of posts and visualize the actions committed during this process.

## Business Requirements

### Left Side Component (Post List)

- Loads its initial state from [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts).
- Allows the user to update the state via the UI.
- Emits the list of actions committed to the right side component (List of Actions Committed).

### Functional Requirements

- Only displays the first 5 posts.
- Names cell titles as `Post id`, where `id` comes from the post's `id` attribute, e.g. `Post 1`.
- Users can change the order of posts using up/down arrows.
- Changing the order of posts adds an action to the top of the "List of Actions Committed" component. For example, moving `Post 1` below `Post 2` will show “Moved `Post 1` from `index 0` to `index 1`” at the top of the list.
- Users can "Time Travel" by clicking the associated button on an action card. This rewinds the order of the posts to its state before that action. It also removes the clicked action card and cards above it.

## Getting Started

### Prerequisites

- Node.js & npm

# Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
