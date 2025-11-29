#!/usr/bin/env node
import { readdirSync, writeFileSync, readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

/**
 * Generate Nx project.json files for each component
 * This enables per-component Nx caching
 * Only writes files if they don't exist or content changed (fast)
 */
function generateNxProjects() {
  const buiCoreSrc = join(rootDir, 'packages/bui-core/src');
  const components = readdirSync(buiCoreSrc, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .filter((name) => !name.startsWith('.') && name !== 'locales' && name !== 'index.ts');

  let created = 0;
  let skipped = 0;

  components.forEach((component) => {
    const projectDir = join(buiCoreSrc, component);
    const projectJsonPath = join(projectDir, 'project.json');

    const projectConfig = {
      name: `${component}`,
      $schema: '../../../../../node_modules/nx/schemas/project-schema.json',
      sourceRoot: `packages/bui-core/src/${component}`,
      projectType: 'library',
      targets: {
        test: {
          executor: 'nx:run-commands',
          options: {
            command: `pnpm vitest run --project ${component}`,
            cwd: '{workspaceRoot}',
          },
        },
      },
    };

    const newContent = JSON.stringify(projectConfig, null, 2);
    
    // Only write if file doesn't exist or content changed
    if (!existsSync(projectJsonPath)) {
      writeFileSync(projectJsonPath, newContent);
      created++;
    } else {
      const existingContent = readFileSync(projectJsonPath, 'utf-8');
      if (existingContent.trim() !== newContent.trim()) {
        writeFileSync(projectJsonPath, newContent);
        created++;
      } else {
        skipped++;
      }
    }
  });

  // Only log if something changed
  if (created > 0) {
    console.log(`✅ Generated ${created} component project.json files`);
  }
  // Optionally show skipped count in verbose mode
  if (process.env.VERBOSE) {
    console.log(`  (${skipped} unchanged, ${created} created/updated)`);
  }
}

generateNxProjects();

