module.exports = {
    preset: "react-native",
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js"
    ],
    transform: {
        "^.+\\.(js)$": "<rootDir>/node_modules/babel-jest",
        '\\.ts$': 'ts-jest',
    },
    testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
    testPathIgnorePatterns: [
        "\\.snap$",
        "<rootDir>/node_modules/"
    ],
    cacheDirectory: ".jest/cache",
    collectCoverage: true, //можно поглядеть покрытие
};