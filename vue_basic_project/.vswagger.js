module.exports = {
  template: "souche-finance#v2_bmw_vue", // 可为空使用默认接口生成模板
  suffix: [".vue", ".js"],
  safe: false, // 是否生成保护数据(需要后台支持)
  output: "./src/api", // 输出到api目录
  projectDir: "src", // 代码存放目录(可不配置默认为src路径)
  projects: [
    {
      version: "2.x",
      domain: "VUE_APP_BASE_URL", // 环境变量
      token: "JE8d6QWAx-4_5dIsmKsiVlddLck",
      modelName: "dictionary", // 模块化名称
      docUrl: ["https://dmoapi.lingyue-digital.com/dmo-base-dictionary/v2/api-docs"] // swagger base-url
    },
    {
      version: "2.x",
      domain: "VUE_APP_BASE_URL", // 环境变量
      token: "JE8d6QWAx-4_5dIsmKsiVlddLck",
      modelName: "master", // 模块化名称
      docUrl: ["https://dmoapi-dev.lingyue-digital.com/dmo-afs-bdc-master/v2/api-docs"] // swagger base-url
    }
  ] // 项目配置
};



