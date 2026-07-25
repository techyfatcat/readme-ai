import { Badge } from "../types/badge.js";
import { ProjectAnalysis } from "../types/projectAnalysis.js";

export function generateBadges(
    analysis: ProjectAnalysis
): Badge[] {

    const badges: Badge[] = [];

    // Language
    badges.push({
        label: "Language",
        message: analysis.technologies.language,
        color: "3178C6"
    });

    // Runtime
    badges.push({
        label: "Runtime",
        message: analysis.runtime.name,
        color: "339933"
    });

    // Package Manager
    badges.push({
        label: "Package",
        message: analysis.technologies.packageManager,
        color: "CB3837"
    });

    // Build Tool
    badges.push({
        label: "Build",
        message: analysis.buildTool.name,
        color: "8A2BE2"
    });

    // License
    if (analysis.license.name) {
    badges.push({
        label: "License",
        message: analysis.license.name,
        color: "blue"
    });
}

    return badges;

}