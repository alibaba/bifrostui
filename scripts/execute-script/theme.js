const path = require('node:path');
const { exec } = require('node:child_process');

exec(
  `pnpm theme:create`,
  {
    cwd: path.dirname(
      path.resolve(__dirname, '../../packages/bui-styles/package.json'),
    ),
    stdio: 'inherit',
  },
  (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    process.exit(0);
  },
);
