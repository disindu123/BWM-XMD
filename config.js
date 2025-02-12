const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VV246qSBT9lUm9yhmRi6BJJwMIgggiF22dnIcCCkG5CYUKHf99gnan+2HOmR6eKkWx9qq11t68gbxIaqSjFkzfQFklF4hRv8RticAUiE0UoQoQIIQYginYimwxMF/dGV7JjLEzN6/bKObWMYx5Q6SUGcM0frLfuhLJvIA7AcrGT5PgN4BzccffrmM1ZYTGOBjKdhYelNvcEXy9ue2Wc8uzxKW9u4hd/QLuPSJMqiQ/yGWMMlTBVEetBZPqe/QPyya7XLWBOo9l0/C1S+7Ox+vlWhRtPe84xXdMxyjTaEbJ36NfcxvzcroxKE9XWumG1GRySZ2bkJN2l+RK1gUXshjuC15invTr5JCjUAtRjhPcflt3Qxq248xtg47JreNFz0VxdB5F840jdLHYQXYRyqtbN9Pm39V9AFEL191kInhrvpFETe3WxeF8wOPKtqm9sOUqdZHU59T7StyqPrJy+j+6N3pgcrbOLpczJ+zyfOxBhyRPN8rzmLDQryU1hPmuikbe+nv0k4hNWDyceQ0MtZ1+mItnQ4p8S6HFzuBzNTGveqVZJr0JPulD3FS/Y6nE+4kSqlRAOiIntludOe/0nZ4YVBwJdHi1o7PZLoYSby959ToUDG+WjqS0uFa8ORbHDW1Q5MKz24GlpANBH55VbS9eXx43OqFWC8F0dCdAhQ5JjSuIkyJ/7JEMAWB4cVBQIfyQF1y17cItGor0rPUrVAaHUzdxyuPpyrt8sAz1oRrQ2bn1Rq/eCyBAWRUBqmsUqkmNi6o1UF3DA6rB9O+fBMjRDT+N68vRIwJESVVjL2/KtIDhh6sfL2EQFE2OnTYPpH6BKjAlP7cRxkl+qHsdmxxWQZxckBRDXINpBNMa3QkQoksSoB4PCLhrr41xc7UVLVVpuVw4vL3uKcdF/jxCcZAJfT76AWkW/WCCKPzhjyH/w2eQPxqHE5ZhIkCA5L1n+m9+aeGek2l/oRwda+HulSO7t+VA5miKHvMPG57aowqFYIqrBhHAh8GpKd3ihPLfRaN9teXOUOPOiXfFeEBtjk5QqMor3n3BfXoKpm+fc0oqwh5PFuS1YskLQIDsEcGkv/mE4TiWIxmSYqc081f957XXEZblnznCgAA57A+DGaxOf8AQZn2ldxt6jBBhmKQ1mAJp5fhV4Smy0WW1T87ngnEQpIMAPm37yP8zXxByJm0cY8ydRG61qUZcY9lt53oL5phu5qd6dJo11MqVKeHlX0DAFGRZbm7jROcTulwb45kVM6zX6U4kuF3bQXZ+bs4e8qNgy+TWEqfqipbo8TmqLclGKu8bC7s1LMSJ8wbRhVh6SuaJwktf7Rmfr8XkeLRUil0y90PKJDnOVmWt7MwNz56CC3LdVBlcZcr3d6tjRTrcUuxafSBOxGawXiM3D5lksaP2W+22GwYq9zpLqb0trJ+d+ZgM6ftETh498/YetihBjwH37sN/2fUZe/JOfIF4n5i/iJa4zZou7DTGR6yAuhROEHckg5ocSUhjN3a5NPcCh4+nm3kA9/tPApQpxFFRZf3/J/MhIEAKayx8tq2bZKjGMCvBdMTRE5plJhxJgKwVytLBEH90OxD6R54PwP0fnz4oJwkIAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Dark Adam",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "Dark Adam",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

