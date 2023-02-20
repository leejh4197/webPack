import { resolve } from "node:path";

const commonConfig = {
  target: ["web", "browserslist"],
  resolve: {
    extensions: [".js", ".jsx", ".json", ".wasm"],
  },
  entry: {
    main: resolve("src/main.jsx"),
  },
  output: {
    path: resolve("public"),
    filename: "[name].bundle.js",
  },
};

export default commonConfig;

/* 타겟을 browserslist로 지정
browserlist에서 지정한 조건들을 main.js파일에 적용시켜 최적화시키겠다.
(resolve는 운영체제에 맞게 최적화 시킨다는 의미)
output은 웹팩의 번들링한 파일을 퍼블릭 폴더에 만들겠다는 의미.

common.js파일은 웹팩의 초기 설정 값을 담당하는 파일이다. 
commen의 설정값들을 dev, prod에게 merge를 해준다.
*/
