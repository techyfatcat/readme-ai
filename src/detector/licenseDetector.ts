import fs from "fs-extra";
import path from "path";
import { LicenseInfo } from "../types/license.js";
import { ProjectInfo } from "../types/project.js";

export async function detectLicense(
    project: ProjectInfo
): Promise<LicenseInfo> {
    
    if (project.license) {
        return {
            name: project.license,
            source: "package.json"
        };
    }

    const cwd = process.cwd();

    const possibleFiles = [
        "LICENSE",
        "LICENSE.md",
        "LICENSE.txt"
    ];

    for (const file of possibleFiles) {

        const filePath = path.join(cwd, file);

        if (!(await fs.pathExists(filePath))) {
            continue;
        }

        const content = (
            await fs.readFile(filePath, "utf8")
        ).toUpperCase();

        if (content.includes("MIT LICENSE")) {
            return {
                name: "MIT",
                source: "file"
            };
        }

        if (content.includes("APACHE LICENSE")) {
            return {
                name: "Apache-2.0",
                source: "file"
            };
        }

        if (content.includes("GNU GENERAL PUBLIC LICENSE")) {
            return {
                name: "GPL",
                source: "file"
            };
        }

        return {
            name: "Custom",
            source: "file"
        };
    }

    return {
        name: null,
        source: "none"
    };
}