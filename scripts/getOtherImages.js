const fs = require("fs");
const path = require("path");

const folderPath = "./gift_comms/small";
const outputPath = "./scripts/gift_comms.js";
const validExtensions = [".png", ".jpg", ".jpeg", ".webp"];

fs.readdir(folderPath, { withFileTypes: true }, (err, files) => {
  const imageFiles = [];

  files.forEach((file) => {
    const ext = path.extname(file.name).toLowerCase();
    if (validExtensions.includes(ext)) {
      imageFiles.push({
        path: `./gift_comms/small/${file.name}`,
      });
    }
  });

  imageFiles.sort((a, b) => a.path.localeCompare(b.path));
  const imageList = imageFiles.map((file) => file.path);

  const fileContent = `const gift_comms = ${JSON.stringify(imageList, null, 2)};\n`;
  fs.writeFileSync(outputPath, fileContent);
  console.log(`Successfully generated script with ${imageList.length} images!`);
});
