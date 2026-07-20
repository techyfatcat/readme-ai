import { ProjectAnalysis } from "../../types/projectAnalysis.js";
import { MarkdownBuilder } from "../markdownBuilder.js";

export function generateOverview(
    builder: MarkdownBuilder,
    analysis: ProjectAnalysis
): void {

    builder.addHeading(1, analysis.project.name);

    if (analysis.project.description) {
        builder.add(analysis.project.description);
        builder.add();
    }

}