import { MarkdownBuilder } from "../markdownBuilder.js";
import { ProjectAnalysis } from "../../types/projectAnalysis.js";
import { generateBadges } from "../badgeGenerator.js";

export function generateBadgeSection(
    builder: MarkdownBuilder,
    analysis: ProjectAnalysis
): void {

    const badges = generateBadges(analysis);

    const markdown = badges
        .map(badge =>
            `![${badge.label}](https://img.shields.io/badge/${encodeURIComponent(badge.label)}-${encodeURIComponent(badge.message)}-${badge.color})`
        )
        .join(" ");

    builder.add(markdown);
    builder.add();

}