
# express-practise
This project is a simple REST API built with Node.js and Express.js.  
It demonstrates basic CRUD operations (Create, Read, Update, Delete) on library data.

---

## Requirements
- Node.js (v16 or higher recommended)  
- npm (comes with Node.js)

---

## Installation & Run
1. Clone the repository:
```bash
git clone https://github.com/zai842/express-practise
cd express-practise
npm install
node app.js

👉 Server will run at: http://localhost:5000


---

API Endpoints

GET /books → Get all books

GET /books/:id → Get a single book by ID

POST /books → Add a new book

PATCH /books/:id → Update a book

DELETE /books/:id → Delete a book



---

Example Request

Add a new book (POST /books):

Request Body:

{
  "name": "White Nights",
  "author": "Zahra"
}


---
express-practise/
│
├── controller/
│   └── books.js
│
├── middleWare/
│
├── routes/
│   └── books.js
│
├── node_modules/
│
├── app.js
├── package.json
├── package-lock.json
└── README.md


---

Notes

This project is for practice purposes.

You can extend it by adding a database (MongoDB, MySQL, etc.) instead of using in-memory data.



---

License

This project is open source and available under the MIT License.

---
