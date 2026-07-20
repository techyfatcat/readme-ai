import fs from "fs-extra";

export async function writeReadme(
    markdown: string
): Promise<void> {

    await fs.writeFile(
        "README.generated.md",
        markdown
    );

}