// ai-journal-entries.js

const blogEntries = [
    {
        title: "Entry 1 - AI Thoughts",
        date: "September 21, 2024",
        content: "In this entry, I explore my thoughts on AI and its influence on technomancy..."
    },
    {
        title: "Entry 2 - The Future of AI",
        date: "October 1, 2024",
        content: "This entry looks into where I believe AI is heading in the next decade..."
    }
];

function loadBlogEntries() {
    const blogContainer = document.getElementById('blog-container');
    blogEntries.forEach(entry => {
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('blog-entry');

        const entryTitle = document.createElement('h2');
        entryTitle.textContent = entry.title;

        const entryDate = document.createElement('p');
        entryDate.textContent = entry.date;

        const entryContent = document.createElement('p');
        entryContent.textContent = entry.content;

        entryDiv.appendChild(entryTitle);
        entryDiv.appendChild(entryDate);
        entryDiv.appendChild(entryContent);

        blogContainer.appendChild(entryDiv);
    });
}
