import { ProjectInfo } from "../types/project.js";
import { TechnologyReport } from "../types/technology.js";

const registry = {
    ui: {
        react: "React",
        vue: "Vue",
        angular: "Angular"
    },

    styling: {
        tailwindcss: "Tailwind CSS",
        bootstrap: "Bootstrap",
        sass: "Sass",
        "styled-components": "Styled Components"
    },

    database: {
        mongoose: "MongoDB",
        pg: "PostgreSQL",
        mysql2: "MySQL",
        sqlite3: "SQLite"
    },

    orm: {
        prisma: "Prisma",
        sequelize: "Sequelize",
        typeorm: "TypeORM"
    },

    testing: {
        vitest: "Vitest",
        jest: "Jest",
        mocha: "Mocha"
    },

    authentication: {
        passport: "Passport.js",
        bcrypt: "Bcrypt",
        jsonwebtoken: "JWT"
    },

    deployment: {
        vercel: "Vercel",
        netlify: "Netlify"
    },

    linting: {
        eslint: "ESLint"
    },

    formatting: {
        prettier: "Prettier"
    },

    utilities: {
        axios: "Axios",
        zod: "Zod",
        commander: "Commander.js",
        chalk: "Chalk",
        ora: "Ora"
    }
};

function detectCategory(
    deps: Record<string, string>,
    category: Record<string, string>
): string[] {

    const detected: string[] = [];

    for (const pkg in category) {

        if (deps[pkg]) {

            detected.push(category[pkg]);

        }

    }

    return detected;

}

export function detectTechnologies(
    project: ProjectInfo
): TechnologyReport {

    const deps = {
        ...project.dependencies,
        ...project.devDependencies
    };

    function detectFramework(
    deps: Record<string, string>
): string {

    if (deps.next)
        return "Next.js";

    if (deps["@nestjs/core"])
        return "NestJS";

    if (deps.express)
        return "Express";

    if (deps.react)
        return "React";

    if (deps.vue)
        return "Vue";

    if (deps["@angular/core"])
        return "Angular";

    if (deps.astro)
        return "Astro";

    if (deps["@remix-run/react"])
        return "Remix";

    if (deps.nuxt)
        return "Nuxt";

    if (deps["@sveltejs/kit"])
        return "SvelteKit";

    if (deps.electron)
        return "Electron";

    if (deps.expo)
        return "React Native (Expo)";

    if (deps["react-native"])
        return "React Native";

    return "Unknown";

}

    return {

    language: deps.typescript
        ? "TypeScript"
        : "JavaScript",

    packageManager: "",

    framework: detectFramework(deps),

    categories: {

        UI: detectCategory(
            deps,
            registry.ui
        ),

        Styling: detectCategory(
            deps,
            registry.styling
        ),

        Database: detectCategory(
            deps,
            registry.database
        ),

        ORM: detectCategory(
            deps,
            registry.orm
        ),

        Testing: detectCategory(
            deps,
            registry.testing
        ),

        Authentication: detectCategory(
            deps,
            registry.authentication
        ),

        Deployment: detectCategory(
            deps,
            registry.deployment
        ),

        Linting: detectCategory(
            deps,
            registry.linting
        ),

        Formatting: detectCategory(
            deps,
            registry.formatting
        ),

        Utilities: detectCategory(
            deps,
            registry.utilities
        )

    }

};

}