
import path from "node:path";
import { Logger } from "@aurodesignsystem/auro-library/scripts/utils/logger.mjs";
import {
  processContentForFile,
  templateFiller,
} from "@aurodesignsystem/auro-library/scripts/utils/sharedFileProcessorUtils.mjs";

/**
 * Return absolute path of a file (does not check if file exists).
 * @param {string} filePath
 * @return {string}
 */
function getAbsolutePath(filePath) {
  return path.join(process.cwd(), filePath);
}

export const fileConfigs = () => [
  // README.md
  {
    identifier: "README.md",
    input: `${getAbsolutePath("docTemplates/README.md")}`,
    output: `${getAbsolutePath("README.md")}`,
  },
  // index.md
  {
    identifier: "index.md",
    input: `${getAbsolutePath("docs/partials/index.md")}`,
    output: `${getAbsolutePath("demo/index.md")}`,
    mdMagicConfig: {
      output: {
        directory: "./demo",
      },
    },
  },
  // api.md
  {
    identifier: "api.md",
    input: `${getAbsolutePath("docs/partials/api.md")}`,
    output:  `${getAbsolutePath("demo/api.md")}`,
    preProcessors: [templateFiller.formatApiTable],
  },
];

export const defaultDocsProcessorConfig = {
  component: undefined,
  overwriteLocalCopies: false,
  remoteReadmeVersion: "master",
};

/**
 *
 * @param {ProcessorConfig} config - The configuration for this processor.
 * @return {Promise<void>}
 */
export async function processDocFiles(config = defaultDocsProcessorConfig) {
  // setup
  await templateFiller.extractNames();

  for (const fileConfig of fileConfigs(config)) {
    try {
      // eslint-disable-next-line no-await-in-loop
      await processContentForFile(fileConfig);
    } catch (err) {
      Logger.error(`Error processing ${fileConfig.identifier}: ${err.message}`);
    }
  }
}

processDocFiles({ overwriteLocalCopies: false })
  .then(() => {
    Logger.log("Docs processed successfully");
  })
  .catch((err) => {
    Logger.error(`Error processing docs: ${err.message}`);
  });

