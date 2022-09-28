const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// TODO: price
const price = 0.00555; // REQUIRED

// General metadata for Ethereum
const collectionName = "Morning Flowers"; // REQUIRED
const description = "A collection of morning flowers collected in a fragrant secret garden. Bring home the one that matches your mood."; // REQUIRED

// Item name pattern: "namePrefix #{number}"
const namePrefix = "Morning Flower"; // REQUIRED

// TODO: ABSOLUTE path
//       => will be used in Uploader project (COPY _metadata.json from ./build/json to uploader/data/)
const baseUri = "/Users/stan/projects/generate-nfts/build/images"; // REQUIRED
// const baseUri = "ipfs://NewUriToReplace";

// Personal Custom Page / Social / Anything
const external_link_name = null;

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// NOTE: If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    // MAX combinations:
    //  M^N
    // where:
    //  M => traits (versions)
    //  N => layers(categories)
    growEditionSizeTo: 4, // REQUIRED
    layersOrder: [ // REQUIRED
      { name: "background" },
      { name: "vase" },
      { name: "basic flowers" },
      { name: "anemone" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 512,   // REQUIRED
  height: 512, // REQUIRED
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  collectionName,
  external_link_name,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  price,
};
