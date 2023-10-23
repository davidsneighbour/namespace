const defaultStandardVersion = require('@davidsneighbour/standard-version-config');
const localStandardVersion = {
  scripts: {
    prerelease: "./bin/repo/hooks/prerelease",
  },
  skip: {
    changelog: true
  }
};

const standardVersion = {
  ...defaultStandardVersion,
  ...localStandardVersion,
};
module.exports = standardVersion;
