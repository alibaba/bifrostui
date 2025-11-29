import { readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

/**
 * Generate test projects for Vitest workspace
 * Each component in bui-core gets its own project
 */
export function generateTestProjects() {
  // Auto-discover all components in bui-core
  const buiCoreSrc = join(rootDir, 'packages/bui-core/src');
  const components = readdirSync(buiCoreSrc, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .filter((name) => !name.startsWith('.') && name !== 'locales');

  // Generate workspace projects
  const projects = [
    // Component-level projects for bui-core
    ...components.map((component) => ({
      name: component,
      include: [`packages/bui-core/src/${component}/**/*.{test,spec}.{ts,tsx}`],
    })),
    // Package-level projects for other packages
    {
      name: 'bui-icons',
      include: ['packages/bui-icons/src/**/*.{test,spec}.{ts,tsx}'],
    },
    {
      name: 'bui-utils',
      include: ['packages/bui-utils/src/**/*.{test,spec}.{ts,tsx}'],
    },
    // All tests (default project)
    {
      name: 'all',
      include: ['packages/**/src/**/*.{test,spec}.{ts,tsx}'],
    },
  ];

  return projects;
}
