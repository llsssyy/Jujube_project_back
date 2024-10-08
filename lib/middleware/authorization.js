const DEV_PROD_VARIABLE = require("../config/config");
const { makeAccessToken, verifyToken, verifyRefreshToken } = require("../utils/jwt");
const { printLog } = require("../utils/logger")
const jwt = require('jsonwebtoken');
const DB = require("../db/DB");

// 엑세스 토큰 유효시간 확인.
const authAcceccToken = (req, res, next) => {
    printLog("authorization ", " authAcceccToken");

    jwt.verify(req.headers['authorization'], DEV_PROD_VARIABLE.ACCESS_SECRET, (err, access) => {

        if(err) {
            printLog("authAcceccToken 유효하지 않은 access 토큰", err);
            return res.json(-1);
        }

        let m_id =verifyToken(req.headers['authorization']).m_id;

        DB.query(`
            SELECT TOKEN, REG_DATE FROM TBL_TOKEN WHERE M_ID = ? 
        `, [m_id], (err, result) => {

            if(err) {
                printLog("authorization ", "select tbl_token err", err);
                return res.json(-1);
            }

            if(result.length > 0) {

                let m_id = verifyRefreshToken(result[0].TOKEN).M_ID;
                let accessToken = makeAccessToken(m_id);
                res.cookie('accessToken', accessToken);
                next();

            } else {
                return res.json(-1);
            }

        });

    })

}

/*
const getAccessToken = (req, res, next) => {
    printLog("authorization ", " getAccessToken");

    let m_id = verifyToken(req.headers['authorization']).m_id;

    let accessToken = makeAccessToken(m_id);

    res.cookie('accessToken', accessToken);

    next();

}
*/

module.exports = {
    authAcceccToken,
};