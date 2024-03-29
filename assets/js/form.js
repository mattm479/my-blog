document.getElementById("blog-entry-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = event.target.elements.username.value;
    const title = event.target.elements.title.value;
    const content = event.target.elements.content.value;
    const blogEntry = {
        "username": username,
        "title": title,
        "content": content
    };

    let currentEntries = JSON.parse(localStorage.getItem("blog-entries"));
    if (currentEntries === null) localStorage.setItem("blog-entries", JSON.stringify([ blogEntry ]));
    else {
        currentEntries.unshift(blogEntry);
        localStorage.setItem("blog-entries", JSON.stringify(currentEntries));
    }

    window.location.replace("blog.html");

    return false;
});
