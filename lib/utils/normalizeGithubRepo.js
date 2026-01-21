export function normalizeGithubRepo(repo) {
    return {
        slug: repo.name,
        name: repo.name,
        description: repo.description,
        readmeImage: repo.readmeImage,
        topics: repo.topics,
    };
}
