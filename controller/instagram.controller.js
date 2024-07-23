const {
    getInstagramFeeds
} = require('../service/instagram.service');

const getInstagramFeedsController = async (req, res) => {
    try {
        const data =  await getInstagramFeeds();
        return res.status(200).json({"data": data, "message": "Success get instagram feeds!"}).end();
    } catch (error) {return res.status(500).json({"error":"INSTAGRAM.FEEDS.EXCEPTION", "message": error}).end();}
};

module.exports = {
    getInstagramFeedsController
}