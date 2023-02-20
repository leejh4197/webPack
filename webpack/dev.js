import { merge } from "webpack-merge";
import commonConfig from "./common.js";
import devServer from "./server.js";

const devConfig = merge(commonConfig, {
  mode: "development",
  devtool: "eval-cheap-source-map",
  devServer,
});

export default devConfig;

/* webpack-merge란 웹팩을 지금 처럼 분리하여 관리할때 공통 파일과 다른 파일을 연동시키기위해 필요한 라이브러리 이다. 
eval-cheap-source-map은 개발 빌드를 위한 옵션이다.
*/
