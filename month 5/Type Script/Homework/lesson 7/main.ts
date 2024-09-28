class Books {
  title: string;
  author: string;
  isbn: string;
  publicationYear: number;

  constructor(
    title: string,
    author: string,
    isbn: string,
    publicationYear: number
  ) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.publicationYear = publicationYear;
  }
}

class BooksGroups {
  name: string;
  books: Books[];

  constructor(name: string) {
    this.name = name;
    this.books = [];
  }

  addBook(book: Books): void {
    this.books.push(book);
  }

  removeBook(isbn: string): void {
    this.books = this.books.filter((book) => book.isbn !== isbn);
  }

  updateBook(isbn: string, updatedBook: Partial<Books>): void {
    const book = this.books.find((book) => book.isbn === isbn);
    if (book) {
      Object.assign(book, updatedBook);
    }
  }

  findBook(isbn: string): Books | undefined {
    return this.books.find((book) => book.isbn === isbn);
  }
}

// Readonly bo'lgan object
const readonlyBooks: Readonly<Books> = new Books(
  "1984",
  "George Orwell",
  "123456789",
  1949
);

// Record turidagi object
const bookRecord: Record<string, Books> = {
  "123456789": new Books("1984", "George Orwell", "123456789", 1949),
  "987654321": new Books(
    "To Kill a Mockingbird",
    "Harper Lee",
    "987654321",
    1960
  ),
};

const book1 = new Books("1984", "George Orwell", "123456789", 1949);
const book2 = new Books(
  "To Kill a Mockingbird",
  "Harper Lee",
  "987654321",
  1960
);

const classics = new BooksGroups("Classics");
classics.addBook(book1);
classics.addBook(book2);

// Kitobni yangilash
classics.updateBook("123456789", { title: "Nineteen Eighty-Four" });

// Kitobni olib tashlash
classics.removeBook("987654321");

// Kitobni qidirish
const foundBook = classics.findBook("123456789");
console.log(foundBook);


export {};