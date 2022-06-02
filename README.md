# units 🤓 guru

This repo is a small application to convert gas price and currency from different country. For every request, it pulls the latest exchange rate, and converts the amount to the target currency. The main purpose of this repository is to test [remix.run](https://remix.run) framework and its integration with lambdas.

You can view a live demo at [units.guru](https://units.guru)

## Development

- Install dependencies and build the application

  ```sh
  npm run install && npm run build
  ```

- Start dev server:

  ```sh
  npm run dev
  ```

This starts your app in development mode, rebuilding assets on file changes.

## Issue

- remix.run use npm, and it's not possible to use yarn
- I was unable to strap a cnd in front of the generated cloudformation template
- the lambda integration is far from perfect from a developer point of view. you are locked with the architect framework, and no integration is possible out of the box with terraform

## Todo

- [ ] Setup CI with github action
- [ ] Add some integration test with cypress
- [ ] Stop serving javascript client side and use the power of remix.run
- [ ] cleanup the repo
