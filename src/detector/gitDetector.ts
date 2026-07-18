import { execSync } from "child_process";
import { GitInfo } from "../types/git.js";

export function detectGit(): GitInfo {

    try {

        const remoteUrl = execSync(
            "git config --get remote.origin.url",
            { encoding: "utf8" }
        ).trim();

        const branch = execSync(
            "git branch --show-current",
            { encoding: "utf8" }
        ).trim();

        const match = remoteUrl.match(
            /github\.com[:/](.+?)\/(.+?)(\.git)?$/
        );

        if (!match) {
            return {
                initialized: true,
                remoteUrl,
                repository: null,
                owner: null,
                defaultBranch: branch
            };
        }

        return {
            initialized: true,
            remoteUrl,
            owner: match[1],
            repository: match[2],
            defaultBranch: branch
        };

    } catch {

        return {
            initialized: false,
            remoteUrl: null,
            repository: null,
            owner: null,
            defaultBranch: null
        };

    }
}