module.exports = {
  devServer: {
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    proxy: {
      // change xxx-api/login => /mock-api/v1/login
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      // [process.env.VUE_APP_BASE_API]: {
      //   target: `http://localhost:${mockServerPort}/mock-api/v1`,
      //   changeOrigin: true, // needed for virtual hosted sites
      //   ws: true, // proxy websockets
      //   pathRewrite: {
      //     [`^${process.env.VUE_APP_BASE_API}`]: '',
      //   },
      // },
      "/apis": {
        //将www.exaple.com印射为/apis
        target: "http://localhost:7001/", // 接口域名
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, //是否跨域
        ws: true,
        pathRewrite: {
          "^/apis": "", //需要rewrite的,
        },
      },
    },
  },
};
