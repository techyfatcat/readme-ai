import fs from "fs-extra";
import path from "path";

const ignoredFolders = new Set([
    "node_modules",
    ".git",
    ".next",
    "dist",
    "coverage",
    ".turbo",
    ".vercel",
    ".idea",
    ".vscode"
]);

export async function getProjectFolders(): Promise<string[]> {

    const cwd = process.cwd();

    const entries = await fs.readdir(cwd, {
        withFileTypes: true
    });

    return entries
        .filter(
            entry =>
                entry.isDirectory() &&
                !ignoredFolders.has(entry.name)
        )
        .map(entry => entry.name)
        .sort();

}