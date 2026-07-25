import { ProjectAnalysis } from "../types/projectAnalysis.js";
import { MarkdownBuilder } from "./markdownBuilder.js";
import { generateOverview } from "./sections/overview.js";
import { generateInstallation } from "./sections/installation.js";
import { generateUsage } from "./sections/usage.js";
import { generateTechStack } from "./sections/techStack.js";
import { generateProjectStructure } from "./sections/projectStructure.js";
import { generateBadgeSection } from "./sections/badges.js";
import { generateEnvironment } from "./sections/environment.js";

export function generateReadme(
    analysis: ProjectAnalysis
): string {

    const builder = new MarkdownBuilder();

    generateOverview(builder, analysis);

    generateBadgeSection(builder, analysis);

    generateInstallation(builder, analysis);

    generateUsage(builder, analysis);

    generateEnvironment(builder, analysis);

    generateTechStack(builder, analysis);

    generateProjectStructure(builder, analysis);

    return builder.build();

}