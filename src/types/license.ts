export interface LicenseInfo {
    name: string | null;
    source: "package.json" | "file" | "none";
}