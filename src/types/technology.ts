export interface TechnologyReport {
    framework: string;
    language: string;
    packageManager: string;

    categories: {
        [category: string]: string[];
    };
}