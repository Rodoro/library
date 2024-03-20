import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        id: { type: Number, unique: true, required: true, default: 0 },
        name: { type: String, required: true },
        password: { type: String, required: false },
        email: { type: String, unique: true, required: true },
        role: { type: String, required: false, default: "user" },

        tabs: {
            read: [{ type: Number }],
            plans: [{ type: Number }],
            favourites: [{ type: Number }],
            history: [{ type: Number }]
        }
    },
    { timestamps: true }
);

userSchema.pre('save', function (next) {
    const user = this;
    if (user.isNew) {
        UserModel.findOne().sort('-id').exec(function (err, lastUser) {
            if (err) {
                return next(err);
            }
            user.id = lastUser ? lastUser.id + 1 : 1;
            next();
        });
    } else {
        next();
    }
})

const UserModel = mongoose.models.User || mongoose.model("User", userSchema);
export default UserModel;