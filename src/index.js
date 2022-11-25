"use strict";

// "packageManager": "yarn@3.3.0"

const boostrap = require("./bootstrap");

module.exports = {
  async bootstrap() {
    await boostrap();
  },
};
