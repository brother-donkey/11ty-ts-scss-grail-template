module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("dist-css/index.css");
  eleventyConfig.addPassthroughCopy("dist-js/index.js");

  return {
    pathPrefix: "/",
    dir: {
      layouts: "_layouts",
      includes: "_includes",
    },
  };
};
