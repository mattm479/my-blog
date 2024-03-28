window.onload = function () {
    displayBlogEntries();
}

function goBack() {
    window.location.href = "index.html";
}

function displayBlogEntries() {
    const entries = JSON.parse(localStorage.getItem("blog-entries"));
    let section = document.getElementById("blog");
    let div = document.createElement("div");
    div.setAttribute("class", "blog-entries");

    let ul = document.createElement("ul");
    for (const entry of entries) {
        let li = document.createElement("li");
        li.setAttribute("class", "blog-entry");

        let h3 = document.createElement("h3");
        h3.setAttribute("class", "title");
        h3.textContent = entry.title;
        li.appendChild(h3);

        let content = document.createElement("p");
        content.setAttribute("class", "content");
        content.textContent = entry.content;
        li.appendChild(content);

        let author = document.createElement("p");
        author.setAttribute("class", "author");
        author.textContent = "Posted by: " + entry.username;
        li.appendChild(author);

        ul.appendChild(li);
    }

    div.appendChild(ul);
    section.appendChild(div);
}