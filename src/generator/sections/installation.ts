import { MarkdownBuilder } from "../markdownBuilder.js";
import { ProjectAnalysis } from "../../types/projectAnalysis.js";

export function generateInstallation(
    builder: MarkdownBuilder,
    analysis: ProjectAnalysis
): void {

    builder.addHeading(2, "Installation");

    if (analysis.git.remoteUrl) {

        builder.addCode(
            "bash",
`git clone ${analysis.git.remoteUrl}
cd ${analysis.project.name}
${getInstallCommand(analysis.technologies.packageManager)}`
        );

    } else {

        builder.addCode(
            "bash",
getInstallCommand(analysis.technologies.packageManager)
        );

    }

}

function getInstallCommand(packageManager: string): string {

    switch (packageManager.toLowerCase()) {

        case "pnpm":
            return "pnpm install";

        case "yarn":
            return "yarn";

        case "bun":
            return "bun install";

        default:
            return "npm install";

    }

}