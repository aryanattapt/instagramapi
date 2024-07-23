const { IgApiClient } = require('instagram-private-api');
require("dotenv").config();
const ig = new IgApiClient();

const getInstagramFeeds = () => new Promise(async (resolve, reject) => {
    try {
        ig.state.generateDevice('btb_school');
        await ig.simulate.preLoginFlow();
        const userFeeds = await ig.feed.user(process.env.IG_PK).items();
        return resolve(userFeeds);
    } catch (error) {return reject(error.toString());}
});

module.exports = {
    getInstagramFeeds
}