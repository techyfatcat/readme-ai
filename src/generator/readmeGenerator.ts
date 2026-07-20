import { ProjectAnalysis } from "../types/projectAnalysis.js";
import { MarkdownBuilder } from "./markdownBuilder.js";
import { generateOverview } from "./sections/overview.js";
import { generateInstallation } from "./sections/installation.js";
import { generateUsage } from "./sections/usage.js";

export function generateReadme(
    analysis: ProjectAnalysis
): string {

    const builder = new MarkdownBuilder();

    generateOverview(builder, analysis);

    generateInstallation(builder, analysis);

    generateUsage(builder, analysis);

    return builder.build();

}