"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Content {
    content(req, res) {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<h1>Hello</h1>");
        res.end();
    }
}
exports.default = Content;
//# sourceMappingURL=content.js.map