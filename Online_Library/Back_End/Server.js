var express = require("express");
const cors = require("cors");
let Books = require('./Schema');
const connectDB = require('./Connection').default;
var app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Default route
app.get('/', (req, res) => {
    res.send("This is default");
});

// Get all books
app.get('/allbooks', async (req, res) => {
    const d = await Books.find();
    return res.json(d);
});

// Get single book
app.get('/getbook/:id', async (req, res) => {
    let id = req.params.id;
    const book = await Books.findById(id);
    if (book) {
        res.json(book);
    } else {
        res.status(404).send("Book not found");
    }
});

// Add book
app.post('/addbooks', (req, res) => {
    let newbook = new Books(req.body);

    newbook.save()
        .then(() => res.status(200).json({ 'books': 'book added successfully' }))
        .catch(() => res.status(400).send('adding new book failed'));
});

// Update book
app.post('/updatebook/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const update = {
            booktitle: req.body.booktitle,
            PubYear: req.body.PubYear,
            author: req.body.author,
            Topic: req.body.Topic,
            formate: req.body.formate
        };

        const updatedBook = await Books.findByIdAndUpdate(
            id,
            { $set: update },
            { new: true, runValidators: true }
        );

        if (!updatedBook) return res.status(404).json({ error: 'Book not found' });

        return res.status(200).json({
            message: 'Book updated successfully',
            book: updatedBook
        });
    } catch (err) {
        return res.status(500).json({
            error: 'Failed to update book',
            details: err.message
        });
    }
});

// Delete book
app.post('/deleteBook/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const deletedBook = await Books.findByIdAndDelete(id);
        if (!deletedBook) return res.status(404).json({ error: 'Book not found' });

        res.status(200).send('Book Deleted');
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete book', details: err.message });
    }
});

// Start server AFTER connecting to DB
(async () => {
    await connectDB();
    app.listen(5000, () => console.log('Server running on port 5000'));
})();
