'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./thirdweb-dev-wallets-evm-connectors-email.cjs.prod.js");
} else {
  module.exports = require("./thirdweb-dev-wallets-evm-connectors-email.cjs.dev.js");
}
