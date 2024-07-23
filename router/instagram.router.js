const express = require("express");
const router = express.Router();
const { 
    getInstagramFeedsController
} = require("../controller/instagram.controller");

router.route("/feeds").post(getInstagramFeedsController).all((req, res, next) => {
    return res.status(500).json({
        "error": "ROUTER.METHODNOTALLOWED.EXCEPTION",
        "message": "Sorry, method is not allowed in this URL!"
    }).end();
});

module.exports = router;