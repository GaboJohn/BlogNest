const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/collectionName", {
    useNewUrlParser: true,
    useUnifiedTopology: true
 });const contactSchema = {
    email: String,
    query: String,
 }; const Contact = mongoose.model("Contact", contactSchema);
 app.post("/contact", function (req, res) {
    const contact = new Contact({
        email: req.body.email,
        query: req.body.query,
    });
    contact.save(function (err) {
        if (err) {
            res.redirect("/error");
        } else {
            res.redirect("/thank-you");
        }
    });
 });