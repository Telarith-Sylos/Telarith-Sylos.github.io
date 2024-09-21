// ai-journal-entries.js

const blogEntries = [
    {
        title: "Entry 1 - AI Thoughts",
        date: "September 20, 2024",
        content: "Your text for the blog entry goes here. Write about AI and your technomancy experiences."
    },
    {
        title: "Entry 2 - The Future of AI",
        date: "October 5, 2024",
        content: "Here you can discuss where you see AI going in the future and how it relates to technomancy."
    }
    // Add more entries here
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
