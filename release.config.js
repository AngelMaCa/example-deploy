module.exports = {
    branches: "master",
    repositoryUrl: "https://github.com/AngelMaCa/example-deploy",
    plugins: [
        '@semantic-release/commit-analyzer', 
        '@semantic-release/release-notes-generator', 
        '@semantic-release/npm', 
        '@semantic-release/github'
    ]
}