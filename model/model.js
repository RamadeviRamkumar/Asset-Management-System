const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({
    AssetNumber: {
        type: String,
        required: true,
    },
    AssetId: {
        type: String,
        required: true,
    },
    Category: {
        type: String,
        required: true,
    },
    SubCategory: {
        type: String,
        required: true,
    },
    Model: {
        type: String,
        required: true,
    },
    AssignedTo: {
        type: String,
        required: true,
    },
    AssignedBy: {
        type: String,
        required: true,
    },
     AssignedDate: {
        type: Date,
        required: true,
    },
    ReturnDate: {
        type: Date,
        required: true,
    },
    
    AssetsLocation: {
        type: String,
        required: true,
    },
});

const Asset = mongoose.model('Asset', assetSchema);

module.exports = Asset;
