# SSR and all it's strangeness

## Running this thing

1. Edit `src/App.js` to export the component you wish
2. `yarn install`
3. `yarn build`
4. `node server/index.js`

Whenever you change anything in `src/App.js`, repeat steps 3) & 4).

## Getting SSR warnings

`react-scripts` builds for production. This means we don't get our lovely warnings about SSR.
To hack it, head into `node_modules/react-scripts/scripts/build.js` and change all 3 instances of 'production' to 'development'.
`yarn build` will now produce dev files in the `dist` directory.

When you load this in the browser, you will see some errors complaining about `manifest` and socket connection failing, but these
don't matter for what we are doing.
