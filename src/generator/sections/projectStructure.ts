import { MarkdownBuilder } from "../markdownBuilder.js";
import { ProjectAnalysis } from "../../types/projectAnalysis.js";

export function generateProjectStructure(
    builder: MarkdownBuilder,
    analysis: ProjectAnalysis
): void {

    builder.addHeading(2, "Project Structure");

    builder.addCode(
        "text",
        buildStructure(analysis)
    );

}

function buildStructure(
    analysis: ProjectAnalysis
): string {

    const lines: string[] = [];

    lines.push(`${analysis.project.name}/`);

    if (analysis.structure.source.length > 0) {

        analysis.structure.source.forEach(folder => {
            lines.push(`├── ${folder}/`);
        });

    }

    if (analysis.structure.tests.length > 0) {

        analysis.structure.tests.forEach(folder => {
            lines.push(`├── ${folder}/`);
        });

    }

    if (analysis.structure.documentation.length > 0) {

        analysis.structure.documentation.forEach(folder => {
            lines.push(`├── ${folder}/`);
        });

    }

    if (analysis.structure.assets.length > 0) {

        analysis.structure.assets.forEach(folder => {
            lines.push(`├── ${folder}/`);
        });

    }

    analysis.structure.configs.forEach(file => {
        lines.push(`├── ${file}`);
    });

    return lines.join("\n");

}