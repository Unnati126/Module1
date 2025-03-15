const bookLibrary = [
    {
        title: "Rich Dad Poor Dad",
        description: "What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!",
        author: "Robert Kiyosaki",
        pages: 336
    },
    {
        title: "Atomic Habits",
        description: "An Easy & Proven Way to Build Good Habits & Break Bad Ones.",
        author: "James Clear",
        pages: 320
    },
    {
        title: "The Alchemist",
        description: "A journey of self-discovery through a young shepherd's adventure.",
        author: "Paulo Coelho",
        pages: 208
    }
];

function displayBook(index) {
    if (index < 0 || index >= bookLibrary.length) {
        alert("Invalid book index.");
        return;
    }

    const book = bookLibrary[index];

    const bookInfo = document.createElement("div");
    bookInfo.setAttribute("id", "book-info");
    bookInfo.style.border = "1px solid #333";
    bookInfo.style.padding = "15px";
    bookInfo.style.margin = "20px";
    bookInfo.style.borderRadius = "8px";
    bookInfo.style.backgroundColor = "#f9f9f9";

    bookInfo.innerHTML = `
        <h2>${book.title}</h2>
        <p><strong>Description:</strong> ${book.description}</p>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Pages:</strong> ${book.pages}</p>
    `;

    const existingBookInfo = document.getElementById("book-info");
    if (existingBookInfo) {
        document.body.removeChild(existingBookInfo);
    }

    document.body.appendChild(bookInfo);
}

bookLibrary[0].description = "It's been nearly 25 years since Rich Dad Poor Dad changed personal finance forever.";

for (let i = 0; i < bookLibrary.length; i++) {
    const button = document.createElement("button");
    button.innerText = `Book ${i + 1}`;
    button.style.margin = "5px";
    button.addEventListener("click", () => displayBook(i));
    document.body.appendChild(button);
}

displayBook(0);