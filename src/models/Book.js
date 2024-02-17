import mongoose from "mongoose";

const { Schema } = mongoose;

const bookSchema = new Schema(
    {
        id: { type: Number },
        name: { type: String },
        author: { type: String },
        genre: { type: String },
        shelfNumber: { type: Number },
        shelvingNumber: { type: Number },
        available: { type: Boolean }
    },
    { timestamps: true }
);

bookSchema.pre('save', function (next) {
    const book = this;
    if (book.isNew) {
        BookModal.findOne().sort('-id').exec(function (err, lastBook) {
            if (err) {
                return next(err);
            }
            book.id = lastBook ? lastBook.id + 1 : 1;
            next();
        });
    } else {
        next();
    }
})

const BookModal = mongoose.models.Book || mongoose.model("Book", bookSchema)
export default BookModal;