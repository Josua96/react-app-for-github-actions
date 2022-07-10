module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/Josua96/react-app-for-github-actions",
  plugins: [
    "@semantic-release/commit-analyzer", // will analyze commits messages and will determine which is the next version for the release.
    "@semantic-release/release-notes-generator", // will generate release notes based on the commit messages
    "@semantic-release/npm", // useful if you are releasing an npm package

    // in charge of creating the github release, the one that you can see on the releases section of the github repository
    [
      "@semantic-release/github",
      {
        assets: [
          { path: "build.zip", label: "Build" },
          { path: "coverage.zip", label: "Coverage" },
        ],
      },
    ],
  ],
};
