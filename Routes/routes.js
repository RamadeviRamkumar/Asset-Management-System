const router = require('express').Router();

const Asset = require('../model/model.js');

router.post("/addasset", async(req, res) => {
    var user = new Asset();
    user.AssetNumber = req.body.AssetNumber;
    user.AssetId = req.body.AssetId;
    user.Category = req.body.Category;
    user.SubCategory = req.body.SubCategory;
    user.Model = req.body.Model;
    user.AssignedTo = req.body.AssignedTo;
    user.AssignedBy = req.body.AssignedBy;
    user.AssignedDate = req.body.AssignedDate;
    user.ReturnDate = req.body.ReturnDate;
    user.AssetsLocation = req.body.AssetsLocation;
    try {
        await user.save();
        res.status(201).json({
            message: 'New Asset Added Successfully',
            data: user,
        });
    } catch (err) {
        res.status(400).json({
            message: 'Error adding new asset',
            error: err.message,
        });
    }
});

const AssignedAsset = require('../model/assign model.js');

router.post("/assignassets", async (req, res) => {
    var assignedAsset = new AssignedAsset();
    assignedAsset.AssetsName = req.body.AssetsName;
    assignedAsset.AssetsId = req.body.AssetsId;
    assignedAsset.Category = req.body.Category;
    assignedAsset.SubCategory = req.body.SubCategory;
    assignedAsset.Model = req.body.Model;
    assignedAsset.PurchaseDate = req.body.PurchaseDate;
    assignedAsset.AssetsLocation = req.body.AssetsLocation;

    try {
        await assignedAsset.save();
        res.status(201).json({
            message: 'New Assign details Successfully',
            data: assignedAsset,
        });
    } catch (err) {
        res.status(400).json({
            message: 'Error adding assign asset',
            error: err.message,
        });
    }
});

var controller = require("../controller/controller.js");
router.route("/assets/getall").get(controller.index);

router
  .route("/assets/:user_id")
  .get(controller.view)
  .patch(controller.update)
  .put(controller.update)
  .delete(controller.Delete);

module.exports = router;