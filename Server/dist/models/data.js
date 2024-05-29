"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.data_product = void 0;
const popular_2wheeler_jpg_1 = __importDefault(require("./popular_2wheeler.jpg"));
const popular_3wheeler_jpg_1 = __importDefault(require("./popular_3wheeler.jpg"));
const popular_4wheeler_jpg_1 = __importDefault(require("./popular_4wheeler.jpg"));
// import p4_img from './product_4.png'
exports.data_product = [
    {
        id: 14,
        name: "Two Wheeler Vehicle  of all companies in India",
        image: popular_2wheeler_jpg_1.default,
        new_price: 50.00,
        old_price: 80.50,
    },
    {
        id: 2,
        name: "Three Wheeler Vehicle  of all companies in India",
        image: popular_3wheeler_jpg_1.default,
        new_price: 85.00,
        old_price: 120.50,
    },
    {
        id: 32,
        name: "Four Wheeler Vehicle  of all companies in India",
        image: popular_4wheeler_jpg_1.default,
        new_price: 60.00,
        old_price: 100.50,
    },
    // {
    //   id: 4,
    //   name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    //   image: p4_img,
    //   new_price: 100.00,
    //   old_price: 150.00,
    // },
];
exports.default = exports.data_product;
