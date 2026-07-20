import { getProjectInfo } from "../services/PackageService.js";
import { detectTechnologies } from "../detector/technologyDetector.js";
import { detectPackageManager } from "../services/packageManagerService.js";
import { ProjectAnalysis } from "../types/projectAnalysis.js";
import { detectRuntime } from "../services/runtimeService.js";
import { getProjectFolders } from "../services/folderService.js";
import { detectBuildTool } from "../services/buildToolService.js";
import { detectDeployment } from "../detector/deploymentDetector.js";
import { detectEnvironment } from "../detector/environmentDetector.js";
import { detectGit } from "../detector/gitDetector.js";
import { detectLicense } from "../detector/licenseDetector.js";
import { detectStructure } from "../detector/structureDetector.js";

export async function analyzeProject(): Promise<ProjectAnalysis> {

    const project = await getProjectInfo();

    const technologies = detectTechnologies(project);

    const folders = await getProjectFolders();

    const runtime = await detectRuntime();

    const buildTool = detectBuildTool(project);

    const deployment = await detectDeployment();

    const environment = await detectEnvironment();

    const git = detectGit();

    const license = await detectLicense(project);

    const structure = await detectStructure();

    technologies.packageManager = await detectPackageManager();

    return {
        project,
        technologies,
        folders,
        runtime,
        buildTool, 
        deployment,
        environment,
        git,
        license,
        structure
    };

}