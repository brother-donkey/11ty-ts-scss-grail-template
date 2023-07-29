//@ts-check
const path = require("path");
const { transform } = require("lightningcss");
const { outputFile } = require("fs-extra");
const sass = require("sass");

const srcArg = process.argv[2];
const distArg = process.argv[3];
const entry = path.join(process.cwd(), srcArg);
const outFile = path.join(process.cwd(), distArg);

const result = sass.compile(entry);

const { code } = transform({
  filename: outFile,
  code: Buffer.from(result.css),
  minify: true,
});

outputFile(outFile, code.toString());
