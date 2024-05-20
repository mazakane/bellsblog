document.addEventListener("DOMContentLoaded", function() {
    const posts = [
        {
            title: "Introduction to Azure Static Web Apps",
            content: "Azure Static Web Apps is a service that automatically builds and deploys full stack web apps to Azure from a code repository..."
        },
        {
            title: "Getting Started with GitHub Actions",
            content: "GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD..."
        }
        // Add more posts as needed
    ];

    const content = document.getElementById("content");

    posts.forEach(post => {
        const article = document.createElement("article");
        const title = document.createElement("h2");
        title.textContent = post.title;
        const paragraph = document.createElement("p");
        paragraph.textContent = post.content;
        article.appendChild(title);
        article.appendChild(paragraph);
        content.appendChild(article);
    });
});
