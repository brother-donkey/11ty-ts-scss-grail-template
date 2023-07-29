const esbuild = require("esbuild");
const path = require("path");

const srcArg = process.argv[3];
const distArg = process.argv[2];
const entry = path.join(process.cwd(), srcArg);
const outfile = path.join(process.cwd(), distArg);

esbuild.build({
  entryPoints: [entry],
  bundle: true,
  minify: true,
  // sourcemap: true,
  target: ["chrome58", "firefox57", "safari11", "edge16"],
  outfile,
});
