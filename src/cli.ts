import { Command } from "commander";
import chalk from "chalk";
import { analyzeProject } from "./core/analyzer.js";

const program = new Command();

program
    .name("readme-ai")
    .description("Generate beautiful README files automatically")
    .version("1.0.0");

program.action(async () => {
    try {
        console.log(chalk.cyan("🔍 Scanning project...\n"));

        const result = await analyzeProject();

        console.log(chalk.green("✅ Project Analysis Complete!\n"));

        console.log(chalk.blue.bold("📦 Project Information\n"));

        console.log(`Name             : ${result.project.name}`);
        console.log(`Version          : ${result.project.version}`);
        console.log(`Description      : ${result.project.description || "No description"}`);

        console.log(chalk.blue.bold("\n🚀 Technology Report\n"));

        console.log(`Framework        : ${result.technologies.framework}`);
        console.log(`Language         : ${result.technologies.language}`);
        console.log(`Runtime          : ${result.runtime.name}`);
        console.log(`Package Manager  : ${result.technologies.packageManager}`);
        console.log(`Build Tool       : ${result.buildTool.name}`);
        const deployment =
            result.deployment.providers.length > 0
                ? result.deployment.providers.join(", ")
                : "Unknown";

        console.log(`Deployment       : ${deployment}`);

        console.log("");

        console.log(chalk.cyan.bold("Environment"));

        if (result.environment.variables.length === 0) {

            console.log("  None Found");

        } else {

            result.environment.variables.forEach(variable => {
                console.log(`  ✓ ${variable}`);
            });

        }

        console.log("");

        for (const [category, technologies] of Object.entries(result.technologies.categories)) {

            if (technologies.length === 0) continue;

            console.log(chalk.cyan.bold(category));

            technologies.forEach((tech) => {
                console.log(`  ✓ ${tech}`);
            });

            console.log("");
        }

    } catch (error) {
        console.error(
            chalk.red(
                error instanceof Error
                    ? `❌ ${error.message}`
                    : "❌ An unexpected error occurred."
            )
        );

        process.exit(1);
    }
});

program.parse();