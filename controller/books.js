import{ v4 as uuidv4 } from 'uuid';

let books = [];

export const creatBook = (req, res) =>{
    const book = req.body;
    books.push( {...book, id: uuidv4() });
    res.send(`Book With the name ${book.name} Added to the detabase`);
}

export const getBooks = (req, res) =>{
    res.send(books);
}

export const getBook = (req, res) =>{
    const { id } = req.params;
    const foundBook = books.find((book) => book.id == id);
    res.send(foundBook);
}

export const deleteBook = (req, res) =>{
     const { id } = req.params;
     books = books.filter((book) => book.id !== id);
     res.send(`Book with id ${id} deleted`);
}

export const patchBook = (req, res) =>{
    const { id } = req.params;
    const { name, author } = req.body;
    const book = books.find((book) => book.id === id);

    if(name) book.name = name;
    if(author) book.author = author;

    res.send('Book ha been Update');
}