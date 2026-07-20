export class MarkdownBuilder {

    private lines: string[] = [];

    add(line = ""): void {
        this.lines.push(line);
    }

    addHeading(level: number, text: string): void {
        this.lines.push(`${"#".repeat(level)} ${text}`);
        this.lines.push("");
    }

    addCode(language: string, code: string): void {
        this.lines.push(`\`\`\`${language}`);
        this.lines.push(code);
        this.lines.push("```");
        this.lines.push("");
    }

    addList(items: string[]): void {
        items.forEach(item => this.lines.push(`- ${item}`));
        this.lines.push("");
    }

    build(): string {
        return this.lines.join("\n");
    }

}