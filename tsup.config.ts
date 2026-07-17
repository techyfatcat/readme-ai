import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/cli.ts"],
    clean: true,
    format: ["esm"],
    dts: true,
    sourcemap: true,
    minify: false
});