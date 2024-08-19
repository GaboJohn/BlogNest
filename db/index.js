const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mudauzwothe", {
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
 mongodb+srv://mudauzwothe:pXTswHJWBKwFdz7B@cluster0.valh5wl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
