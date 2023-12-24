const { JsonDB, Config } = require('node-json-db');

var db = new JsonDB(new Config("./db/texts.json", true, false, '/'));

function addText(text) {
    return db.push('/texts[]', { text, created_at: new Date().toISOString() });
}

async function getTexts() {
    try {
        const texts = await db.getData('/texts');
        return texts;
    } catch (error) {
        return [];
    }
}

module.exports = {
    addText,
    getTexts
}