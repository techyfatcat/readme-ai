import fs from "fs-extra";
import path from "path";
import { DeploymentInfo } from "../types/deployment.js";

export async function detectDeployment(): Promise<DeploymentInfo> {

    const cwd = process.cwd();

    const providers: string[] = [];

    if (await fs.pathExists(path.join(cwd, "Dockerfile"))) {
        providers.push("Docker");
    }

    if (await fs.pathExists(path.join(cwd, "vercel.json"))) {
        providers.push("Vercel");
    }

    if (await fs.pathExists(path.join(cwd, "railway.json"))) {
        providers.push("Railway");
    }

    if (await fs.pathExists(path.join(cwd, "netlify.toml"))) {
        providers.push("Netlify");
    }

    if (
        await fs.pathExists(path.join(cwd, "render.yaml")) ||
        await fs.pathExists(path.join(cwd, "render.yml"))
    ) {
        providers.push("Render");
    }

    if (await fs.pathExists(path.join(cwd, "fly.toml"))) {
        providers.push("Fly.io");
    }

    return {
        providers
    };

}