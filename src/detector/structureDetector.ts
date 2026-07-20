import fs from "fs-extra";
import { StructureInfo } from "../types/structure.js";

export async function detectStructure(): Promise<StructureInfo> {

    const files = await fs.readdir(process.cwd());

    const structure: StructureInfo = {
        source: [],
        tests: [],
        documentation: [],
        assets: [],
        configs: []
    };

    for (const file of files) {

        switch (file) {

            case "src":
            case "app":
            case "lib":
            case "server":
            case "client":
                structure.source.push(file);
                break;

            case "test":
            case "tests":
            case "__tests__":
                structure.tests.push(file);
                break;

            case "docs":
                structure.documentation.push(file);
                break;

            case "public":
            case "assets":
            case "static":
                structure.assets.push(file);
                break;

            case "tsconfig.json":
            case "package.json":
            case "eslint.config.js":
            case ".eslintrc":
            case ".prettierrc":
            case "vite.config.ts":
            case "next.config.ts":
            case "tsup.config.ts":
                structure.configs.push(file);
                break;

        }

    }

    return structure;

}