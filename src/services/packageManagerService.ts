import fs from "fs-extra";
import path from "path";

export async function detectPackageManager(): Promise<string> {

    const cwd = process.cwd();

    if (await fs.pathExists(path.join(cwd, "pnpm-lock.yaml"))) {
        return "pnpm";
    }

    if (await fs.pathExists(path.join(cwd, "yarn.lock"))) {
        return "yarn";
    }

    if (
        await fs.pathExists(path.join(cwd, "bun.lockb")) ||
        await fs.pathExists(path.join(cwd, "bun.lock"))
    ) {
        return "bun";
    }

    if (await fs.pathExists(path.join(cwd, "package-lock.json"))) {
        return "npm";
    }

    return "Unknown";
}