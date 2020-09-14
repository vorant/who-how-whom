/** @typedef {import('ts-jest')} */
/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.spec.json",
      stringifyContentPathRegex: "\\.html$",
      astTransformers: {
        before: [
          "jest-preset-angular/build/InlineFilesTransformer",
          "jest-preset-angular/build/StripStylesTransformer",
        ],
      },
    },
  },
  transform: {
    "^.+\\.(ts|js|html)$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "html", "js", "json"],
  // snapshotSerializers: [
  //   "<rootDir>/node_modules/jest-preset-angular/serializers/html-comment",
  //   "<rootDir>/node_modules/jest-preset-angular/serializers/ng-snapshot",
  //   "<rootDir>/node_modules/jest-preset-angular/serializers/no-ng-attributes",
  // ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png)$": "<rootDir>/__mocks__/image.js",
    "^@lib/(.*)$": "<rootDir>/src/lib/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  modulePathIgnorePatterns: [
    "<rootDir>/src/app/core/",
    "<rootDir>/src/app/modules/",
    "<rootDir>/src/app/shared/",
  ],
  watchPathIgnorePatterns: [
    "<rootDir>/src/app/core/",
    "<rootDir>/src/app/modules/",
    "<rootDir>/src/app/shared/",
  ],
  testPathIgnorePatterns: [],
  coveragePathIgnorePatterns: [],
};
