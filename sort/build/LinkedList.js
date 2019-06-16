"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.head = null;
        return _this;
    }
    LinkedList.prototype.add = function (data) {
        var node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        var tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            var length = 0;
            var cur = this.head;
            while (cur) {
                cur = cur.next;
                length++;
            }
            return length;
        },
        enumerable: true,
        configurable: true
    });
    LinkedList.prototype.at = function (index) {
        if (!this.head) {
            throw new Error("Index out of bounds");
        }
        var counter = 0;
        var cur = this.head;
        while (cur) {
            if (counter === index) {
                return cur;
            }
            cur = cur.next;
            counter++;
        }
        throw new Error("index out of bounds");
    };
    LinkedList.prototype.compare = function (leftIndex, rightIndex) {
        return this.at(leftIndex).data > this.at(rightIndex).data;
    };
    LinkedList.prototype.swap = function (leftIndex, rightIndex) {
        var temp = this.at(leftIndex).data;
        this.at(leftIndex).data = this.at(rightIndex).data;
        this.at(rightIndex).data = temp;
    };
    LinkedList.prototype.print = function () {
        if (!this.head)
            return;
        var node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    };
    return LinkedList;
}(Sorter_1.Sorter));
exports.LinkedList = LinkedList;
