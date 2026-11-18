/** @type {import('syncpack').RcFile} */
module.exports = {
  versionGroups: [
    {
      // Peer deps intentionally support React 17, 18, and 19 for consumers.
      // devDependencies pin to ^19.0.0 for local development only.
      label: 'React ecosystem peer deps support multiple major versions',
      packages: ['**'],
      dependencies: ['react', 'react-dom', '@types/react'],
      dependencyTypes: ['peer'],
      isIgnored: true,
    },
    {
      // scheduler peer dep uses >=0.27.0 to be permissive for consumers;
      // devDependencies pin to the exact version used by React 19.
      label: 'scheduler peer dep accepts a wider range than the dev pin',
      packages: ['**'],
      dependencies: ['scheduler'],
      dependencyTypes: ['peer'],
      isIgnored: true,
    },
  ],
};
