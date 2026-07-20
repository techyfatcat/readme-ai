export interface ProjectInfo {
    name: string;
    version: string;
    description: string;
    license?: string;

    scripts: Record<string, string>;

    dependencies: Record<string, string>;
    devDependencies: Record<string, string>;

    repository?: {
        type?: string;
        url?: string;
    };
}