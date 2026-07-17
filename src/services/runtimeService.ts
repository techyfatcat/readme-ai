import fs from "fs-extra";
import path from "path";
import { RuntimeInfo } from "../types/runtime.js";

export async function detectRuntime(): Promise<RuntimeInfo> {

    const cwd = process.cwd();

    // Bun
    if (
        await fs.pathExists(path.join(cwd, "bun.lockb")) ||
        await fs.pathExists(path.join(cwd, "bun.lock"))
    ) {
        return {
            name: "Bun"
        };
    }

    // Deno
    if (
        await fs.pathExists(path.join(cwd, "deno.json")) ||
        await fs.pathExists(path.join(cwd, "deno.jsonc"))
    ) {
        return {
            name: "Deno"
        };
    }

    // Default
    return {
        name: "Node.js"
    };
}