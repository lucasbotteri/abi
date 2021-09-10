const CracoAntDesignPlugin = require("craco-antd");
const CracoAlias = require("craco-alias");

const PRIMARY_COLOR = "#f3ca20";
const SECONDARY_COLOR = "#000000";
const TEXT_COLOR = "#a2a2a2";

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          "@layout-footer-background": SECONDARY_COLOR,
          "@layout-header-background": SECONDARY_COLOR,
          "@text-color": TEXT_COLOR,
          "@primary-color": PRIMARY_COLOR,
        },
      },
    },
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.alias.json",
      },
    },
  ],
};
