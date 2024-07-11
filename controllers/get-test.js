const TestModel = require('../models/testModel');

// Example controller method
exports.getTest=async (req, res) => {
    try {
        const orders = await TestModel.aggregate([
            {
                $group: {
                    _id: "$customer_id",
                    order_dates: { $addToSet: "$order_date" },
                    total_order_amount: { $sum: "$order_amount" }
                }
            },
            {
                $match: {
                    $expr: { $gt: [{ $size: "$order_dates" }, 1] }
                }
            },
            {
                $project: {
                    customer_id: "$_id",
                    total_order_amount: 1,
                    _id: 0
                }
            }
        ]);

        res.json(orders);
    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).send('Internal Server Error'); 
    }
};

// Insert many customer orders
exports.postTest = async (req, res) => {
    const orders = req.body; 

    try {
        const result = await TestModel.insertMany(orders);
        console.log('Data inserted successfully:', result);
        res.status(201).json({ message: 'Data inserted successfully', data: result });
    } catch (err) {
        console.error('Error inserting data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
