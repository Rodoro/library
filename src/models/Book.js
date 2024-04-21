import mongoose from "mongoose";

const { Schema } = mongoose;
// Создаем схему данных БД для хронения данных о книге
const bookSchema = new Schema(
    {
        id: { type: Number },   // Индефикатор книги
        name: { type: String }, // Наименование книги
        author: { type: String },   // Автор книги
        genre: { type: String },    // Жанр книги
        shelfNumber: { type: Number },  // Полка книги
        shelvingNumber: { type: Number },   // Стелаж книги
        available: { type: Boolean }    // Доступность книги
    },
    { timestamps: true }
);
// Реализация пресейв хука для автоматического добавления id по возрастанию
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
// Экспорт схемы
const BookModal = mongoose.models.Book || mongoose.model("Book", bookSchema)
export default BookModal;

