const CracoAntDesignPlugin = require("craco-antd");

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        options: {
          customizeTheme: {
            "@primary-color": "#1DA57A",
            "@link-color": "#1DA57A",
          },
        },
      },
    },
  ],
};
