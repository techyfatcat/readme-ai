import { BuildToolInfo } from "../types/buildTool.js";
import { ProjectInfo } from "../types/project.js";

export function detectBuildTool(
    project: ProjectInfo
): BuildToolInfo {

    const deps = {
        ...project.dependencies,
        ...project.devDependencies
    };

    if (deps.tsup) {
        return { name: "tsup" };
    }

    if (deps.vite) {
        return { name: "Vite" };
    }

    if (deps.webpack) {
        return { name: "Webpack" };
    }

    if (deps.rollup) {
        return { name: "Rollup" };
    }

    if (deps.parcel) {
        return { name: "Parcel" };
    }

    if (deps.esbuild) {
        return { name: "esbuild" };
    }

    if (deps.turbo) {
        return { name: "Turborepo" };
    }

    if (deps["@rspack/core"]) {
        return { name: "Rspack" };
    }

    return {
        name: "Unknown"
    };
}