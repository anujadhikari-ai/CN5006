const mongoose = require('mongoose');

// Connection String from your screenshot
const MONGO_URI = 'mongodb+srv://admin:admin@cluster0.zukvkwi.mongodb.net/Week-8';

// 1. Connect to MongoDB
mongoose.connect(MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(() => console.log(`Connected to ${MONGO_URI}`))
.catch((err) => console.log("Error occurred during connection: " + err));

const db = mongoose.connection;

// 2. Define the Schema
const PersonScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    Gender: String,
    Salary: Number
});

// 3. Create the Model
// Model name: 'modelname', Collection name: 'personCollection'
const person_doc = mongoose.model('modelname', PersonScheme, 'personCollection');

// 4. Define Data
const doc1 = new person_doc({
    name: 'Jacky',
    age: 362,
    Gender: "Male",
    Salary: 3456
});

const manypersons = [
    { name: 'Simon', age: 42, Gender: "Male", Salary: 3456 },
    { name: 'Neesha', age: 23, Gender: "Female", Salary: 1000 },
    { name: 'Mary', age: 27, Gender: "Female", Salary: 5402 }, // Fixed "Feale" typo
    { name: 'Mike', age: 40, Gender: "Male", Salary: 4519 }
];

// 5. Execute Operations in Order (Chain)
// We chain these to ensure we don't delete data before we read it!

// Step A: Clean the collection (Optional - keeps DB clean for testing)
person_doc.deleteMany({}) 
    .then(() => {
        console.log("--- Step A: Old data cleared ---");
        
        // Step B: Add Single Document
        return doc1.save();
    })
    .then((savedDoc) => {
        console.log("--- Step B: Single Doc Saved ---");
        console.log("New Article Has been Added:", savedDoc);

        // Step C: Add Multiple Documents
        return person_doc.insertMany(manypersons);
    })
    .then(() => {
        console.log("--- Step C: Multiple Docs Inserted ---");

        // Step D: Find specific users (Age > 10, Male)
        var givenage = 10;
        return person_doc.find({ Gender: "Male", age: { $gte: givenage } })
            .sort({ Salary: 1 })       // Sort ascending by Salary
            .select('name Salary age') // Select specific fields
            .limit(10);
    })
    .then((docs) => {
        console.log("--- Step D: Showing Search Results ---");
        docs.forEach((Doc) => {
            console.log(`Name: ${Doc.name}, Age: ${Doc.age}, Salary: ${Doc.Salary}`);
        });

        // Step E: Count Documents
        return person_doc.countDocuments().exec();
    })
    .then((count) => {
        console.log("--- Step E: Total Document Count ---");
        console.log("Count:", count);

        // Step F: Update Female Salaries
        return person_doc.updateMany({ Gender: "Female" }, { $set: { Salary: 5555 } });
    })
    .then((updateResult) => {
        console.log("--- Step F: Updates Performed ---");
        console.log("Matched:", updateResult.matchedCount, "Modified:", updateResult.modifiedCount);

        // Step G: Delete Documents (Age >= 25)
        // NOTE: I put this last so you can see the data before it gets deleted!
        return person_doc.deleteMany({ age: { $gte: 25 } });
    })
    .then((deleteResult) => {
        console.log("--- Step G: Deletion Performed ---");
        console.log("Deleted Documents:", deleteResult.deletedCount);
    })
    .catch((err) => {
        console.error("An error occurred:", err);
    });