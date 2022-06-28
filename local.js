const http = require("http");
require("dotenv").config();
const lamdba = require("./index");
const port = process.env.PORT || 8080;

const handler = async (req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const currency = url.searchParams.get("currency");
    const data = await lamdba.handler({ queryStringParameters: { currency } });

    res.writeHead(data.statusCode, data.headers);
    res.end(data.body);
};

const server = http.createServer(handler);
// eslint-disable-next-line no-console
server.listen(port, () => console.log(`Server running on port ${port}`));
