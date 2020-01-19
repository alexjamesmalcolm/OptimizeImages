const webp = require("webp-converter");

const inputPath = process.env.INPUT; // test/input/
console.log(`The INPUT is: ${inputPath}`);
const outputPath = process.env.OUTPUT || inputPath; // test/output/
console.log(`The OUTPUT is: ${outputPath}`);

const glob = require("glob");

glob(`${inputPath}*`, (_er, files) => {
  files.forEach(file => {
    const cleanedFile = file.replace(inputPath, "");
    const webpFileName = `${cleanedFile.split(".")[0]}.webp`;
    if (cleanedFile !== webpFileName) {
      webp.cwebp(
        file,
        `${outputPath}${webpFileName}`,
        "-q 80",
        (status, error) => {
          console.log(status, error);
        }
      );
    }
  });
});
