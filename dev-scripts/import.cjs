/* Example usage

npm run import [author] [url] [prefix] [webp-dir]

*/

const fs = require("fs");
const path = require("path");

// constants
const APP_DIR = process.cwd();
const IMG_DIR = APP_DIR + "/static/img/";
const DATA_DIR = APP_DIR + "/src/lib/data/data.json";

// argument parsing
const args = process.argv;
const author = args[2];
const source = args[3];
const prefix = args[4];
const dir = args[5];

// get absolute path for dir arg
const absoluteDir = path.resolve(dir);

console.log("\n🚀 Started import!");
console.log("🔍 Looking for .webp files in directory...");

// get all webp files in current directory
const files = fs.readdirSync(dir).filter(file => {
  return path.extname(file) == ".webp";
});

console.log("🐕 Fetching data.json...");

// get json from file
const data = JSON.parse(fs.readFileSync(DATA_DIR));

if (data) {
  console.log("🚚 Parsing data & copying screenshots...");

  const entry = {
    author: author,
    source: source,
    prefix: prefix,
    screenshots: {}
  };

  // alter data
  files.forEach(file => {
    // format for screenshots is:
    // [name]_[sectionName].webp

    // separate data from img name
    const fullName = path.parse(file).name;
    const parts = fullName.split("_");
    const name = parts[0];
    const sectionName = parts[1];

    // build new name
    const newName = `${prefix}-${name}.webp`
    entry.screenshots[name] = sectionName;

    // copy image to new location (renamed)
    fs.copyFileSync(`${absoluteDir}/${file}`, IMG_DIR + newName);
  });

  data.groups.push(entry);

  console.log("✍️  Writing new entry to data.json...");
  fs.writeFileSync(DATA_DIR, JSON.stringify(data))

  console.log("🗣️  Logging entry:");
  console.log(entry);

  console.log("\n💖 Finished import!\n");
}