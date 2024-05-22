"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_route_1 = require("./app/module/product/product.route");
const order_route_1 = require("./app/module/order/order.route");
const app = (0, express_1.default)();
// parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// application route
app.use("/api/products", product_route_1.ProdcutRoute);
app.use("/api/orders", order_route_1.OrderRoute);
// route
app.get("/", (req, res) => {
    res.send("server is running...");
});
app.all("/*", (req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});
exports.default = app;
