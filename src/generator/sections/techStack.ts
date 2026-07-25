import { MarkdownBuilder } from "../markdownBuilder.js";
import { ProjectAnalysis } from "../../types/projectAnalysis.js";

export function generateTechStack(
    builder: MarkdownBuilder,
    analysis: ProjectAnalysis
): void {

    builder.addHeading(2, "Tech Stack");

    builder.add(`- **Project Type:** ${analysis.technologies.framework}`);
    builder.add(`- **Language:** ${analysis.technologies.language}`);
    builder.add(`- **Runtime:** ${analysis.runtime.name}`);
    builder.add(`- **Package Manager:** ${analysis.technologies.packageManager}`);
    builder.add(`- **Build Tool:** ${analysis.buildTool.name}`);

    builder.add();

    for (const [category, technologies] of Object.entries(analysis.technologies.categories)) {

        if (technologies.length === 0) {
            continue;
        }

        builder.add(`### ${capitalize(category)}`);
        builder.addList(technologies);
    }

}

function capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
}