// const pathRegexp = require("path-to-regexp");
// node main.js
const { pathToRegexp } = require("./dist");

const opts = {
  // 开启大小写敏感
  sensitive: true,
  strict: false,
  end: true,
};

const paths = [
  // 这种格式好像不再可用了,但是在 express 仓库中的版本还是可以的
  // {
  //   path: "*",
  //   pathnames: ["/", "/hello"],
  // },
  {
    path: "/",
    pathnames: ["/hello"],
  },
  {
    path: "/users/:name",
    pathnames: ["/users", "/users/", "/Users/hxlhxl", "/users/hx"],
  },
];

paths.forEach(({ path, pathnames }) => {
  const regexp = pathToRegexp(path, [], opts);
  pathnames.forEach((pathname) => {
    console.log(`${path} -> ${pathname}: ${!!regexp.exec(pathname)}`);
  });
  console.log("\n");
});
