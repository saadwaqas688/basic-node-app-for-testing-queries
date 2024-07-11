const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    order_id: Number,
    customer_id: Number,
    order_date: Date,
    order_amount: Number
});

const TestSchema = mongoose.model('TestSchema', testSchema);

module.exports = TestSchema;
