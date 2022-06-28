const fetch = require("node-fetch");

const BITCOIN_API = "https://api.coindesk.com/v1/bpi/currentprice.json";

const getBitcoinPrice = () => {
    return fetch(`${BITCOIN_API}`).then((res) => {
        if (!res.ok) {
            throw Error(res.statusText);
        }
        return res.json();
    });
};

exports.handler = async (event) => {
    const queryParams = event["queryStringParameters"];
    let currency = "USD";
    if (queryParams && queryParams.hasOwn("currency") && queryParams.get("currency") !== "") {
        currency = queryParams.get("currency");
    }

    try {
        const bitcoin_price = await getBitcoinPrice();

        const output = `${process.env.TOKEN}. Bitcoin price in ${currency} in ${bitcoin_price.bpi[currency].rate}`;

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
            },
            body: output,
            //body: JSON.stringify(bitcoin_price),
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: error.message === "Not Found" ? 404 : 500,
            body: JSON.stringify(error.message),
        };
    }
};
