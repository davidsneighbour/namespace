const defaultStandardVersion = require('@davidsneighbour/standard-version-config');
const localStandardVersion = {
  skip: {
    changelog: true
  }
};

const standardVersion = {
  ...defaultStandardVersion,
  ...localStandardVersion,
};
module.exports = standardVersion;
