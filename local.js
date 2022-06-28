const http = require("http");
require("dotenv").config();
const lamdba = require("./index");
const port = process.env.PORT || 8080;

const handler = async (req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const slug = url.searchParams.get("slug");
    const pretty = url.searchParams.get("pretty");
    const data = await lamdba.handler({ queryStringParameters: { slug, pretty } });

    res.writeHead(data.statusCode, data.headers);
    res.end(data.body);
};

const server = http.createServer(handler);
// eslint-disable-next-line no-console
server.listen(port, () => console.log("Server running on port " + port));