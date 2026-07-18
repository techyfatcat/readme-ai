export interface GitInfo {
    initialized: boolean;
    remoteUrl: string | null;
    repository: string | null;
    owner: string | null;
    defaultBranch: string | null;
}