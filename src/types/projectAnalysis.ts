import { ProjectInfo } from "./project.js";
import { TechnologyReport } from "./technology.js";
import { RuntimeInfo } from "./runtime.js";
import { BuildToolInfo } from "./buildTool.js";
import { DeploymentInfo } from "./deployment.js";
import { EnvironmentInfo } from "./environment.js";
import { GitInfo } from "./git.js";

export interface ProjectAnalysis {

    project: ProjectInfo;

    technologies: TechnologyReport;

    folders: string[];

    runtime: RuntimeInfo;

    buildTool: BuildToolInfo;

    deployment: DeploymentInfo;

    environment: EnvironmentInfo;

    git: GitInfo;


}