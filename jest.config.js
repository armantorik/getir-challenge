let folder = '**';
const arg = process.argv[process.argv.length - 1];
if (arg.search('m=') !== -1) {
  const param = arg.split('=')[1];
  folder = param.charAt(0).toUpperCase() + param.slice(1);
}

module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: [`**/${folder}/Tests/IT/*.+(ts|js)`],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testEnvironment: 'node',
  setupFiles: ["<rootDir>/.jest/setEnvVars.js"],

};
