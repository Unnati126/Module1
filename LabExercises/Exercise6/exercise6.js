let book = {
    title: "Rich Dad Poor Dad",
    description: "What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!",
    author: "Robert Kiyoski",
    pages: 336
};

function printBookContents(book) 
{
    console.log("Title: ", book.title);
    console.log("Description: ", book.description);
    console.log("Author: ", book.author);
    console.log("Pages: ", book.pages);
}


console.log("Book Object:", book);

book.description = "It's been nearly 25 years since Robert Kiyosaki's Rich Dad Poor Dad first made waves in the Personal Finance arena."

console.log("Updated Description:", book.description);
console.log("Book Object:", book);