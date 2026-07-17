import fs from "fs-extra";
import path from "path";
import { ProjectInfo } from "../types/project.js";

export async function getProjectInfo(): Promise<ProjectInfo> {

    const packagePath = path.join(process.cwd(), "package.json");

    const exists = await fs.pathExists(packagePath);

    if (!exists) {
        throw new Error("package.json not found.");
    }

    const packageJson = await fs.readJSON(packagePath);

    return {
        name: packageJson.name ?? "",
        version: packageJson.version ?? "",
        description: packageJson.description ?? "",
        scripts: packageJson.scripts ?? {},
        dependencies: packageJson.dependencies ?? {},
        devDependencies: packageJson.devDependencies ?? {}
    };
}