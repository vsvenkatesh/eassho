module.exports ={
    "root": true,
    "parser": "@typescript-eslint/parser",
    "plugins": [
      "@typescript-eslint"
    ],
    "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended"
    ],
    "rules": { 
        "jsx-a11y/href-no-hash": ["off"],
        "react/jsx-props-no-spreading": ["off"],
        "no-console": [
          "error",
          {
            "allow": ["warn", "error"]
          }
        ],
        "multiline-ternary": 0,
        "no-unused-vars": "off",
        "no-shadow": 0,
        "@typescript-eslint/no-unused-vars": "error",
        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "error",
        "react/prop-types": 0,
        "max-len": [
          "warn",
          {
            "code": 80,
            "tabWidth": 2,
            "comments": 80,
            "ignoreComments": false,
            "ignoreTrailingComments": true,
            "ignoreUrls": true,
            "ignoreStrings": true,
            "ignoreTemplateLiterals": true,
            "ignoreRegExpLiterals": true
          }
        ]
    }
  }