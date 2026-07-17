import fs from "fs-extra";
import path from "path";
import { EnvironmentInfo } from "../types/environment.js";

const ENV_FILES = [
    ".env",
    ".env.example",
    ".env.local",
    ".env.development",
    ".env.production",
    ".env.test"
];

export async function detectEnvironment(): Promise<EnvironmentInfo> {

    const cwd = process.cwd();

    const files: string[] = [];
    const variables = new Set<string>();

    for (const file of ENV_FILES) {

        const filePath = path.join(cwd, file);

        if (!(await fs.pathExists(filePath))) {
            continue;
        }

        files.push(file);

        const content = await fs.readFile(filePath, "utf8");

        for (const line of content.split("\n")) {

            const trimmed = line.trim();

            if (
                trimmed.length === 0 ||
                trimmed.startsWith("#")
            ) {
                continue;
            }

            const index = trimmed.indexOf("=");

            if (index === -1) {
                continue;
            }

            const key = trimmed.substring(0, index).trim();

            if (key) {
                variables.add(key);
            }
        }
    }

    return {
        files,
        variables: [...variables]
    };
}