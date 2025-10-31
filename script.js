var PAPERS_URL = "https://upadhayay.github.io/db.json";

document.addEventListener("DOMContentLoaded", function () {
    loadPublications();
});

function loadPublications() {
    var list = document.getElementById("pub_list");
    if (!list) {
        return;
    }

    fetch(PAPERS_URL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var papers = data.papers;
            list.innerHTML = "";

            if (!papers || papers.length === 0) {
                showExamplePublications(list);
                return;
            }

            for (var i = 0; i < papers.length; i++) {
                var paper = papers[i];

                var card = document.createElement("div");
                card.className = "paper-card";

                var icon = document.createElement("div");
                icon.className = "paper-icon";
                icon.textContent = "📄";

                var title = document.createElement("h3");
                title.className = "paper-title";
                title.textContent = paper.title;

                var meta = document.createElement("p");
                meta.className = "paper-meta";

                var authorText = paper.author ? paper.author : "Albert Einstein";
                if (paper.year) {
                    authorText = authorText + " • " + paper.year;
                }
                meta.textContent = authorText;

                card.appendChild(icon);
                card.appendChild(title);
                card.appendChild(meta);

                if (paper.url) {
                    var link = document.createElement("a");
                    link.href = paper.url;
                    link.target = "_blank";
                    link.textContent = "View Paper";
                    link.className = "paper-meta";
                    card.appendChild(link);
                }

                list.appendChild(card);
            }
        });
        
}

function showExamplePublications(list) {
    list.innerHTML = "";

    var example = [
        {
            title: "Book #1 ---The Universe and Dr. Einstein",
            author: "Albert Einstein",
            year: 2005
        },
        {
            title: "Book #2 ---- Einstein on politics",
            author: "Albert Einstein",
            year: 2013
        }
    ];

    for (var i = 0; i < example.length; i++) {
        var paper = example[i];

        var card = document.createElement("div");
        card.className = "paper-card";

        var icon = document.createElement("div");
        icon.className = "paper-icon";
        icon.textContent = "📄";

        var title = document.createElement("h3");
        title.className = "paper-title";
        title.textContent = paper.title;

        var meta = document.createElement("p");
        meta.className = "paper-meta";
        meta.textContent = paper.author + " • " + paper.year;

        card.appendChild(icon);
        card.appendChild(title);
        card.appendChild(meta);

        list.appendChild(card);
    }
}
