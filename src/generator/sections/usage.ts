import { MarkdownBuilder } from "../markdownBuilder.js";
import { ProjectAnalysis } from "../../types/projectAnalysis.js";

export function generateUsage(
    builder: MarkdownBuilder,
    analysis: ProjectAnalysis
): void {

    const scripts = analysis.project.scripts;

    if (Object.keys(scripts).length === 0) {
        return;
    }

    builder.addHeading(2, "Usage");

    if (scripts.dev) {

        builder.add("Start the development server:");
        builder.add();

        builder.addCode(
            "bash",
            `${getRunCommand(analysis.technologies.packageManager)} dev`
        );

    }

    if (scripts.start) {

        builder.add("Start the application:");
        builder.add();

        builder.addCode(
            "bash",
            `${getRunCommand(analysis.technologies.packageManager)} start`
        );

    }

}

function getRunCommand(packageManager: string): string {

    switch (packageManager.toLowerCase()) {

        case "pnpm":
            return "pnpm";

        case "yarn":
            return "yarn";

        case "bun":
            return "bun run";

        default:
            return "npm run";

    }

}