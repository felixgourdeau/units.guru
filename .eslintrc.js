/**
 * @type {import('@types/eslint').Linter.BaseConfig}
 */
module.exports = {
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "@remix-run/eslint-config/jest-testing-library",
    "prettier",
  ],
  // we're using vitest which has a very similar API to jest
  // (so the linting plugins work nicely), but it we have to explicitly
  // set the jest version.
  settings: {
    jest: {
      version: 27,
    },
  },
  plugins: [
    "import"
  ],
  rules: {
     "import/order": [
      2,
      {
        "groups": [["builtin", "external"], "internal", "parent", ["index", "sibling"]],
        "newlines-between": "always",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        },
        "pathGroupsExcludedImportTypes": ["builtin"],
        "pathGroups": [
          {
            "pattern": "react",
            "group": "builtin",
            "position": "before"
          },
          {
            "pattern": "~/**",
            "group": "internal"
          },
          {
            "pattern": "utils/**",
            "group": "internal",
            "position": "after"
          }
        ]
      }
    ]
  }
};
