import { MarkdownBuilder } from "../markdownBuilder.js";
import { ProjectAnalysis } from "../../types/projectAnalysis.js";

export function generateEnvironment(
    builder: MarkdownBuilder,
    analysis: ProjectAnalysis
): void {

    const variables = analysis.environment.variables;

    if (variables.length === 0) {
        return;
    }

    builder.addHeading(2, "Environment Variables");

    builder.add(
        "Create a `.env` file in the project root and define the following variables:"
    );

    builder.add();

    const rows = variables.map(variable => `${variable}=`).join("\n");

    builder.addCode("env", rows);

}