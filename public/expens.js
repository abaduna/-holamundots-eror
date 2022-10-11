"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var ArrayList = /** @class */ (function () {
    function ArrayList() {
        this.items = [];
    }
    ArrayList.prototype.add = function (item) {
        this.items.push(item);
    };
    ArrayList.prototype.get = function (index) {
        var item = this.items.filter(function (x, i) { return i === index; });
        if (item.length === 0) {
            return null;
        }
        else {
            return item[0];
        }
    };
    ArrayList.prototype.createFerom = function (value) {
        this.items = __spreadArray([], value, true);
    };
    ArrayList.prototype.getAll = function () {
        return this.items;
    };
    return ArrayList;
}());
var Expense = /** @class */ (function () {
    function Expense(curency) {
        this.count = 0;
        this.finalCurrency = curency;
        this.Expenses = new ArrayList;
    }
    Expense.prototype.add = function (item) {
        item.id = this.count;
        this.count++;
        this.Expenses.add(item);
        return true;
    };
    Expense.prototype.get = function (index) {
        return this.Expenses.get(index);
    };
    Expense.prototype.getIem = function () {
        return this.Expenses.getAll();
    };
    Expense.prototype.getTotal = function () {
        var _this = this;
        var total = this.Expenses.getAll().reduce(function (acc, item) {
            return acc += _this.converCurenci(item, _this.finalCurrency);
        }, 0);
    };
    Expense.prototype.remove = function (id) {
        throw new Error("Method not implemented.");
    };
    Expense.prototype.converCurenci = function (item, curency) {
        switch (item.cost.curency) {
            case "USD":
                switch (curency) {
                    case "ARS":
                        return (item.cost.number) * 150;
                        break;
                    default:
                        return item.cost.number;
                }
                break;
        }
        "ARS";
        switch (curency) {
            case "ARS":
                return item.cost.number * 150;
                break;
            default:
                return 0;
        }
        break;
    };
    return Expense;
}());
