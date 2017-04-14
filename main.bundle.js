webpackJsonp([0,5],{

/***/ 1000:
/***/ (function(module, exports) {

module.exports = "<td-layout-nav-list logo=\"assets:logo\" toolbarTitle=\"Postica\"\n                    [opened]=\"media.registerQuery('gt-md') | async\"\n                    [mode]=\"(media.registerQuery('gt-md') | async) ? 'side' : 'over'\"\n                    class=\"bgc-white-1\"  [sidenavWidth]=\"(media.registerQuery('gt-xs') | async) ? '200px' : '100%'\">\n  <div td-toolbar-content layout=\"row\" layout-align=\"start center\" flex>\n    <span flex></span>\n    <span>Stocks</span>\n    <span flex></span>\n    <app-user></app-user>\n  </div>\n\n\n\n  <md-nav-list td-sidenav-content>\n    <app-side-menu></app-side-menu>\n\n  </md-nav-list>\n  <router-outlet></router-outlet>\n</td-layout-nav-list>\n"

/***/ }),

/***/ 1001:
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" class=\"\" layout-wrap=\"\" layout-align=\"center center\">\n\n  <app-base-stock-table [columns]=\"columns\" [filter]=\"filter\" [addRow]=\"\" [editRow]=\"\" [title]=\"title\"\n                        [toggleRow]=\"\" [include]=\"include\" [filters]=\"filters\">\n\n  </app-base-stock-table>\n\n\n</div>\n"

/***/ }),

/***/ 1002:
/***/ (function(module, exports) {

module.exports = "<span>\n  <button md-button [mdMenuTriggerFor]=\"posXMenu\" class=\"font-bold-600 tc-accent\">\n    {{shop?.name || 'Select Shop'}}\n  </button>\n  <md-menu x-position=\"before\" #posXMenu=\"mdMenu\" class=\"before\">\n    <template ngFor [ngForOf]=\"shops\" let-item>\n      <button md-menu-item (click)=\"setShop(item)\"> {{item.name}} </button>\n    </template>\n    <button md-menu-item (click)=\"setShop()\"> Clear </button>\n  </md-menu>\n\n    <button md-icon-button [mdMenuTriggerFor]=\"toolbarMenu\"><md-icon>person</md-icon><md-icon>more_vert</md-icon></button>\n    <md-menu #toolbarMenu=\"mdMenu\">\n      <button md-menu-item (click)=\"openProfile()\">\n        <md-icon>person_outline</md-icon>\n        <span>Profile</span>\n      </button>\n      <button md-menu-item (click)=\"logout()\">\n        <md-icon>exit_to_app</md-icon>\n        <span>Logout</span>\n      </button>\n    </md-menu>\n</span>\n"

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__indexdb_service__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var AuthService = (function () {
    function AuthService(_indexDB) {
        var _this = this;
        this._indexDB = _indexDB;
        this._auth = {};
        this._auth$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.setAuthData = function (id, token) {
            return _this._indexDB.auth.clear().then(function () {
                return _this._indexDB.auth.add({ id: id, authentication_token: token }).then(function (data) {
                    return data;
                }, function () {
                    _this._indexDB.auth.update(id, { id: id, authentication_token: token }).then(function (data) {
                        return data;
                    }, function (data) {
                        return data;
                    });
                });
            });
        };
        this.init();
    }
    Object.defineProperty(AuthService.prototype, "auth", {
        get: function () {
            return this._auth;
        },
        set: function (data) {
            this._auth = data;
            this._auth$.next(data);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "auth$", {
        get: function () {
            return this._auth$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.getAuthData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._indexDB.auth.limit(1).toArray().then(function (data) {
                            return data[0];
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AuthService.prototype.deleteAuthData = function () {
        return this._indexDB.auth.clear().then(function (data) {
            return data;
        });
    };
    AuthService.prototype.init = function () {
        var _this = this;
        this.getAuthData().then(function (data) {
            if (data) {
                _this.auth = data;
            }
        });
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__indexdb_service__["a" /* IndexDBServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__indexdb_service__["a" /* IndexDBServiceService */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__indexdb_service__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}
var CartService = (function () {
    function CartService(_indexDB) {
        this._indexDB = _indexDB;
        this._cart$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        try {
            this.ipcRenderer = electron.ipcRenderer;
        }
        catch (err) {
        }
    }
    Object.defineProperty(CartService.prototype, "cart", {
        get: function () {
            return this._cart;
        },
        set: function (data) {
            this._cart = data;
            this._cart$.next(this.cart);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartService.prototype, "cart$", {
        get: function () {
            return this._cart$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    CartService.prototype.getProduct = function (items, productId, stockId) {
        return items.find(function (value) {
            if (value.product_id == productId && value.stock_id == stockId) {
                return true;
            }
        });
    };
    CartService.prototype.calcTotal = function (cart) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cart.total = 0;
                        cart.auto_discount = 0;
                        cart.taxes = { total: 0 };
                        cart.additional_discount = cart.discounts.reduce(function (acc, discount) {
                            return acc + round(discount.value, 2);
                        }, 0);
                        cart.items.forEach(function (item) {
                            item.total_price = round(item.unit_price * item.quantity, 2);
                            var discount = item.discount + cart.additional_discount <= 100 ? item.discount + cart.additional_discount : 100;
                            item.discounted_unit_price = round(item.unit_price - (item.unit_price * discount) / 100, 2);
                            item.discounted_total_price = round(item.discounted_unit_price * item.quantity, 2);
                            item.taxes.forEach(function (itemTax) {
                                itemTax.tax_amount = round(item.discounted_total_price * itemTax.tax_value / 100, 2);
                                if (itemTax.tax.name in cart.taxes) {
                                    cart.taxes[itemTax.tax.name] = round(cart.taxes[itemTax.tax.name] + itemTax.tax_amount, 2);
                                }
                                else {
                                    cart.taxes[itemTax.tax.name] = itemTax.tax_amount;
                                }
                                cart.taxes.total = round(cart.taxes.total + itemTax.tax_amount, 2);
                            });
                            cart.auto_discount = cart.auto_discount + round(item.total_price - item.discounted_total_price, 2);
                            cart.total = round(cart.total + item.total_price, 2);
                        });
                        cart.sub_total = cart.total - cart.taxes.total;
                        return [4 /*yield*/, this.setCart(cart, cart.local_id).then(function () {
                                return cart;
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CartService.prototype.createItem = function (product, stock, qty) {
        var item = {};
        item.product_id = product.id;
        item.name = product.name;
        item.discount = product.auto_discount;
        item.discount = product.auto_discount;
        item.unit_price = stock.selling_amount;
        item.batch_number = stock.batch_number;
        item.max_units = stock.units_purchased - stock.units_sold;
        item.default_quantity = product.default_quantity ? product.default_quantity : product.is_loose ? 0.1 : 1;
        item.is_loose = product.is_loose;
        item.quantity = qty && qty <= item.max_units ? qty : 1;
        item.stock_id = stock.id;
        item.taxes = [];
        product.taxes.forEach(function (value) {
            var tax = { tax_id: value.id, tax_value: value.value, tax: value };
            item.taxes.push(tax);
        });
        return item;
    };
    CartService.prototype.setCart = function (data, localId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._indexDB.carts.update(localId, data).then(function () {
                            return true;
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CartService.prototype.getCart = function (localId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._indexDB.carts.get(localId).then(function (cart) {
                            return cart;
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CartService.prototype.newCart = function (id, invoiceNumber) {
        return __awaiter(this, void 0, void 0, function () {
            var localId, referenceNumber, discount, order;
            return __generator(this, function (_a) {
                localId = JSON.stringify(Math.floor(Math.random() * (9999 - 999 + 1)) + 999);
                referenceNumber = '';
                try {
                    referenceNumber = this.ipcRenderer.sendSync('generateReferenceNumber');
                }
                catch (err) {
                }
                discount = { value: 0, type: 'PERCENTAGE' };
                order = { retail_shop_id: id, local_id: localId, created_on: new Date(),
                    discounts: [discount], customer: {}, address: {}, items: [],
                    reference_number: referenceNumber };
                return [2 /*return*/, this._indexDB.carts.add(order).then(function () {
                        return order.local_id;
                    })];
            });
        });
    };
    CartService.prototype.deleteCart = function (cartId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._indexDB.carts.delete(cartId).then(function () {
                        return true;
                    })];
            });
        });
    };
    CartService.prototype.addProduct = function (cartId, product, stock, qty) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCart(cartId).then(function (cart) {
                            var item = _this.getProduct(cart.items, product.id, stock.id);
                            var units_available = stock.units_purchased - stock.units_sold;
                            if (item) {
                                item.quantity = qty && qty <= units_available ? qty : item.quantity < units_available ? item.quantity + 1 : units_available;
                            }
                            else {
                                cart.items.push(_this.createItem(product, stock, qty));
                            }
                            return _this.calcTotal((cart));
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CartService.prototype.updateQuantity = function (cartId, productId, stockId, qty) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCart(cartId).then(function (cart) {
                            var item = _this.getProduct(cart.items, productId, stockId);
                            item.quantity = qty && qty <= item.max_units ? qty : item.quantity < item.max_units ? item.quantity + 1 : item.max_units;
                            return _this.calcTotal((cart));
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CartService.prototype.removeProduct = function (cartId, productId, stockId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCart(cartId).then(function (cart) {
                            var item = _this.getProduct(cart.items, productId, stockId);
                            cart.items.splice(cart.items.indexOf(item), 1);
                            return _this.calcTotal(cart);
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CartService.prototype.updateDiscount = function (cartId, productId, stockId, discount) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCart(cartId).then(function (cart) {
                            var item = _this.getProduct(cart.items, productId, stockId);
                            item.discount = discount;
                            return _this.calcTotal(cart);
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CartService.prototype.updateOrderDiscount = function (cartId, discount) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCart(cartId).then(function (cart) {
                            cart.discounts[0].value = discount;
                            return _this.calcTotal(cart);
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CartService.prototype.updateStock = function (cart) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                try {
                    cart.items.forEach(function (value) {
                        return _this._indexDB.products.get(value.product_id).then(function (data) {
                            var stocks = data.available_stocks;
                            var emptyStocks = [];
                            stocks.forEach(function (stock, index) {
                                if (stock.id == value.stock_id) {
                                    data.available_stock -= value.quantity;
                                    stock.units_sold += value.quantity;
                                }
                                if (stock.units_sold >= stock.units_purchased) {
                                    emptyStocks.push(index);
                                }
                            });
                            emptyStocks.forEach(function (emptyStock) {
                                stocks.splice(emptyStock, 1);
                            });
                            data.available_stocks = stocks;
                            _this._indexDB.products.update(data.id, data).then(function () {
                                return true;
                            }, function (err) {
                                console.log(err);
                            });
                            return true;
                        }, function (err) {
                            console.log(err);
                        });
                    });
                    return [2 /*return*/, true];
                }
                catch (err) {
                    console.log(err);
                    return [2 /*return*/, false];
                }
                return [2 /*return*/];
            });
        });
    };
    return CartService;
}());
CartService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__indexdb_service__["a" /* IndexDBServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__indexdb_service__["a" /* IndexDBServiceService */]) === "function" && _a || Object])
], CartService);

var _a;
//# sourceMappingURL=cart.service.js.map

/***/ }),

/***/ 1253:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(507);


/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__covalent_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_api_config__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__indexdb_service__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DistributorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return BrandsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TagsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SaltsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TaxsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return StocksService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return DistributorBillsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ProductSaltService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return ProductTagService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ItemsService = (function (_super) {
    __extends(ItemsService, _super);
    function ItemsService(_http, _indexDB) {
        var _this = _super.call(this, _http, {
            baseUrl: __WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* MOCK_API */],
            path: '/product',
        }) || this;
        _this._http = _http;
        _this._indexDB = _indexDB;
        _this._product = {};
        _this._products$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
        _this._product$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
        return _this;
    }
    Object.defineProperty(ItemsService.prototype, "products", {
        get: function () {
            return this._products;
        },
        set: function (data) {
            this._products = data;
            this._products$.next(this.products);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsService.prototype, "product", {
        get: function () {
            return this._product;
        },
        set: function (data) {
            this._product = data;
            this._product$.next(this.product);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsService.prototype, "products$", {
        get: function () {
            return this._products$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsService.prototype, "product$", {
        get: function () {
            return this._product$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    ItemsService.prototype.updateTag = function (productId, tagId, action) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* MOCK_API */] + 'product_tag', { __action: action, product_id: productId, tag_id: tagId })
            .map(function (data) { return data.json(); });
    };
    ItemsService.prototype.updateTax = function (productId, taxId, action) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* MOCK_API */] + 'product_tax', { __action: action, product_id: productId, tax_id: taxId })
            .map(function (data) { return data.json(); });
    };
    ItemsService.prototype.updateSalt = function (productId, saltId, action) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* MOCK_API */] + 'product_salt', { __action: action, product_id: productId, salt_id: saltId })
            .map(function (data) { return data.json(); });
    };
    ItemsService.prototype.updateProduct = function (productId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.query({ __id__equal: productId, __include: ['distributors', 'brands', 'available_stocks',
                                'similar_products'] })
                            .subscribe(function (data) {
                            return _this._indexDB.products.add(data.data[0]).then(function () {
                                return true;
                            }, function () {
                                _this._indexDB.products.update(data.data[0].id, data.data[0]).then(function () {
                                    return true;
                                });
                            });
                        }, function () {
                            return false;
                        }).closed];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ItemsService.prototype.saveProducts = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.query(params).subscribe(function (data) {
                    data.data.forEach(function (value) {
                        _this._indexDB.products.add(value).then(function () {
                        }, function () {
                            _this._indexDB.products.update(value.id, value).then();
                        });
                    });
                    return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].forkJoin([]);
                }, function (err) {
                    console.error(err);
                    return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].forkJoin([]);
                });
                return [2 /*return*/];
            });
        });
    };
    ItemsService.prototype.syncProducts = function (params) {
        return this.query(params);
    };
    ItemsService.prototype.productObservableFork = function (params, total) {
        var arr = [];
        if (params && '__limit' in params && '__page' in params && params['__page'] === 1) {
            var pages = Math.ceil(total / params['__limit']);
            for (var i = 2; i <= pages; i++) {
                params['__page'] = i;
                arr.push(this.query(Object.assign({}, params)));
            }
            if (!arr.length) {
                this._indexDB._db$.next({ status: true });
            }
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].forkJoin(arr);
        }
    };
    return ItemsService;
}(__WEBPACK_IMPORTED_MODULE_1__covalent_http__["b" /* RESTService */]));
ItemsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_http__["c" /* HttpInterceptorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_http__["c" /* HttpInterceptorService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__indexdb_service__["a" /* IndexDBServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__indexdb_service__["a" /* IndexDBServiceService */]) === "function" && _b || Object])
], ItemsService);

var DistributorService = (function (_super) {
    __extends(DistributorService, _super);
    function DistributorService(_http, _indexDB) {
        var _this = _super.call(this, _http, {
            baseUrl: __WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* MOCK_API */],
            path: '/distributor',
        }) || this;
        _this._http = _http;
        _this._indexDB = _indexDB;
        _this._distributor = {};
        _this._distributors$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
        return _this;
    }
    Object.defineProperty(DistributorService.prototype, "distributors", {
        get: function () {
            return this._distributors;
        },
        set: function (data) {
            this._distributors = data;
            this._distributors$.next(this.distributors);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DistributorService.prototype, "distributor", {
        get: function () {
            return this._distributor;
        },
        set: function (data) {
            this._distributor = data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DistributorService.prototype, "distributors$", {
        get: function () {
            return this._distributors$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    DistributorService.prototype.saveDistributors = function (params) {
        var _this = this;
        this.query(params).subscribe(function (data) {
            data.data.forEach(function (value) {
                _this._indexDB.distributors.add(value).then(function () {
                }, function () {
                    _this._indexDB.distributors.update(value.id, value);
                });
            });
            if (params && '__limit' in params && '__page' in params) {
                if (params['__limit'] == data.data.length) {
                    params['__page'] += 1;
                    _this.saveDistributors(params);
                }
            }
        }, function (err) {
            console.error(err);
        });
    };
    return DistributorService;
}(__WEBPACK_IMPORTED_MODULE_1__covalent_http__["b" /* RESTService */]));
DistributorService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_http__["c" /* HttpInterceptorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_http__["c" /* HttpInterceptorService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__indexdb_service__["a" /* IndexDBServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__indexdb_service__["a" /* IndexDBServiceService */]) === "function" && _d || Object])
], DistributorService);

var BrandsService = (function (_super) {
    __extends(BrandsService, _super);
    function BrandsService(_http, _indexDB) {
        var _this = _super.call(this, _http, {
            baseUrl: __WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* MOCK_API */],
            path: '/brand',
        }) || this;
        _this._http = _http;
        _this._indexDB = _indexDB;
        _this._brand = {};
        _this._brands$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
        return _this;
    }
    Object.defineProperty(BrandsService.prototype, "brands", {
        get: function () {
            return this._brands;
        },
        set: function (data) {
            this._brands = data;
            this._brands$.next(this.brands);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrandsService.prototype, "brand", {
        get: function () {
            return this._brand;
        },
        set: function (data) {
            this._brand = data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BrandsService.prototype, "brands$", {
        get: function () {
            return this._brands$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    BrandsService.prototype.saveBrands = function (params) {
        var _this = this;
        this.query(params).subscribe(function (data) {
            data.data.forEach(function (value) {
                _this._indexDB.brands.add(value).then(function () {
                }, function () {
                    _this._indexDB.brands.update(value.id, value);
                });
            });
            if (params && '__limit' in params && '__page' in params && params['__page'] === 1) {
                var pages = data.total / params['__limit'];
                for (var i = 1; i <= pages; i++) {
                    params['__page'] = i;
                    _this.saveBrands(params);
                }
            }
        }, function (err) {
            console.error(err);
        });
    };
    BrandsService.prototype.sync = function (params) {
        return this.query(params);
    };
    BrandsService.prototype.updateDistributor = function (brandId, distributorId, action) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* MOCK_API */] + 'brand_distributor', { __action: action, brand_id: brandId, distributor_id: distributorId })
            .map(function (data) { return data.json(); });
    };
    BrandsService.prototype.brandObservableFork = function (params, total) {
        var arr = [];
        if (params && '__limit' in params && '__page' in params && params['__page'] === 1) {
            var pages = Math.ceil(total / params['__limit']);
            for (var i = 2; i <= pages; i++) {
                params['__page'] = i;
                arr.push(this.query(Object.assign({}, params)));
            }
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].forkJoin(arr);
        }
    };
    return BrandsService;
}(__WEBPACK_IMPORTED_MODULE_1__covalent_http__["b" /* RESTService */]));
BrandsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_http__["c" /* HttpInterceptorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_http__["c" /* HttpInterceptorService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__indexdb_service__["a" /* IndexDBServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__indexdb_service__["a" /* IndexDBServiceService */]) === "function" && _f || Object])
], BrandsService);

var TagsService = (function (_super) {
    __extends(TagsService, _super);
    function TagsService(_http, _indexDB) {
        var _this = _super.call(this, _http, {
            baseUrl: __WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* MOCK_API */],
            path: '/tag',
        }) || this;
        _this._http = _http;
        _this._indexDB = _indexDB;
        _this._tag = {};
        _this._tags$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
        return _this;
    }
    Object.defineProperty(TagsService.prototype, "tags", {
        get: function () {
            return this._tags;
        },
        set: function (data) {
            this._tags = data;
            this._tags$.next(this.tags);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagsService.prototype, "tag", {
        get: function () {
            return this._tag;
        },
        set: function (data) {
            this._tag = data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagsService.prototype, "tags$", {
        get: function () {
            return this._tags$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    TagsService.prototype.saveTags = function (params) {
        var _this = this;
        this.query(params).subscribe(function (data) {
            data.data.forEach(function (value) {
                _this._indexDB.tags.add(value).then(function () {
                }, function () {
                    _this._indexDB.tags.update(value.id, value);
                });
            });
            if (params && '__limit' in params && '__page' in params) {
                if (params['__limit'] == data.data.length) {
                    params['__page'] += 1;
                    _this.saveTags(params);
                }
            }
        }, function (err) {
            console.error(err);
        });
    };
    return TagsService;
}(__WEBPACK_IMPORTED_MODULE_1__covalent_http__["b" /* RESTService */]));
TagsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_http__["c" /* HttpInterceptorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_http__["c" /* HttpInterceptorService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__indexdb_service__["a" /* IndexDBServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__indexdb_service__["a" /* IndexDBServiceService */]) === "function" && _h || Object])
], TagsService);

var SaltsService = (function (_super) {
    __extends(SaltsService, _super);
    function SaltsService(_http, _indexDB) {
        var _this = _super.call(this, _http, {
            baseUrl: __WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* MOCK_API */],
            path: '/salt',
        }) || this;
        _this._http = _http;
        _this._indexDB = _indexDB;
        _this._salt = {};
        _this._salts$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
        return _this;
    }
    Object.defineProperty(SaltsService.prototype, "salts", {
        get: function () {
            return this._salts;
        },
        set: function (data) {
            this._salts = data;
            this._salts$.next(this.salts);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaltsService.prototype, "salt", {
        get: function () {
            return this._salt;
        },
        set: function (data) {
            this._salt = data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaltsService.prototype, "salts$", {
        get: function () {
            return this._salts$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    SaltsService.prototype.saveSalts = function (params) {
        var _this = this;
        this.query(params).subscribe(function (data) {
            data.data.forEach(function (value) {
                _this._indexDB.salts.add(value).then(function () {
                }, function () {
                    _this._indexDB.salts.update(value.id, value);
                });
            });
            if (params && '__limit' in params && '__page' in params && params['__page'] === 1) {
                var pages = data.total / params['__limit'];
                for (var i = 1; i <= pages; i++) {
                    params['__page'] = i;
                    _this.saveSalts(params);
                }
            }
        }, function (err) {
            console.error(err);
        });
    };
    SaltsService.prototype.sync = function (params) {
        return this.query(params);
    };
    SaltsService.prototype.saltObservableFork = function (params, total) {
        var arr = [];
        if (params && '__limit' in params && '__page' in params && params['__page'] === 1) {
            var pages = Math.ceil(total / params['__limit']);
            for (var i = 2; i <= pages; i++) {
                params['__page'] = i;
                arr.push(this.query(Object.assign({}, params)));
            }
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].forkJoin(arr);
        }
    };
    return SaltsService;
}(__WEBPACK_IMPORTED_MODULE_1__covalent_http__["b" /* RESTService */]));
SaltsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_http__["c" /* HttpInterceptorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_http__["c" /* HttpInterceptorService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_4__indexdb_service__["a" /* IndexDBServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__indexdb_service__["a" /* IndexDBServiceService */]) === "function" && _k || Object])
], SaltsService);

var TaxsService = (function (_super) {
    __extends(TaxsService, _super);
    function TaxsService(_http, _indexDB) {
        var _this = _super.call(this, _http, {
            baseUrl: __WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* MOCK_API */],
            path: '/tax',
        }) || this;
        _this._http = _http;
        _this._indexDB = _indexDB;
        _this._tax = {};
        _this._taxes$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
        return _this;
    }
    Object.defineProperty(TaxsService.prototype, "taxes", {
        get: function () {
            return this._taxes;
        },
        set: function (data) {
            this._taxes = data;
            this._taxes$.next(this.taxes);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TaxsService.prototype, "tax", {
        get: function () {
            return this._tax;
        },
        set: function (data) {
            this._tax = data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TaxsService.prototype, "taxes$", {
        get: function () {
            return this._taxes$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    TaxsService.prototype.saveTaxes = function (params) {
        var _this = this;
        this.query(params).subscribe(function (data) {
            data.data.forEach(function (value) {
                _this._indexDB.taxes.add(value).then(function () {
                }, function () {
                    _this._indexDB.taxes.update(value.id, value);
                });
            });
            if (params && '__limit' in params && '__page' in params) {
                if (params['__limit'] == data.data.length) {
                    params['__page'] += 1;
                    _this.saveTaxes(params);
                }
            }
        }, function (err) {
            console.error(err);
        });
    };
    return TaxsService;
}(__WEBPACK_IMPORTED_MODULE_1__covalent_http__["b" /* RESTService */]));
TaxsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_http__["c" /* HttpInterceptorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_http__["c" /* HttpInterceptorService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_4__indexdb_service__["a" /* IndexDBServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__indexdb_service__["a" /* IndexDBServiceService */]) === "function" && _m || Object])
], TaxsService);

var StocksService = (function (_super) {
    __extends(StocksService, _super);
    function StocksService(_http) {
        var _this = _super.call(this, _http, {
            baseUrl: __WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* MOCK_API */],
            path: '/stock',
        }) || this;
        _this._http = _http;
        return _this;
    }
    return StocksService;
}(__WEBPACK_IMPORTED_MODULE_1__covalent_http__["b" /* RESTService */]));
StocksService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_http__["c" /* HttpInterceptorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_http__["c" /* HttpInterceptorService */]) === "function" && _o || Object])
], StocksService);

var DistributorBillsService = (function (_super) {
    __extends(DistributorBillsService, _super);
    function DistributorBillsService(_http) {
        var _this = _super.call(this, _http, {
            baseUrl: __WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* MOCK_API */],
            path: '/distributor_bill',
        }) || this;
        _this._http = _http;
        return _this;
    }
    return DistributorBillsService;
}(__WEBPACK_IMPORTED_MODULE_1__covalent_http__["b" /* RESTService */]));
DistributorBillsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_http__["c" /* HttpInterceptorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_http__["c" /* HttpInterceptorService */]) === "function" && _p || Object])
], DistributorBillsService);

var ProductSaltService = (function (_super) {
    __extends(ProductSaltService, _super);
    function ProductSaltService(_http, _indexDB) {
        var _this = _super.call(this, _http, {
            baseUrl: __WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* MOCK_API */],
            path: '/product_salt',
        }) || this;
        _this._http = _http;
        _this._indexDB = _indexDB;
        return _this;
    }
    ProductSaltService.prototype.sync = function (params) {
        return this.query(params);
    };
    ProductSaltService.prototype.productSaltObservableFork = function (params, total) {
        var arr = [];
        if (params && '__limit' in params && '__page' in params && params['__page'] === 1) {
            var pages = Math.ceil(total / params['__limit']);
            for (var i = 2; i <= pages; i++) {
                params['__page'] = i;
                arr.push(this.query(Object.assign({}, params)));
            }
            console.log(arr);
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].forkJoin(arr);
        }
    };
    return ProductSaltService;
}(__WEBPACK_IMPORTED_MODULE_1__covalent_http__["b" /* RESTService */]));
ProductSaltService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_http__["c" /* HttpInterceptorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_http__["c" /* HttpInterceptorService */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_4__indexdb_service__["a" /* IndexDBServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__indexdb_service__["a" /* IndexDBServiceService */]) === "function" && _r || Object])
], ProductSaltService);

var ProductTagService = (function (_super) {
    __extends(ProductTagService, _super);
    function ProductTagService(_http, _indexDB) {
        var _this = _super.call(this, _http, {
            baseUrl: __WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* MOCK_API */],
            path: '/product_tag',
        }) || this;
        _this._http = _http;
        _this._indexDB = _indexDB;
        return _this;
    }
    ProductTagService.prototype.sync = function (params) {
        return this.query(params);
    };
    ProductTagService.prototype.productTagObservableFork = function (params, total) {
        var arr = [];
        if (params && '__limit' in params && '__page' in params && params['__page'] === 1) {
            var pages = Math.ceil(total / params['__limit']);
            for (var i = 2; i <= pages; i++) {
                params['__page'] = i;
                arr.push(this.query(Object.assign({}, params)));
            }
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].forkJoin(arr);
        }
    };
    return ProductTagService;
}(__WEBPACK_IMPORTED_MODULE_1__covalent_http__["b" /* RESTService */]));
ProductTagService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_http__["c" /* HttpInterceptorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_http__["c" /* HttpInterceptorService */]) === "function" && _s || Object, typeof (_t = typeof __WEBPACK_IMPORTED_MODULE_4__indexdb_service__["a" /* IndexDBServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__indexdb_service__["a" /* IndexDBServiceService */]) === "function" && _t || Object])
], ProductTagService);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
//# sourceMappingURL=items.service.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__covalent_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_api_config__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__items_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__indexdb_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__orders_service__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RetailShopsService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var RetailShopsService = (function (_super) {
    __extends(RetailShopsService, _super);
    function RetailShopsService(_http, _indexDB, _itemService, _tagService, _taxService, _stockService, _productTagService, _productSaltService, _orderItemService, _brandService, _saltService) {
        var _this = _super.call(this, _http, {
            baseUrl: __WEBPACK_IMPORTED_MODULE_3__config_api_config__["a" /* MOCK_API */],
            path: '/retail_shop',
        }) || this;
        _this._http = _http;
        _this._indexDB = _indexDB;
        _this._itemService = _itemService;
        _this._tagService = _tagService;
        _this._taxService = _taxService;
        _this._stockService = _stockService;
        _this._productTagService = _productTagService;
        _this._productSaltService = _productSaltService;
        _this._orderItemService = _orderItemService;
        _this._brandService = _brandService;
        _this._saltService = _saltService;
        _this._shops = [];
        _this._shop = {};
        _this._shops$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        _this._shop$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        return _this;
    }
    Object.defineProperty(RetailShopsService.prototype, "shop", {
        get: function () {
            return this._shop;
        },
        set: function (data) {
            var _this = this;
            this._shop = data;
            this._indexDB.configs.toArray().then(function (config) {
                config.forEach(function (value) {
                    value.is_selected = value.shop_id === data.id;
                });
                _this._indexDB.configs.bulkPut(config).then(function () {
                });
            });
            this._shop$.next(this.shop);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RetailShopsService.prototype, "shops", {
        get: function () {
            return this._shops;
        },
        set: function (data) {
            // invoice number sync
            var _this = this;
            data.forEach(function (value) {
                _this._indexDB.configs.get(value.id).then(function (data) {
                    if (data.invoiceNumber !== value.invoice_number) {
                        if (data.invoiceNumber > value.invoice_number) {
                            _this.update(value.id, { id: value.id, invoice_number: data.invoiceNumber }).subscribe(function () {
                                value.invoice_number = data.invoiceNumber;
                            });
                        }
                        else {
                            _this._indexDB.configs.update(value.id, { invoiceNumber: value.invoice_number }).then();
                        }
                    }
                });
                _this._indexDB.shops.add(value).then(function () {
                }, function () {
                    _this._indexDB.shops.update(value.id, value).then();
                });
            });
            this._shops = data;
            this._shops$.next(this.shops);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RetailShopsService.prototype, "shop$", {
        get: function () {
            return this._shop$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RetailShopsService.prototype, "shops$", {
        get: function () {
            return this._shops$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    RetailShopsService.prototype.getUpdate = function (retailShopId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._indexDB.configs.get(retailShopId).then(function (data) {
                            if (data && data.stock_time) {
                                _this.getProductUpdate(retailShopId, data.stock_time).then();
                                _this.getStockUpdate(data.stock_time, retailShopId).then();
                                _this.getOrderItemUpdate(retailShopId, data.stock_time).then();
                                _this.updateStockTime(retailShopId);
                            }
                            return true;
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RetailShopsService.prototype.getProductUpdate = function (retailShopId, date, optionalParams) {
        return __awaiter(this, void 0, void 0, function () {
            var productParams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        productParams = { __retail_shop_id__equal: retailShopId, __limit: 100, __page: 1, __is_disabled__bool: false,
                            __include: ['available_stocks', 'brand'], __exclude: ['_links', 'distributors', 'similar_products'] };
                        if (date !== null) {
                            productParams['__updated_on__date_gte'] = date;
                        }
                        if (optionalParams) {
                            Object.keys(optionalParams).forEach(function (k) {
                                productParams[k] = optionalParams[k];
                            });
                        }
                        return [4 /*yield*/, this._itemService.saveProducts(productParams).then(function () {
                                return true;
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RetailShopsService.prototype.getStockUpdate = function (date, retailShopId, pageNumber) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var stockParams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        stockParams = { __retail_shop_id__equal: retailShopId, __limit: 100, __page: pageNumber || 1,
                            __only: ['id', 'product_id'], __distinct_by: 'product_id',
                            __updated_on__date_gte: date };
                        return [4 /*yield*/, this._stockService.query(stockParams).subscribe(function (data) {
                                var productId = data.data.map(function (value) {
                                    return value.product_id;
                                });
                                if (productId.length) {
                                    _this.getProductUpdate(retailShopId, null, { __id__in: productId }).then();
                                }
                                if (stockParams['__limit'] == data.data.length) {
                                    _this.getStockUpdate(date, retailShopId, pageNumber + 1 || 2).then();
                                    return true;
                                }
                                return true;
                            }).closed];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RetailShopsService.prototype.getProductSaltUpdate = function (date, retailShopId, pageNumber) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var saltParams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        saltParams = { __retail_shop_id__equal: retailShopId, __limit: 100, __page: pageNumber || 1,
                            __only: ['id', 'product_id'], __distinct_by: 'product_id',
                            __updated_on__date_gte: date };
                        return [4 /*yield*/, this._productSaltService.query(saltParams).subscribe(function (data) {
                                var productId = data.data.map(function (value) {
                                    return value.product_id;
                                });
                                if (productId.length) {
                                    _this.getProductUpdate(retailShopId, null, { __id__in: productId }).then();
                                }
                                if (saltParams['__limit'] == data.data.length) {
                                    _this.getProductSaltUpdate(date, retailShopId, pageNumber + 1 || 2).then();
                                    return true;
                                }
                                return true;
                            }).closed];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RetailShopsService.prototype.getOrderItemUpdate = function (retailShopId, date, pageNumber, optionalParams) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var orderItemParams;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        orderItemParams = {
                            __retail_shop_id__equal: retailShopId, __limit: 100, __page: pageNumber || 1, __distinct_by: 'product_id',
                            __only: ['id', 'product_id']
                        };
                        if (date !== null) {
                            orderItemParams['__updated_on__date_gte'] = date;
                        }
                        if (optionalParams) {
                            Object.keys(optionalParams).forEach(function (k) {
                                orderItemParams[k] = optionalParams[k];
                            });
                        }
                        return [4 /*yield*/, this._orderItemService.query(orderItemParams).subscribe(function (data) {
                                var productId = data.data.map(function (value) {
                                    return value.product_id;
                                });
                                if (productId.length) {
                                    _this.getProductUpdate(retailShopId, null, { __id__in: productId }).then();
                                }
                                if (orderItemParams['__limit'] == data.data.length) {
                                    _this.getOrderItemUpdate(date, retailShopId, pageNumber + 1 || 2).then();
                                    return true;
                                }
                                return true;
                            }).closed];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RetailShopsService.prototype.syncData = function (retailShopId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var params, product_params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = { __retail_shop_id__equal: retailShopId, __limit: 100, __page: 1 };
                        product_params = Object.assign({}, params);
                        product_params['__include'] = ['available_stocks', 'brand'];
                        product_params['__exclude'] = ['_links', 'distributors', 'similar_products'];
                        product_params['__is_disabled__bool'] = 'false';
                        this._tagService.saveTags(Object.assign({}, params));
                        this._taxService.saveTaxes(Object.assign({}, params));
                        this._brandService.sync(Object.assign({}, params)).subscribe(function (data) {
                            _this._indexDB.brands.clear().then(function () {
                                _this._indexDB.brands.bulkAdd(data.data).then(function () {
                                    _this._brandService.brandObservableFork(Object.assign({}, params), data.total)
                                        .subscribe(function (data) {
                                        data.forEach(function (data) {
                                            _this._indexDB.brands.bulkAdd(data.data).then(function () {
                                            }, function (err) {
                                            });
                                        });
                                    });
                                });
                            });
                        });
                        this._saltService.sync(Object.assign({}, params)).subscribe(function (data) {
                            _this._indexDB.salts.clear().then(function () {
                                _this._indexDB.salts.bulkAdd(data.data).then(function () {
                                    _this._saltService.saltObservableFork(Object.assign({}, params), data.total)
                                        .subscribe(function (data) {
                                        data.forEach(function (data) {
                                            _this._indexDB.salts.bulkAdd(data.data).then(function () {
                                            }, function (err) {
                                            });
                                        });
                                    });
                                });
                            });
                        });
                        this._productTagService.sync(Object.assign({}, params)).subscribe(function (data) {
                            _this._indexDB.productTag.clear().then(function () {
                                _this._indexDB.productTag.bulkAdd(data.data).then(function () {
                                    _this._productTagService.productTagObservableFork(Object.assign({}, params), data.total)
                                        .subscribe(function (data) {
                                        data.forEach(function (data) {
                                            _this._indexDB.productTag.bulkAdd(data.data).then(function () {
                                            }, function (err) {
                                            });
                                        });
                                    });
                                });
                            });
                        });
                        this._productSaltService.sync(Object.assign({}, params)).subscribe(function (data) {
                            _this._indexDB.productSalt.clear().then(function () {
                                _this._indexDB.productSalt.bulkAdd(data.data).then(function () {
                                    _this._productSaltService.productSaltObservableFork(Object.assign({}, params), data.total)
                                        .subscribe(function (data) {
                                        data.forEach(function (data) {
                                            _this._indexDB.productSalt.bulkAdd(data.data).then(function () {
                                            }, function (err) {
                                            });
                                        });
                                    });
                                });
                            });
                        });
                        this._itemService.syncProducts(product_params).subscribe(function (data) {
                            _this._indexDB.products.clear().then(function () {
                                _this._indexDB.products.bulkAdd(data.data).then(function () {
                                    _this._itemService.productObservableFork(product_params, data.total).subscribe(function (data) {
                                        data.forEach(function (data) {
                                            _this._indexDB.products.bulkAdd(data.data).then(function () { }, function (err) {
                                            });
                                        });
                                        _this._indexDB._db$.next({ status: true });
                                    }, function () {
                                        _this._indexDB._db$.next({ status: true });
                                    });
                                });
                            });
                        });
                        this.updateStockTime(retailShopId);
                        return [4 /*yield*/, true];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RetailShopsService.prototype.updateStockTime = function (retailShopId) {
        var _this = this;
        this._indexDB.configs.add({ stock_time: new Date().toJSON().substring(0, 10), shop_id: retailShopId }).then(function () {
        }, function () {
            _this._indexDB.configs.update(retailShopId, { stock_time: new Date().toJSON(),
                shop_id: retailShopId }).then(function () {
            }, function (err) {
            });
        });
    };
    return RetailShopsService;
}(__WEBPACK_IMPORTED_MODULE_2__covalent_http__["b" /* RESTService */]));
RetailShopsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__covalent_http__["c" /* HttpInterceptorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__covalent_http__["c" /* HttpInterceptorService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__indexdb_service__["a" /* IndexDBServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__indexdb_service__["a" /* IndexDBServiceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__items_service__["a" /* ItemsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__items_service__["a" /* ItemsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__items_service__["c" /* TagsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__items_service__["c" /* TagsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__items_service__["e" /* TaxsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__items_service__["e" /* TaxsService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__items_service__["g" /* StocksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__items_service__["g" /* StocksService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__items_service__["j" /* ProductTagService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__items_service__["j" /* ProductTagService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__items_service__["i" /* ProductSaltService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__items_service__["i" /* ProductSaltService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6__orders_service__["a" /* OrderItemsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__orders_service__["a" /* OrderItemsService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_4__items_service__["f" /* BrandsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__items_service__["f" /* BrandsService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_4__items_service__["d" /* SaltsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__items_service__["d" /* SaltsService */]) === "function" && _l || Object])
], RetailShopsService);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
//# sourceMappingURL=shop.service.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__covalent_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_api_config__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CustomerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerTransactionsService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerService = (function (_super) {
    __extends(CustomerService, _super);
    function CustomerService(_http) {
        var _this = _super.call(this, _http, {
            baseUrl: __WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* MOCK_API */],
            path: '/customer',
        }) || this;
        _this._http = _http;
        return _this;
    }
    CustomerService.prototype.addAddress = function (address) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* MOCK_API */] + 'address', address).map(function (data) { return data.json(); });
    };
    CustomerService.prototype.addCustomerAddress = function (addressId, customerId) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* MOCK_API */] + 'customer_address', [{
                __action: 'add',
                customer_id: customerId,
                address_id: addressId
            }]).map(function (data) { return data.json(); });
    };
    return CustomerService;
}(__WEBPACK_IMPORTED_MODULE_1__covalent_http__["b" /* RESTService */]));
CustomerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_http__["c" /* HttpInterceptorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_http__["c" /* HttpInterceptorService */]) === "function" && _a || Object])
], CustomerService);

var CustomerTransactionsService = (function (_super) {
    __extends(CustomerTransactionsService, _super);
    function CustomerTransactionsService(_http) {
        var _this = _super.call(this, _http, {
            baseUrl: __WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* MOCK_API */],
            path: '/customer_transaction',
        }) || this;
        _this._http = _http;
        return _this;
    }
    return CustomerTransactionsService;
}(__WEBPACK_IMPORTED_MODULE_1__covalent_http__["b" /* RESTService */]));
CustomerTransactionsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_http__["c" /* HttpInterceptorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_http__["c" /* HttpInterceptorService */]) === "function" && _b || Object])
], CustomerTransactionsService);

var _a, _b;
//# sourceMappingURL=customer.service.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dexie__ = __webpack_require__(892);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexDBServiceService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IndexDBServiceService = (function (_super) {
    __extends(IndexDBServiceService, _super);
    function IndexDBServiceService() {
        var _this = _super.call(this, "myPosDB") || this;
        _this._db$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"];
        _this.version(1).stores({
            products: "++id,name,retail_shop_id,brand_id,[retail_shop_id+brand_id],barcode",
            distributors: "++id,name,retail_shop_id",
            brands: "++id,name,retail_shop_id",
            tags: "++id,name,retail_shop_id",
            salts: "++id,name,retail_shop_id",
            taxes: "++id,name,retail_shop_id",
            shops: "++id, name",
            orders: "++id",
            carts: "++local_id,retail_shop_id",
            localities: "++id, name",
            users: "++id, mobile_number, email",
            configs: "++shop_id,is_selected",
            auth: "++id,authentication_token",
            productSalt: "++id,product_id,salt_id,[salt_id+product_id]",
            productTag: "++id,product_id,tag_id"
        });
        return _this;
    }
    Object.defineProperty(IndexDBServiceService.prototype, "db$", {
        get: function () {
            return this._db$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    return IndexDBServiceService;
}(__WEBPACK_IMPORTED_MODULE_1_dexie__["a" /* default */]));
IndexDBServiceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], IndexDBServiceService);

//# sourceMappingURL=indexdb.service.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_items_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__covalent_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_indexdb_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_orders_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_info_product_info_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__checkout_checkout_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_cart_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__item_discount_item_discount_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__salts_salts_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__brands_brands_component__ = __webpack_require__(345);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};













var BillingComponent = (function () {
    function BillingComponent(_snackBarService, _dialogService, _cartService, _itemService, _orderService, _cd, _activatedRoute, _loadingService, _indexDb, media, _router) {
        this._snackBarService = _snackBarService;
        this._dialogService = _dialogService;
        this._cartService = _cartService;
        this._itemService = _itemService;
        this._orderService = _orderService;
        this._cd = _cd;
        this._activatedRoute = _activatedRoute;
        this._loadingService = _loadingService;
        this._indexDb = _indexDb;
        this.media = media;
        this._router = _router;
        this._products = [];
        this.selectedSalts = [];
        this.selectedBrands = [];
        this.searchInputTerm = null;
        this.itemsPerPage = 48;
        this.saltsPerPage = 48;
        this.brandsPerPage = 48;
        this.productSalts = [];
        this._loadingService.create({
            name: 'billing',
            type: __WEBPACK_IMPORTED_MODULE_3__covalent_core__["f" /* LoadingType */].Circular,
            mode: __WEBPACK_IMPORTED_MODULE_3__covalent_core__["g" /* LoadingMode */].Indeterminate,
            color: 'warn',
        });
    }
    BillingComponent.prototype.ngOnInit = function () {
    };
    BillingComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._loadingService.register('billing');
        this._activatedRoute.params.subscribe(function (params) {
            if (params.id) {
                _this._indexDb.carts.get((params.id)).then(function (data) {
                    _this.cart = data;
                    _this.getProducts();
                    _this._indexDb.products.where('retail_shop_id').equals(_this.cart.retail_shop_id).count().then(function (count) {
                        _this.totalProducts = count;
                    });
                    _this._loadingService.resolve('billing');
                });
            }
        });
        this.media.registerQuery('xs').subscribe(function (data) {
            if (data) {
                _this.itemsPerPage = 12;
                _this.saltsPerPage = 6;
                _this.brandsPerPage = 6;
                _this._cd.markForCheck();
            }
        });
        this.media.registerQuery('sm').subscribe(function (data) {
            if (data) {
                _this.itemsPerPage = 24;
                _this.saltsPerPage = 12;
                _this.brandsPerPage = 12;
                _this._cd.markForCheck();
            }
        });
        this.media.registerQuery('md').subscribe(function (data) {
            if (data) {
                _this.itemsPerPage = 36;
                _this.saltsPerPage = 24;
                _this.brandsPerPage = 24;
                _this._cd.markForCheck();
            }
        });
        this.media.registerQuery('lg').subscribe(function (data) {
            if (data) {
                _this.itemsPerPage = 48;
                _this.saltsPerPage = 36;
                _this.brandsPerPage = 36;
                _this._cd.markForCheck();
            }
        });
        this.media.registerQuery('gt-lg').subscribe(function (data) {
            if (data) {
                _this.itemsPerPage = 54;
                _this.saltsPerPage = 48;
                _this.brandsPerPage = 48;
                _this._cd.markForCheck();
            }
        });
        this.media.broadcast();
    };
    Object.defineProperty(BillingComponent.prototype, "products", {
        get: function () {
            return this._products;
        },
        set: function (data) {
            this._products = data;
        },
        enumerable: true,
        configurable: true
    });
    BillingComponent.prototype.change = function (event) {
        this.getProducts(event.page, event.pageSize);
    };
    BillingComponent.prototype.queryProductSalt = function (salts, products) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var salt_1, productSalt_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!salts.length) return [3 /*break*/, 4];
                        if (!(products && products.length)) return [3 /*break*/, 2];
                        salt_1 = salts.pop();
                        productSalt_1 = [];
                        products.forEach(function (product) {
                            productSalt_1.push([salt_1, product.product_id]);
                        });
                        return [4 /*yield*/, this._indexDb.productSalt.where(['salt_id+product_id']).anyOf(productSalt_1).toArray().then(function (products) {
                                if (products.length && salts.length)
                                    return _this.queryProductSalt(salts, products);
                                return products;
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this._indexDb.productSalt.where('salt_id').equals(salts.pop()).toArray().then(function (products) {
                            if (products.length && salts.length)
                                return _this.queryProductSalt(salts, products);
                            return products;
                        })];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    BillingComponent.prototype.getProducts = function (page, pageSize) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!pageSize) {
                            pageSize = this.itemsPerPage;
                        }
                        if (!page) {
                            page = 1;
                        }
                        return [4 /*yield*/, this.queryProductSalt(Object.assign([], this.selectedSalts)).then(function (productSalt) {
                                _this.productSalts = productSalt;
                            })];
                    case 1:
                        _a.sent();
                        if (this.totalProducts > 10000 && this.searchInputTerm) {
                            params = {
                                __retail_shop_id__equal: this.cart.retail_shop_id, __name__contains: this.searchInputTerm || undefined,
                                __only: ['id'], __page: page, __limit: pageSize
                            };
                            if (this.selectedBrands.length) {
                                params['__brand_id__in'] = [this.selectedBrands];
                            }
                            if (this.productSalts && this.productSalts.length) {
                                params['__id__in'] = this.productSalts.map(function (product) {
                                    return product.product_id;
                                });
                            }
                            this._itemService.query(params).subscribe(function (data) {
                                _this._indexDb.products.where('id').anyOf(data.data.map(function (product) {
                                    return product.id;
                                })).toArray().then(function (data) {
                                    _this.products = data;
                                    _this._cd.markForCheck();
                                    return;
                                });
                            }, function (err) {
                                if (err.type === 'err') {
                                    _this.getLocalProducts(page, pageSize);
                                }
                            });
                            return [2 /*return*/];
                        }
                        this.getLocalProducts(page, pageSize);
                        return [2 /*return*/];
                }
            });
        });
    };
    BillingComponent.prototype.getLocalProducts = function (page, pageSize) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var query, products, brandArr_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = this._indexDb.products;
                        products = null;
                        if (!this.selectedSalts.length) return [3 /*break*/, 2];
                        return [4 /*yield*/, query.where('id').anyOf(this.productSalts.map(function (product) {
                                return product.product_id;
                            })).toArray().then(function (data) {
                                products = data;
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!this.selectedBrands.length) return [3 /*break*/, 5];
                        if (!products) return [3 /*break*/, 3];
                        products = products.filter(function (product) {
                            return _this.selectedBrands.indexOf(product.brand_id) > -1;
                        });
                        return [3 /*break*/, 5];
                    case 3:
                        brandArr_1 = [];
                        this.selectedBrands.forEach(function (brand_id) {
                            brandArr_1.push([_this.cart.retail_shop_id, brand_id]);
                        });
                        query = query.where(['retail_shop_id+brand_id']).anyOf(brandArr_1);
                        if (this.searchInputTerm) {
                            query = query.filter(function (product) {
                                return new RegExp("^" + _this.searchInputTerm, 'gi').test(product.name);
                            });
                        }
                        return [4 /*yield*/, query.toArray().then(function (data) {
                                products = data;
                            })];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        if (!this.searchInputTerm) return [3 /*break*/, 7];
                        return [4 /*yield*/, query.offset((page - 1) * pageSize).limit(pageSize).filter(function (product) {
                                return new RegExp("^" + _this.searchInputTerm, 'gi').test(product.name);
                            })
                                .toArray().then(function (data) {
                                products = data;
                            })];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7:
                        if (!(!this.selectedSalts.length && !this.selectedBrands.length && !this.searchInputTerm)) return [3 /*break*/, 9];
                        return [4 /*yield*/, query.offset((page - 1) * pageSize).limit(pageSize).toArray().then(function (data) {
                                products = data;
                            })];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9:
                        this.products = products;
                        this._cd.markForCheck();
                        return [2 /*return*/];
                }
            });
        });
    };
    BillingComponent.prototype.searchProducts = function () {
        var _this = this;
        if (this.searchInputTerm !== null && this.searchInputTerm !== undefined
            && (this.searchInputTerm.length == 8 || this.searchInputTerm.length == 13) && parseInt(this.searchInputTerm)) {
            var term = this.searchInputTerm;
            this.searchInputTerm = undefined;
            this._indexDb.products.where('barcode').equals(term).first().then(function (data) {
                if (data.available_stock > 0) {
                    _this.addProduct(data, data.available_stocks, data.default_quantity ? data.default_quantity : data.is_loose ? 0.1 : 1);
                }
                _this._cd.markForCheck();
            }, function () {
            });
            return;
        }
        this.getProducts();
        return;
    };
    BillingComponent.prototype.addProduct = function (product, stocks, qty) {
        var _this = this;
        if (!stocks)
            return;
        var item;
        var stockToAdd = stocks.find(function (stock) {
            item = _this.cart.items.find(function (item) {
                return item.product_id == product.id && item.stock_id == stock.id;
            });
            if (item) {
                return stock.units_purchased - stock.units_sold - item.quantity > 0;
            }
            else {
                return stock.units_purchased - stock.units_sold > 0;
            }
        });
        if (stockToAdd) {
            if (item) {
                qty += item.quantity;
            }
            this._cartService.addProduct(this.cart.local_id, product, stockToAdd, qty).then(function (cart) {
                _this.cart = cart;
                _this._cd.markForCheck();
            });
        }
    };
    BillingComponent.prototype.updateProductQuantity = function (productId, stockId, qty) {
        var _this = this;
        this._cartService.updateQuantity(this.cart.local_id, productId, stockId, qty).then(function (cart) {
            _this.cart = cart;
            _this._cd.markForCheck();
        });
    };
    BillingComponent.prototype.removeProduct = function (productId, stockId) {
        var _this = this;
        this._cartService.removeProduct(this.cart.local_id, productId, stockId).then(function (cart) {
            _this.cart = cart;
            _this._cd.markForCheck();
        });
    };
    BillingComponent.prototype.showInfo = function (product) {
        var _dialog = this._dialogService.open(__WEBPACK_IMPORTED_MODULE_6__product_info_product_info_component__["a" /* ProductInfoComponent */]);
        _dialog.componentInstance.product = product;
        _dialog.afterClosed().subscribe(function (data) {
        });
    };
    BillingComponent.prototype.checkOut = function () {
        var _this = this;
        var _dialog = this._dialogService.open(__WEBPACK_IMPORTED_MODULE_7__checkout_checkout_component__["a" /* CheckoutComponent */]);
        _dialog.componentInstance.cart = this.cart;
        _dialog.afterClosed().subscribe(function (data) {
            if (data) {
                _this.showSnackBar(data);
                _this._cartService.deleteCart(_this.cart.local_id).then(function () {
                    _this._router.navigate(['dashboard/carts/']);
                });
            }
        });
    };
    BillingComponent.prototype.filterSalts = function () {
        var _this = this;
        var _dialog = this._dialogService.open(__WEBPACK_IMPORTED_MODULE_11__salts_salts_component__["a" /* SaltsComponent */], { height: '50%',
            width: '70%', });
        _dialog.componentInstance.shopId = this.cart.retail_shop_id;
        _dialog.componentInstance.saltsPerPage = this.saltsPerPage;
        _dialog.componentInstance.selectedSalt = this.selectedSalts;
        _dialog.afterClosed().subscribe(function (data) {
            if (data) {
                _this.selectedSalts = data;
                _this.getProducts();
            }
        });
    };
    BillingComponent.prototype.filterBrands = function () {
        var _this = this;
        var _dialog = this._dialogService.open(__WEBPACK_IMPORTED_MODULE_12__brands_brands_component__["a" /* BrandsComponent */], { height: '400px',
            width: '600px', });
        _dialog.componentInstance.shopId = this.cart.retail_shop_id;
        _dialog.componentInstance.brandsPerPage = this.saltsPerPage;
        _dialog.componentInstance.selectedBrand = this.selectedBrands;
        _dialog.afterClosed().subscribe(function (data) {
            if (data) {
                _this.selectedBrands = data;
                _this.getProducts();
            }
        });
    };
    BillingComponent.prototype.discountItem = function (productId, stockId, discount) {
        var _this = this;
        var _dialog = this._dialogService.open(__WEBPACK_IMPORTED_MODULE_10__item_discount_item_discount_component__["a" /* ItemDiscountComponent */]);
        _dialog.componentInstance.discount = JSON.stringify(discount);
        _dialog.afterClosed().subscribe(function (data) {
            _this._cartService.updateDiscount(_this.cart.local_id, productId, stockId, data.discount).then(function (cart) {
                _this.cart = cart;
            });
        });
    };
    BillingComponent.prototype.updateOrderDiscount = function (discount) {
        var _this = this;
        this._cartService.updateOrderDiscount(this.cart.local_id, discount).then(function (cart) {
            _this.cart = cart;
        });
    };
    BillingComponent.prototype.showSnackBar = function (orderId) {
        this._snackBarService.open('Order Placed Successfully ID#' + orderId, '', { duration: 3000 });
    };
    BillingComponent.prototype.quickCheckOut = function () {
        var _this = this;
        this._loadingService.register('billing');
        this.cart.amount_paid = this.cart.total;
        this._orderService.create(this.cart).subscribe(function (data) {
            _this._cartService.updateStock(_this.cart).then(function (status) {
                _this._loadingService.resolve('billing');
                if (data) {
                    _this.showSnackBar(JSON.stringify(data.data[0].invoice_number));
                    _this._cartService.deleteCart(_this.cart.local_id).then(function () {
                        _this._router.navigate(['dashboard/carts/']);
                    });
                }
            });
        }, function () {
            _this._loadingService.resolve('billing');
        });
    };
    return BillingComponent;
}());
BillingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'billing',
        template: __webpack_require__(954),
        styles: [__webpack_require__(895)],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_6__product_info_product_info_component__["a" /* ProductInfoComponent */], __WEBPACK_IMPORTED_MODULE_7__checkout_checkout_component__["a" /* CheckoutComponent */], __WEBPACK_IMPORTED_MODULE_10__item_discount_item_discount_component__["a" /* ItemDiscountComponent */]],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__angular_material__["M" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_material__["M" /* MdSnackBar */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__angular_material__["I" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_material__["I" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_9__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_cart_service__["a" /* CartService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_items_service__["a" /* ItemsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_items_service__["a" /* ItemsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_orders_service__["b" /* OrdersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_orders_service__["b" /* OrdersService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* ActivatedRoute */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__covalent_core__["h" /* TdLoadingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__covalent_core__["h" /* TdLoadingService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4__services_indexdb_service__["a" /* IndexDBServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_indexdb_service__["a" /* IndexDBServiceService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_3__covalent_core__["k" /* TdMediaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__covalent_core__["k" /* TdMediaService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _l || Object])
], BillingComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
//# sourceMappingURL=billing.component.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_indexdb_service__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BrandsComponent = (function () {
    function BrandsComponent(dialogRef, _indexDB, _cd) {
        this.dialogRef = dialogRef;
        this._indexDB = _indexDB;
        this._cd = _cd;
        this.selectedBrand = [];
        this.brands = [];
        this.totalBrands = 0;
    }
    BrandsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._indexDB.brands.where('retail_shop_id').equals(this.shopId).count().then(function (count) {
            _this.totalBrands = count;
        });
        this.getBrands();
    };
    BrandsComponent.prototype.close = function () {
        this.dialogRef.close(this.selectedBrand);
    };
    BrandsComponent.prototype.getBrands = function (brandName, event) {
        var _this = this;
        var page = event ? event.page : 1;
        var pageSize = event ? event.pageSize : this.brandsPerPage;
        if (brandName) {
            this._indexDB.brands.where('retail_shop_id').equals(this.shopId).offset((page - 1) * pageSize)
                .limit(pageSize).filter(function (salt) {
                return new RegExp("^" + brandName, 'gi').test(salt.name);
            }).toArray().then(function (brands) {
                _this.brands = brands;
                _this._cd.markForCheck();
            });
        }
        else {
            this._indexDB.brands.where('retail_shop_id').equals(this.shopId).offset((page - 1) * pageSize)
                .limit(pageSize).toArray().then(function (brands) {
                _this.brands = brands;
                _this._cd.markForCheck();
            });
        }
    };
    BrandsComponent.prototype.checkBrand = function (salt) {
        return this.selectedBrand.indexOf(salt) > -1;
    };
    BrandsComponent.prototype.toggleBrand = function (salt) {
        if (this.checkBrand(salt)) {
            this.selectedBrand.splice(this.selectedBrand.indexOf(salt), 1);
        }
        else {
            this.selectedBrand.push(salt);
        }
        return;
    };
    BrandsComponent.prototype.clearFilter = function () {
        this.selectedBrand = [];
        this._cd.markForCheck();
    };
    return BrandsComponent;
}());
BrandsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-brands',
        template: __webpack_require__(955),
        styles: [__webpack_require__(896)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["J" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["J" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_indexdb_service__["a" /* IndexDBServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_indexdb_service__["a" /* IndexDBServiceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _c || Object])
], BrandsComponent);

var _a, _b, _c;
//# sourceMappingURL=brands.component.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_orders_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_indexdb_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_customer_service__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shop_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__covalent_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_cart_service__ = __webpack_require__(110);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CheckoutComponent = (function () {
    function CheckoutComponent(dialogRef, _customerService, _indexDB, _orderService, _cartService, _shopService, elRef, _loadingService) {
        var _this = this;
        this.dialogRef = dialogRef;
        this._customerService = _customerService;
        this._indexDB = _indexDB;
        this._orderService = _orderService;
        this._cartService = _cartService;
        this._shopService = _shopService;
        this.elRef = elRef;
        this._loadingService = _loadingService;
        this.customer = { addresses: [] };
        this.addresses = [];
        this.address = {};
        this.digitsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.denominationArray = { 1: 0, 2: 0, 5: 0, 10: 0, 20: 0, 50: 0, 100: 0, 500: 0, 1000: 0, 2000: 0 };
        this.total = '0';
        this.getCustomers = function (event) {
            _this._loadingService.register('checkout');
            if (parseInt(event)) {
                return _this._customerService.query({
                    __retail_brand_id__equal: _this.shop.retail_brand_id,
                    __number__contains: event,
                    __limit: 100,
                    __only: ['id', 'name', 'mobile_number']
                }).map(function (data) { return data.data.map(function (item) {
                    _this._loadingService.resolve('checkout');
                    return item;
                }); }, function () {
                    console.log('ddd');
                }).catch(function (error) {
                    _this._loadingService.resolve('checkout');
                    return __WEBPACK_IMPORTED_MODULE_6_rxjs__["Observable"].throw(error.json().error);
                });
            }
            else {
                return _this._customerService.query({
                    __retail_brand_id__equal: _this.shop.retail_brand_id, __name__contains: event,
                    __limit: 100,
                    __only: ['id', 'name', 'mobile_number']
                })
                    .map(function (data) { return data.data.map(function (item) {
                    _this._loadingService.resolve('checkout');
                    return item;
                }); }).catch(function (error) {
                    _this._loadingService.resolve('checkout');
                    return __WEBPACK_IMPORTED_MODULE_6_rxjs__["Observable"].throw(error.json().error);
                });
            }
        };
        this._loadingService.create({
            name: 'checkout',
            type: __WEBPACK_IMPORTED_MODULE_7__covalent_core__["f" /* LoadingType */].Circular,
            mode: __WEBPACK_IMPORTED_MODULE_7__covalent_core__["g" /* LoadingMode */].Indeterminate,
            color: 'warn',
        });
        try {
            this.ipcRenderer = electron.ipcRenderer;
        }
        catch (err) {
        }
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._indexDB.shops.get(this.cart.retail_shop_id).then(function (shop) {
            _this.shop = shop;
            _this._indexDB.configs.get(_this.shop.id).then(function (data) {
                _this.currentInvoiceNumber = data.invoiceNumber + 1;
            });
        });
        if (this.cart.customer) {
            this.customer = this.cart.customer;
            if (this.customer.id) {
                this.customers = [{ display: this.customer.name, value: this.customer.id }];
                this.addCustomer({ value: this.customer.id });
            }
        }
        this.cart.address_id = null;
    };
    CheckoutComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    CheckoutComponent.prototype.enterAmount = function (digit) {
        this.total += digit;
        this.cart.amount_paid = parseFloat(this.total);
    };
    CheckoutComponent.prototype.clearAmount = function () {
        this.total = this.total.slice(0, -1);
        if (this.total.slice(-1) === '.') {
            this.total = this.total.slice(0, -1);
        }
        if (this.total.slice(-2, -1) === '.') {
            this.total = this.total.slice(0, -2);
        }
        this.cart.amount_paid = parseFloat(this.total);
    };
    CheckoutComponent.prototype.clearDenomination = function () {
        this.denominationArray = { 1: 0, 2: 0, 5: 0, 10: 0, 20: 0, 50: 0, 100: 0, 500: 0, 1000: 0, 2000: 0 };
    };
    CheckoutComponent.prototype.addCustomer = function (event) {
        var _this = this;
        if (event) {
            this._customerService.query({
                __id__equal: event.id,
                __include: ['addresses'],
                __limit: 1
            }).subscribe(function (data) {
                _this.cart.customer = _this.customer = data.data[0];
                _this.cart.customer_id = _this.customer.id;
                _this.saveCart();
                _this.addresses = _this.customer.addresses;
            });
        }
        else {
            this.clearCustomer();
        }
    };
    CheckoutComponent.prototype.checkOut = function () {
        var _this = this;
        this._loadingService.register('checkout');
        this._orderService.create(this.cart).subscribe(function (data) {
            _this._cartService.updateStock(_this.cart).then(function (status) {
                console.log(status);
                _this._loadingService.resolve('checkout');
                _this.dialogRef.close(data.data[0].reference_number);
            });
        }, function () {
            _this._loadingService.resolve('checkout');
        });
    };
    CheckoutComponent.prototype.saveCustomer = function () {
        var _this = this;
        this.customer.retail_brand_id = this.shop.retail_brand_id;
        this._customerService.create(this.customer).subscribe(function (data) {
            console.log(data);
            _this.cart.customer_id = data.data[0].id;
            _this.customer = data.data[0];
        });
    };
    CheckoutComponent.prototype.clearCustomer = function () {
        this.cart.customer = null;
        this.cart.customer_id = null;
        this.customer = { retail_brand_id: this.shop.retail_brand_id };
        this.customers = [];
        this.addresses = [];
        this.saveCart();
    };
    CheckoutComponent.prototype.saveCart = function () {
        this._cartService.setCart(this.cart, this.cart.local_id).then();
    };
    CheckoutComponent.prototype.clearAddress = function () {
        this.cart.address_id = null;
        this.address.name = null;
    };
    CheckoutComponent.prototype.addAddress = function () {
        var _this = this;
        this._loadingService.register('checkout');
        this._customerService.addAddress(this.address).subscribe(function (data) {
            console.log(data);
            _this._customerService.addCustomerAddress(data.data[0].id, _this.customer.id).subscribe(function () {
                _this.address.id = data.data[0].id;
                _this.addresses = _this.addresses.concat(_this.address);
                _this.cart.address_id = _this.address.id;
                _this._loadingService.resolve('checkout');
            }, function () {
                _this._loadingService.resolve('checkout');
            });
        }, function () {
            _this._loadingService.resolve('checkout');
        });
    };
    CheckoutComponent.prototype.printReceipt = function () {
        try {
            if (this.ipcRenderer.send('printBill', this.renderHtml(this.elRef.nativeElement.querySelector('#print-receipt')).innerHTML)) {
                this.increaseInvoiceNumber();
            }
        }
        catch (err) {
            var wnd = window.open("about:blank", "", "_blank");
            wnd.document.write(this.renderHtml(this.elRef.nativeElement.querySelector('#print-receipt')).innerHTML);
            wnd.print();
            this.increaseInvoiceNumber();
        }
    };
    CheckoutComponent.prototype.printBill = function () {
        //#TODO Very Bad DOM manipulation need to change
        try {
            if (this.ipcRenderer.send('printBill', this.renderHtml(this.elRef.nativeElement.querySelector('#print-bill')).innerHTML)) {
                this.increaseInvoiceNumber();
            }
        }
        catch (err) {
            var wnd = window.open("about:blank", "", "_blank");
            wnd.document.write(this.renderHtml(this.elRef.nativeElement.querySelector('#print-bill')).innerHTML);
            wnd.print();
            this.increaseInvoiceNumber();
        }
    };
    CheckoutComponent.prototype.renderHtml = function (element) {
        if (element.querySelector('#shopName')) {
            element.querySelector('#shopName').innerHTML = this.shop.name;
        }
        if (element.querySelector('#dueDate')) {
            element.querySelector('#dueDate').innerHTML = this.cart.created_on.toLocaleString();
        }
        if (element.querySelector('#billDate')) {
            element.querySelector('#billDate').innerHTML = this.cart.created_on.toLocaleString();
        }
        if (element.querySelector('#customerName')) {
            element.querySelector('#customerName').innerHTML = this.cart.customer.name || null;
        }
        if (element.querySelector('#customerNumber')) {
            element.querySelector('#customerNumber').innerHTML = this.cart.customer.mobile_number || null;
        }
        if (element.querySelector('#invoiceNumber')) {
            element.querySelector('#invoiceNumber').innerHTML = '#' + this.pad(this.currentInvoiceNumber, 5) || null;
        }
        if (element.querySelector('#subTotal')) {
            element.querySelector('#subTotal').innerHTML = (this.cart.sub_total || 0).toString() + '/-';
        }
        if (element.querySelector('#total')) {
            element.querySelector('#total').innerHTML = (this.cart.total || 0).toString() + '/-';
        }
        if (element.querySelector('#discount')) {
            element.querySelector('#discount').innerHTML = ((this.cart.additional_discount || 0) +
                (this.cart.auto_discount || 0)).toString() + '/-';
        }
        if (element.querySelector('#taxParent')) {
            var taxes_1 = {};
            this.cart.items.forEach(function (item) {
                item.taxes.forEach(function (tax) {
                    console.log(tax);
                    if (tax.tax.name in taxes_1) {
                        taxes_1[tax.tax.name] += tax.tax_amount;
                    }
                    else {
                        taxes_1[tax.tax.name] = tax.tax_amount;
                    }
                });
            });
            var taxRow = element.querySelector('#taxParent').children[0].children[0];
            var taxName = taxRow.children[1];
            var taxValue = taxRow.children[2];
            for (var i in taxes_1) {
                if (taxes_1.hasOwnProperty(i)) {
                    taxName.innerHTML = i;
                    taxValue.innerHTML = taxes_1[i] + '/';
                    element.querySelector('#taxParent2').innerHTML += taxRow.outerHTML;
                }
            }
            element.querySelector('#taxParent').innerHTML = null;
        }
        if (element.querySelector('#item')) {
            var itemRow_1 = element.querySelector('#item').children[0].children[0];
            var itemName_1 = itemRow_1.children[0];
            var itemQuantity_1 = itemRow_1.children[1];
            var itemPrice_1 = itemRow_1.children[2];
            this.cart.items.forEach(function (item) {
                itemName_1.innerHTML = item.name;
                itemQuantity_1.innerHTML = 'x' + item.quantity;
                itemPrice_1.innerHTML = item.unit_price + '/-';
                element.querySelector('#item2').innerHTML += itemRow_1.outerHTML;
            });
            element.querySelector('#item').innerHTML = null;
        }
        if (element.querySelector('#address1')) {
            element.querySelector('#address1').innerHTML = this.address.name || '';
        }
        return element;
    };
    CheckoutComponent.prototype.pad = function (num, size) {
        var s = num + "";
        while (s.length < size)
            s = "0" + s;
        return s;
    };
    CheckoutComponent.prototype.increaseInvoiceNumber = function () {
        var _this = this;
        this._indexDB.configs.update(this.shop.id, { invoiceNumber: this.currentInvoiceNumber }).then(function (data) {
            _this._shopService.update(_this.shop.id, { id: _this.shop.id, invoice_number: _this.currentInvoiceNumber }).subscribe();
        });
    };
    return CheckoutComponent;
}());
CheckoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-checkout',
        template: __webpack_require__(956),
        styles: [__webpack_require__(897)],
        viewProviders: [__WEBPACK_IMPORTED_MODULE_4__services_customer_service__["b" /* CustomerService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["J" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["J" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_customer_service__["b" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_customer_service__["b" /* CustomerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_indexdb_service__["a" /* IndexDBServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_indexdb_service__["a" /* IndexDBServiceService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_orders_service__["b" /* OrdersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_orders_service__["b" /* OrdersService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_cart_service__["a" /* CartService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_shop_service__["a" /* RetailShopsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_shop_service__["a" /* RetailShopsService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__covalent_core__["h" /* TdLoadingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__covalent_core__["h" /* TdLoadingService */]) === "function" && _h || Object])
], CheckoutComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=checkout.component.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDiscountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemDiscountComponent = (function () {
    function ItemDiscountComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.discount = '0';
    }
    ItemDiscountComponent.prototype.ngOnInit = function () {
    };
    ItemDiscountComponent.prototype.close = function () {
        this.dialogRef.close({ discount: parseInt(this.discount) });
    };
    return ItemDiscountComponent;
}());
ItemDiscountComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-item-discount',
        template: __webpack_require__(957),
        styles: [__webpack_require__(898)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["J" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["J" /* MdDialogRef */]) === "function" && _a || Object])
], ItemDiscountComponent);

var _a;
//# sourceMappingURL=item-discount.component.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_indexdb_service__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductInfoComponent = (function () {
    function ProductInfoComponent(dialogRef, _indexDB) {
        this.dialogRef = dialogRef;
        this._indexDB = _indexDB;
        this.products = [];
    }
    ProductInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.product.similar_products) {
            this.product.similar_products.forEach(function (value) {
                _this._indexDB.products.get(value).then(function (data) {
                    _this.products.push(data);
                });
            });
        }
    };
    ProductInfoComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    return ProductInfoComponent;
}());
ProductInfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-info',
        template: __webpack_require__(958),
        styles: [__webpack_require__(899)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["J" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["J" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_indexdb_service__["a" /* IndexDBServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_indexdb_service__["a" /* IndexDBServiceService */]) === "function" && _b || Object])
], ProductInfoComponent);

var _a, _b;
//# sourceMappingURL=product-info.component.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_indexdb_service__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaltsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SaltsComponent = (function () {
    function SaltsComponent(dialogRef, _indexDB, _cd) {
        this.dialogRef = dialogRef;
        this._indexDB = _indexDB;
        this._cd = _cd;
        this.selectedSalt = [];
        this.salts = [];
        this.totalSalts = 0;
    }
    SaltsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._indexDB.salts.where('retail_shop_id').equals(this.shopId).count().then(function (count) {
            _this.totalSalts = count;
        });
        this.getSalts();
    };
    SaltsComponent.prototype.close = function () {
        this.dialogRef.close(this.selectedSalt);
    };
    SaltsComponent.prototype.getSalts = function (saltName, event) {
        var _this = this;
        var page = event ? event.page : 1;
        var pageSize = event ? event.pageSize : this.saltsPerPage;
        if (saltName) {
            this._indexDB.salts.where('retail_shop_id').equals(this.shopId).offset((page - 1) * pageSize)
                .limit(pageSize).filter(function (salt) {
                return new RegExp("^" + saltName, 'gi').test(salt.name);
            }).toArray().then(function (salts) {
                _this.salts = salts;
                _this._cd.markForCheck();
            });
        }
        else {
            this._indexDB.salts.where('retail_shop_id').equals(this.shopId).offset((page - 1) * pageSize)
                .limit(pageSize).toArray().then(function (salts) {
                _this.salts = salts;
                _this._cd.markForCheck();
            });
        }
    };
    SaltsComponent.prototype.checkSalt = function (salt) {
        return this.selectedSalt.indexOf(salt) > -1;
    };
    SaltsComponent.prototype.toggleSalt = function (salt) {
        if (this.checkSalt(salt)) {
            this.selectedSalt.splice(this.selectedSalt.indexOf(salt), 1);
        }
        else {
            this.selectedSalt.push(salt);
        }
        return;
    };
    SaltsComponent.prototype.clearFilter = function (value) {
        this.selectedSalt = [];
        this._cd.markForCheck();
    };
    return SaltsComponent;
}());
SaltsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-salts',
        template: __webpack_require__(959),
        styles: [__webpack_require__(900)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["J" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["J" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_indexdb_service__["a" /* IndexDBServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_indexdb_service__["a" /* IndexDBServiceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _c || Object])
], SaltsComponent);

var _a, _b, _c;
//# sourceMappingURL=salts.component.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__covalent_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cart_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_indexdb_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shop_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CartComponent = (function () {
    function CartComponent(_cartService, _snackBarService, _indexDB, _route, _shopService, _loadingService) {
        this._cartService = _cartService;
        this._snackBarService = _snackBarService;
        this._indexDB = _indexDB;
        this._route = _route;
        this._shopService = _shopService;
        this._loadingService = _loadingService;
        this._loadingService.create({
            name: 'cart',
            type: __WEBPACK_IMPORTED_MODULE_1__covalent_core__["f" /* LoadingType */].Circular,
            mode: __WEBPACK_IMPORTED_MODULE_1__covalent_core__["g" /* LoadingMode */].Determinate,
            color: 'accent',
        });
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setShop();
        this._shopService.shop$.subscribe(function () {
            _this.setShop();
        });
    };
    CartComponent.prototype.setShop = function () {
        this.shop_id = this._shopService.shop.id;
        this.invoice_number = this._shopService.shop.invoice_number;
        this.getCarts(this.shop_id);
    };
    CartComponent.prototype.getCarts = function (id) {
        var _this = this;
        this._indexDB.carts.where({ retail_shop_id: id }).toArray().then(function (data) {
            _this.carts = data;
        });
    };
    CartComponent.prototype.openCart = function (id) {
        var _this = this;
        this._loadingService.register('cart');
        this._indexDB.carts.get(id).then(function (cart) {
            _this.routeCart(cart.local_id);
        });
    };
    CartComponent.prototype.deleteCart = function (cart) {
        var _this = this;
        this._cartService.deleteCart(cart.local_id).then(function () {
            _this.carts.splice(_this.carts.indexOf(cart), 1);
        });
    };
    CartComponent.prototype.newCart = function () {
        var _this = this;
        this._loadingService.register('cart');
        if (!this.shop_id) {
            this._snackBarService.open('No outlet selected', '', { duration: 3000 });
            this._route.navigate(['dashboard/shops']).then(function () {
                _this._loadingService.resolve('cart');
            });
            return;
        }
        this._cartService.newCart(this.shop_id, this.invoice_number).then(function (cartId) {
            _this.routeCart(cartId);
        });
    };
    CartComponent.prototype.routeCart = function (cartId) {
        var _this = this;
        this._route.navigate(['billing/' + cartId]).then(function () {
            _this._loadingService.resolve('cart');
        });
    };
    return CartComponent;
}());
CartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-carts',
        template: __webpack_require__(960),
        styles: [__webpack_require__(901)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_cart_service__["a" /* CartService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_material__["M" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_material__["M" /* MdSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_indexdb_service__["a" /* IndexDBServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_indexdb_service__["a" /* IndexDBServiceService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_shop_service__["a" /* RetailShopsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_shop_service__["a" /* RetailShopsService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_core__["h" /* TdLoadingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_core__["h" /* TdLoadingService */]) === "function" && _f || Object])
], CartComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=carts.component.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__covalent_core__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(_titleService, media) {
        this._titleService = _titleService;
        this.media = media;
    }
    DashboardComponent.prototype.ngAfterViewInit = function () {
        this._titleService.setTitle('Dashboard');
        this.title = this._titleService.getTitle();
        this.media.broadcast();
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard',
        template: __webpack_require__(961),
        styles: [__webpack_require__(902)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__covalent_core__["k" /* TdMediaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__covalent_core__["k" /* TdMediaService */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shop_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailComponent = (function () {
    function DetailComponent(_shopService) {
        this._shopService = _shopService;
        this.shops = [];
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shop = this._shopService.shop;
        this.shops = this._shopService.shops;
        this.shopsSub = this._shopService.shops$.subscribe(function (data) {
            _this.shops = data;
        });
        this.shopSub = this._shopService.shop$.subscribe(function (data) {
            _this.shop = data;
        });
    };
    DetailComponent.prototype.ngOnDestroy = function () {
        this.shopsSub.unsubscribe();
        this.shopSub.unsubscribe();
    };
    return DetailComponent;
}());
DetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-detail',
        template: __webpack_require__(962),
        styles: [__webpack_require__(903)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_shop_service__["a" /* RetailShopsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_shop_service__["a" /* RetailShopsService */]) === "function" && _a || Object])
], DetailComponent);

var _a;
//# sourceMappingURL=detail.component.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shop_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrinterConfigComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrinterConfigComponent = (function () {
    function PrinterConfigComponent(_shopService) {
        this._shopService = _shopService;
        this.shops = [];
    }
    PrinterConfigComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shop = this._shopService.shop;
        this.shops = this._shopService.shops;
        this.shopsSub = this._shopService.shops$.subscribe(function (data) {
            _this.shops = data;
        });
        this.shopSub = this._shopService.shop$.subscribe(function (data) {
            _this.shop = data;
        });
    };
    PrinterConfigComponent.prototype.ngOnDestroy = function () {
        this.shopsSub.unsubscribe();
        this.shopSub.unsubscribe();
    };
    PrinterConfigComponent.prototype.save = function (event) {
    };
    return PrinterConfigComponent;
}());
PrinterConfigComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-printer-config',
        template: __webpack_require__(963),
        styles: [__webpack_require__(904)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_shop_service__["a" /* RetailShopsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_shop_service__["a" /* RetailShopsService */]) === "function" && _a || Object])
], PrinterConfigComponent);

var _a;
//# sourceMappingURL=printer-config.component.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__covalent_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_indexdb_service__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShopComponent = (function () {
    function ShopComponent(_titleService, _shopService, _indexDBService, _loadingService, _router) {
        this._titleService = _titleService;
        this._shopService = _shopService;
        this._indexDBService = _indexDBService;
        this._loadingService = _loadingService;
        this._router = _router;
        this.shops = this._shopService.shops;
        this.shop = this._shopService.shop;
        this._loadingService.create({
            name: 'shops',
            type: __WEBPACK_IMPORTED_MODULE_2__covalent_core__["f" /* LoadingType */].Circular,
            mode: __WEBPACK_IMPORTED_MODULE_2__covalent_core__["g" /* LoadingMode */].Indeterminate,
            color: 'warn',
        });
    }
    ShopComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._titleService.setTitle('Dashboard');
        this.title = 'Dashboard';
        this._loadingService.register('shops');
        this._shopService.shops$.subscribe(function (data) {
            _this.shops = data;
        }, function (error) {
            console.log(error);
        });
        this._shopService.shop$.subscribe(function (data) {
            _this.shop = data;
        });
        this._loadingService.resolve('shops');
    };
    ShopComponent.prototype.openShop = function (data) {
        var _this = this;
        this._loadingService.register('shops');
        this._shopService.shop = data;
        this._indexDBService.products.where({ retail_shop_id: data.id }).count().then(function (count) {
            if (count < 1) {
                _this._shopService.syncData(data.id).then(function () {
                    _this._indexDBService.db$.subscribe(function (data) {
                        if (data.status) {
                            _this._router.navigate(['dashboard/carts/']).then(function () {
                                _this._loadingService.resolve('shops');
                            });
                            _this._loadingService.resolve('shops');
                        }
                    }, function () {
                        _this._loadingService.resolve('shops');
                    });
                });
            }
            else {
                _this._shopService.getUpdate(data.id).then(function () {
                    _this._router.navigate(['dashboard/carts/']).then(function () {
                        _this._loadingService.resolve('shops');
                    });
                });
            }
        });
    };
    ShopComponent.prototype.syncData = function (data) {
        var _this = this;
        this._loadingService.register('shops');
        this._shopService.syncData(data).then(function () {
            _this._indexDBService.db$.subscribe(function (data) {
                if (data.status) {
                    _this._loadingService.resolve('shops');
                }
            }, function () {
                _this._loadingService.resolve('shops');
            });
        });
    };
    return ShopComponent;
}());
ShopComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'shops',
        template: __webpack_require__(964),
        styles: [__webpack_require__(905)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["a" /* RetailShopsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["a" /* RetailShopsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_indexdb_service__["a" /* IndexDBServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_indexdb_service__["a" /* IndexDBServiceService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__covalent_core__["h" /* TdLoadingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__covalent_core__["h" /* TdLoadingService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _e || Object])
], ShopComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=shops.component.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_items_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__covalent_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shop_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BrandFormComponent = (function () {
    function BrandFormComponent(dialogRef, _loadingService, _distributorService, _shopService, _brandService) {
        var _this = this;
        this.dialogRef = dialogRef;
        this._loadingService = _loadingService;
        this._distributorService = _distributorService;
        this._shopService = _shopService;
        this._brandService = _brandService;
        this.getDistributors = function (event) {
            return _this._distributorService.query({
                __retail_shop_id__equal: _this.brand.retail_shop_id, __limit: 20,
                __name__contains: event
            }).map(function (data) { return data.data; });
        };
        this._loadingService.create({
            name: 'brand-form',
            type: __WEBPACK_IMPORTED_MODULE_3__covalent_core__["f" /* LoadingType */].Circular,
            mode: __WEBPACK_IMPORTED_MODULE_3__covalent_core__["g" /* LoadingMode */].Indeterminate,
            color: 'warn',
        });
    }
    BrandFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shops = this._shopService.shops;
        this._shopService.shops$.subscribe(function (data) {
            _this.shops = data;
        });
        this.brandCopy = Object.assign({}, this.brand);
    };
    BrandFormComponent.prototype.cancelState = function () {
        this.brand = Object.assign({}, this.brandCopy);
    };
    BrandFormComponent.prototype.saveState = function () {
        var _this = this;
        this._loadingService.register('brand-form');
        this.brand.retail_shop_id = this.brand.retail_shop.id;
        if (this.brand.id) {
            this._brandService.update(this.brand.id, this.brand).subscribe(function () {
                _this.dialogRef.close(_this.brand);
                _this._loadingService.resolve('brand-form');
            }, function () {
                _this._loadingService.resolve('brand-form');
            });
        }
        else {
            this._brandService.create(this.brand).subscribe(function () {
                _this.dialogRef.close(_this.brand);
                _this._loadingService.resolve('brand-form');
            }, function () {
                _this._loadingService.resolve('brand-form');
            });
        }
    };
    BrandFormComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    BrandFormComponent.prototype.addDistributor = function (event) {
        var _this = this;
        this._brandService.updateDistributor(this.brand.id, event.id, 'add').subscribe(function () {
            _this.brand.distributors.push(event);
        }, function () {
            _this.distributors.splice(_this.distributors.indexOf(event), 1);
        });
    };
    BrandFormComponent.prototype.removeDistributor = function (event) {
        var _this = this;
        this._brandService.updateDistributor(this.brand.id, event.id, 'remove').subscribe(function (_) {
            _this.brand.distributors.splice(_this.brand.distributors.findIndex(function (value) {
                return value.id == event.id;
            }), 1);
        }, function () {
            _this.distributors.push(event);
        });
        return;
    };
    return BrandFormComponent;
}());
BrandFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-brand-form',
        template: __webpack_require__(966),
        styles: [__webpack_require__(907)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["J" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["J" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__covalent_core__["h" /* TdLoadingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__covalent_core__["h" /* TdLoadingService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_items_service__["b" /* DistributorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_items_service__["b" /* DistributorService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_shop_service__["a" /* RetailShopsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shop_service__["a" /* RetailShopsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_items_service__["f" /* BrandsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_items_service__["f" /* BrandsService */]) === "function" && _e || Object])
], BrandFormComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=brand-form.component.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__covalent_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_items_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__brand_form_brand_form_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BrandComponent = (function () {
    function BrandComponent(_titleService, _brandService, _dialogService) {
        var _this = this;
        this._titleService = _titleService;
        this._brandService = _brandService;
        this._dialogService = _dialogService;
        this.columns = [
            { name: 'name', label: 'Name', sortable: true },
            { name: 'retail_shop.name', 'label': 'Shop', nested: true },
            { name: 'distributors', label: 'Distributor', sortable: false, nested: true, format: function (v) { return v ? v.map(function (value) {
                    return value.name;
                }) : ''; } },
        ];
        this.filter = function () {
            return _this._brandService;
        };
        this.addRow = function () {
            var brand = {};
            var _dialog = _this._dialogService.open(__WEBPACK_IMPORTED_MODULE_3__brand_form_brand_form_component__["a" /* BrandFormComponent */]);
            _dialog.componentInstance.brand = brand;
            return _dialog.afterClosed();
        };
        this.editRow = function (brand) {
            var _dialog = _this._dialogService.open(__WEBPACK_IMPORTED_MODULE_3__brand_form_brand_form_component__["a" /* BrandFormComponent */]);
            _dialog.componentInstance.brand = Object.assign({}, brand);
            return _dialog.afterClosed();
        };
        this.toggleRow = function (brand) {
            return _this._brandService.delete(brand.id);
        };
    }
    BrandComponent.prototype.ngAfterViewInit = function () {
        this._titleService.setTitle('Brand');
        this.title = 'Brand';
    };
    return BrandComponent;
}());
BrandComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-brand',
        template: __webpack_require__(967),
        styles: [__webpack_require__(908)],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_3__brand_form_brand_form_component__["a" /* BrandFormComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["Title"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_items_service__["f" /* BrandsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_items_service__["f" /* BrandsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_core__["j" /* TdDialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_core__["j" /* TdDialogService */]) === "function" && _c || Object])
], BrandComponent);

var _a, _b, _c;
//# sourceMappingURL=brand.component.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__covalent_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shop_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_items_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistributorFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DistributorFormComponent = (function () {
    function DistributorFormComponent(dialogRef, _loadingService, _shopService, _distributorService) {
        this.dialogRef = dialogRef;
        this._loadingService = _loadingService;
        this._shopService = _shopService;
        this._distributorService = _distributorService;
        this._loadingService.create({
            name: 'distributor-form',
            type: __WEBPACK_IMPORTED_MODULE_2__covalent_core__["f" /* LoadingType */].Circular,
            mode: __WEBPACK_IMPORTED_MODULE_2__covalent_core__["g" /* LoadingMode */].Indeterminate,
            color: 'warn',
        });
    }
    DistributorFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shops = this._shopService.shops;
        this._shopService.shops$.subscribe(function (data) {
            _this.shops = data;
        });
        if (!this.distributor.emails) {
            this.distributor.emails = [];
        }
        if (!this.distributor.phone_numbers) {
            this.distributor.phone_numbers = [];
        }
        this.distributorCopy = Object.assign({}, this.distributor);
    };
    DistributorFormComponent.prototype.cancelState = function () {
        this.distributor = Object.assign({}, this.distributorCopy);
    };
    DistributorFormComponent.prototype.saveState = function () {
        var _this = this;
        this._loadingService.register('distributor-form');
        this.distributor.retail_shop_id = this.distributor.retail_shop.id;
        if (this.distributor.id) {
            this._distributorService.update(this.distributor.id, this.distributor).subscribe(function () {
                _this.dialogRef.close(_this.distributor);
                _this._loadingService.resolve('distributor-form');
            }, function () {
                _this._loadingService.resolve('distributor-form');
            });
        }
        else {
            this._distributorService.create(this.distributor).subscribe(function () {
                _this.dialogRef.close(_this.distributor);
                _this._loadingService.resolve('distributor-form');
            }, function () {
                _this._loadingService.resolve('distributor-form');
            });
        }
    };
    DistributorFormComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    return DistributorFormComponent;
}());
DistributorFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-distributor-form',
        template: __webpack_require__(968),
        styles: [__webpack_require__(909)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["J" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["J" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__covalent_core__["h" /* TdLoadingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__covalent_core__["h" /* TdLoadingService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shop_service__["a" /* RetailShopsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shop_service__["a" /* RetailShopsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_items_service__["b" /* DistributorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_items_service__["b" /* DistributorService */]) === "function" && _d || Object])
], DistributorFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=distributor-form.component.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__covalent_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__distributor_form_distributor_form_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_items_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistributorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DistributorComponent = (function () {
    function DistributorComponent(_titleService, _distributorService, _dialogService) {
        var _this = this;
        this._titleService = _titleService;
        this._distributorService = _distributorService;
        this._dialogService = _dialogService;
        this.columns = [
            { name: 'name', label: 'Name', sortable: true },
            { name: 'phone_numbers', label: 'Numbers' },
            { name: 'emails', label: 'Emails' },
            { name: 'retail_shop.name', 'label': 'Shop', nested: true }
        ];
        this.filter = function () {
            return _this._distributorService;
        };
        this.addRow = function () {
            var distributor = {};
            var _dialog = _this._dialogService.open(__WEBPACK_IMPORTED_MODULE_2__distributor_form_distributor_form_component__["a" /* DistributorFormComponent */]);
            _dialog.componentInstance.distributor = distributor;
            return _dialog.afterClosed();
        };
        this.editRow = function (distributor) {
            var _dialog = _this._dialogService.open(__WEBPACK_IMPORTED_MODULE_2__distributor_form_distributor_form_component__["a" /* DistributorFormComponent */]);
            _dialog.componentInstance.distributor = Object.assign({}, distributor);
            return _dialog.afterClosed();
        };
        this.toggleRow = function (distributor) {
            return _this._distributorService.delete(distributor.id);
        };
    }
    DistributorComponent.prototype.ngAfterViewInit = function () {
        this._titleService.setTitle('Distributor');
        this.title = 'Distributor';
    };
    return DistributorComponent;
}());
DistributorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-distributor',
        template: __webpack_require__(969),
        styles: [__webpack_require__(910)],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_2__distributor_form_distributor_form_component__["a" /* DistributorFormComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["Title"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_items_service__["b" /* DistributorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_items_service__["b" /* DistributorService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_core__["j" /* TdDialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_core__["j" /* TdDialogService */]) === "function" && _c || Object])
], DistributorComponent);

var _a, _b, _c;
//# sourceMappingURL=distributor.component.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__covalent_core__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InventoryComponent = (function () {
    function InventoryComponent(media) {
        this.media = media;
    }
    InventoryComponent.prototype.ngOnInit = function () {
    };
    InventoryComponent.prototype.ngAfterViewInit = function () {
        this.media.broadcast();
    };
    return InventoryComponent;
}());
InventoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-inventory',
        template: __webpack_require__(970),
        styles: [__webpack_require__(911)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_core__["k" /* TdMediaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_core__["k" /* TdMediaService */]) === "function" && _a || Object])
], InventoryComponent);

var _a;
//# sourceMappingURL=inventory.component.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = (function () {
    function MenuComponent() {
        this.routes = [{
                title: 'Products',
                route: '/inventory/products',
                icon: 'P',
            }, {
                title: 'Brands',
                route: '/inventory/brands',
                icon: 'B',
            }, {
                title: 'Distributors',
                route: '/inventory/distributors',
                icon: 'D',
            }, {
                title: 'Tags',
                route: '/inventory/tags',
                icon: 'TG',
            }, {
                title: 'Taxes',
                route: '/inventory/taxes',
                icon: 'TX',
            }, {
                title: 'Salts',
                route: '/inventory/salts',
                icon: 'S',
            },
        ];
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__(971),
        styles: [__webpack_require__(912)]
    }),
    __metadata("design:paramtypes", [])
], MenuComponent);

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shop_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_items_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__covalent_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductFormComponent = (function () {
    function ProductFormComponent(_itemService, _brandService, _saltService, _taxService, dialogRef, _shopService, _tagService, _loadingService) {
        var _this = this;
        this._itemService = _itemService;
        this._brandService = _brandService;
        this._saltService = _saltService;
        this._taxService = _taxService;
        this.dialogRef = dialogRef;
        this._shopService = _shopService;
        this._tagService = _tagService;
        this._loadingService = _loadingService;
        this.brands = [];
        this.taxes = [];
        this.salts = [];
        this.tags = [];
        this.distributors = [];
        this.validators = [];
        this.productCopy = {};
        this.getTags = function (event) {
            return _this._tagService.query({
                __retail_shop_id__equal: _this.product.retail_shop_id, __limit: 20,
                __name__contains: event
            }).map(function (data) { return data.data; });
        };
        this.getSalts = function (event) {
            return _this._saltService.query({
                __retail_shop_id__equal: _this.product.retail_shop_id, __limit: 20,
                __name__contains: event
            }).map(function (data) { return data.data; });
        };
        this.getTaxes = function (event) {
            return _this._taxService.query({
                __retail_shop_id__equal: _this.product.retail_shop_id, __limit: 20,
                __name__contains: event
            }).map(function (data) { return data.data; });
        };
        this.getBrands = function (event) {
            return _this._brandService.query({
                __retail_shop_id__equal: _this.product.retail_shop_id, __limit: 20,
                __name__contains: event
            }).map(function (data) { return data.data.map(function (item) {
                return { display: item.name, value: item.id };
            }); });
        };
        this.validateDescription = function (term) {
            if (term.value.indexOf(':') < 0) {
                return { 'mustContain:': true };
            }
            return null;
        };
        this.errorMessages = {
            'mustContain:': 'Your key value must be separated by ":" ',
        };
        this.addDescription = function (event) {
            event.value = event.value.split(':')[0];
            event.key = event.key.split(':')[1];
        };
        this._loadingService.create({
            name: 'product-form',
            type: __WEBPACK_IMPORTED_MODULE_3__covalent_core__["f" /* LoadingType */].Circular,
            mode: __WEBPACK_IMPORTED_MODULE_3__covalent_core__["g" /* LoadingMode */].Indeterminate,
            color: 'warn',
        });
        this.shops = this._shopService.shops;
        this._shopService.shops$.subscribe(function (data) {
            _this.shops = data;
        });
    }
    ProductFormComponent.prototype.ngOnInit = function () {
        console.log(this.product);
        this.productCopy = Object.assign({}, this.product);
        this.resetProduct();
        this.validators = [this.validateDescription];
    };
    ProductFormComponent.prototype.resetProduct = function () {
        if (this.product.salts) {
            this.salts = this.product.salts;
        }
        if (this.product.taxes) {
            this.taxes = this.product.taxes;
        }
        if (this.product.tags) {
            this.tags = this.product.tags;
        }
        this.distributors = this.product.distributors;
        this.brands = this.product.brand && this.product.brand.id ?
            [{ display: this.product.brand.name, value: this.product.brand.id }] : [];
    };
    ProductFormComponent.prototype.cancelState = function () {
        this.product = Object.assign({}, this.productCopy);
        this.resetProduct();
    };
    ProductFormComponent.prototype.saveState = function () {
        var _this = this;
        this._loadingService.register('product-form');
        if (!this.product.retail_shop_id && this.product.retail_shop.id) {
            this.product.retail_shop_id = this.product.retail_shop.id;
        }
        if (this.product.id) {
            this._itemService.update(this.product.id, this.product).subscribe(function () {
                _this._itemService.updateProduct(_this.product.id).then(function () {
                    _this.dialogRef.close(_this.product);
                    _this._loadingService.resolve('product-form');
                });
            }, function () {
                _this._loadingService.resolve('product-form');
            });
        }
        else {
            this._itemService.create(this.product).subscribe(function () {
                _this._itemService.updateProduct(_this.product.id).then(function () {
                    _this.dialogRef.close(_this.product);
                    _this._loadingService.resolve('product-form');
                });
            });
        }
    };
    ProductFormComponent.prototype.addBrand = function () {
        this.product.brand = {
            name: this.brands[0].display, id: this.brands[0].value,
            retail_shop_id: this.product.retail_shop_id
        };
        this.product.brand_id = this.brands[0].value;
    };
    ProductFormComponent.prototype.addTags = function (event) {
        var _this = this;
        this._itemService.updateTag(this.product.id, event.id, 'add').subscribe(function () {
            _this.product.tags.push(event);
        }, function () {
            _this.tags.splice(_this.tags.indexOf(event), 1);
        });
    };
    ProductFormComponent.prototype.addSalts = function (event) {
        var _this = this;
        this._itemService.updateSalt(this.product.id, event.id, 'add').subscribe(function () {
            _this.product.salts.push(event);
        }, function () {
            _this.salts.splice(_this.salts.indexOf(event), 1);
        });
    };
    ProductFormComponent.prototype.addTaxes = function (event) {
        var _this = this;
        this._itemService.updateTax(this.product.id, event.id, 'add').subscribe(function () {
            _this.product.taxes.push(event);
        }, function () {
            _this.taxes.splice(_this.taxes.indexOf(event), 1);
        });
    };
    ProductFormComponent.prototype.removeTags = function (event) {
        var _this = this;
        this._itemService.updateTag(this.product.id, event.id, 'remove').subscribe(function (_) {
            _this.product.tags.splice(_this.product.tags.findIndex(function (value) {
                return value.id == event.id;
            }), 1);
        }, function () {
            _this.tags.push(event);
        });
        return;
    };
    ProductFormComponent.prototype.removeSalts = function (event) {
        var _this = this;
        this._itemService.updateSalt(this.product.id, event.id, 'remove').subscribe(function (_) {
            _this.product.salts.splice(_this.product.salts.findIndex(function (value) {
                return value.id == event.id;
            }), 1);
        }, function () {
            _this.salts.push(event);
        });
        return;
    };
    ProductFormComponent.prototype.removeTaxes = function (event) {
        var _this = this;
        this._itemService.updateTax(this.product.id, event.id, 'remove').subscribe(function (_) {
            _this.product.taxes.splice(_this.product.taxes.findIndex(function (value) {
                return value.id == event.id;
            }), 1);
        }, function () {
            _this.taxes.push(event);
        });
        return;
    };
    ProductFormComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    ProductFormComponent.prototype.removeDescription = function (item, index) {
        this.product.description.splice(index, 1);
    };
    return ProductFormComponent;
}());
ProductFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-form',
        template: __webpack_require__(972),
        styles: [__webpack_require__(913)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_items_service__["a" /* ItemsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_items_service__["a" /* ItemsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_items_service__["f" /* BrandsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_items_service__["f" /* BrandsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_items_service__["d" /* SaltsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_items_service__["d" /* SaltsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_items_service__["e" /* TaxsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_items_service__["e" /* TaxsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["J" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["J" /* MdDialogRef */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__services_shop_service__["a" /* RetailShopsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_shop_service__["a" /* RetailShopsService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__services_items_service__["c" /* TagsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_items_service__["c" /* TagsService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__covalent_core__["h" /* TdLoadingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__covalent_core__["h" /* TdLoadingService */]) === "function" && _h || Object])
], ProductFormComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=product-form.component.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__covalent_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_items_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_form_product_form_component__ = __webpack_require__(361);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductComponent = (function () {
    function ProductComponent(_titleService, _itemService, _dialogService) {
        var _this = this;
        this._titleService = _titleService;
        this._itemService = _itemService;
        this._dialogService = _dialogService;
        this.data = [];
        this.include = ['brand', 'distributors'];
        this.columns = [
            { name: 'name', label: 'Product Name', sortable: true, editable: true },
            { name: 'brand.name', label: 'Brand', sortable: false, nested: true },
            { name: 'mrp', label: 'Price (INR)', numeric: true, format: function (v) { return v.toFixed(2); }, sortable: false },
            {
                name: 'auto_discount',
                label: 'Discount',
                numeric: true,
                format: function (v) { return v.toFixed(2); },
                sortable: false,
                editable: true
            },
            {
                name: 'default_quantity',
                label: 'Def. Qty',
                numeric: true,
                format: function (v) { return v ? v.toFixed(2) : 1; },
            },
            { name: 'retail_shop.name', label: 'Shop', sortable: false },
            { name: 'available_stock', label: 'Stock', numeric: true, sortable: true },
            { name: 'min_stock', label: 'Min.Qty', numeric: true, sortable: true },
        ];
        this.filter = function () {
            return _this._itemService;
        };
        this.addRow = function () {
            var product = {};
            var _dialog = _this._dialogService.open(__WEBPACK_IMPORTED_MODULE_4__product_form_product_form_component__["a" /* ProductFormComponent */]);
            _dialog.componentInstance.product = product;
            return _dialog.afterClosed();
        };
        this.editRow = function (product) {
            var _dialog = _this._dialogService.open(__WEBPACK_IMPORTED_MODULE_4__product_form_product_form_component__["a" /* ProductFormComponent */]);
            _dialog.componentInstance.product = Object.assign({}, product);
            return _dialog.afterClosed();
        };
        this.toggleRow = function (product) {
            product.is_disabled = !product.is_disabled;
            return _this._itemService.update(product.id, product);
        };
    }
    ProductComponent.prototype.ngAfterViewInit = function () {
        this._titleService.setTitle('Product');
        this.title = 'Products';
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product',
        template: __webpack_require__(973),
        styles: [__webpack_require__(914)],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_4__product_form_product_form_component__["a" /* ProductFormComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["Title"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_items_service__["a" /* ItemsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_items_service__["a" /* ItemsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_core__["j" /* TdDialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_core__["j" /* TdDialogService */]) === "function" && _c || Object])
], ProductComponent);

var _a, _b, _c;
//# sourceMappingURL=product.component.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_items_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__covalent_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shop_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaltFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SaltFormComponent = (function () {
    function SaltFormComponent(dialogRef, _loadingService, _shopService, _saltService) {
        this.dialogRef = dialogRef;
        this._loadingService = _loadingService;
        this._shopService = _shopService;
        this._saltService = _saltService;
        this._loadingService.create({
            name: 'salt-form',
            type: __WEBPACK_IMPORTED_MODULE_3__covalent_core__["f" /* LoadingType */].Circular,
            mode: __WEBPACK_IMPORTED_MODULE_3__covalent_core__["g" /* LoadingMode */].Indeterminate,
            color: 'warn',
        });
    }
    SaltFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shops = this._shopService.shops;
        this._shopService.shops$.subscribe(function (data) {
            _this.shops = data;
        });
        this.saltCopy = Object.assign({}, this.salt);
    };
    SaltFormComponent.prototype.cancelState = function () {
        this.salt = Object.assign({}, this.saltCopy);
    };
    SaltFormComponent.prototype.saveState = function () {
        var _this = this;
        this._loadingService.register('salt-form');
        this.salt.retail_shop_id = this.salt.retail_shop.id;
        if (this.salt.id) {
            this._saltService.update(this.salt.id, this.salt).subscribe(function () {
                _this.dialogRef.close(_this.salt);
                _this._loadingService.resolve('salt-form');
            }, function () {
                _this._loadingService.resolve('salt-form');
            });
        }
        else {
            this._saltService.create(this.salt).subscribe(function () {
                _this.dialogRef.close(_this.salt);
                _this._loadingService.resolve('salt-form');
            }, function () {
                _this._loadingService.resolve('salt-form');
            });
        }
    };
    SaltFormComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    return SaltFormComponent;
}());
SaltFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-salt-form',
        template: __webpack_require__(974),
        styles: [__webpack_require__(915)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["J" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["J" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__covalent_core__["h" /* TdLoadingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__covalent_core__["h" /* TdLoadingService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_shop_service__["a" /* RetailShopsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shop_service__["a" /* RetailShopsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_items_service__["d" /* SaltsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_items_service__["d" /* SaltsService */]) === "function" && _d || Object])
], SaltFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=salt-form.component.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__covalent_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_items_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__salt_form_salt_form_component__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaltComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SaltComponent = (function () {
    function SaltComponent(_saltService, _titleService, _dialogService) {
        var _this = this;
        this._saltService = _saltService;
        this._titleService = _titleService;
        this._dialogService = _dialogService;
        this.columns = [
            { name: 'name', label: 'Name', sortable: true },
            { name: 'retail_shop.name', 'label': 'Shop', nested: true }
        ];
        this.title = '';
        this.filter = function () {
            return _this._saltService;
        };
        this.addRow = function () {
            var salt = {};
            var _dialog = _this._dialogService.open(__WEBPACK_IMPORTED_MODULE_3__salt_form_salt_form_component__["a" /* SaltFormComponent */]);
            _dialog.componentInstance.salt = salt;
            return _dialog.afterClosed();
        };
        this.editRow = function (salt) {
            var _dialog = _this._dialogService.open(__WEBPACK_IMPORTED_MODULE_3__salt_form_salt_form_component__["a" /* SaltFormComponent */]);
            _dialog.componentInstance.salt = Object.assign({}, salt);
            return _dialog.afterClosed();
        };
        this.toggleRow = function (salt) {
            return _this._saltService.delete(salt.id);
        };
    }
    SaltComponent.prototype.ngAfterViewInit = function () {
        this._titleService.setTitle('Salts');
        this.title = 'Salts';
    };
    return SaltComponent;
}());
SaltComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-salt',
        template: __webpack_require__(975),
        styles: [__webpack_require__(916)],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_3__salt_form_salt_form_component__["a" /* SaltFormComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_items_service__["d" /* SaltsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_items_service__["d" /* SaltsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["Title"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_core__["j" /* TdDialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_core__["j" /* TdDialogService */]) === "function" && _c || Object])
], SaltComponent);

var _a, _b, _c;
//# sourceMappingURL=salt.component.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_items_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__covalent_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shop_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TagFormComponent = (function () {
    function TagFormComponent(dialogRef, _loadingService, _shopService, _tagService) {
        this.dialogRef = dialogRef;
        this._loadingService = _loadingService;
        this._shopService = _shopService;
        this._tagService = _tagService;
        this._loadingService.create({
            name: 'tag-form',
            type: __WEBPACK_IMPORTED_MODULE_3__covalent_core__["f" /* LoadingType */].Circular,
            mode: __WEBPACK_IMPORTED_MODULE_3__covalent_core__["g" /* LoadingMode */].Indeterminate,
            color: 'warn',
        });
    }
    TagFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shops = this._shopService.shops;
        this._shopService.shops$.subscribe(function (data) {
            _this.shops = data;
        });
        this.tagCopy = Object.assign({}, this.tag);
    };
    TagFormComponent.prototype.cancelState = function () {
        this.tag = Object.assign({}, this.tagCopy);
    };
    TagFormComponent.prototype.saveState = function () {
        var _this = this;
        this._loadingService.register('tag-form');
        this.tag.retail_shop_id = this.tag.retail_shop.id;
        if (this.tag.id) {
            this._tagService.update(this.tag.id, this.tag).subscribe(function () {
                _this.dialogRef.close(_this.tag);
                _this._loadingService.resolve('tag-form');
            }, function () {
                _this._loadingService.resolve('tag-form');
            });
        }
        else {
            this._tagService.create(this.tag).subscribe(function (data) {
                _this.dialogRef.close(data.data[0]);
                _this._loadingService.resolve('tag-form');
            }, function () {
                _this._loadingService.resolve('tag-form');
            });
        }
    };
    TagFormComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    return TagFormComponent;
}());
TagFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tag-form',
        template: __webpack_require__(977),
        styles: [__webpack_require__(918)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["J" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["J" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__covalent_core__["h" /* TdLoadingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__covalent_core__["h" /* TdLoadingService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_shop_service__["a" /* RetailShopsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shop_service__["a" /* RetailShopsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_items_service__["c" /* TagsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_items_service__["c" /* TagsService */]) === "function" && _d || Object])
], TagFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=tag-form.component.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__covalent_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_items_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tag_form_tag_form_component__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TagComponent = (function () {
    function TagComponent(_titleService, _tagService, _dialogService) {
        var _this = this;
        this._titleService = _titleService;
        this._tagService = _tagService;
        this._dialogService = _dialogService;
        this.columns = [
            { name: 'name', label: 'Name', sortable: true },
            { name: 'retail_shop.name', 'label': 'Shop', nested: true }
        ];
        this.title = '';
        this.filter = function () {
            return _this._tagService;
        };
        this.addRow = function () {
            var tag = {};
            var _dialog = _this._dialogService.open(__WEBPACK_IMPORTED_MODULE_3__tag_form_tag_form_component__["a" /* TagFormComponent */]);
            _dialog.componentInstance.tag = tag;
            return _dialog.afterClosed();
        };
        this.editRow = function (tag) {
            var _dialog = _this._dialogService.open(__WEBPACK_IMPORTED_MODULE_3__tag_form_tag_form_component__["a" /* TagFormComponent */]);
            _dialog.componentInstance.tag = Object.assign({}, tag);
            return _dialog.afterClosed();
        };
        this.toggleRow = function (tag) {
            return _this._tagService.delete(tag.id);
        };
    }
    TagComponent.prototype.ngAfterViewInit = function () {
        this._titleService.setTitle('Tag');
        this.title = 'Tag';
    };
    return TagComponent;
}());
TagComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tag',
        template: __webpack_require__(978),
        styles: [__webpack_require__(919)],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_3__tag_form_tag_form_component__["a" /* TagFormComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["Title"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_items_service__["c" /* TagsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_items_service__["c" /* TagsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_core__["j" /* TdDialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_core__["j" /* TdDialogService */]) === "function" && _c || Object])
], TagComponent);

var _a, _b, _c;
//# sourceMappingURL=tag.component.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_items_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__covalent_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shop_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaxFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TaxFormComponent = (function () {
    function TaxFormComponent(dialogRef, _loadingService, _shopService, _taxService) {
        this.dialogRef = dialogRef;
        this._loadingService = _loadingService;
        this._shopService = _shopService;
        this._taxService = _taxService;
        this._loadingService.create({
            name: 'tax-form',
            type: __WEBPACK_IMPORTED_MODULE_3__covalent_core__["f" /* LoadingType */].Circular,
            mode: __WEBPACK_IMPORTED_MODULE_3__covalent_core__["g" /* LoadingMode */].Indeterminate,
            color: 'warn',
        });
    }
    TaxFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shops = this._shopService.shops;
        this._shopService.shops$.subscribe(function (data) {
            _this.shops = data;
        });
        this.taxCopy = Object.assign({}, this.tax);
    };
    TaxFormComponent.prototype.cancelState = function () {
        this.tax = Object.assign({}, this.taxCopy);
    };
    TaxFormComponent.prototype.saveState = function () {
        var _this = this;
        this._loadingService.register('tax-form');
        this.tax.retail_shop_id = this.tax.retail_shop.id;
        if (this.tax.id) {
            this._taxService.update(this.tax.id, this.tax).subscribe(function () {
                _this.dialogRef.close(_this.tax);
                _this._loadingService.resolve('tax-form');
            }, function () {
                _this._loadingService.resolve('tax-form');
            });
        }
        else {
            this._taxService.create(this.tax).subscribe(function () {
                _this.dialogRef.close(_this.tax);
                _this._loadingService.resolve('tax-form');
            }, function () {
                _this._loadingService.resolve('tax-form');
            });
        }
    };
    TaxFormComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    return TaxFormComponent;
}());
TaxFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tax-form',
        template: __webpack_require__(979),
        styles: [__webpack_require__(920)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["J" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["J" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__covalent_core__["h" /* TdLoadingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__covalent_core__["h" /* TdLoadingService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_shop_service__["a" /* RetailShopsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shop_service__["a" /* RetailShopsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_items_service__["e" /* TaxsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_items_service__["e" /* TaxsService */]) === "function" && _d || Object])
], TaxFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=tax-form.component.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__covalent_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_items_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tax_form_tax_form_component__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TaxComponent = (function () {
    function TaxComponent(_taxService, _titleService, _dialogService) {
        var _this = this;
        this._taxService = _taxService;
        this._titleService = _titleService;
        this._dialogService = _dialogService;
        this.columns = [
            { name: 'name', label: 'Name', sortable: true },
            { name: 'retail_shop.name', 'label': 'Shop', nested: true }
        ];
        this.filter = function () {
            return _this._taxService;
        };
        this.addRow = function () {
            var tax = {};
            var _dialog = _this._dialogService.open(__WEBPACK_IMPORTED_MODULE_3__tax_form_tax_form_component__["a" /* TaxFormComponent */]);
            _dialog.componentInstance.tax = tax;
            return _dialog.afterClosed();
        };
        this.editRow = function (tax) {
            var _dialog = _this._dialogService.open(__WEBPACK_IMPORTED_MODULE_3__tax_form_tax_form_component__["a" /* TaxFormComponent */]);
            _dialog.componentInstance.tax = Object.assign({}, tax);
            return _dialog.afterClosed();
        };
        this.toggleRow = function (tax) {
            tax.is_disabled = !tax.is_disabled;
            return _this._taxService.update(tax.id, tax);
        };
    }
    TaxComponent.prototype.ngAfterViewInit = function () {
        this._titleService.setTitle('Tax');
        this.title = 'Tax';
    };
    return TaxComponent;
}());
TaxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tax',
        template: __webpack_require__(980),
        styles: [__webpack_require__(921)],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_3__tax_form_tax_form_component__["a" /* TaxFormComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_items_service__["e" /* TaxsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_items_service__["e" /* TaxsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["Title"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_core__["j" /* TdDialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_core__["j" /* TdDialogService */]) === "function" && _c || Object])
], TaxComponent);

var _a, _b, _c;
//# sourceMappingURL=tax.component.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__covalent_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(388);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(_router, _loadingService, _userService, _authService) {
        this._router = _router;
        this._loadingService = _loadingService;
        this._userService = _userService;
        this._authService = _authService;
        this._loadingService.create({
            name: 'login',
            type: __WEBPACK_IMPORTED_MODULE_2__covalent_core__["f" /* LoadingType */].Circular,
            mode: __WEBPACK_IMPORTED_MODULE_2__covalent_core__["g" /* LoadingMode */].Indeterminate,
            color: 'warn',
        });
    }
    LoginComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._loadingService.register('login');
        this.checkLogIn();
        this._userService.user$.subscribe(function () {
            _this.checkLogIn();
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this._loadingService.register('login');
        this._userService.login(this.username, this.password).subscribe(function (data) {
            _this._authService.setAuthData(data.id, data.authentication_token).then(function () {
                _this._authService.auth = data;
                _this._userService.get(data.id).subscribe(function (data) {
                    _this._userService.user = data;
                    _this.checkLogIn();
                    _this._loadingService.resolve('login');
                });
            });
        }, function () {
            _this._loadingService.resolve('login');
        });
    };
    LoginComponent.prototype.redirect = function () {
        if (this._userService.redirectUrl) {
            this._router.navigate([this._userService.redirectUrl]).then();
        }
        else {
            this._router.navigate(['dashboard/shops']).then();
        }
    };
    LoginComponent.prototype.checkLogIn = function () {
        if (this._userService.isLoggedIn()) {
            this.redirect();
        }
        this._loadingService.resolve('login');
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'qs-login',
        template: __webpack_require__(981),
        styles: [__webpack_require__(922)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__covalent_core__["h" /* TdLoadingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__covalent_core__["h" /* TdLoadingService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services__["b" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["b" /* UsersService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services__["c" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["c" /* AuthService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainRouteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainRouteComponent = (function () {
    function MainRouteComponent() {
    }
    MainRouteComponent.prototype.ngOnInit = function () {
    };
    return MainRouteComponent;
}());
MainRouteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-main-route',
        template: __webpack_require__(982),
        styles: [__webpack_require__(923)]
    }),
    __metadata("design:paramtypes", [])
], MainRouteComponent);

//# sourceMappingURL=main-route.component.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomerReportComponent = (function () {
    function CustomerReportComponent() {
    }
    CustomerReportComponent.prototype.ngOnInit = function () {
    };
    return CustomerReportComponent;
}());
CustomerReportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-customer-report',
        template: __webpack_require__(983),
        styles: [__webpack_require__(924)]
    }),
    __metadata("design:paramtypes", [])
], CustomerReportComponent);

//# sourceMappingURL=customer-report.component.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__covalent_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shop_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_customer_service__ = __webpack_require__(172);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerComponent = (function () {
    function CustomerComponent(_titleService, _loadingService, _customerService, _shopService, _dialogService) {
        this._titleService = _titleService;
        this._loadingService = _loadingService;
        this._customerService = _customerService;
        this._shopService = _shopService;
        this._dialogService = _dialogService;
        this.columns = [
            { name: 'name', label: 'name', sortable: true, nested: true },
            { name: 'mobile_number', label: 'Number', sortable: true, nested: true },
            { name: 'total_billing', label: 'Total Billing', numeric: true, format: function (v) { return v.toFixed(2); } },
            { name: 'amount_due', label: 'Due', numeric: true, format: function (v) { return v.toFixed(2); } },
            { name: 'total_order', label: 'Orders', numeric: true },
            { name: 'created_on', label: 'Added on' },
        ];
        this.filteredData = [];
        this.filteredTotal = 0;
        this.searchTerm = '';
        this.fromRow = 1;
        this.currentPage = 1;
        this.pageSize = 50;
        this.sortBy = 'id';
        this.sortOrder = __WEBPACK_IMPORTED_MODULE_1__covalent_core__["i" /* TdDataTableSortingOrder */].Ascending;
        this._loadingService.create({
            name: 'customer',
            type: __WEBPACK_IMPORTED_MODULE_1__covalent_core__["f" /* LoadingType */].Circular,
            mode: __WEBPACK_IMPORTED_MODULE_1__covalent_core__["g" /* LoadingMode */].Indeterminate,
            color: 'warn',
        });
    }
    CustomerComponent.prototype.ngOnInit = function () {
    };
    CustomerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._titleService.setTitle('Customer');
        this.title = 'Customer';
        this.shops = this._shopService.shops;
        this.shopsSub = this._shopService.shops$.subscribe(function (data) {
            _this.shops = data;
        });
    };
    CustomerComponent.prototype.sort = function (name, sortOrder) {
        this.sortBy = name;
        if (sortOrder.toString() == 'ASC') {
            this.sortOrder = __WEBPACK_IMPORTED_MODULE_1__covalent_core__["i" /* TdDataTableSortingOrder */].Descending;
        }
        else {
            this.sortOrder = __WEBPACK_IMPORTED_MODULE_1__covalent_core__["i" /* TdDataTableSortingOrder */].Ascending;
        }
        this.filter();
    };
    CustomerComponent.prototype.search = function (searchTerm) {
        this.customerNumber = null;
        if (parseInt(searchTerm)) {
            this.customerNumber = parseInt(searchTerm);
        }
        this.searchTerm = searchTerm;
        this.filter();
    };
    CustomerComponent.prototype.page = function (pagingEvent) {
        this.fromRow = pagingEvent.fromRow;
        this.currentPage = pagingEvent.page;
        this.pageSize = pagingEvent.pageSize;
        this.filter();
    };
    CustomerComponent.prototype.filter = function () {
        var _this = this;
        this._loadingService.register('customer');
        var sortBy = this.sortBy;
        if (this.sortOrder.toString() == 'DESC') {
            sortBy = '-'.concat(sortBy);
        }
        var id = this.shops[0].retail_brand_id;
        var filters = {
            __retail_brand_id__equal: id,
            __limit: this.pageSize, __page: this.currentPage, __order_by: sortBy,
        };
        if (this.customerNumber) {
            filters['__mobile_number__contains'] = this.customerNumber;
        }
        else {
            filters['__name__contains'] = this.searchTerm;
        }
        this._customerService.query(filters).subscribe(function (resp) {
            _this.filteredData = resp.data;
            _this.filteredTotal = resp.total;
            _this._loadingService.resolve('customer');
        }, function () {
            _this._loadingService.resolve('customer');
        });
    };
    CustomerComponent.prototype.showDetail = function (customer) {
        var _this = this;
        this._loadingService.register('customer');
        this._customerService.query({ __id__equal: customer.id, __include: ['transactions', 'addresses'] })
            .subscribe(function (data) {
            _this.customer = data.data[0];
            _this._loadingService.resolve('customer');
            // let _dialog = this._dialogService.open(CustomerDetailComponent);
            // _dialog.componentInstance.customer = this.customer;
            // _dialog.afterClosed().subscribe((data: number) => {
            //   customer.amount_due = data;
            // });
        });
    };
    return CustomerComponent;
}());
CustomerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-customer',
        template: __webpack_require__(985),
        styles: [__webpack_require__(926)],
        viewProviders: [__WEBPACK_IMPORTED_MODULE_4__services_customer_service__["b" /* CustomerService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["Title"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_core__["h" /* TdLoadingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_core__["h" /* TdLoadingService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_customer_service__["b" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_customer_service__["b" /* CustomerService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_shop_service__["a" /* RetailShopsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shop_service__["a" /* RetailShopsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_core__["j" /* TdDialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_core__["j" /* TdDialogService */]) === "function" && _e || Object])
], CustomerComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=customer.component.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__covalent_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_orders_service__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderDetailComponent = (function () {
    function OrderDetailComponent(dialogRef, _orderService, _loadingService) {
        this.dialogRef = dialogRef;
        this._orderService = _orderService;
        this._loadingService = _loadingService;
        this._loadingService.create({
            name: 'order-detail',
            type: __WEBPACK_IMPORTED_MODULE_2__covalent_core__["f" /* LoadingType */].Circular,
            mode: __WEBPACK_IMPORTED_MODULE_2__covalent_core__["g" /* LoadingMode */].Indeterminate,
            color: 'warn',
        });
    }
    OrderDetailComponent.prototype.ngOnInit = function () {
    };
    OrderDetailComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    return OrderDetailComponent;
}());
OrderDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-order-detail',
        template: __webpack_require__(986),
        styles: [__webpack_require__(927)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["J" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["J" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_orders_service__["b" /* OrdersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_orders_service__["b" /* OrdersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__covalent_core__["h" /* TdLoadingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__covalent_core__["h" /* TdLoadingService */]) === "function" && _c || Object])
], OrderDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=order-detail.component.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__covalent_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_orders_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shop_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_detail_order_detail_component__ = __webpack_require__(373);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderComponent = (function () {
    function OrderComponent(_titleService, _loadingService, _orderService, _shopService, _dialogService) {
        this._titleService = _titleService;
        this._loadingService = _loadingService;
        this._orderService = _orderService;
        this._shopService = _shopService;
        this._dialogService = _dialogService;
        this.data = [];
        this.columns = [
            { name: 'invoice_number', label: 'Invoice', numeric: false, format: function (v) { return '#' + v; }, sortable: true },
            { name: 'customer.name', label: 'Customer', sortable: true, nested: true },
            { name: 'customer.mobile_number', label: 'Number', sortable: true, nested: true },
            { name: 'retail_shop.name', 'label': 'Shop', nested: true },
            { name: 'total', label: 'Total', numeric: true, format: function (v) { return v.toFixed(2); } },
            { name: 'amount_due', label: 'Due', numeric: true, format: function (v) { return v.toFixed(2); } },
            { name: 'items_count', label: 'Items', numeric: true },
            { name: 'auto_discount', label: 'Discount', numeric: true },
            { name: 'created_on', label: 'Date' },
            { name: 'created_by.name', label: 'Created By', nested: true },
        ];
        this.filteredData = this.data;
        this.filteredTotal = this.data.length;
        this.searchTerm = '';
        this.fromRow = 1;
        this.currentPage = 1;
        this.pageSize = 50;
        this.sortBy = 'invoice_number';
        this.sortOrder = __WEBPACK_IMPORTED_MODULE_1__covalent_core__["i" /* TdDataTableSortingOrder */].Descending;
        this._loadingService.create({
            name: 'orders',
            type: __WEBPACK_IMPORTED_MODULE_1__covalent_core__["f" /* LoadingType */].Circular,
            mode: __WEBPACK_IMPORTED_MODULE_1__covalent_core__["g" /* LoadingMode */].Indeterminate,
            color: 'warn',
        });
    }
    OrderComponent.prototype.ngOnInit = function () {
    };
    OrderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._titleService.setTitle('Order');
        this.title = 'Orders';
        this.shop = this._shopService.shop;
        this.shops = this._shopService.shops;
        this.shopsSub = this._shopService.shops$.subscribe(function (data) {
            _this.shops = data;
        });
        this.shopSub = this._shopService.shop$.subscribe(function (data) {
            _this.shop = data;
            _this.filter();
        });
    };
    OrderComponent.prototype.ngOnDestroy = function () {
        this.shopsSub.unsubscribe();
        this.shopSub.unsubscribe();
    };
    OrderComponent.prototype.sort = function (name, sortOrder) {
        this.sortBy = name;
        if (sortOrder.toString() == 'ASC') {
            this.sortOrder = __WEBPACK_IMPORTED_MODULE_1__covalent_core__["i" /* TdDataTableSortingOrder */].Descending;
        }
        else {
            this.sortOrder = __WEBPACK_IMPORTED_MODULE_1__covalent_core__["i" /* TdDataTableSortingOrder */].Ascending;
        }
        this.filter();
    };
    OrderComponent.prototype.search = function (searchTerm) {
        this.searchTerm = searchTerm;
        this.filter();
    };
    OrderComponent.prototype.page = function (pagingEvent) {
        this.fromRow = pagingEvent.fromRow;
        this.currentPage = pagingEvent.page;
        this.pageSize = pagingEvent.pageSize;
        this.filter();
    };
    OrderComponent.prototype.filter = function () {
        var _this = this;
        this._loadingService.register('orders');
        var sortBy = this.sortBy;
        if (this.sortOrder.toString() == 'DESC') {
            sortBy = '-'.concat(sortBy);
        }
        var ids = this.shops.map(function (item) { return item.id; });
        if (this.shop && this.shop.id) {
            ids = [this.shop.id];
        }
        this._orderService.query({
            __retail_shop_id__in: ids, __include: ['retail_shop'],
            __limit: this.pageSize, __page: this.currentPage, __order_by: sortBy, __name__contains: this.searchTerm
        }).subscribe(function (resp) {
            _this.data = resp.data;
            _this.filteredData = resp.data;
            _this.filteredTotal = resp.total;
            _this._loadingService.resolve('orders');
        }, function () {
            _this._loadingService.resolve('orders');
        });
    };
    OrderComponent.prototype.toggle = function (order, index) {
        var _this = this;
        var message = 'Void';
        if (order.is_void) {
            message = 'Unvoid';
        }
        this._dialogService.openConfirm({
            message: 'Are you sure you want to ' + message + ' this Order?',
            title: 'Confirm',
            cancelButton: 'No, Cancel',
            acceptButton: 'Yes, ' + message,
        }).afterClosed().subscribe(function (accept) {
            if (accept) {
                _this._loadingService.register('orders');
                order.is_void = !order.is_void;
                _this._orderService.update(order.id, { is_void: order.is_void, id: order.id }).subscribe(function () {
                    _this._shopService.getOrderItemUpdate(order.retail_shop_id, null, 1, { __order_id__equal: order.id }).then(function () {
                        _this._loadingService.resolve('orders');
                    });
                }, function () {
                    _this.data[index].is_void = !_this.data[index].is_void;
                    _this._loadingService.resolve('orders');
                });
            }
            else {
            }
        });
    };
    OrderComponent.prototype.showDetail = function (order) {
        var _this = this;
        this._loadingService.register('orders');
        this._orderService.query({ __id__equal: order.id, __include: ['customer', 'address', 'items', 'discounts'] })
            .subscribe(function (data) {
            _this.order = data.data[0];
            _this._loadingService.resolve('orders');
            var _dialog = _this._dialogService.open(__WEBPACK_IMPORTED_MODULE_5__order_detail_order_detail_component__["a" /* OrderDetailComponent */]);
            _dialog.componentInstance.order = _this.order;
            _dialog.afterClosed();
        });
    };
    return OrderComponent;
}());
OrderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-order',
        template: __webpack_require__(987),
        styles: [__webpack_require__(928)],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_5__order_detail_order_detail_component__["a" /* OrderDetailComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["Title"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_core__["h" /* TdLoadingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_core__["h" /* TdLoadingService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_orders_service__["b" /* OrdersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_orders_service__["b" /* OrdersService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_shop_service__["a" /* RetailShopsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shop_service__["a" /* RetailShopsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_core__["j" /* TdDialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_core__["j" /* TdDialogService */]) === "function" && _e || Object])
], OrderComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=order.component.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__covalent_core__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportingComponent = (function () {
    function ReportingComponent(media) {
        this.media = media;
    }
    ReportingComponent.prototype.ngOnInit = function () {
    };
    ReportingComponent.prototype.ngAfterViewInit = function () {
        this.media.broadcast();
    };
    return ReportingComponent;
}());
ReportingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reporting',
        template: __webpack_require__(988),
        styles: [__webpack_require__(929)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_core__["k" /* TdMediaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_core__["k" /* TdMediaService */]) === "function" && _a || Object])
], ReportingComponent);

var _a;
//# sourceMappingURL=reporting.component.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* unused harmony export single */
/* unused harmony export multi */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var single = [
    {
        'name': 'Orders',
        'value': 3843,
    },
    {
        'name': 'Sales',
        'value': 15294,
    },
    {
        'name': 'Items',
        'value': 567,
    },
    {
        'name': 'Quantities',
        'value': 8567,
    },
];
var multi = [
    {
        'name': 'Databases',
        'series': [
            {
                'value': 2469,
                'name': '2016-09-15T19:25:07.773Z',
            },
            {
                'value': 3619,
                'name': '2016-09-17T17:16:53.279Z',
            },
            {
                'value': 3885,
                'name': '2016-09-15T10:34:32.344Z',
            },
            {
                'value': 4289,
                'name': '2016-09-19T14:33:45.710Z',
            },
            {
                'value': 3309,
                'name': '2016-09-12T18:48:58.925Z',
            },
        ],
    },
    {
        'name': 'Containers',
        'series': [
            {
                'value': 2452,
                'name': '2016-09-15T19:25:07.773Z',
            },
            {
                'value': 4938,
                'name': '2016-09-17T17:16:53.279Z',
            },
            {
                'value': 4110,
                'name': '2016-09-15T10:34:32.344Z',
            },
            {
                'value': 3828,
                'name': '2016-09-19T14:33:45.710Z',
            },
            {
                'value': 5772,
                'name': '2016-09-12T18:48:58.925Z',
            },
        ],
    },
    {
        'name': 'Streams',
        'series': [
            {
                'value': 4022,
                'name': '2016-09-15T19:25:07.773Z',
            },
            {
                'value': 2345,
                'name': '2016-09-17T17:16:53.279Z',
            },
            {
                'value': 5148,
                'name': '2016-09-15T10:34:32.344Z',
            },
            {
                'value': 6868,
                'name': '2016-09-19T14:33:45.710Z',
            },
            {
                'value': 5415,
                'name': '2016-09-12T18:48:58.925Z',
            },
        ],
    },
    {
        'name': 'Queries',
        'series': [
            {
                'value': 6194,
                'name': '2016-09-15T19:25:07.773Z',
            },
            {
                'value': 6585,
                'name': '2016-09-17T17:16:53.279Z',
            },
            {
                'value': 6857,
                'name': '2016-09-15T10:34:32.344Z',
            },
            {
                'value': 2545,
                'name': '2016-09-19T14:33:45.710Z',
            },
            {
                'value': 5986,
                'name': '2016-09-12T18:48:58.925Z',
            },
        ],
    },
];
var SaleComponent = (function () {
    function SaleComponent() {
        this.view = [700, 400];
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = '';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Sales';
        this.colorScheme = {
            domain: ['#9575CD', '#4FC3F7', '#4DD0E1', '#4DB6AC', '#66BB6A', '#9CCC65'],
        };
        this.colorSchemeDark = {
            domain: ['#5E35B1', '#0277BD', '#00695C', '#558B2F', '#9E9D24'],
        };
        // line, area
        this.autoScale = true;
        // Cards
        Object.assign(this, { single: single });
        // Chart
        this.multi = multi.map(function (group) {
            group.series = group.series.map(function (dataItem) {
                dataItem.name = new Date(dataItem.name);
                return dataItem;
            });
            return group;
        });
    }
    SaleComponent.prototype.ngOnInit = function () {
    };
    return SaleComponent;
}());
SaleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sale',
        template: __webpack_require__(989),
        styles: [__webpack_require__(930)]
    }),
    __metadata("design:paramtypes", [])
], SaleComponent);

//# sourceMappingURL=sale.component.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StockReportComponent = (function () {
    function StockReportComponent() {
    }
    StockReportComponent.prototype.ngOnInit = function () {
    };
    return StockReportComponent;
}());
StockReportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-stock-report',
        template: __webpack_require__(990),
        styles: [__webpack_require__(931)]
    }),
    __metadata("design:paramtypes", [])
], StockReportComponent);

//# sourceMappingURL=stock-report.component.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StaffDetailComponent = (function () {
    function StaffDetailComponent() {
    }
    StaffDetailComponent.prototype.ngOnInit = function () {
    };
    return StaffDetailComponent;
}());
StaffDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-staff-detail',
        template: __webpack_require__(992),
        styles: [__webpack_require__(933)]
    }),
    __metadata("design:paramtypes", [])
], StaffDetailComponent);

//# sourceMappingURL=staff-detail.component.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__covalent_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_users_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__staff_detail_staff_detail_component__ = __webpack_require__(378);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StaffComponent = (function () {
    function StaffComponent(_titleService, media, _loadingService, _userService, _dialogService) {
        this._titleService = _titleService;
        this.media = media;
        this._loadingService = _loadingService;
        this._userService = _userService;
        this._dialogService = _dialogService;
        this.columns = [
            { name: 'name', label: 'Name', numeric: false, sortable: true },
            { name: 'email', label: 'Email', sortable: true, nested: true },
            { name: 'mobile_number', label: 'Number', sortable: true, nested: true },
            { name: 'active', label: 'Active' },
            { name: 'login_count', label: 'Login Count' },
            {
                name: 'last_login_at',
                label: 'Last Login',
            },
            {
                name: 'current_login_at',
                label: 'Current Login',
            },
            { name: 'created_on', label: 'Added On' },
        ];
        this.filteredData = [];
        this.filteredTotal = 0;
        this.searchTerm = '';
        this.fromRow = 1;
        this.currentPage = 1;
        this.pageSize = 50;
        this.sortBy = 'name';
        this.sortOrder = __WEBPACK_IMPORTED_MODULE_1__covalent_core__["i" /* TdDataTableSortingOrder */].Descending;
        this._loadingService.create({
            name: 'orders',
            type: __WEBPACK_IMPORTED_MODULE_1__covalent_core__["f" /* LoadingType */].Circular,
            mode: __WEBPACK_IMPORTED_MODULE_1__covalent_core__["g" /* LoadingMode */].Indeterminate,
            color: 'warn',
        });
    }
    StaffComponent.prototype.ngOnInit = function () {
    };
    StaffComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._titleService.setTitle('Staff');
        this.title = 'Staff';
        this.user = this._userService.user;
        if (this.user) {
            this.filter();
        }
        this.userSub = this._userService.user$.subscribe(function (data) {
            _this.user = data;
            _this.filter();
        });
        this.media.broadcast();
    };
    StaffComponent.prototype.ngOnDestroy = function () {
        this.userSub.unsubscribe();
    };
    StaffComponent.prototype.sort = function (name, sortOrder) {
        this.sortBy = name;
        if (sortOrder.toString() == 'ASC') {
            this.sortOrder = __WEBPACK_IMPORTED_MODULE_1__covalent_core__["i" /* TdDataTableSortingOrder */].Descending;
        }
        else {
            this.sortOrder = __WEBPACK_IMPORTED_MODULE_1__covalent_core__["i" /* TdDataTableSortingOrder */].Ascending;
        }
        this.filter();
    };
    StaffComponent.prototype.search = function (searchTerm) {
        this.searchTerm = searchTerm;
        this.filter();
    };
    StaffComponent.prototype.page = function (pagingEvent) {
        this.fromRow = pagingEvent.fromRow;
        this.currentPage = pagingEvent.page;
        this.pageSize = pagingEvent.pageSize;
        this.filter();
    };
    StaffComponent.prototype.filter = function () {
        var _this = this;
        this._loadingService.register('users');
        var sortBy = this.sortBy;
        if (this.sortOrder.toString() == 'DESC') {
            sortBy = '-'.concat(sortBy);
        }
        this._userService.query({
            __retail_brand_id__in: this.user.brand_id, __include: ['login_count', 'current_login_ip',
                'last_login_ip', 'last_login_at', 'current_login_at', 'created_on'],
            __limit: this.pageSize, __page: this.currentPage, __order_by: sortBy, __name__contains: this.searchTerm
        }).subscribe(function (resp) {
            _this.filteredData = resp.data;
            _this.filteredTotal = resp.total;
            _this._loadingService.resolve('users');
        }, function () {
            _this._loadingService.resolve('users');
        });
    };
    StaffComponent.prototype.toggle = function (user, index) {
        var _this = this;
        var message = 'Active';
        if (user.active) {
            message = 'Deactivate';
        }
        this._dialogService.openConfirm({
            message: 'Are you sure you want to ' + message + ' this User?',
            title: 'Confirm',
            cancelButton: 'No, Cancel',
            acceptButton: 'Yes, ' + message,
        }).afterClosed().subscribe(function (accept) {
            if (accept) {
                _this._loadingService.register('users');
                user.active = !user.active;
                _this._userService.update(user.id, { active: user.active, id: user.id }).subscribe(function () {
                    _this._loadingService.resolve('users');
                }, function () {
                    _this.filteredData[index].active = !_this.filteredData[index].active;
                    _this._loadingService.resolve('users');
                });
            }
            else {
            }
        });
    };
    StaffComponent.prototype.showDetail = function (user) {
        var _this = this;
        this._loadingService.register('users');
        this._userService.query({
            __id__equal: user.id, __include: ['login_count', 'current_login_ip',
                'last_login_ip', 'retail_shops', 'last_login_at', 'current_login_at', 'created_on']
        })
            .subscribe(function (data) {
            _this.user = data.data[0];
            _this._loadingService.resolve('users');
            var _dialog = _this._dialogService.open(__WEBPACK_IMPORTED_MODULE_4__staff_detail_staff_detail_component__["a" /* StaffDetailComponent */]);
            _dialog.componentInstance.user = _this.user;
            _dialog.afterClosed();
        });
    };
    return StaffComponent;
}());
StaffComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-staff',
        template: __webpack_require__(993),
        styles: [__webpack_require__(934)],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_4__staff_detail_staff_detail_component__["a" /* StaffDetailComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["Title"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_core__["k" /* TdMediaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_core__["k" /* TdMediaService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_core__["h" /* TdLoadingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_core__["h" /* TdLoadingService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_core__["j" /* TdDialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_core__["j" /* TdDialogService */]) === "function" && _e || Object])
], StaffComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=staff.component.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__covalent_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shop_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_items_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddStockComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddStockComponent = (function () {
    function AddStockComponent(_shopService, _itemService, _snackBarService, _loadingService, _distributorService, _stockService, _distributorBillService) {
        var _this = this;
        this._shopService = _shopService;
        this._itemService = _itemService;
        this._snackBarService = _snackBarService;
        this._loadingService = _loadingService;
        this._distributorService = _distributorService;
        this._stockService = _stockService;
        this._distributorBillService = _distributorBillService;
        this.stateStep1 = __WEBPACK_IMPORTED_MODULE_1__covalent_core__["l" /* StepState */].Required;
        this.stateStep2 = __WEBPACK_IMPORTED_MODULE_1__covalent_core__["l" /* StepState */].Required;
        this.stateStep3 = __WEBPACK_IMPORTED_MODULE_1__covalent_core__["l" /* StepState */].Required;
        this.disabled = false;
        this.state = 1;
        this.bill = {};
        this.distributors = [];
        this.products = [];
        this.getDistributors = function (event) {
            return _this._distributorService.query({
                __retail_shop_id__equal: _this.shop.id, __only: ['id', 'name', 'retail_shop_id'],
                __name__contains: event
            }).map(function (data) { return data.data; });
        };
        this.getProducts = function (event) {
            return _this._itemService.query({
                __retail_shop_id__equal: _this.shop.id, __only: ['id', 'name', 'retail_shop_id'],
                __name__contains: event
            }).map(function (data) { return data.data; });
        };
        this._loadingService.create({
            name: 'distributor-bill',
            type: __WEBPACK_IMPORTED_MODULE_1__covalent_core__["f" /* LoadingType */].Circular,
            mode: __WEBPACK_IMPORTED_MODULE_1__covalent_core__["g" /* LoadingMode */].Indeterminate,
            color: 'warn',
        });
    }
    AddStockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shop = this._shopService.shop;
        this.shops = this._shopService.shops;
        if (this.shop.id) {
            this.setShop(this.shop);
        }
        this._shopService.shops$.subscribe(function (data) {
            _this.shops = data;
        });
        this._shopService.shop$.subscribe(function (data) {
            _this.shop = data;
            _this.setShop(_this.shop);
        });
    };
    AddStockComponent.prototype.setEntryType = function (event) {
        this.entryType = event;
        this.state = 3;
        this.stateStep2 = __WEBPACK_IMPORTED_MODULE_1__covalent_core__["l" /* StepState */].Complete;
        this.stocks = [];
    };
    AddStockComponent.prototype.setShop = function (data) {
        this.shop = data;
        this.stateStep1 = __WEBPACK_IMPORTED_MODULE_1__covalent_core__["l" /* StepState */].Complete;
        this.state = 2;
    };
    AddStockComponent.prototype.removeDistributor = function () {
        this.stocks = [];
    };
    AddStockComponent.prototype.removeProduct = function () {
        this.stocks = [];
    };
    AddStockComponent.prototype.addDistributor = function (event) {
        var _this = this;
        this._loadingService.register('distributor-bill');
        this._distributorService.query({ __retail_shop_id__equal: this.shop.id, __id__equal: event.value,
            __only: ['products'],
            __include: ['products'] })
            .subscribe(function (data) {
            _this.stocks = data.data[0].products.map(function (data) {
                var stock = { product: data, purchase_amount: data.last_purchase_amount,
                    selling_amount: data.last_selling_amount, units_purchased: data.stock_required,
                    product_id: data.id, quantity_label: data.quantity_label };
                stock.product = data;
                return stock;
            });
            _this._loadingService.resolve('distributor-bill');
        }, function () {
            _this._loadingService.resolve('distributor-bill');
        });
    };
    AddStockComponent.prototype.addProduct = function (event) {
        var _this = this;
        this._loadingService.register('distributor-bill');
        this._itemService.query({ __retail_shop_id__equal: this.shop.id, __id__equal: event.value,
            __only: ['id', 'name', 'last_selling_amount', 'last_purchase_amount', 'stock_required', 'quantity_label'],
            __include: ['last_selling_amount', 'last_purchase_amount', 'stock_required'] })
            .subscribe(function (data) {
            _this.stocks = data.data.map(function (data) {
                var stock = { product: data, purchase_amount: data.last_purchase_amount,
                    selling_amount: data.last_selling_amount, units_purchased: data.stock_required,
                    product_id: data.id, quantity_label: data.quantity_label };
                stock.product = data;
                return stock;
            });
            _this._loadingService.resolve('distributor-bill');
        }, function () {
            _this._loadingService.resolve('distributor-bill');
        });
    };
    AddStockComponent.prototype.saveBill = function () {
        var _this = this;
        this._loadingService.register('distributor-bill');
        this.bill.distributor_id = this.distributors[0].value;
        this.bill.purchased_items = this.stocks.filter(function (data) {
            return data.units_purchased > 0 && data.selling_amount && data.purchase_amount;
        });
        this._distributorBillService.create(this.bill).subscribe(function (data) {
            _this.stateStep3 = __WEBPACK_IMPORTED_MODULE_1__covalent_core__["l" /* StepState */].Complete;
            _this._shopService.getProductUpdate(_this.shop.id, null, { __id__in: _this.stocks.map(function (data) {
                    return data.product_id;
                }) }).then(function () {
                _this.stocks = [];
                _this.distributors = [];
                _this.entryType = null;
                _this._snackBarService.open('Stock updated with bill ID#' + JSON.stringify(data.data[0].id), '', { duration: 3000 });
                _this._loadingService.resolve('distributor-bill');
            });
        }, function () {
            _this._loadingService.resolve('distributor-bill');
        });
    };
    AddStockComponent.prototype.saveProductStock = function () {
        var _this = this;
        this._stockService.create(this.stocks[0]).subscribe(function (data) {
            _this._shopService.getProductUpdate(_this.shop.id, null, { __id__in: [_this.stocks[0].product_id] }).then(function () {
                _this.stocks = [];
                _this.distributors = [];
                _this.products = [];
                _this._snackBarService.open('Stock updated with ID#' + JSON.stringify(data.data[0].id), '', { duration: 3000 });
                _this._loadingService.resolve('distributor-bill');
            });
        }, function () {
            _this._loadingService.resolve('distributor-bill');
        });
    };
    return AddStockComponent;
}());
AddStockComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-stock',
        template: __webpack_require__(994),
        styles: [__webpack_require__(935)],
        viewProviders: [__WEBPACK_IMPORTED_MODULE_3__services_items_service__["h" /* DistributorBillsService */], __WEBPACK_IMPORTED_MODULE_3__services_items_service__["g" /* StocksService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_shop_service__["a" /* RetailShopsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shop_service__["a" /* RetailShopsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_items_service__["a" /* ItemsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_items_service__["a" /* ItemsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["M" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["M" /* MdSnackBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_core__["h" /* TdLoadingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_core__["h" /* TdLoadingService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_items_service__["b" /* DistributorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_items_service__["b" /* DistributorService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__services_items_service__["g" /* StocksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_items_service__["g" /* StocksService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__services_items_service__["h" /* DistributorBillsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_items_service__["h" /* DistributorBillsService */]) === "function" && _g || Object])
], AddStockComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=add-stock.component.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_items_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BillDetailsComponent = (function () {
    function BillDetailsComponent(dialogRef, _billService) {
        this.dialogRef = dialogRef;
        this._billService = _billService;
    }
    BillDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._billService.query({ id: this.bill.id, __include: ['stocks', 'purchased_items'] }).subscribe(function (data) {
            _this.bill = data.data[0];
        });
    };
    BillDetailsComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    return BillDetailsComponent;
}());
BillDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-bill-details',
        template: __webpack_require__(996),
        styles: [__webpack_require__(937)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["J" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["J" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_items_service__["h" /* DistributorBillsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_items_service__["h" /* DistributorBillsService */]) === "function" && _b || Object])
], BillDetailsComponent);

var _a, _b;
//# sourceMappingURL=bill-details.component.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__covalent_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_items_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bill_details_bill_details_component__ = __webpack_require__(381);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistributorBillComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DistributorBillComponent = (function () {
    function DistributorBillComponent(_titleService, _distributorBillService, _dialogService) {
        var _this = this;
        this._titleService = _titleService;
        this._distributorBillService = _distributorBillService;
        this._dialogService = _dialogService;
        this.columns = [
            { name: 'distributor.name', label: 'Distributor', sortable: false, nested: true },
            { name: 'distributor.retail_shop.name', label: 'Shop', sortable: false },
            { name: 'reference_number', label: 'Reference #', numeric: true, sortable: false },
            { name: 'purchase_date', label: 'Date', numeric: true, sortable: true },
            { name: 'bill_amount', label: 'Amount', numeric: true, sortable: false, format: function (v) { return v ? v.toFixed(2) : 0; } },
            { name: 'total_items', label: 'Items', numeric: true, sortable: true },
        ];
        this.only = [];
        this.include = ['distributor'];
        this.filters = {};
        this.editRow = function (bill) {
            var _dialog = _this._dialogService.open(__WEBPACK_IMPORTED_MODULE_4__bill_details_bill_details_component__["a" /* BillDetailsComponent */], { height: '70%', width: '80%' });
            _dialog.componentInstance.bill = Object.assign({}, bill);
            return _dialog.afterClosed();
        };
        this.filter = function () {
            return _this._distributorBillService;
        };
    }
    DistributorBillComponent.prototype.ngOnInit = function () {
        this._titleService.setTitle('Bills');
        this.title = 'Bills';
    };
    return DistributorBillComponent;
}());
DistributorBillComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-distributor-bill',
        template: __webpack_require__(997),
        styles: [__webpack_require__(938)],
        viewProviders: [__WEBPACK_IMPORTED_MODULE_2__services_items_service__["h" /* DistributorBillsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["Title"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_items_service__["h" /* DistributorBillsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_items_service__["h" /* DistributorBillsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_core__["j" /* TdDialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_core__["j" /* TdDialogService */]) === "function" && _c || Object])
], DistributorBillComponent);

var _a, _b, _c;
//# sourceMappingURL=distributor-bill.component.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_items_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpiryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExpiryComponent = (function () {
    function ExpiryComponent(_titleService, _stockService) {
        var _this = this;
        this._titleService = _titleService;
        this._stockService = _stockService;
        this.columns = [
            { name: 'product.name', label: 'Product Name', sortable: true, nested: true },
            { name: 'distributor_bill.distributor.name', label: 'Distributor', sortable: false, nested: true },
            { name: 'purchase_amount', label: 'Purchase (INR)', numeric: true, format: function (v) { return v.toFixed(2); }, sortable: false },
            { name: 'selling_amount', label: 'Selling (INR)', numeric: true, format: function (v) { return v.toFixed(2); }, sortable: false },
            { name: 'product.retail_shop.name', label: 'Shop', sortable: false },
            { name: 'units_purchased', label: 'Units Purchased', numeric: true, sortable: false },
            { name: 'units_sold', label: 'Sold', numeric: true, sortable: true },
            { name: 'expiry_date', label: 'Expiry', sortable: true },
        ];
        this.include = ['product', 'distributor_bill'];
        this.filters = { __expired__bool: true };
        this.filter = function () {
            return _this._stockService;
        };
    }
    ExpiryComponent.prototype.ngOnInit = function () {
        this._titleService.setTitle('Expiry');
        this.title = 'Expiry';
    };
    return ExpiryComponent;
}());
ExpiryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-expiry',
        template: __webpack_require__(998),
        styles: [__webpack_require__(939)],
        viewProviders: [__WEBPACK_IMPORTED_MODULE_1__services_items_service__["g" /* StocksService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["Title"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_items_service__["g" /* StocksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_items_service__["g" /* StocksService */]) === "function" && _b || Object])
], ExpiryComponent);

var _a, _b;
//# sourceMappingURL=expiry.component.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_items_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShortageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShortageComponent = (function () {
    function ShortageComponent(_titleService, _itemService) {
        var _this = this;
        this._titleService = _titleService;
        this._itemService = _itemService;
        this.columns = [
            { name: 'name', label: 'Product Name', sortable: true, nested: true },
            { name: 'distributor.name', label: 'Distributor', sortable: false, nested: true },
            { name: 'retail_shop.name', label: 'Shop', sortable: false },
            { name: 'available_stock', label: 'Stock', numeric: true, sortable: false },
            { name: 'min_stock', label: 'Min.Qty', numeric: true, sortable: true },
        ];
        this.only = ['id', 'name', 'distributor', 'retail_shop', 'available_stock', 'min_stock', 'is_short', 'stock_required'];
        this.include = ['distributor'];
        this.filters = { __stock_required__gte: 1, __is_disabled_bool: false };
        this.filter = function () {
            return _this._itemService;
        };
    }
    ShortageComponent.prototype.ngOnInit = function () {
        this._titleService.setTitle('Shortage');
        this.title = 'Shortage';
    };
    return ShortageComponent;
}());
ShortageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-shortage',
        template: __webpack_require__(999),
        styles: [__webpack_require__(940)],
        viewProviders: [__WEBPACK_IMPORTED_MODULE_1__services_items_service__["a" /* ItemsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["Title"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_items_service__["a" /* ItemsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_items_service__["a" /* ItemsService */]) === "function" && _b || Object])
], ShortageComponent);

var _a, _b;
//# sourceMappingURL=shortage.component.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__covalent_core__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockManagementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StockManagementComponent = (function () {
    function StockManagementComponent(media) {
        this.media = media;
    }
    StockManagementComponent.prototype.ngOnInit = function () {
    };
    StockManagementComponent.prototype.ngAfterViewInit = function () {
        this.media.broadcast();
    };
    return StockManagementComponent;
}());
StockManagementComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-stock-management',
        template: __webpack_require__(1000),
        styles: [__webpack_require__(941)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_core__["k" /* TdMediaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_core__["k" /* TdMediaService */]) === "function" && _a || Object])
], StockManagementComponent);

var _a;
//# sourceMappingURL=stock-management.component.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_items_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StockComponent = (function () {
    function StockComponent(_titleService, _stockService) {
        var _this = this;
        this._titleService = _titleService;
        this._stockService = _stockService;
        this.columns = [
            { name: 'product.name', label: 'Product Name', sortable: true, nested: true },
            { name: 'distributor_bill.distributor.name', label: 'Distributor', sortable: false, nested: true },
            { name: 'purchase_amount', label: 'Purchase (INR)', numeric: true, format: function (v) { return v.toFixed(2); }, sortable: false },
            { name: 'selling_amount', label: 'Selling (INR)', numeric: true, format: function (v) { return v.toFixed(2); }, sortable: false },
            { name: 'product.retail_shop.name', label: 'Shop', sortable: false },
            { name: 'units_purchased', label: 'Units Purchased', numeric: true, sortable: false },
            { name: 'units_sold', label: 'Sold', numeric: true, sortable: true },
            { name: 'expiry_date', label: 'Expiry', sortable: true, numeric: true },
        ];
        this.include = ['product', 'distributor_bill'];
        this.filters = { __is_sold__bool: false };
        this.filter = function () {
            return _this._stockService;
        };
    }
    StockComponent.prototype.ngOnInit = function () {
        this._titleService.setTitle('Stocks');
        this.title = 'Stocks';
    };
    return StockComponent;
}());
StockComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-stock',
        template: __webpack_require__(1001),
        styles: [__webpack_require__(942)],
        viewProviders: [__WEBPACK_IMPORTED_MODULE_1__services_items_service__["g" /* StocksService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["Title"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_items_service__["g" /* StocksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_items_service__["g" /* StocksService */]) === "function" && _b || Object])
], StockComponent);

var _a, _b;
//# sourceMappingURL=stock.component.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_service__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.checkLogin = function (url) {
        if (this.userService.isLoggedIn()) {
            return true;
        }
        this.userService.redirectUrl = url;
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-gaurd.service.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__(109);
/* unused harmony reexport Auth */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_service__ = __webpack_require__(76);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__users_service__["a"]; });
/* unused harmony reexport IUser */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shop_service__ = __webpack_require__(15);
/* unused harmony reexport RetailShop */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__shop_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__items_service__ = __webpack_require__(14);
/* unused harmony reexport ItemsService */
/* unused harmony reexport Product */
/* unused harmony reexport Stock */
/* unused harmony reexport DistributorService */
/* unused harmony reexport BrandsService */
/* unused harmony reexport TagsService */
/* unused harmony reexport TaxsService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__features_service__ = __webpack_require__(613);
/* unused harmony reexport FeaturesService */
/* unused harmony reexport IFeature */





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 506:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 506;


/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app___ = __webpack_require__(601);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app___["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(_iconRegistry, _domSanitizer) {
        this._iconRegistry = _iconRegistry;
        this._domSanitizer = _domSanitizer;
        this._iconRegistry.addSvgIconInNamespace('assets', 'github', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
        this._iconRegistry.addSvgIconInNamespace('assets', 'logo', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/logo.svg'));
        this._iconRegistry.addSvgIconInNamespace('assets', 'online-shop', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/online-shop.svg'));
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'qs-app',
        template: __webpack_require__(952),
        styles: [__webpack_require__(893)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["N" /* MdIconRegistry */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["N" /* MdIconRegistry */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__covalent_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__covalent_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_tag_input__ = __webpack_require__(949);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_tag_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_tag_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__ = __webpack_require__(948);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routes__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__config_interceptors_request_interceptor__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__swimlane_ngx_charts__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_users_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_shop_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_items_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_product_search_pipe__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_indexdb_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_cart_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_orders_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__billing_product_info_product_info_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__billing_item_discount_item_discount_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__back_button_back_button_component__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__directives_go_back_directive__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__billing_billing_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__billing_checkout_checkout_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__user_user_component__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__login_login_component__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_auth_gaurd_service__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__main_route_main_route_component__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__stock_management_stock_stock_component__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__stock_management_stock_management_component__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__stock_management_add_stock_add_stock_component__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__stock_management_distributor_bill_distributor_bill_component__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__stock_management_expiry_expiry_component__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__stock_management_shortage_shortage_component__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__stock_management_base_stock_table_base_stock_table_component__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__side_menu_side_menu_component__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__inventory_table_row_table_row_component__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__dashboard_dashboard_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__dashboard_shops_shops_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__dashboard_carts_carts_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__dashboard_printer_config_printer_config_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__dashboard_detail_detail_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__inventory_inventory_component__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__inventory_product_product_component__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__inventory_salt_salt_component__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__inventory_brand_brand_component__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__inventory_distributor_distributor_component__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__inventory_tax_tax_component__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__inventory_tag_tag_component__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__inventory_tag_tag_form_tag_form_component__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__inventory_tax_tax_form_tax_form_component__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__inventory_distributor_distributor_form_distributor_form_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__inventory_product_product_form_product_form_component__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__inventory_salt_salt_form_salt_form_component__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__inventory_brand_brand_form_brand_form_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__inventory_menu_menu_component__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__inventory_base_table_base_table_component__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__staff_staff_component__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__staff_staff_detail_staff_detail_component__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__reporting_reporting_component__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__reporting_sale_sale_component__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__reporting_order_order_component__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__reporting_order_order_detail_order_detail_component__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__reporting_customer_customer_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__reporting_customer_customer_detail_customer_detail_component__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__reporting_customer_report_customer_report_component__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__reporting_stock_report_stock_report_component__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__billing_salts_salts_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__billing_brands_brands_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__stock_management_distributor_bill_bill_details_bill_details_component__ = __webpack_require__(381);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










































































var httpInterceptorProviders = [
    __WEBPACK_IMPORTED_MODULE_11__config_interceptors_request_interceptor__["a" /* RequestInterceptor */],
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_25__billing_billing_component__["a" /* BillingComponent */],
            __WEBPACK_IMPORTED_MODULE_28__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_26__billing_checkout_checkout_component__["a" /* CheckoutComponent */],
            __WEBPACK_IMPORTED_MODULE_27__user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_23__back_button_back_button_component__["a" /* BackButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_30__main_route_main_route_component__["a" /* MainRouteComponent */],
            __WEBPACK_IMPORTED_MODULE_31__stock_management_stock_stock_component__["a" /* StockComponent */],
            __WEBPACK_IMPORTED_MODULE_32__stock_management_stock_management_component__["a" /* StockManagementComponent */],
            __WEBPACK_IMPORTED_MODULE_33__stock_management_add_stock_add_stock_component__["a" /* AddStockComponent */],
            __WEBPACK_IMPORTED_MODULE_34__stock_management_distributor_bill_distributor_bill_component__["a" /* DistributorBillComponent */],
            __WEBPACK_IMPORTED_MODULE_35__stock_management_expiry_expiry_component__["a" /* ExpiryComponent */],
            __WEBPACK_IMPORTED_MODULE_36__stock_management_shortage_shortage_component__["a" /* ShortageComponent */],
            __WEBPACK_IMPORTED_MODULE_37__stock_management_base_stock_table_base_stock_table_component__["a" /* BaseStockTableComponent */],
            __WEBPACK_IMPORTED_MODULE_38__side_menu_side_menu_component__["a" /* SideMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_39__inventory_table_row_table_row_component__["a" /* TableRowComponent */],
            __WEBPACK_IMPORTED_MODULE_40__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_41__dashboard_shops_shops_component__["a" /* ShopComponent */],
            __WEBPACK_IMPORTED_MODULE_42__dashboard_carts_carts_component__["a" /* CartComponent */],
            __WEBPACK_IMPORTED_MODULE_43__dashboard_printer_config_printer_config_component__["a" /* PrinterConfigComponent */],
            __WEBPACK_IMPORTED_MODULE_44__dashboard_detail_detail_component__["a" /* DetailComponent */],
            __WEBPACK_IMPORTED_MODULE_22__billing_item_discount_item_discount_component__["a" /* ItemDiscountComponent */],
            __WEBPACK_IMPORTED_MODULE_21__billing_product_info_product_info_component__["a" /* ProductInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_17__pipes_product_search_pipe__["a" /* ProductSearchPipe */],
            __WEBPACK_IMPORTED_MODULE_17__pipes_product_search_pipe__["b" /* ProductBrandPipe */],
            __WEBPACK_IMPORTED_MODULE_17__pipes_product_search_pipe__["c" /* ProductDistributorPipe */],
            __WEBPACK_IMPORTED_MODULE_45__inventory_inventory_component__["a" /* InventoryComponent */],
            __WEBPACK_IMPORTED_MODULE_46__inventory_product_product_component__["a" /* ProductComponent */],
            __WEBPACK_IMPORTED_MODULE_47__inventory_salt_salt_component__["a" /* SaltComponent */],
            __WEBPACK_IMPORTED_MODULE_48__inventory_brand_brand_component__["a" /* BrandComponent */],
            __WEBPACK_IMPORTED_MODULE_49__inventory_distributor_distributor_component__["a" /* DistributorComponent */],
            __WEBPACK_IMPORTED_MODULE_50__inventory_tax_tax_component__["a" /* TaxComponent */],
            __WEBPACK_IMPORTED_MODULE_51__inventory_tag_tag_component__["a" /* TagComponent */],
            __WEBPACK_IMPORTED_MODULE_52__inventory_tag_tag_form_tag_form_component__["a" /* TagFormComponent */],
            __WEBPACK_IMPORTED_MODULE_53__inventory_tax_tax_form_tax_form_component__["a" /* TaxFormComponent */],
            __WEBPACK_IMPORTED_MODULE_54__inventory_distributor_distributor_form_distributor_form_component__["a" /* DistributorFormComponent */],
            __WEBPACK_IMPORTED_MODULE_55__inventory_product_product_form_product_form_component__["a" /* ProductFormComponent */],
            __WEBPACK_IMPORTED_MODULE_56__inventory_salt_salt_form_salt_form_component__["a" /* SaltFormComponent */],
            __WEBPACK_IMPORTED_MODULE_57__inventory_brand_brand_form_brand_form_component__["a" /* BrandFormComponent */],
            __WEBPACK_IMPORTED_MODULE_70__billing_salts_salts_component__["a" /* SaltsComponent */],
            __WEBPACK_IMPORTED_MODULE_58__inventory_menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_59__inventory_base_table_base_table_component__["a" /* BaseTableComponent */],
            __WEBPACK_IMPORTED_MODULE_71__billing_brands_brands_component__["a" /* BrandsComponent */],
            __WEBPACK_IMPORTED_MODULE_60__staff_staff_component__["a" /* StaffComponent */],
            __WEBPACK_IMPORTED_MODULE_72__stock_management_distributor_bill_bill_details_bill_details_component__["a" /* BillDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_61__staff_staff_detail_staff_detail_component__["a" /* StaffDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_62__reporting_reporting_component__["a" /* ReportingComponent */],
            __WEBPACK_IMPORTED_MODULE_63__reporting_sale_sale_component__["a" /* SaleComponent */],
            __WEBPACK_IMPORTED_MODULE_69__reporting_stock_report_stock_report_component__["a" /* StockReportComponent */],
            __WEBPACK_IMPORTED_MODULE_64__reporting_order_order_component__["a" /* OrderComponent */],
            __WEBPACK_IMPORTED_MODULE_65__reporting_order_order_detail_order_detail_component__["a" /* OrderDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_66__reporting_customer_customer_component__["a" /* CustomerComponent */],
            __WEBPACK_IMPORTED_MODULE_67__reporting_customer_customer_detail_customer_detail_component__["a" /* CustomerDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_68__reporting_customer_report_customer_report_component__["a" /* CustomerReportComponent */],
            __WEBPACK_IMPORTED_MODULE_17__pipes_product_search_pipe__["d" /* ProductTagPipe */],
            __WEBPACK_IMPORTED_MODULE_17__pipes_product_search_pipe__["e" /* SearchPipe */],
            __WEBPACK_IMPORTED_MODULE_17__pipes_product_search_pipe__["f" /* ProductSaltPipe */],
            __WEBPACK_IMPORTED_MODULE_17__pipes_product_search_pipe__["g" /* KeysPipe */],
            __WEBPACK_IMPORTED_MODULE_17__pipes_product_search_pipe__["h" /* SafeHtml */],
            __WEBPACK_IMPORTED_MODULE_24__directives_go_back_directive__["a" /* GoBackDirective */],
            __WEBPACK_IMPORTED_MODULE_17__pipes_product_search_pipe__["i" /* TruncatePipe */],
            __WEBPACK_IMPORTED_MODULE_70__billing_salts_salts_component__["a" /* SaltsComponent */],
            __WEBPACK_IMPORTED_MODULE_71__billing_brands_brands_component__["a" /* BrandsComponent */],
            __WEBPACK_IMPORTED_MODULE_72__stock_management_distributor_bill_bill_details_bill_details_component__["a" /* BillDetailsComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__["CKEditorModule"],
            __WEBPACK_IMPORTED_MODULE_2__covalent_core__["a" /* CovalentCoreModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_2__covalent_core__["b" /* CovalentDataTableModule */],
            __WEBPACK_IMPORTED_MODULE_2__covalent_core__["c" /* CovalentPagingModule */],
            __WEBPACK_IMPORTED_MODULE_2__covalent_core__["d" /* CovalentDialogsModule */],
            __WEBPACK_IMPORTED_MODULE_3__covalent_http__["a" /* CovalentHttpModule */].forRoot({
                interceptors: [{
                        interceptor: __WEBPACK_IMPORTED_MODULE_11__config_interceptors_request_interceptor__["a" /* RequestInterceptor */], paths: ['**'],
                    }],
            }),
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__covalent_core__["e" /* CovalentSearchModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_tag_input__["TagInputModule"],
            __WEBPACK_IMPORTED_MODULE_10__app_routes__["a" /* appRoutes */],
            __WEBPACK_IMPORTED_MODULE_12__swimlane_ngx_charts__["NgxChartsModule"],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__app_routes__["b" /* appRoutingProviders */],
            __WEBPACK_IMPORTED_MODULE_15__services_shop_service__["a" /* RetailShopsService */],
            __WEBPACK_IMPORTED_MODULE_14__services_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_11__config_interceptors_request_interceptor__["a" /* RequestInterceptor */],
            __WEBPACK_IMPORTED_MODULE_29__services_auth_gaurd_service__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_16__services_items_service__["a" /* ItemsService */],
            __WEBPACK_IMPORTED_MODULE_20__services_orders_service__["a" /* OrderItemsService */],
            __WEBPACK_IMPORTED_MODULE_16__services_items_service__["b" /* DistributorService */],
            __WEBPACK_IMPORTED_MODULE_16__services_items_service__["c" /* TagsService */],
            __WEBPACK_IMPORTED_MODULE_16__services_items_service__["d" /* SaltsService */],
            __WEBPACK_IMPORTED_MODULE_16__services_items_service__["e" /* TaxsService */],
            __WEBPACK_IMPORTED_MODULE_16__services_items_service__["f" /* BrandsService */],
            __WEBPACK_IMPORTED_MODULE_16__services_items_service__["g" /* StocksService */],
            __WEBPACK_IMPORTED_MODULE_19__services_cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_20__services_orders_service__["b" /* OrdersService */],
            __WEBPACK_IMPORTED_MODULE_16__services_items_service__["h" /* DistributorBillsService */],
            __WEBPACK_IMPORTED_MODULE_16__services_items_service__["i" /* ProductSaltService */],
            __WEBPACK_IMPORTED_MODULE_16__services_items_service__["j" /* ProductTagService */],
            __WEBPACK_IMPORTED_MODULE_18__services_indexdb_service__["a" /* IndexDBServiceService */],
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_21__billing_product_info_product_info_component__["a" /* ProductInfoComponent */], __WEBPACK_IMPORTED_MODULE_26__billing_checkout_checkout_component__["a" /* CheckoutComponent */], __WEBPACK_IMPORTED_MODULE_22__billing_item_discount_item_discount_component__["a" /* ItemDiscountComponent */],
            __WEBPACK_IMPORTED_MODULE_55__inventory_product_product_form_product_form_component__["a" /* ProductFormComponent */], __WEBPACK_IMPORTED_MODULE_57__inventory_brand_brand_form_brand_form_component__["a" /* BrandFormComponent */], __WEBPACK_IMPORTED_MODULE_52__inventory_tag_tag_form_tag_form_component__["a" /* TagFormComponent */], __WEBPACK_IMPORTED_MODULE_53__inventory_tax_tax_form_tax_form_component__["a" /* TaxFormComponent */], __WEBPACK_IMPORTED_MODULE_56__inventory_salt_salt_form_salt_form_component__["a" /* SaltFormComponent */], __WEBPACK_IMPORTED_MODULE_72__stock_management_distributor_bill_bill_details_bill_details_component__["a" /* BillDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_54__inventory_distributor_distributor_form_distributor_form_component__["a" /* DistributorFormComponent */], __WEBPACK_IMPORTED_MODULE_67__reporting_customer_customer_detail_customer_detail_component__["a" /* CustomerDetailComponent */], __WEBPACK_IMPORTED_MODULE_65__reporting_order_order_detail_order_detail_component__["a" /* OrderDetailComponent */], __WEBPACK_IMPORTED_MODULE_70__billing_salts_salts_component__["a" /* SaltsComponent */], __WEBPACK_IMPORTED_MODULE_71__billing_brands_brands_component__["a" /* BrandsComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__billing_billing_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_carts_carts_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_shops_shops_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__inventory_product_product_component__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__inventory_brand_brand_component__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__inventory_tag_tag_component__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__inventory_tax_tax_component__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__inventory_distributor_distributor_component__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__inventory_salt_salt_component__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__inventory_inventory_component__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__inventory_menu_menu_component__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__reporting_reporting_component__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__reporting_sale_sale_component__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__reporting_order_order_component__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__reporting_customer_customer_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__stock_management_stock_management_component__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__stock_management_expiry_expiry_component__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__stock_management_shortage_shortage_component__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__stock_management_add_stock_add_stock_component__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__stock_management_stock_stock_component__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__stock_management_distributor_bill_distributor_bill_component__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__staff_staff_component__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__reporting_stock_report_stock_report_component__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__reporting_customer_report_customer_report_component__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__dashboard_printer_config_printer_config_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__dashboard_detail_detail_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__main_route_main_route_component__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_auth_gaurd_service__ = __webpack_require__(387);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });































var routes = [
    {
        path: '',
        redirectTo: "/dashboard/shops",
        pathMatch: 'full'
    },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_29__main_route_main_route_component__["a" /* MainRouteComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__services_auth_gaurd_service__["a" /* AuthGuard */]], children: [
            {
                path: 'stock', component: __WEBPACK_IMPORTED_MODULE_18__stock_management_stock_management_component__["a" /* StockManagementComponent */], canActivateChild: [__WEBPACK_IMPORTED_MODULE_30__services_auth_gaurd_service__["a" /* AuthGuard */]],
                children: [
                    { path: 'expiry', component: __WEBPACK_IMPORTED_MODULE_19__stock_management_expiry_expiry_component__["a" /* ExpiryComponent */] },
                    { path: 'shortage', component: __WEBPACK_IMPORTED_MODULE_20__stock_management_shortage_shortage_component__["a" /* ShortageComponent */] },
                    { path: 'stocks', component: __WEBPACK_IMPORTED_MODULE_22__stock_management_stock_stock_component__["a" /* StockComponent */] },
                    { path: 'add-stocks', component: __WEBPACK_IMPORTED_MODULE_21__stock_management_add_stock_add_stock_component__["a" /* AddStockComponent */] },
                    { path: 'bills', component: __WEBPACK_IMPORTED_MODULE_23__stock_management_distributor_bill_distributor_bill_component__["a" /* DistributorBillComponent */] }
                ]
            },
            {
                path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */], canActivateChild: [__WEBPACK_IMPORTED_MODULE_30__services_auth_gaurd_service__["a" /* AuthGuard */]],
                children: [
                    { path: 'shops', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_shops_shops_component__["a" /* ShopComponent */] },
                    { path: 'carts', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_carts_carts_component__["a" /* CartComponent */] },
                    { path: 'printer', component: __WEBPACK_IMPORTED_MODULE_27__dashboard_printer_config_printer_config_component__["a" /* PrinterConfigComponent */] },
                    { path: 'details', component: __WEBPACK_IMPORTED_MODULE_28__dashboard_detail_detail_component__["a" /* DetailComponent */] }
                ]
            },
            {
                path: 'inventory', component: __WEBPACK_IMPORTED_MODULE_12__inventory_inventory_component__["a" /* InventoryComponent */], canActivateChild: [__WEBPACK_IMPORTED_MODULE_30__services_auth_gaurd_service__["a" /* AuthGuard */]],
                children: [
                    { path: 'menu', component: __WEBPACK_IMPORTED_MODULE_13__inventory_menu_menu_component__["a" /* MenuComponent */] },
                    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_6__inventory_product_product_component__["a" /* ProductComponent */] },
                    { path: 'brands', component: __WEBPACK_IMPORTED_MODULE_7__inventory_brand_brand_component__["a" /* BrandComponent */] },
                    { path: 'distributors', component: __WEBPACK_IMPORTED_MODULE_10__inventory_distributor_distributor_component__["a" /* DistributorComponent */] },
                    { path: 'tags', component: __WEBPACK_IMPORTED_MODULE_8__inventory_tag_tag_component__["a" /* TagComponent */] },
                    { path: 'taxes', component: __WEBPACK_IMPORTED_MODULE_9__inventory_tax_tax_component__["a" /* TaxComponent */] },
                    { path: 'salts', component: __WEBPACK_IMPORTED_MODULE_11__inventory_salt_salt_component__["a" /* SaltComponent */] },
                ]
            },
            { path: 'billing/:id', component: __WEBPACK_IMPORTED_MODULE_1__billing_billing_component__["a" /* BillingComponent */] },
            { path: 'staff', component: __WEBPACK_IMPORTED_MODULE_24__staff_staff_component__["a" /* StaffComponent */], canActivateChild: [__WEBPACK_IMPORTED_MODULE_30__services_auth_gaurd_service__["a" /* AuthGuard */]] },
            {
                path: 'reporting', component: __WEBPACK_IMPORTED_MODULE_14__reporting_reporting_component__["a" /* ReportingComponent */], canActivateChild: [__WEBPACK_IMPORTED_MODULE_30__services_auth_gaurd_service__["a" /* AuthGuard */]],
                children: [
                    { path: 'sales', component: __WEBPACK_IMPORTED_MODULE_15__reporting_sale_sale_component__["a" /* SaleComponent */] },
                    { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_16__reporting_order_order_component__["a" /* OrderComponent */] },
                    { path: 'stock-report', component: __WEBPACK_IMPORTED_MODULE_25__reporting_stock_report_stock_report_component__["a" /* StockReportComponent */] },
                    { path: 'customer-report', component: __WEBPACK_IMPORTED_MODULE_26__reporting_customer_report_customer_report_component__["a" /* CustomerReportComponent */] },
                    { path: 'customers', component: __WEBPACK_IMPORTED_MODULE_17__reporting_customer_customer_component__["a" /* CustomerComponent */] },
                ]
            },
        ] },
];
var appRoutingProviders = [];
var appRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true });
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackButtonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BackButtonComponent = (function () {
    function BackButtonComponent() {
    }
    BackButtonComponent.prototype.ngOnInit = function () {
    };
    return BackButtonComponent;
}());
BackButtonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-back-button',
        template: __webpack_require__(953),
        styles: [__webpack_require__(894)],
    }),
    __metadata("design:paramtypes", [])
], BackButtonComponent);

//# sourceMappingURL=back-button.component.js.map

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export environment */
// The file for the current environment will overwrite this one during build
// Different environments can be found in config/environment.{dev|prod}.ts
// The build system defaults to the dev environment
// The file for the current environment will overwrite this one during build
var environment = {
    production: false,
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environment__ = __webpack_require__(600);
/* unused harmony reexport environment */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(597);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__covalent_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shop_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BaseTableComponent = (function () {
    function BaseTableComponent(_loadingService, _dialogService, _shopService) {
        this._loadingService = _loadingService;
        this._dialogService = _dialogService;
        this._shopService = _shopService;
        this.filteredData = [];
        this.title = '';
        this.include = [];
        this.shops = [];
        this.currentPage = 1;
        this.pageSize = 50;
        this.sortBy = 'name';
        this.sortOrder = __WEBPACK_IMPORTED_MODULE_1__covalent_core__["i" /* TdDataTableSortingOrder */].Ascending;
        this._loadingService.create({
            name: 'tables',
            type: __WEBPACK_IMPORTED_MODULE_1__covalent_core__["f" /* LoadingType */].Circular,
            mode: __WEBPACK_IMPORTED_MODULE_1__covalent_core__["g" /* LoadingMode */].Indeterminate,
            color: 'warn',
        });
    }
    BaseTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shop = this._shopService.shop;
        this.shops = this._shopService.shops;
        if (this.shops.length) {
            this.getData();
        }
        this.shopsSub = this._shopService.shops$.subscribe(function (data) {
            _this.shops = data;
            _this.getData();
        });
        this.shopSub = this._shopService.shop$.subscribe(function (data) {
            _this.shop = data;
            _this.getData();
        });
    };
    BaseTableComponent.prototype.ngOnDestroy = function () {
        this.shopsSub.unsubscribe();
        this.shopSub.unsubscribe();
    };
    BaseTableComponent.prototype.sort = function (name, sortOrder) {
        this.sortBy = name;
        if (sortOrder.toString() == 'ASC') {
            this.sortOrder = __WEBPACK_IMPORTED_MODULE_1__covalent_core__["i" /* TdDataTableSortingOrder */].Descending;
        }
        else {
            this.sortOrder = __WEBPACK_IMPORTED_MODULE_1__covalent_core__["i" /* TdDataTableSortingOrder */].Ascending;
        }
        this.getData();
    };
    BaseTableComponent.prototype.search = function (searchTerm) {
        this.searchTerm = searchTerm;
        this.getData();
    };
    BaseTableComponent.prototype.page = function (pagingEvent) {
        this.fromRow = pagingEvent.fromRow;
        this.currentPage = pagingEvent.page;
        this.pageSize = pagingEvent.pageSize;
        this.getData();
    };
    BaseTableComponent.prototype.getData = function () {
        var _this = this;
        this._loadingService.register('tables');
        var sortBy = this.sortBy;
        if (this.sortOrder.toString() == 'DESC') {
            sortBy = '-'.concat(sortBy);
        }
        var ids = this.shops.map(function (item) { return item.id; });
        if (this.shop && this.shop.id) {
            ids = [this.shop.id];
        }
        this.filter().query({ __retail_shop_id__in: ids, __include: this.include.concat(['retail_shop']),
            __limit: this.pageSize, __page: this.currentPage, __order_by: sortBy, __name__contains: this.searchTerm })
            .subscribe(function (resp) {
            _this.filteredData = resp.data;
            _this.filteredTotal = resp.total;
            _this._loadingService.resolve('tables');
        }, function () { return _this._loadingService.resolve('tables'); });
    };
    BaseTableComponent.prototype.edit = function (row, index) {
        var _this = this;
        this.editRow(row).subscribe(function (data) {
            if (data) {
                _this.filteredData[index] = data;
            }
        }, function () {
        });
    };
    BaseTableComponent.prototype.toggle = function (row) {
        var _this = this;
        var message = 'disable';
        if (row.is_disabled) {
            message = 'enable';
        }
        this._dialogService.openConfirm({
            message: 'Are you sure you want ' + message + ' to  this Item?',
            title: 'Confirm',
            cancelButton: 'No, Cancel',
            acceptButton: 'Yes, ' + message,
        }).afterClosed().subscribe(function (accept) {
            if (accept) {
                _this._loadingService.register('tables');
                _this.toggleRow(row).subscribe(function () {
                    _this._loadingService.resolve('tables');
                }, function () {
                    row.is_disabled = !row.is_disabled;
                    _this._loadingService.resolve('tables');
                });
            }
        });
    };
    BaseTableComponent.prototype.deleteRow = function (row, index) {
        var _this = this;
        this._dialogService.openConfirm({
            message: 'Are you sure you want to delete this Item?',
            title: 'Confirm',
            cancelButton: 'No, Cancel',
            acceptButton: 'Yes, Delete',
        }).afterClosed().subscribe(function (accept) {
            if (accept) {
                _this._loadingService.register('tables');
                _this.toggleRow(row).subscribe(function () {
                    _this.filteredData.splice(index, 1);
                    _this._loadingService.resolve('tables');
                }, function () {
                    _this._loadingService.resolve('tables');
                });
            }
            else {
            }
        });
    };
    BaseTableComponent.prototype.add = function () {
        var _this = this;
        this.addRow().subscribe(function (data) {
            if (data) {
                _this.filteredData = _this.filteredData.concat(data);
            }
        }, function () {
        });
    };
    return BaseTableComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], BaseTableComponent.prototype, "columns", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], BaseTableComponent.prototype, "searchTerm", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], BaseTableComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Function)
], BaseTableComponent.prototype, "filter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], BaseTableComponent.prototype, "include", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Function)
], BaseTableComponent.prototype, "editRow", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Function)
], BaseTableComponent.prototype, "toggleRow", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Function)
], BaseTableComponent.prototype, "addRow", void 0);
BaseTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-base-table',
        template: __webpack_require__(965),
        styles: [__webpack_require__(906)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_core__["h" /* TdLoadingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_core__["h" /* TdLoadingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_core__["j" /* TdDialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_core__["j" /* TdDialogService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_shop_service__["a" /* RetailShopsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shop_service__["a" /* RetailShopsService */]) === "function" && _c || Object])
], BaseTableComponent);

var _a, _b, _c;
//# sourceMappingURL=base-table.component.js.map

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__td_data_table_column__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__td_data_table_column___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__td_data_table_column__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableRowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TableRowComponent = (function () {
    function TableRowComponent() {
    }
    TableRowComponent.prototype.ngOnInit = function () {
    };
    TableRowComponent.prototype.getValue = function (column, value) {
        if (column.nested === undefined || column.nested) {
            return this.getNestedValue(column.name, value);
        }
        return value[column.name];
    };
    TableRowComponent.prototype.getNestedValue = function (name, value) {
        if (!(value instanceof Object) || !name) {
            return value;
        }
        if (name.indexOf('.') > -1) {
            var splitName = name.split(/\.(.+)/, 2);
            return this.getNestedValue(splitName[1], value[splitName[0]]);
        }
        else {
            return value[name];
        }
    };
    return TableRowComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TableRowComponent.prototype, "value", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__td_data_table_column__["TdDataTableColumn"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__td_data_table_column__["TdDataTableColumn"]) === "function" && _a || Object)
], TableRowComponent.prototype, "column", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Function)
], TableRowComponent.prototype, "format", void 0);
TableRowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-table-row',
        template: __webpack_require__(976),
        styles: [__webpack_require__(917)]
    }),
    __metadata("design:paramtypes", [])
], TableRowComponent);

var _a;
//# sourceMappingURL=table-row.component.js.map

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_customer_service__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__covalent_core__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerDetailComponent = (function () {
    function CustomerDetailComponent(dialogRef, _customerTransactionService, _loadingService) {
        this.dialogRef = dialogRef;
        this._customerTransactionService = _customerTransactionService;
        this._loadingService = _loadingService;
        this.transaction = { amount: null };
        this._loadingService.create({
            name: 'customer-detail',
            type: __WEBPACK_IMPORTED_MODULE_3__covalent_core__["f" /* LoadingType */].Circular,
            mode: __WEBPACK_IMPORTED_MODULE_3__covalent_core__["g" /* LoadingMode */].Indeterminate,
            color: 'warn',
        });
    }
    CustomerDetailComponent.prototype.ngOnInit = function () {
    };
    CustomerDetailComponent.prototype.close = function () {
        this.dialogRef.close(this.customer.amount_due);
    };
    CustomerDetailComponent.prototype.addAmount = function () {
        var _this = this;
        this.transaction.customer_id = this.customer.id;
        this._loadingService.register('customer-detail');
        this._customerTransactionService.create(this.transaction).subscribe(function (data) {
            _this.customer.transactions.push(data.data[0]);
            _this.customer.amount_due -= data.data[0].amount;
            _this._loadingService.resolve('customer-detail');
        }, function () {
            _this._loadingService.resolve('customer-detail');
        });
    };
    return CustomerDetailComponent;
}());
CustomerDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-customer-detail',
        template: __webpack_require__(984),
        styles: [__webpack_require__(925)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["J" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["J" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_customer_service__["a" /* CustomerTransactionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_customer_service__["a" /* CustomerTransactionsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__covalent_core__["h" /* TdLoadingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__covalent_core__["h" /* TdLoadingService */]) === "function" && _c || Object])
], CustomerDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=customer-detail.component.js.map

/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SideMenuComponent = (function () {
    function SideMenuComponent() {
    }
    SideMenuComponent.prototype.ngOnInit = function () {
    };
    return SideMenuComponent;
}());
SideMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-side-menu',
        template: __webpack_require__(991),
        styles: [__webpack_require__(932)]
    }),
    __metadata("design:paramtypes", [])
], SideMenuComponent);

//# sourceMappingURL=side-menu.component.js.map

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__covalent_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shop_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseStockTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BaseStockTableComponent = (function () {
    function BaseStockTableComponent(_loadingService, _shopService) {
        var _this = this;
        this._loadingService = _loadingService;
        this._shopService = _shopService;
        this.title = '';
        this.include = [];
        this.only = [];
        this.filters = {};
        this.shops = [];
        this.currentPage = 1;
        this.pageSize = 50;
        this.sortBy = 'id';
        this.sortOrder = __WEBPACK_IMPORTED_MODULE_1__covalent_core__["i" /* TdDataTableSortingOrder */].Descending;
        this.searchProduct = function (event) {
            _this.filters['__product_name__contains'] = event;
            _this.getData();
        };
        this.searchDistributor = function (event) {
            _this.filters['__distributor_name__contains'] = event;
            if (event !== undefined)
                _this.getData();
        };
        this._loadingService.create({
            name: 'tables',
            type: __WEBPACK_IMPORTED_MODULE_1__covalent_core__["f" /* LoadingType */].Circular,
            mode: __WEBPACK_IMPORTED_MODULE_1__covalent_core__["g" /* LoadingMode */].Indeterminate,
            color: 'warn',
        });
    }
    BaseStockTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shop = this._shopService.shop;
        this.shops = this._shopService.shops;
        this.getData();
        this.shopsSub = this._shopService.shops$.subscribe(function (data) {
            _this.shops = data;
            _this.getData();
        });
        this.shopSub = this._shopService.shop$.subscribe(function (data) {
            _this.shop = data;
            _this.getData();
        });
    };
    BaseStockTableComponent.prototype.ngOnDestroy = function () {
        this.shopsSub.unsubscribe();
        this.shopSub.unsubscribe();
    };
    BaseStockTableComponent.prototype.sort = function (name, sortOrder) {
        this.sortBy = name;
        if (sortOrder.toString() == 'ASC') {
            this.sortOrder = __WEBPACK_IMPORTED_MODULE_1__covalent_core__["i" /* TdDataTableSortingOrder */].Descending;
        }
        else {
            this.sortOrder = __WEBPACK_IMPORTED_MODULE_1__covalent_core__["i" /* TdDataTableSortingOrder */].Ascending;
        }
        this.getData();
    };
    BaseStockTableComponent.prototype.page = function (pagingEvent) {
        this.fromRow = pagingEvent.fromRow;
        this.currentPage = pagingEvent.page;
        this.pageSize = pagingEvent.pageSize;
        this.getData();
    };
    BaseStockTableComponent.prototype.getData = function () {
        var _this = this;
        this._loadingService.register('tables');
        var sortBy = this.sortBy;
        if (this.sortOrder.toString() == 'DESC') {
            sortBy = '-'.concat(sortBy);
        }
        var ids = this.shops.map(function (item) { return item.id; });
        if (this.shop && this.shop.id) {
            ids = [this.shop.id];
        }
        var filters = {
            __retail_shop_id__in: ids, __include: this.include.concat(['retail_shop']),
            __limit: this.pageSize, __page: this.currentPage, __order_by: sortBy, __name__contains: this.searchTerm
        };
        if (this.only.length) {
            filters['__only'] = this.only;
        }
        Object.keys(this.filters).forEach(function (k) {
            filters[k] = _this.filters[k];
        });
        this.filter().query(filters)
            .subscribe(function (resp) {
            _this.filteredData = resp.data;
            _this.filteredTotal = resp.total;
            _this._loadingService.resolve('tables');
        }, function () { return _this._loadingService.resolve('tables'); });
    };
    return BaseStockTableComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], BaseStockTableComponent.prototype, "columns", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], BaseStockTableComponent.prototype, "searchTerm", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], BaseStockTableComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Function)
], BaseStockTableComponent.prototype, "filter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], BaseStockTableComponent.prototype, "include", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], BaseStockTableComponent.prototype, "only", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BaseStockTableComponent.prototype, "filters", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Function)
], BaseStockTableComponent.prototype, "editRow", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Function)
], BaseStockTableComponent.prototype, "toggleRow", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Function)
], BaseStockTableComponent.prototype, "addRow", void 0);
BaseStockTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-base-stock-table',
        template: __webpack_require__(995),
        styles: [__webpack_require__(936)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_core__["h" /* TdLoadingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_core__["h" /* TdLoadingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_shop_service__["a" /* RetailShopsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shop_service__["a" /* RetailShopsService */]) === "function" && _b || Object])
], BaseStockTableComponent);

var _a, _b;
//# sourceMappingURL=base-stock-table.component.js.map

/***/ }),

/***/ 607:
/***/ (function(module, exports) {

//# sourceMappingURL=td-data-table-column.js.map

/***/ }),

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shop_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_users_service__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = (function () {
    function UserComponent(_router, _userService, _shopService) {
        this._router = _router;
        this._userService = _userService;
        this._shopService = _shopService;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shop = this._shopService.shop;
        this.shops = this._shopService.shops;
        this._shopService.shops$.subscribe(function (data) {
            _this.shops = data;
        });
        this._shopService.shop$.subscribe(function (data) {
            _this.shop = data;
        });
    };
    UserComponent.prototype.logout = function () {
        var _this = this;
        this._userService.logout().then(function () {
            _this._router.navigate(['/login']);
        });
    };
    UserComponent.prototype.openProfile = function () {
    };
    UserComponent.prototype.setShop = function (shop) {
        console.log(shop);
        if (!shop) {
            shop = {};
        }
        this._shopService.shop = shop;
        this.shop = shop;
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user',
        template: __webpack_require__(1002),
        styles: [__webpack_require__(943)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_shop_service__["a" /* RetailShopsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_shop_service__["a" /* RetailShopsService */]) === "function" && _c || Object])
], UserComponent);

var _a, _b, _c;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__covalent_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestInterceptor; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequestInterceptor = (function () {
    function RequestInterceptor(_dialogService, _auth) {
        this._dialogService = _dialogService;
        this._auth = _auth;
    }
    RequestInterceptor.prototype.onRequest = function (requestOptions) {
        if (this._auth.auth) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]();
            headers.append('authorization', this._auth.auth.authentication_token);
            requestOptions.headers = headers;
        }
        return requestOptions;
    };
    RequestInterceptor.prototype.onResponse = function (error) {
        return error;
    };
    ;
    RequestInterceptor.prototype.onResponseError = function (error) {
        var data;
        try {
            data = error.json();
        }
        catch (err) {
            data = {};
        }
        this.openAlert(data, error.status);
        return error;
    };
    ;
    RequestInterceptor.prototype.openAlert = function (message, status) {
        var title = null;
        switch (status) {
            case 0:
                title = null;
                break;
            case 400:
                title = 'Bad request';
                break;
            case 401:
                title = 'Unauthorized: you don\'t access';
                break;
            case 403:
                title = 'Forbidden: access not allowed';
                break;
            case 404:
                title = null;
                break;
            case 500:
                title = 'Contact Support';
                break;
            default:
                title = 'Contact Support';
                break;
        }
        if (title) {
            this._dialogService.openAlert({
                message: message['message'] || 'Unexpected error check network connection!!',
                disableClose: false,
                title: title,
                closeButton: 'Close',
            });
        }
    };
    return RequestInterceptor;
}());
RequestInterceptor = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__covalent_core__["j" /* TdDialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__covalent_core__["j" /* TdDialogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], RequestInterceptor);

var _a, _b;
//# sourceMappingURL=request.interceptor.js.map

/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoBackDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GoBackDirective = (function () {
    function GoBackDirective(_router) {
        this._router = _router;
    }
    GoBackDirective.prototype.onClick = function () {
        this._router.navigate(['dashboard/shops']);
    };
    return GoBackDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GoBackDirective.prototype, "onClick", null);
GoBackDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appGoBack]',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], GoBackDirective);

var _a;
//# sourceMappingURL=go-back.directive.js.map

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductSearchPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ProductTagPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ProductSaltPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProductBrandPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ProductDistributorPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return KeysPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return TruncatePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SearchPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SafeHtml; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductSearchPipe = (function () {
    function ProductSearchPipe() {
    }
    ProductSearchPipe.prototype.transform = function (value, args) {
        if (args) {
            var re_1 = new RegExp(args.toLowerCase());
            return value.filter(function (val) {
                if (val.name.toLowerCase().match(re_1)) {
                    return val;
                }
            });
        }
        return value;
    };
    return ProductSearchPipe;
}());
ProductSearchPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'productSearch'
    })
], ProductSearchPipe);

var ProductTagPipe = (function () {
    function ProductTagPipe() {
    }
    ProductTagPipe.prototype.transform = function (value, args) {
        if (args && value && args.length) {
            return value.filter(function (val) {
                var flag = true;
                var _loop_1 = function (tag) {
                    if (val.tags.findIndex(function (t) { return t.id == args[tag].id; }) > -1) {
                        flag = false;
                        return "break";
                    }
                };
                for (var tag in args) {
                    var state_1 = _loop_1(tag);
                    if (state_1 === "break")
                        break;
                }
                if (!flag) {
                    return val;
                }
            });
        }
        return value;
    };
    return ProductTagPipe;
}());
ProductTagPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'productTag'
    })
], ProductTagPipe);

var ProductSaltPipe = (function () {
    function ProductSaltPipe() {
    }
    ProductSaltPipe.prototype.transform = function (value, args) {
        if (args && value && args.length) {
            return value.filter(function (val) {
                var flag = true;
                for (var salt in args) {
                    if (val.salts.indexOf(args[salt]) < 0) {
                        flag = false;
                        return false;
                    }
                }
                if (flag) {
                    return val;
                }
            });
        }
        return value;
    };
    return ProductSaltPipe;
}());
ProductSaltPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'productSalt'
    })
], ProductSaltPipe);

var ProductBrandPipe = (function () {
    function ProductBrandPipe() {
    }
    ProductBrandPipe.prototype.transform = function (value, args) {
        if (args && value && args.length) {
            return value.filter(function (val) {
                if (args.indexOf(val.brand_id) > -1) {
                    return val;
                }
            });
        }
        return value;
    };
    return ProductBrandPipe;
}());
ProductBrandPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'productBrand'
    })
], ProductBrandPipe);

var ProductDistributorPipe = (function () {
    function ProductDistributorPipe() {
    }
    ProductDistributorPipe.prototype.transform = function (value, args) {
        // if (args && value && args.length) {
        //   return value.map((val) => {
        //
        //   });
        // }
        return value;
    };
    return ProductDistributorPipe;
}());
ProductDistributorPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'productDistributor'
    })
], ProductDistributorPipe);

var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    return KeysPipe;
}());
KeysPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'keys' })
], KeysPipe);

var TruncatePipe = (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, arg1, arg2) {
        var limit = arg1 || 10;
        var trail = '';
        if (arg2) {
            trail = '...';
        }
        return value.length > limit ? value.substring(0, limit) + trail : value;
    };
    return TruncatePipe;
}());
TruncatePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'truncate'
    })
], TruncatePipe);

var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (items, term) {
        if (term === undefined || term === null)
            return items;
        return items.filter(function (item) {
            return item.name.toLowerCase().includes(term.toLowerCase());
        });
    };
    return SearchPipe;
}());
SearchPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'filter',
        pure: false
    })
], SearchPipe);

var SafeHtml = (function () {
    function SafeHtml(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHtml.prototype.transform = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    return SafeHtml;
}());
SafeHtml = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'safeHtml' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]) === "function" && _a || Object])
], SafeHtml);

var _a;
//# sourceMappingURL=product-search.pipe.js.map

/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__covalent_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_api_config__ = __webpack_require__(68);
/* unused harmony export FeaturesService */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeaturesService = (function (_super) {
    __extends(FeaturesService, _super);
    function FeaturesService(_http) {
        var _this = _super.call(this, _http, {
            baseUrl: __WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* MOCK_API */],
            path: '/features',
        }) || this;
        _this._http = _http;
        return _this;
    }
    FeaturesService.prototype.staticQuery = function () {
        return this._http.get('data/features.json')
            .map(function (res) {
            return res.json();
        });
    };
    return FeaturesService;
}(__WEBPACK_IMPORTED_MODULE_1__covalent_http__["b" /* RESTService */]));
FeaturesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_http__["c" /* HttpInterceptorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_http__["c" /* HttpInterceptorService */]) === "function" && _a || Object])
], FeaturesService);

var _a;
//# sourceMappingURL=features.service.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MOCK_API; });
var MOCK_API = "https://coderin.me/api/v1/";
//# sourceMappingURL=api.config.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__covalent_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_api_config__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OrdersService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderItemsService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrdersService = (function (_super) {
    __extends(OrdersService, _super);
    function OrdersService(_http) {
        var _this = _super.call(this, _http, {
            baseUrl: __WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* MOCK_API */],
            path: '/order',
        }) || this;
        _this._http = _http;
        return _this;
    }
    return OrdersService;
}(__WEBPACK_IMPORTED_MODULE_1__covalent_http__["b" /* RESTService */]));
OrdersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_http__["c" /* HttpInterceptorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_http__["c" /* HttpInterceptorService */]) === "function" && _a || Object])
], OrdersService);

var OrderItemsService = (function (_super) {
    __extends(OrderItemsService, _super);
    function OrderItemsService(_http) {
        var _this = _super.call(this, _http, {
            baseUrl: __WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* MOCK_API */],
            path: '/item',
        }) || this;
        _this._http = _http;
        return _this;
    }
    return OrderItemsService;
}(__WEBPACK_IMPORTED_MODULE_1__covalent_http__["b" /* RESTService */]));
OrderItemsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__covalent_http__["c" /* HttpInterceptorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__covalent_http__["c" /* HttpInterceptorService */]) === "function" && _b || Object])
], OrderItemsService);

var _a, _b;
//# sourceMappingURL=orders.service.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__covalent_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_api_config__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shop_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__indexdb_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_service__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var UsersService = (function (_super) {
    __extends(UsersService, _super);
    function UsersService(_http, _authService, _indexDB, _shopService) {
        var _this = _super.call(this, _http, {
            baseUrl: __WEBPACK_IMPORTED_MODULE_3__config_api_config__["a" /* MOCK_API */],
            path: '/user',
        }) || this;
        _this._http = _http;
        _this._authService = _authService;
        _this._indexDB = _indexDB;
        _this._shopService = _shopService;
        _this._user = null;
        _this._user$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        _this.redirectUrl = null;
        _this._authService.auth$.subscribe(function (data) {
            if (data.id && data.authentication_token) {
                _this.get(data.id).subscribe(function (data) {
                    _this.user = data;
                }, function (err) {
                    if (err.type === 'error') {
                        _this._indexDB.users.get(data.id).then(function (user) {
                            _this.user = user;
                        });
                    }
                });
            }
        });
        return _this;
    }
    Object.defineProperty(UsersService.prototype, "user", {
        get: function () {
            return this._user;
        },
        set: function (data) {
            var _this = this;
            this._user = data;
            if (this.user.id && this.user.active) {
                this.updateUserDB();
            }
            this._shopService.query({
                __id__in: this.user.retail_shop_ids,
                __include: ['total_sales', 'printer_config', 'registration_details'],
                __limit: 100
            }).subscribe(function (data) {
                _this._shopService.shops = data.data;
            }, function (error) {
                if (error.type === 'error') {
                    _this._indexDB.shops.where('id').anyOf(_this.user.retail_shop_ids).toArray().then(function (data) {
                        _this._shopService.shops = data;
                        _this._indexDB.configs.toArray().then(function (config) {
                            config.forEach(function (value) {
                                if (value.is_selected) {
                                    _this._shopService.shop = data.find(function (shop) {
                                        return shop.id === value.shop_id;
                                    });
                                }
                            });
                        });
                    });
                }
            });
            this._user$.next(this.user);
        },
        enumerable: true,
        configurable: true
    });
    UsersService.prototype.updateUserDB = function () {
        var _this = this;
        this._indexDB.users.add(this.user).then(function () {
        }, function () {
            _this._indexDB.users.update(_this.user.id, _this.user).then();
        });
    };
    Object.defineProperty(UsersService.prototype, "user$", {
        get: function () {
            return this._user$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    UsersService.prototype.login = function (email, password) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_3__config_api_config__["a" /* MOCK_API */] + 'login/', { 'email': email, 'password': password }).map(function (res) { return res.json(); });
    };
    UsersService.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.user = {};
                return [2 /*return*/, this._authService.deleteAuthData()];
            });
        });
    };
    UsersService.prototype.isLoggedIn = function () {
        return this.user && this.user.active;
    };
    return UsersService;
}(__WEBPACK_IMPORTED_MODULE_2__covalent_http__["b" /* RESTService */]));
UsersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__covalent_http__["c" /* HttpInterceptorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__covalent_http__["c" /* HttpInterceptorService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__indexdb_service__["a" /* IndexDBServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__indexdb_service__["a" /* IndexDBServiceService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shop_service__["a" /* RetailShopsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shop_service__["a" /* RetailShopsService */]) === "function" && _d || Object])
], UsersService);

var _a, _b, _c, _d;
//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ 893:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "/* :host /deep/ lets shadowdom style child elements */\n:host /deep/ {\n  /**\n    * CSS Overrides for bug fixes\n    */\n  /**\n    * END CSS Overrides for bug fixes\n    */\n  /* Manage list custom styles */ }\n  :host /deep/ .md-sort-item /deep/ .md-list-item {\n    padding: 0; }\n  :host /deep/ .md-sort-icon {\n    font-size: 15px;\n    margin-right: 10px; }\n  :host /deep/ .md-sort-header {\n    padding: 10px; }\n    :host /deep/ .md-sort-header:hover {\n      background-color: #EEEEEE;\n      cursor: pointer; }\n  :host /deep/ .font-bold-500 {\n    font-weight: 500; }\n  :host /deep/ .font-bold-600 {\n    font-weight: 600; }\n  :host /deep/ md-sidenav {\n    background: #f4f4f4 !important;\n    width: 200px; }\n  :host /deep/ .small-button {\n    box-shadow: none;\n    background: transparent;\n    border: 0; }\n  :host /deep/ .pagination {\n    position: fixed;\n    bottom: 0;\n    z-index: 3;\n    font-size: 14px; }\n  :host /deep/ .md-fab-position-bottom-right {\n    bottom: 10px;\n    position: fixed; }\n  :host /deep/ .table {\n    margin-bottom: 75px;\n    overflow-x: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 894:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 895:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".Icon-Button [md-icon-button], .Icon-Button [md-mini-fab] {\n  height: 0;\n  width: 10px;\n  line-height: 0; }\n\n.product-click {\n  cursor: pointer; }\n\n.info-click {\n  cursor: pointer; }\n\n.bold {\n  font-weight: bold; }\n\n.search-margin {\n  margin-top: -20px;\n  padding: 12px; }\n\n.divider-margin {\n  margin-top: 12px; }\n\nmd-card > :first-child {\n  margin-top: 4px; }\n\n.bgc-whitesmoke {\n  background: whitesmoke; }\n\n.input-wrapper {\n  margin: 0; }\n  .input-wrapper .md-input-wrapper {\n    margin: 0; }\n\n.product-list {\n  line-height: 32px; }\n\n[md-icon-button] {\n  width: 32px;\n  height: 32px;\n  line-height: 32px; }\n\n.bgc-white-5 {\n  background: #e0e0e0; }\n\n.product-card {\n  max-height: 100px; }\n\n.out-of-stock {\n  opacity: 0.65;\n  color: #F44336; }\n\n.out-of-stock-text {\n  color: #F44336; }\n\n.ng2-pagination > li {\n  cursor: pointer; }\n\n.ng2-pagination > li > a {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 896:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 897:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".invoice-box {\n  max-width: 800px;\n  max-height: 400px;\n  text-align: center;\n  overflow-y: scroll;\n  border: 1px solid #eee;\n  font-size: 12px;\n  line-height: 20px;\n  font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;\n  color: #555; }\n\n.invoice-box table {\n  width: 100%;\n  line-height: inherit;\n  text-align: left; }\n\n.invoice-box table td {\n  padding-left: 5px;\n  padding-right: 5px;\n  vertical-align: top; }\n\n.invoice-box table tr.top table td {\n  padding-bottom: 0; }\n\n.invoice-box table tr.top table td.title {\n  font-size: 45px;\n  line-height: 45px;\n  color: #333; }\n\n.invoice-box table tr.information table td {\n  padding-bottom: 40px; }\n\n.invoice-box table tr.heading td {\n  background: #eee;\n  border-bottom: 1px solid #ddd;\n  font-weight: bold; }\n\n.invoice-box table tr.details td {\n  padding-bottom: 20px; }\n\n.invoice-box table tr.item td {\n  border-bottom: 1px solid #eee; }\n\n.invoice-box table tr.item.last td {\n  border-bottom: none; }\n\n.invoice-box table tr.total td:nth-child(2) {\n  border-top: 2px solid #eee;\n  font-weight: bold; }\n\n.invoice-box table tr.total td:nth-child(3) {\n  border-top: 2px solid #eee;\n  font-weight: bold;\n  margin-bottom: 10px; }\n\n.invoice-box table tr.discount {\n  color: red;\n  font-weight: bold; }\n\n.bottom {\n  margin-top: 20px; }\n\n.ng2-dropdown-menu {\n  z-index: 9999; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 898:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 899:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 900:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".md-action {\n  padding: 0;\n  margin: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 901:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".md-fab-position-bottom-right {\n  bottom: 25px;\n  position: fixed; }\n\n.cart-card {\n  cursor: pointer; }\n\n.button-size {\n  height: 100px;\n  width: 100px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 902:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".md-fab-bottom-right {\n  position: fixed;\n  bottom: 10px;\n  right: 10px; }\n\n.logo {\n  height: 50px !important; }\n\n.pagination {\n  position: fixed;\n  bottom: 0;\n  z-index: 3;\n  text-align: right;\n  right: 30px;\n  font-size: 14px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 903:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 904:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 905:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".md-fab-position-bottom-right {\n  position: fixed;\n  bottom: 10px; }\n\n:host /deep/ .tick text {\n  font-size: 24px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 906:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 907:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 908:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".pagination {\n  position: fixed;\n  bottom: 0;\n  z-index: 3;\n  font-size: 14px; }\n\n.md-fab-position-bottom-right {\n  bottom: 10px;\n  position: fixed; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 909:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 910:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".pagination {\n  position: fixed;\n  bottom: 0;\n  z-index: 3;\n  font-size: 14px; }\n\n.md-fab-position-bottom-right {\n  bottom: 10px;\n  position: fixed; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 911:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 912:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 913:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 914:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".pagination {\n  position: fixed;\n  bottom: 0;\n  z-index: 3;\n  font-size: 14px; }\n\n.md-fab-position-bottom-right {\n  bottom: 10px;\n  position: fixed; }\n\n.edit-button {\n  right: 100px; }\n\n.close-button {\n  position: fixed;\n  z-index: 25;\n  top: 80px;\n  right: 25px; }\n\n.small-button {\n  box-shadow: none;\n  background: transparent;\n  border: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 915:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 916:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".pagination {\n  position: fixed;\n  bottom: 0;\n  z-index: 3;\n  font-size: 14px; }\n\n.md-fab-position-bottom-right {\n  bottom: 10px;\n  position: fixed; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 917:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 918:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 919:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".pagination {\n  position: fixed;\n  bottom: 0;\n  z-index: 3;\n  font-size: 14px; }\n\n.md-fab-position-bottom-right {\n  bottom: 10px;\n  position: fixed; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 920:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 921:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".pagination {\n  position: fixed;\n  bottom: 0;\n  z-index: 3;\n  font-size: 14px; }\n\n.md-fab-position-bottom-right {\n  bottom: 10px;\n  position: fixed; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 922:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ":host /deep/ .md-input-prefix {\n  width: 44px;\n  text-align: center; }\n\n:host /deep/ md-divider {\n  display: block;\n  border-top-style: solid;\n  border-top-width: 1px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 923:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 924:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 925:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 926:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 927:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 928:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 929:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 930:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 931:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 932:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "h4 {\n  border: none;\n  letter-spacing: 1px;\n  line-height: 24px;\n  text-transform: uppercase;\n  font-weight: 600;\n  font-size: 15px;\n  margin: 0;\n  padding: 0 15px;\n  color: #fff; }\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0; }\n  ul li {\n    border-color: rgba(0, 0, 0, 0.06);\n    border-bottom: 1px solid rgba(0, 0, 0, 0.06);\n    margin: 0;\n    padding: 0;\n    background-color: white;\n    color: rgba(0, 0, 0, 0.54); }\n    ul li a {\n      box-sizing: border-box;\n      display: block;\n      font-size: 13px;\n      font-weight: 500;\n      line-height: 42px;\n      cursor: pointer;\n      text-decoration: none;\n      -webkit-transition: all .3s;\n      transition: all .3s;\n      padding: 0 16px;\n      position: relative; }\n\n.bottom-margin {\n  margin-bottom: 100px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 933:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 934:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 935:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 936:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 937:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 938:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 939:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 940:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 941:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 942:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 943:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 952:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 953:
/***/ (function(module, exports) {

module.exports = "<button md-icon-button=\"\" md-raised-button=\"\" appGoBack=\"\">\n  <md-icon color=\"accent\">arrow_back</md-icon>\n</button>\n"

/***/ }),

/***/ 954:
/***/ (function(module, exports) {

module.exports = "<td-layout-nav logo=\"assets:logo\" class=\"bgc-white-5\">\n  <div td-toolbar-content fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex>\n    <span hide-xs>Postica</span>\n    <span fxFlex></span>\n    <app-user></app-user>\n  </div>\n\n\n  <div td-toolbar-button fxLayout=\"row\" class=\"bgc-white-4 md-shadow-bottom-z-1 push-sm\" fxLayoutWrap>\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxFlex>\n      <app-back-button></app-back-button>\n    </div>\n\n\n    <button md-button color=\"primary\" fxFlex.gt-xs class=\"font-bold-600\" (click)=\"filterBrands()\">Brands</button>\n\n    <button md-button color=\"primary\" fxFlex.gt-xs class=\"font-bold-600\" (click)=\"filterSalts()\">Salts</button>\n\n    <span fxFlex hide-xs></span>\n    <div fxFlex.gt-xs=\"30\" fxFlex.xs=\"70\">\n      <md-input-container>\n        <input mdInput type=\"text\" (keyup.enter)=\"searchProducts()\" placeholder=\"Search Here\"\n               name=\"search\" [(ngModel)]=\"searchInputTerm\"/>\n      </md-input-container>\n\n\n    </div>\n    <span fxFlex hide-xs></span>\n    <button md-button class=\"font-bold-500\" fxFlex.xs=\"40\" hide-gt-xs\n            fxLayout-margin (click)=\"checkOut()\">\n        <span class=\"tc-accent md-title font-bold-500\">\n        {{cart?.total - cart?.auto_discount ||0 | currency:'INR':true:'1.2-2'}}/-\n        </span>\n    </button>\n    <div class fxLayout=\"row\" fxLayoutAlign=\"end\" fxFlex.gt-xs=\"20\" fxFlex.xs=\"60\">\n      <button md-raised-button color=\"accent\" class=\"font-bold-600\" fxFlex=\"50\" style=\"border-radius: 0\"\n              fxLayout-margin (click)=\"quickCheckOut()\" [disabled]=\"!cart?.items.length\">\n        <md-icon class=\"md-24\">add_shopping_cart</md-icon>\n      </button>\n      <button md-raised-button color=\"primary\" class=\"font-bold-600\" fxFlex=\"50\"\n              style=\"border-radius: 0\" [disabled]=\"!cart?.items.length\"\n              fxLayout-margin (click)=\"checkOut()\">\n        <md-icon class=\"md-24\">account_box</md-icon>\n      </button>\n    </div>\n\n\n  </div>\n\n\n  <div fxLayout=\"row\" fxLayoutWrap class=\"push-sm\" fxFlex>\n    <div fxLayout=\"row\" fxLayoutWrap fxFlex fxLayoutAlign=\"start\">\n\n      <template let-product ngFor let-last\n                [ngForOf]=\"products\">\n        <div class=\"md-content product-card bgc-white-4 push-right-sm push-bottom-sm md-shadow-bottom-z-1\"\n             fxLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"center start\"\n             [ngClass]=\"{'out-of-stock': product.available_stock<1}\" *ngIf=\"!product.is_disabled\"\n             fxFlex=\"20\" fxFlex.gt-md=\"15\">\n          <div fxFlex=\"100\" fxLayout=\"row\">\n            <div fxFlex=\"90\" fxLayout=\"column\" class=\"pad-xs product-click text-center\"\n                 (click)=\"addProduct(product, product.available_stocks,\n                  product.default_quantity?product.default_quantity:product.is_loose?0.1:1)\"\n                 fxLayoutAlign=\"center center\">\n              <span class=\"tc-primary md-caption font-bold-500\" [md-tooltip]=\"product.name\">\n              {{product.name | truncate: 30: true}}\n              </span>\n            </div>\n            <span (click)=\"showInfo(product)\" class=\"info-click pad-top-xs pad-right-xs\"><md-icon\n              class=\"md-18 tc-accent\">info_outline</md-icon>\n            </span>\n          </div>\n          <span class=\"md-caption tc-grey-600 pad-bottom-xs\">\n            ({{ product.available_stock<1?'Out of Stock':product.brand?.name}})\n          </span>\n\n        </div>\n      </template>\n\n      <div fxFlex=\"100\" fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\" tc-grey-700\">\n        <td-paging-bar #pagingBar pageSizeAllText=\"allText\" [firstLast]=\"true\" [pageSizeAll]=\"true\"\n                       [pageSizes]=\"[12, 24, 36, 48, 54, 60, 66]\"\n                       [initialPage]=\"1\" [pageSize]=\"itemsPerPage\" [total]=\"totalProducts\" (change)=\"change($event)\">\n          <span td-paging-bar-label hide-xs>Row per page:</span>\n          {{pagingBar.range}} <span hide-xs>of {{pagingBar.total}}</span>\n        </td-paging-bar>\n      </div>\n    </div>\n    <div fxLayout=\"column\" fxFlex=\"20\" fxFlex.gt-lg=\"25\" fxFlex.xl=\"20\" fxFlex.md=\"30\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"50\" fxFlex.xs=\"100\">\n      <div class=\"md-content bgc-white-4 \" md-scroll-y fxFlex.grow>\n        <md-list>\n          <template let-item ngFor let-last [ngForOf]=\"cart?.items\">\n            <div fxLayout=\"row\" fxLayoutWrap class=\"push-sm product-list\">\n              <span md-line fxFlex=\"55\" class=\"tc-grey-700 md-body-2\"\n                    style=\"word-break: break-all\">\n                {{item.name |truncate: 20}}\n              </span>\n              <div fxLayout=\"row\" fxLayoutWrap fxFlex=\"45\">\n                <button md-icon-button class=\"bgc-white-1 pull-top-sm \" fxFlex=\"20\"\n                        (click)=\"updateProductQuantity(item.product_id, item.stock_id, item.quantity+item.default_quantity)\">\n                  <md-icon class=\"bgc-accent md-24\" color=\"accent\">add_circle_outline</md-icon>\n                </button>\n                <span fxFlex></span>\n                <md-input-container class=\"md-body-2 tc-grey-700 pull-top\" fxFlex=\"50\">\n                  <input mdInput type=\"number\" ([value])=\"item.quantity\" [(ngModel)]=\"item.quantity\"\n                         class=\"text-center\" [step]=\"item.default_quantity\"\n                         (change)=\"updateProductQuantity(item.product_id, item.stock_id, item.quantity)\"/>\n                </md-input-container>\n                <span fxFlex></span>\n                <button md-icon-button class=\"bgc-white-1 pull-top-sm\" fxFlex=\"20\"\n                        (click)=\"updateProductQuantity(item.product_id, item.stock_id, item.quantity-item.default_quantity)\">\n                  <md-icon class=\"bgc-accent md-24\" color=\"accent\">remove_circle_outline</md-icon>\n                </button>\n              </div>\n            </div>\n            <div fxLayout=\"row\" fxLayoutWrap class=\"push-bottom-sm bgc-blue-100\">\n              <del fxFlex class=\"md-body-1 tc-grey-600\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                {{item.total_price | currency:'INR':true:'1.2-2'}}/-\n              </del>\n              <span fxFlex class=\"md-body-1 tc-accent\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n              {{item.discounted_total_price | currency:'INR':true:'1.2-2'}}/-\n              </span>\n              <span class=\"push-sm\">\n                <button md-icon-button class=\"bgc-white-1\" md-tooltip=\"discount\"\n                        (click)=\"discountItem(item.product_id, item.stock_id, item.discount)\">\n                <md-icon class=\"tc-warn\">money_off</md-icon>\n              </button>\n              </span>\n              <span class=\"push-sm\">\n              <button md-icon-button class=\"bgc-white-1 push-sm\" md-tooltip=\"remove\"\n                      (click)=\"removeProduct(item.product_id, item.stock_id)\">\n                <md-icon class=\"tc-warn\">close</md-icon>\n              </button>\n              </span>\n            </div>\n          </template>\n        </md-list>\n      </div>\n      <div class=\"bgc-white-4 md-content pad-sm tc-grey-700 md-caption font-bold-500\" fxFlex=\"40\" fxFlex.gt-lg=\"35\"\n           md-scroll-y fxLayout=\"row\"\n           fxLayoutWrap>\n        <div fxFlex=\"100\" fxLayoutWrap fxLayout=\"row\" class=\"font-bold-500\">\n\n          <span>Sub Total</span>\n          <span fxFlex></span>\n          <span>{{cart?.sub_total | currency:'INR':true:'1.2-2'}}</span>\n        </div>\n        <template let-entry ngFor [ngForOf]=\"cart?.taxes | keys\">\n          <div fxFlex=\"100\" fxLayoutWrap fxLayout=\"row\" *ngIf=\"entry.key!=='total'\">\n            <span>{{entry.key}}</span>\n            <span fxFlex></span>\n            <span>{{entry.value | currency:'INR':true:'1.2-2'}}</span>\n          </div>\n        </template>\n\n        <div fxFlex=\"100\" fxLayoutWrap fxLayout=\"row\">\n          <span>Discount</span>\n          <span fxFlex></span>\n          <span>{{cart?.auto_discount | currency:'INR':true:'1.2-2'}}</span>\n        </div>\n        <div fxFlex=\"100\" fxLayoutWrap fxLayout=\"row\" class=\"font-bold-500\">\n          <label>Add. %</label>\n          <span fxFlex></span>\n          <input mdInput type=\"number\" fxFlex=\"30\" min=\"0\" max=\"100\" ([value])=\"cart.discounts[0].value\"\n                 [(ngModel)]=\"cart?.discounts[0].value\" class=\"text-right\"\n                 (change)=\"updateOrderDiscount(cart.discounts[0].value)\"/>\n        </div>\n\n        <div fxFlex=\"100\" fxLayoutWrap fxLayout=\"row\" class=\"md-subhead font-bold-500 push-top-sm\">\n          <md-divider class=\"pad-xs\" fxFlex=\"100\"></md-divider>\n          <span>Total</span>\n          <span fxFlex></span>\n          <span>{{cart?.total | currency:'INR':true:'1.2-2'}}</span>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</td-layout-nav>\n\n\n\n\n"

/***/ }),

/***/ 955:
/***/ (function(module, exports) {

module.exports = "<div >\n\n    <md-card-title class=\"font-bold-500\">Brands</md-card-title>\n    <md-divider></md-divider>\n    <md-card-content class=\"md-content filter-card-height\">\n      <div fxLayout=\"\" fxLayoutWrap=\"\" fxLayoutAlign=\"start\">\n        <td-search-box backIcon=\"arrow_back\" placeholder=\"Search here\" [showUnderline]=\"true\" [debounce]=\"500\"\n                       [alwaysVisible]=\"true\" fxFlex=\"100\"\n                       (search)=\"getBrands($event);term = $event\" (clear)=\"getBrands();term = null\">\n        </td-search-box>\n      </div>\n      <div fxLayout=\"row\" fxLayoutWrap=\"\">\n        <template let-brand ngFor [ngForOf]=\"brands\">\n\n          <label fxLayout=\"row\" fxFlex.xs=\"33\" fxFlex.gt-sm=\"25\" fxFlex.gt-lg=\"20\">\n            <input class=\"push-sm\" [checked]=\"checkBrand(brand.id)\" type=\"checkbox\"\n                   (change)=\"toggleBrand(brand.id)\"/>\n            <span class=\"tc-grey-800 md-caption push-top-sm\">{{brand.name |truncate:15}}</span>\n          </label>\n        </template>\n      </div>\n      <div  fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\" tc-grey-700\">\n        <td-paging-bar #pagingBrand pageSizeAllText=\"allText\" [firstLast]=\"true\" [pageSizeAll]=\"true\"\n                       [pageSizes]=\"[12, 24, 36, 48, 54, 60, 66]\"\n                       [initialPage]=\"1\" [pageSize]=\"brandsPerPage\" [total]=\"totalBrands\" (change)=\"getBrands(term, $event)\">\n          <span td-paging-bar-label hide-xs>Row per page:</span>\n          {{pagingBrand.range}} <span hide-xs>of {{pagingBrand.total}}</span>\n        </td-paging-bar>\n      </div>\n    </md-card-content>\n    <md-divider></md-divider>\n    <md-card-actions fxLayout=\"row\" fxLayoutAlign=\"end center\">\n      <button md-raised-button=\"\" color=\"warn\" (click)=\"clearFilter()\">Clear</button>\n      <button md-raised-button=\"\" color=\"accent\" (click)=\"close()\">Close</button>\n    </md-card-actions>\n\n</div>\n"

/***/ }),

/***/ 956:
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutWrap=\"\">\n  <md-card-title class=\"tc-primary\" fxLayout=\"row\" fxLayoutWrap=\"\">\n    Checkout\n    <span fxFlex></span>\n    <button md-icon-button=\"\" (click)=\"close()\" color=\"accent\">\n      <md-icon>close</md-icon>\n    </button>\n  </md-card-title>\n\n  <md-card-content fxLayout=\"row\" fxLayoutWrap=\"\" fxLayoutAlign=\"start\">\n\n    <div fxHide.gt-xs=\"\" fxLayout=\"row\" fxLayoutWrap=\"\" class=\"pad-xs\">\n\n      <input mdInput type=\"number\" [(ngModel)]=\"cart.amount_paid\" fxFlex=\"100\" placeholder=\"Amount\"/>\n    </div>\n\n    <div fxHide-xs=\"\" fxFlex.gt-xs=\"45\" fxFlex.gt-lg=\"33\" fxLayout=\"row\" fxLayoutWrap=\"\" class=\"pad-xs\">\n\n      <md-card-subtitle class=\"tc-blue-700\">Transaction Detail</md-card-subtitle>\n\n      <input mdInput type=\"number\" [(ngModel)]=\"cart.amount_paid\" fxFlex=\"100\" placeholder=\"Amount\"/>\n      <ng-template let-digit ngFor [ngForOf]=\"digitsArray\">\n        <div fxFlex=\"33\">\n          <button md-icon-button=\"\" class=\"bgc-blue-50\" (click)=\"enterAmount(digit)\">{{digit}}\n          </button>\n        </div>\n      </ng-template>\n      <div fxFlex=\"33\">\n        <button md-icon-button=\"\" class=\"bgc-blue-50 bold\" (click)=\"enterAmount('.')\">.</button>\n      </div>\n      <div fxFlex=\"33\">\n        <button md-icon-button=\"\" class=\"bgc-blue-50 bold\" (click)=\"enterAmount('0')\">\n        </button>\n      </div>\n      <div fxFlex=\"33\">\n        <button md-icon-button=\"\" class=\"bgc-blue-50\" (click)=\"clearAmount()\">\n          <md-icon>keyboard_backspace</md-icon>\n        </button>\n      </div>\n\n\n      <div fxFlex=\"100\" class=\"pad\"></div>\n      <div fxLayout=\"row\" fxLayoutWrap=\"\" fxLayoutAlign=\"center center\">\n        <!--<ng-template let-denomination ngFor [ngForOf]=\"denominationArray | keys\" class=\"push-sm\">-->\n          <!--<button md-button=\"\" class=\"bgc-grey-100\" fxFlex=\"30\" fxLayout-padding=\"\"-->\n                  <!--(click)=\"denomination.value=1+denomination.value\" fxLayoutMargin=\"\">-->\n            <!--{{denomination.key}}-->\n            <!--<small>&nbsp;({{denomination.value}})</small>-->\n          <!--</button>-->\n        <!--</ng-template>-->\n        <!--<button md-button=\"\" class=\"bgc-grey-100\" fxFlex=\"33\" fxLayoutPadding=\"\" fxLayoutMargin=\"\"-->\n                <!--(click)=\"clearDenomination()\">-->\n          <!--<md-icon>keyboard_backspace</md-icon>-->\n        <!--</button>-->\n      </div>\n\n    </div>\n\n    <div fxFlex.xs=\"100\" fxFlex.gt-xs=\"45\" fxFlex.gt-lg=\"66\" fxLayout=\"row\" fxLayoutWrap=\"\" class=\"pad-xs\">\n      <md-card-subtitle fxHide-xs class=\"tc-blue-700\" fxFlex=\"100\">Customer Information</md-card-subtitle>\n      <div fxLayout=\"row\" class=\"\" fxFlex=\"100\" fxLayoutAlign=\"center start\">\n        <tag-input [(ngModel)]=\"customers\" name=\"customer\" placeholder=\"Search Customer...\" (onRemove)=\"addCustomer()\"\n                   (onAdd)=\"addCustomer($event)\" fxFlex.xs=\"90\" fxFlex=\"65\"\n                   [secondaryPlaceholder]=\"'Search Customers...'\" [onlyFromAutocomplete]=\"true\" [maxItems]=\"1\">\n          <tag-input-dropdown [autocompleteObservable]='getCustomers' [appendToBody]=\"false\" [identifyBy]=\"'id'\"\n                              [displayBy]=\"'name'\">\n            <ng-template let-item=\"item\" let-index=\"index\">\n              {{ item.name }}&nbsp;<{{item.mobile_number}}>\n            </ng-template>\n          </tag-input-dropdown>\n        </tag-input>\n      </div>\n\n      <form fxFlex=\"100\" fxLayout=\"column\" fxLayout-fill=\"\">\n        <div fxLayout=\"row\" fxLayoutMargin>\n          <md-input-container fxFlex>\n            <input mdInput placeholder=\"Name\" name=\"customer_name\" [(ngModel)]=\"customer.name\">\n          </md-input-container>\n        </div>\n        <div fxLayout=\"row\" fxLayoutMargin=\"\">\n          <md-input-container fxFlex>\n            <input mdInput placeholder=\"Number\" type=\"number\" min=\"0\" name=\"mobile_number\" [(ngModel)]=\"customer.mobile_number\">\n          </md-input-container>\n        </div>\n        <md-card-actions fxLayoutAlign=\"end end\" fxLayout=\"row\" fxLayoutWrap=\"\" style=\"margin: 0\">\n          <button md-raised-button=\"\" fxFlex.xs=\"\" fxFlex.gt-xs=\"25\" (click)=\"clearCustomer()\" color=\"warn\">Clear</button>\n          <button md-raised-button=\"\" fxFlex.xs=\"\" fxFlex.gt-xs=\"25\" [disabled]=\"cart.customer_id\"\n                  (click)=\"saveCustomer()\" color=\"primary\">Save</button>\n        </md-card-actions>\n\n        <span [hidden]=\"addresses.length===0\">\n          <div fxLayout=\"row\" fxLayoutMargin >\n              <md-select fxFlex=\"100\" [(ngModel)]=\"cart.address_id\" name=\"address\" placeholder=\"Select Address\" >\n                <md-option [value]=\"null\">Select Address</md-option>\n                <md-option *ngFor=\"let address of addresses\"\n                           (click)=\"saveCart()\" [value]=\"address.id\">{{address.name}}</md-option>\n              </md-select>\n          </div>\n        </span>\n        <div fxLayout=\"row\" fxLayoutMargin=\"\" *ngIf=\"addresses.length\" fxLayoutAlign=\"center center\">\n          <small>or</small>\n        </div>\n        <div fxLayout=\"row\" fxLayoutMargin=\"\" >\n          <md-input-container fxFlex>\n\n            <input mdInput placeholder=\"New address\" type=\"text\" name=\"address\" [(value)]=\"address.name\"\n                   [(ngModel)]=\"address.name\"/>\n          </md-input-container>\n        </div>\n        <md-card-actions fxLayoutAlign=\"end end\" fxLayout=\"row\" class=\"\" fxLayoutWrap=\"\" style=\"margin: 0\">\n          <button md-raised-button=\"\" fxFlex.xs=\"\" fxFlex.gt-xs=\"25\" (click)=\"clearAddress()\" color=\"warn\">Clear</button>\n          <button md-raised-button=\"\" fxFlex.xs=\"\" fxFlex.gt-xs=\"25\" [disabled]=\"!cart.customer_id || cart.address_id\"\n                  (click)=\"addAddress()\" color=\"primary\">Save</button>\n        </md-card-actions>\n\n        <div fxLayout=\"row\" fxLayoutMargin *ngIf=\"false\">\n          <md-input-container fxFlex>\n            <input mdInput placeholder=\"City\">\n          </md-input-container>\n          <md-input-container fxFlex>\n            <input mdInput placeholder=\"Locality\">\n          </md-input-container>\n          <md-input-container fxFlex>\n            <input mdInput maxlength=\"5\" placeholder=\"Postal Code\">\n          </md-input-container>\n        </div>\n      </form>\n    </div>\n    <div >\n      <div [hidden]=\"true\"  [innerHTML]=\"shop?.printer_config.bill_template | safeHtml\"></div>\n    </div>\n    <div >\n      <div [hidden]=\"true\"  [innerHTML]=\"shop?.printer_config.receipt_template | safeHtml\"></div>\n    </div>\n\n\n  </md-card-content>\n\n  <span fxFlex></span>\n  <md-divider class=\"pad-md\" fxFlex fxFLexLayoutWrap></md-divider>\n  <md-card-actions fxLayoutAlign=\"end end\" fxLayout=\"row\" fxLayoutWrap=\"\" fxFlex style=\"padding: 0;margin: 0\">\n    <button md-raised-button=\"\" *ngIf=\"shop?.printer_config.have_bill_printer\" (click)=\"printBill()\" color=\"accent\">Print Bill</button>\n    <button md-raised-button=\"\" (click)=\"printReceipt()\" *ngIf=\"shop?.printer_config.have_receipt_printer\"\n            color=\"accent\">Print Receipt</button>\n    <button md-raised-button=\"\" (click)=\"checkOut()\" color=\"primary\">Checkout</button>\n  </md-card-actions>\n\n</div>\n"

/***/ }),

/***/ 957:
/***/ (function(module, exports) {

module.exports = "\n<div layout=\"column\">\n  <div layout=\"row\" layout-align=\"end end\" flex=\"100\">\n    <button md-icon-button=\"\" (click)=\"close()\" color=\"accent\">\n      <md-icon>close</md-icon>\n    </button>\n\n  </div>\n  <div layout=\"row\">\n    <form flex=\"100\" layout=\"row\" layout-wrap=\"\" layout-align=\"center center\">\n      <div layout=\"row\" layout-margin>\n        <md-input-container flex>\n          <input mdInput  placeholder=\"Discount Percentage\" name=\"0\" flex=\"100\"\n                 type=\"\" min=\"0\" max=\"100\" [(ngModel)]=\"discount\" value=\"0\" />\n        </md-input-container>\n      </div>\n      <div layout=\"row\" >\n        <button md-raised-button=\"\" color=\"accent\" (click)=\"close()\">Apply</button>\n\n      </div>\n    </form>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 958:
/***/ (function(module, exports) {

module.exports = "<div class=\"\" fxLayout=\"column\">\n  <md-card-title class=\"tc-blue-700\" fxLayout=\"row\" fxLayoutWrap=\"\" fxFlex=\"100\">\n    <span fxLayout-align=\"center center\" fxLayout=\"row\">\n      {{product.name}}\n    </span>\n    <span fxFlex=\"\"></span>\n    <button (click)=\"close()\" md-icon-button=\"\">\n      <md-icon class=\"tc-accent\">close</md-icon>\n    </button>\n  </md-card-title>\n  <md-card-subtitle>{{product.mrp ||0 | currency:'INR':true:'1.2-2'}}</md-card-subtitle>\n  <md-divider></md-divider>\n  <md-card-content>\n    <div fxLayout=\"row\" fxLayoutWrap=\"\">\n      <h4 *ngIf=\"product.available_stocks && product.available_stocks.length\">Stocks</h4>\n      <div fxFlex=\"100\" fxLayout=\"row\" fxLayoutWrap=\"\" *ngIf=\"product.available_stocks && product.available_stocks.length\">\n        <md-list *ngFor=\"let stock of product.available_stocks\" fxFlex=\"\">\n          <md-list-item>\n            <md-icon class=\"tc-blue-500\" md-list-avatar=\"\">local_grocery_store</md-icon>\n            <span md-line>Stock:&nbsp;{{stock.units_purchased-stock.units_sold}}</span>\n            <p md-line>Purchase Date:&nbsp;{{stock.purchase_date}}</p>\n            <p md-line>Expiry Date:&nbsp;{{stock.expiry_date}}</p>\n            <p md-line>Price:&nbsp;{{stock.selling_amount ||0 | currency:'INR':true:'1.2-2'}}</p>\n          </md-list-item>\n\n        </md-list>\n      </div>\n      <h4 *ngIf=\"product.salts && product.salts.length\">Salts</h4>\n      <div fxFlex=\"100\" fxLayout=\"row\" fxLayoutWrap=\"\" *ngIf=\"product.salts && product.salts.length\">\n        <md-list *ngFor=\"let salt of product.salts\" fxFlex=\"\">\n          <md-list-item>\n            <md-icon class=\"tc-blue-500\" md-list-avatar=\"\">healing</md-icon>\n            <span md-line>{{salt.name}}</span>\n            <p md-line>Name</p>\n          </md-list-item>\n\n        </md-list>\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutWrap=\"\" class=\"info-dialog\">\n        <md-list *ngIf=\"product.description\" fxFlex=\"50\">\n          <h4>Description</h4>\n          <ng-template let-entry ngFor [ngForOf]=\"product.description\">\n            <md-list-item>\n              <md-icon class=\"tc-orange-A400\" md-list-avatar=\"\">description</md-icon>\n              <span class=\"md-body-1\" md-line>{{entry.value}}</span>\n              <p md-line=\"\">{{entry.key}}</p>\n            </md-list-item>\n          </ng-template>\n\n        </md-list>\n        <md-list *ngIf=\"product.similar_products && product.similar_products.length\" fxFlex=\"50\">\n          <h4>Similar Products</h4>\n          <template let-item ngFor [ngForOf]=\"products\">\n            <md-list-item>\n              <md-icon class=\"tc-orange-A400\" md-list-avatar=\"\">label_outline</md-icon>\n              <span class=\"md-body-1\" md-line>{{item.name}}</span>\n              <p md-line=\"\">Price:&nbsp;{{item.mrp | currency:'INR':true:'1.2-2'}}&nbsp;<span fxFlex></span>&nbsp;Stocks:&nbsp;{{item.available_stock||0}}\n              </p>\n              <p md-line=\"\">\n                <template let-salt ngFor [ngForOf]=\"item.salts\"><span>{{salt.name}}&nbsp;</span></template>\n              </p>\n            </md-list-item>\n          </template>\n\n        </md-list>\n      </div>\n\n    </div>\n  </md-card-content>\n</div>\n"

/***/ }),

/***/ 959:
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n    <md-card-title class=\"font-bold-500\">Salts</md-card-title>\n\n    <md-card-content fxFlex=\"80\">\n      <div fxLayout=\"\" fxLayoutWrap=\"\" fxLayoutAlign=\"start\">\n        <td-search-box backIcon=\"arrow_back\" placeholder=\"Search here\" [showUnderline]=\"true\" [debounce]=\"500\"\n                       [alwaysVisible]=\"true\" fxFlex=\"100\"\n                       (search)=\"getSalts($event);term=$event\" (clear)=\"getSalts()\">\n        </td-search-box>\n      </div>\n      <div fxLayout=\"row\" fxLayoutWrap=\"\">\n        <template let-salt ngFor [ngForOf]=\"salts | filter: term\">\n          <label fxLayout=\"row\" fxFlex.xs=\"50\" fxFlex.gt-sm=\"20\" fxFlex.gt-lg=\"15\">\n            <input class=\"push-sm\" [checked]=\"checkSalt(salt.id)\" type=\"checkbox\"\n                   (change)=\"toggleSalt(salt.id)\"/>\n            <span class=\"tc-grey-800 md-caption push-top-sm\">{{salt.name |truncate:15}}</span>\n          </label>\n        </template>\n      </div>\n      <div  fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\" tc-grey-700\">\n        <td-paging-bar #pagingSalt pageSizeAllText=\"allText\" [firstLast]=\"true\" [pageSizeAll]=\"true\"\n                       [pageSizes]=\"[12, 24, 36, 48, 54, 60, 66]\"\n                       [initialPage]=\"1\" [pageSize]=\"saltsPerPage\" [total]=\"totalSalts\" (change)=\"getSalts(term, $event)\">\n          <span td-paging-bar-label hide-xs>Row per page:</span>\n          {{pagingSalt.range}} <span hide-xs>of {{pagingSalt.total}}</span>\n        </td-paging-bar>\n      </div>\n    </md-card-content>\n\n    <md-card-actions fxLayout=\"row\" fxLayoutAlign=\"end end\" class=\"md-action\">\n      <button md-raised-button=\"\" color=\"warn\" (click)=\"clearFilter()\">Clear</button>\n      <button md-raised-button=\"\" color=\"accent\" (click)=\"close()\">Close</button>\n    </md-card-actions>\n</div>\n"

/***/ }),

/***/ 960:
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutWrap=\"\" fxLayoutAlign=\"start start\" class=\"pad-xs\">\n  <ng-template let-cart ngFor [ngForOf]=\"carts\">\n    <md-card fxFlex=\"30\" class=\"cart-card\" fxFlex-xs=\"100\" fxFlex-sm=\"100\">\n      <md-card-title class=\"tc-blue-700\" fxLayout=\"row\" fxLayoutWrap=\"\">\n          <span fxLayoutAlign=\"center center\" fxLayout=\"row\">\n            #{{cart.local_id}}\n          </span>\n\n        <span fxFlex=\"\"></span>\n        <button md-icon-button=\"\" (click)=\"deleteCart(cart)\" color=\"accent\">\n          <md-icon class=\"md-24\">close</md-icon>\n        </button>\n      </md-card-title>\n      <md-card-subtitle fxLayout=\"row\" fxLayoutWrap=\"\">\n        <span md-line>{{cart.total || 0 | currency:'INR':true:'1.2-2'}}/-</span>\n        <span fxFlex></span>\n        {{cart.created_on | date:'shortTime'}}\n      </md-card-subtitle>\n      <md-divider></md-divider>\n      <div class=\"pad-left pad-right\">\n        <md-list>\n          <md-list-item>\n            <md-icon md-list-avatar>account_box</md-icon>\n            <h4 md-line>{{cart.customer?.name || 'Customer'}}</h4>\n          </md-list-item>\n          <md-divider md-inset></md-divider>\n          <md-list-item>\n            <md-icon md-list-avatar>phone</md-icon>\n            <h4 md-line>{{cart.customer?.mobile_number || 'Number'}}</h4>\n          </md-list-item>\n        </md-list>\n      </div>\n\n      <md-card-actions fxLayout=\"row\" fxLayoutWrap=\"\" fxLayoutAlign=\"end center\">\n        <button md-raised-button=\"\" (click)=\"openCart(cart.local_id)\" color=\"accent\">\n          <md-icon>\n            add_shopping_cart\n          </md-icon>\n        </button>\n      </md-card-actions>\n    </md-card>\n\n  </ng-template>\n</div>\n\n<a md-fab color=\"accent\" class=\"md-fab-position-bottom-right button-size\"\n   (click)=\"newCart()\" style=\"textAlign: center\" fxLayoutAlign=\"center center\"\n[md-tooltip]=\"'Create New Order'\" mdTooltipPosition=\"before\" fxHide-xs=\"\">\n  <md-icon class=\"md-48\" style=\"padding-top: 40px\">add</md-icon>\n</a>\n\n<a md-fab color=\"accent\" class=\"md-fab-position-bottom-right\" fxHide.gt-xs=\"\"\n   (click)=\"newCart()\" fxLayoutAlign=\"center center\"\n   [md-tooltip]=\"'Create New Order'\" mdTooltipPosition=\"before\">\n  <md-icon class=\"md-36\">add</md-icon>\n</a>\n"

/***/ }),

/***/ 961:
/***/ (function(module, exports) {

module.exports = "<td-layout-nav-list logo=\"assets:logo\" toolbarTitle=\"Postica\"\n                    [opened]=\"media.registerQuery('gt-md') | async\"\n                    [mode]=\"(media.registerQuery('gt-md') | async) ? 'side' : 'over'\"\n                    class=\"bgc-white-1\"  [sidenavWidth]=\"(media.registerQuery('gt-xs') | async) ? '200px' : '100%'\">\n  <div td-toolbar-content layout=\"row\" layout-align=\"start center\" flex>\n    <span flex></span>\n    <span hide-xs=\"\">{{title}}</span>\n    <span flex></span>\n    <app-user></app-user>\n  </div>\n\n\n  <md-nav-list td-sidenav-content>\n    <app-side-menu></app-side-menu>\n  </md-nav-list>\n  <router-outlet></router-outlet>\n\n</td-layout-nav-list>\n"

/***/ }),

/***/ 962:
/***/ (function(module, exports) {

module.exports = "<p>\n  detail works!\n</p>\n"

/***/ }),

/***/ 963:
/***/ (function(module, exports) {

module.exports = "\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutWrap class=\"push\" *ngIf=\"shop.id\">\n  <md-card fxFlex=\"100\">\n    <md-card-title>Printer Config</md-card-title>\n    <md-card-subtitle>{{shop?.name}}</md-card-subtitle>\n    <md-divider></md-divider>\n    <md-card-content>\n      <div fxLayoutMargin fxLayoutPadding fxFlex>\n        <md-input-container fxFlex>\n          <input mdInput [(ngModel)]=\"shop.printer_config.bill_printer_type\" placeholder=\"Bill Printer Type\" />\n        </md-input-container>\n        <md-input-container fxFlex>\n          <input mdInput [(ngModel)]=\"shop.printer_config.receipt_printer_type\" placeholder=\"Receipt Printer Type\" />\n        </md-input-container>\n      </div>\n      <div fxLayoutMargin fxLayoutPadding fxFlex>\n        <md-input-container fxFlex>\n          <input mdInput [(ngModel)]=\"shop.printer_config.label_printer_type\" placeholder=\"label Printer Config\" />\n        </md-input-container>\n      </div>\n      <div fxLayoutMargin fxLayoutPadding fxFlex>\n        <div fxFlex fxLayoutMargin fxLayoutPadding>\n          <md-checkbox mdInput [checked]=\"shop.printer_config.have_bill_printer\"\n                       [(ngModel)]=\"shop.printer_config.have_bill_printer\"></md-checkbox>\n          Print Bill\n        </div>\n        <div fxFlex fxLayoutMargin fxLayoutPadding>\n          <md-checkbox  mdInput [checked]=\"shop.printer_config.have_receipt_printer\"\n                       [(ngModel)]=\"shop.printer_config.have_receipt_printer\"></md-checkbox>\n          Print Receipt\n        </div>\n      </div>\n\n    </md-card-content>\n  </md-card>\n  <div fxLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"center center\">\n    <md-card fxFlex=\"\">\n      <md-card-title>Receipt Template Editor</md-card-title>\n      <md-divider></md-divider>\n      <md-card-content >\n\n        <ckeditor\n          [(ngModel)]=\"shop.printer_config.receipt_template\">\n          <ckbutton [name]=\"'saveButton'\"\n                    [command]=\"'saveCmd'\"\n                    (click)=\"save($event)\"\n                    [icon]=\"'save.png'\"\n                    [label]=\"'Save Document'\"\n                    [toolbar]=\"'clipboard,1'\">\n          </ckbutton>\n        </ckeditor>\n\n\n      </md-card-content>\n\n    </md-card>\n    <md-card fxFlex=\"\">\n      <md-card-title>Bill Template Editor</md-card-title>\n      <md-divider></md-divider>\n      <md-card-content >\n\n        <ckeditor\n          [(ngModel)]=\"shop.printer_config.bill_template\">\n          <ckbutton [name]=\"'saveButton'\"\n                    [command]=\"'saveCmd'\"\n                    (click)=\"save($event)\"\n                    [icon]=\"'save.png'\"\n                    [label]=\"'Save Document'\"\n                    [toolbar]=\"'clipboard,1'\">\n          </ckbutton>\n        </ckeditor>\n\n\n      </md-card-content>\n\n    </md-card>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 964:
/***/ (function(module, exports) {

module.exports = "<div class=\"md-content inset\" fxLayout=\"row\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex=\"100\" fxLayoutWrap=\"\">\n\n    <ng-template let-item let-last=\"last\"  ngFor [ngForOf]=\"shops\">\n\n      <md-card  fxFlex.gt-xs=\"45\"  fxFlex.gt-lg=\"33\" fxFlex-xs=\"100\" fxFlex-sm=\"100\">\n        <md-card-title fxLayout=\"row\" fxLayoutWrap=\"\">\n          <span class=\"tc-accent\">{{item.name}}</span>&nbsp;\n          <small class=\"tc-grey-500 md-body-1\" *ngIf=\"shop.id===item.id\">(default)</small>\n          <span fxFlex></span>\n          <button md-icon-button=\"\" color=\"accent\" (click)=\"syncData(item.id)\">\n            <md-icon class=\"md-36\">refresh</md-icon>\n          </button>\n        </md-card-title>\n\n        <md-card-subtitle>{{item.identity}}</md-card-subtitle>\n\n        <md-divider></md-divider>\n\n        <div md-content fxLayoutAlign=\"left top\">\n          <md-list>\n            <md-list-item>\n              <md-icon md-list-avatar>attach_money</md-icon>\n              <h4 md-line>{{item.total_sales.total_sales || 0| currency:'INR':true:'1.2-2'}}/-</h4>\n            </md-list-item>\n            <md-list-item>\n              <md-icon md-list-avatar>shopping_cart</md-icon>\n              <h4 md-line>{{item.total_sales.total_orders}}</h4>\n            </md-list-item>\n          </md-list>\n\n        </div>\n        <md-divider class=\"inset\"></md-divider>\n        <md-card-actions fxLayout=\"row\" fxLayoutAlign=\"end end\">\n          <button md-button md-raised-button=\"\" class=\"font-bold-600\" color=\"accent\" (click)=\"openShop(item)\">POS</button>\n        </md-card-actions>\n      </md-card>\n      <md-divider *ngIf=\"!last\"></md-divider>\n    </ng-template>\n  </div>\n</div>\n"

/***/ }),

/***/ 965:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"table bgc-white-4 push-sm\" fxFlex=\"100\" fxLayoutWrap fxLayoutAlign=\"center\">\n\n  <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"pad-left-sm pad-right-sm\" fxFlex=\"100\">\n    <span class=\"push-left-sm\">\n      <span class=\"md-title\">{{title}}</span>\n    </span>\n    <span fxFlex></span>\n    <td-search-box class=\" push-right-sm\" placeholder=\"Search Here..\" (clear)=\"searchInputTerm = ''\" (search)=\"searchInputTerm = $event\"\n                   (searchDebounce)=\"search($event)\" fxFlex-xs=\"60\" fxFlex [showUnderline]=\"true\" [debounce]=\"500\"\n                   [alwaysVisible]=\"true\">\n    </td-search-box>\n  </div>\n\n  <table td-data-table>\n    <th td-data-table-column\n        *ngFor=\"let column of columns\"\n        [sortable]=\"column.sortable\"\n        [numeric]=\"column.numeric\"\n        (sortBy)=\"sortBy\"\n        (sort)=\"sortOrder\"\n        (sortChange)=\"sort(column.name, sortOrder)\">\n      {{column.label}}\n    </th>\n    <th td-data-table-column  *ngIf=\"editRow\">Edit</th>\n    <tr td-data-table-row *ngFor=\"let row of filteredData\">\n      <td td-data-table-cell *ngFor=\"let column of columns\"\n          [numeric]=\"column.numeric\">\n        <app-table-row [value]=\"row\" [column]=\"column\" [format]=\"column.format\"></app-table-row>\n      </td>\n      <td td-data-table-cell>\n        <button class=\"small-button\" (click)=\"edit(row, filteredData.indexOf(row))\">\n          <md-icon md-tooltip=\"edit\" color=\"accent\"  style=\"cursor: pointer\">edit</md-icon>\n        </button>\n        <span *ngIf=\"row.hasOwnProperty('is_disabled')\">\n          <button class=\"small-button\" *ngIf=\"!row.is_disabled\"\n                  (click)=\"toggle(row, filteredData.indexOf(row))\">\n          <md-icon md-tooltip=\"disable\" color=\"primary\" style=\"cursor: pointer\">sync</md-icon>\n        </button>\n        <button class=\"small-button\" *ngIf=\"row.is_disabled\"\n                (click)=\"toggle(row, filteredData.indexOf(row))\">\n          <md-icon md-tooltip=\"disable\" color=\"warn\" style=\"cursor: pointer\">sync_disabled</md-icon>\n        </button>\n\n        </span>\n        <span *ngIf=\"!row.hasOwnProperty('is_disabled')\">\n          <button class=\"small-button\"\n                  (click)=\"deleteRow(row, filteredData.indexOf(row))\">\n          <md-icon md-tooltip=\"disable\" color=\"warn\" style=\"cursor: pointer\">close</md-icon>\n        </button>\n        </span>\n\n\n      </td>\n    </tr>\n  </table>\n  <div fxLayout=\"row\" fxLayoutWrap class=\"pagination bgc-white-4 tc-black-4 pad-sm md-shadow-bottom-z-1\"\n       fxLayoutAlign=\"center center\" fxFlex=\"100\">\n    <td-paging-bar [pageSizes]=\"[50, 75, 100]\" [total]=\"filteredTotal\"\n                   (change)=\"page($event)\"></td-paging-bar>\n  </div>\n\n</div>\n\n<a md-fab color=\"accent\" class=\"md-fab-position-bottom-right\" (click)=\"add()\" hide-gt-xs style=\"bottom: 80px\">\n  <md-icon>add</md-icon>\n</a>\n\n<a md-fab color=\"accent\" class=\"md-fab-position-bottom-right\" (click)=\"add()\" hide-xs>\n  <md-icon>add</md-icon>\n</a>\n"

/***/ }),

/***/ 966:
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" class=\"bgc-white-4\" fxLayoutWrap=\"\">\n  <md-card-title fxFlex=\"100\" fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"md-title\">Brand Form\n  </md-card-title>\n  <form fxFlex=\"100\" class=\"\" #brandForm=\"ngForm\">\n    <div fxLayout=\"row\" fxLayout-margin>\n      <md-input-container fxFlex>\n        <input mdInput placeholder=\"Brand Name\" minlength=\"1\" maxlength=\"55\" required [value]=\"brand.name || ''\"\n               [(ngModel)]=\"brand.name\" name=\"name\">\n        <md-hint align=\"end\">{{brand.name?brand.name.length:0}} / 55</md-hint>\n      </md-input-container>\n    </div>\n\n\n    <div fxLayout=\"row\" fxLayout-margin>\n      <div fxFlex *ngIf=\"!brand.retail_shop_id\" fxLayoutAlign=\"end end\">\n        <md-select mdInput placeholder=\"Select a Shop\" [(ngModel)]=\"brand.retail_shop\" name=\"shop\">\n          <md-option *ngFor=\"let shop of shops\" [value]=\"shop\">\n            {{shop.name}}\n          </md-option>\n        </md-select>\n      </div>\n      <md-input-container fxFlex *ngIf=\"brand.retail_shop_id\">\n        <input mdInput [value]=\"brand.retail_shop.name\" [readOnly]=\"true\" [disabled]=\"true\" type=\"text\">\n      </md-input-container>\n    </div>\n    <div fxfxLayout=\"row\" fxfxLayoutGap=\"20px\">\n      <div fxfxFlex>\n        <tag-input [(ngModel)]=\"distributors\" name=\"distributor\" [placeholder]=\"'Enter Distributor...'\"\n                   (onAdd)=\"addDistributor($event)\" (onRemove)=\"removeDistributor($event)\"\n                   [secondaryPlaceholder]=\"'Enter Distributor...'\" [onlyFromAutocomplete]=\"true\" [maxItems]=\"5\"\n                   [identifyBy]=\"'id'\"\n                   [displayBy]=\"'name'\">\n          <tag-input-dropdown [autocompleteObservable]='getDistributors' [appendToBody]=\"false\"\n                              [identifyBy]=\"'id'\"\n                              [displayBy]=\"'name'\">\n            <template let-item=\"item\" let-index=\"index\">\n              {{ item.name }}\n            </template>\n          </tag-input-dropdown>\n        </tag-input>\n      </div>\n    </div>\n\n  </form>\n  <md-card-actions fxLayout=\"row\" fxLayoutAlign=\"center center\" fxFlex class=\"push-top\">\n    <button md-icon-button=\"\" md-fab=\"\" md-raised-button=\"\" md-tooltip=\"cancel\"\n            (click)=\"close()\" class=\"pad-xs push-xs\" color=\"accent\">\n      <md-icon class=\"md-24\">close</md-icon>\n    </button>\n    <span class=\"pad\"></span>\n    <button md-icon-button=\"\" md-fab=\"\" md-raised-button=\"\" md-tooltip=\"undo\"\n            (click)=\"cancelState()\" class=\"pad-xs push-xs\" color=\"warn\">\n      <md-icon class=\"md-24\">undo</md-icon>\n    </button>\n    <span class=\"pad\"></span>\n    <button md-icon-button=\"\" md-fab=\"\" md-raised-button=\"\" [disabled]=\"!brandForm.form.valid\"\n            (click)=\"saveState()\" class=\"pad-xs push-xs\" color=\"primary\" md-tooltip=\"save\"\n    >\n      <md-icon class=\"md-24\">done</md-icon>\n    </button>\n\n  </md-card-actions>\n\n</div>\n"

/***/ }),

/***/ 967:
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" class=\"\" layout-wrap=\"\" layout-align=\"center center\">\n\n\n  <app-base-table [columns]=\"columns\" [title]=\"title\" [filter]=\"filter\" [addRow]=\"addRow\" [editRow]=\"editRow\"\n                  [toggleRow]=\"toggleRow\" [include]=\"['distributors']\">\n\n  </app-base-table>\n\n\n</div>\n"

/***/ }),

/***/ 968:
/***/ (function(module, exports) {

module.exports = "\n<div layout=\"column\">\n  <div layout=\"row\" class=\"bgc-white-4\" layout-wrap=\"\">\n    <md-card-title flex=\"100\" layout=\"column\" layout-align=\"center center\" class=\"md-title\">Distributor Form</md-card-title>\n    <form flex=\"100\" class=\"\" #distributorForm=\"ngForm\">\n      <div layout=\"row\" layout-margin>\n        <md-input-container flex>\n          <input mdInput placeholder=\"Distributor Name\" minlength=\"1\" maxlength=\"55\" required [value]=\"distributor.name || ''\"\n                 [(ngModel)]=\"distributor.name\" name=\"name\">\n          <md-hint align=\"end\">{{distributor.name?distributor.name.length:0}} / 55</md-hint>\n        </md-input-container>\n      </div>\n\n\n      <div layout=\"row\" layout-margin>\n        <div flex *ngIf=\"!distributor.retail_shop_id\" layout-align=\"end end\">\n          <md-select mdInput placeholder=\"Select a Shop\" [(ngModel)]=\"distributor.retail_shop\" name=\"shop\">\n            <md-option *ngFor=\"let shop of shops\" [value]=\"shop\">\n              {{shop.name}}\n            </md-option>\n          </md-select>\n        </div>\n        <md-input-container flex *ngIf=\"distributor.retail_shop_id\">\n          <input mdInput [value]=\"distributor.retail_shop.name\" [readOnly]=\"true\" [disabled]=\"true\" type=\"text\">\n        </md-input-container>\n      </div>\n      <div layout-margin=\"\" layout=\"row\">\n        <td-chips placeholder=\"Enter Emails\" name=\"emails\" flex [(ngModel)]=\"distributor.emails\">\n        </td-chips>\n      </div>\n      <div layout-margin=\"\" layout=\"row\">\n\n        <td-chips placeholder=\"Enter Numbers\" type=\"number\" name=\"numbers\" flex [(ngModel)]=\"distributor.phone_numbers\">\n        </td-chips>\n\n      </div>\n\n\n    </form>\n    <md-card-actions layout=\"row\" layout-align=\"center center\" flex class=\"push-top\">\n      <button md-icon-button=\"\" md-fab=\"\" md-raised-button=\"\" md-tooltip=\"cancel\"\n              (click)=\"close()\" class=\"pad-xs push-xs\" color=\"accent\">\n        <md-icon  class=\"md-24\" >close</md-icon>\n      </button>\n      <span class=\"pad\"></span>\n      <button md-icon-button=\"\" md-fab=\"\" md-raised-button=\"\" md-tooltip=\"undo\"\n              (click)=\"cancelState()\" class=\"pad-xs push-xs\" color=\"warn\">\n        <md-icon  class=\"md-24\" >undo</md-icon>\n      </button>\n      <span class=\"pad\"></span>\n      <button md-icon-button=\"\" md-fab=\"\" md-raised-button=\"\" [disabled]=\"!distributorForm.form.valid\"\n              (click)=\"saveState()\" class=\"pad-xs push-xs\"  color=\"primary\" md-tooltip=\"save\"\n      ><md-icon class=\"md-24\" >done</md-icon>\n      </button>\n\n    </md-card-actions>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 969:
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" class=\"\" layout-wrap=\"\" layout-align=\"center center\">\n\n\n  <app-base-table [columns]=\"columns\" [filter]=\"filter\" [addRow]=\"addRow\" [editRow]=\"editRow\"\n                  [toggleRow]=\"toggleRow\" [title]=\"title\">\n\n  </app-base-table>\n\n\n</div>\n"

/***/ }),

/***/ 970:
/***/ (function(module, exports) {

module.exports = "<td-layout-nav-list logo=\"assets:logo\" toolbarTitle=\"Postica\"\n                    [opened]=\"media.registerQuery('gt-md') | async\"\n                    [mode]=\"(media.registerQuery('gt-md') | async) ? 'side' : 'over'\"\n                    class=\"bgc-white-1\"  [sidenavWidth]=\"(media.registerQuery('gt-xs') | async) ? '200px' : '100%'\">\n  <div td-toolbar-content layout=\"row\" layout-align=\"start center\" flex>\n    <span flex></span>\n    <span hide-xs=\"\">Inventory</span>\n    <span flex></span>\n    <app-user></app-user>\n  </div>\n\n\n  <md-nav-list td-sidenav-content>\n    <app-side-menu></app-side-menu>\n  </md-nav-list>\n\n\n  <router-outlet></router-outlet>\n</td-layout-nav-list>\n"

/***/ }),

/***/ 971:
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" layout-wrap=\"\" layout-align=\"start\" class=\"pad-xs\">\n  <template ngFor [ngForOf]=\"routes\" let-item>\n    <md-card flex=\"30\" class=\" md-shadow-bottom-z-2\" flex-xs=\"45\" flex-md=\"45\">\n      <md-card-content layout=\"column\" layout-align=\"center center\">\n        <md-icon class=\"md-48\" color=\"primary\">{{item.icon}}</md-icon>\n      </md-card-content>\n      <md-toolbar layout=\"row\" layout-align=\"center center\" class=\"bgc-orange-50\">\n        <a [routerLink]=\"[item.route]\" style=\"text-decoration: none\">\n          <span class=\"md-title tc-accent\">{{item.title}}</span>\n        </a>\n\n      </md-toolbar>\n    </md-card>\n  </template>\n</div>\n"

/***/ }),

/***/ 972:
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n  <div fxLayout=\"row\" class=\"bgc-white-4\" fxLayoutWrap>\n    <md-card-title fxFlex=\"100\" fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"md-title\">Product Form</md-card-title>\n    <form fxFlex=\"100\" class #productForm=\"ngForm\">\n      <div fxLayout=\"row\" fxLayoutGap=\"20px\">\n        <md-input-container fxFlex=\"50\">\n          <input mdInput placeholder=\"Product Name\" minlength=\"1\" maxlength=\"127\" required [value]=\"product.name || ''\"\n                 [(ngModel)]=\"product.name\" name=\"name\">\n          <md-hint align=\"end\">{{product.name?product.name.length:0}} / 127</md-hint>\n        </md-input-container>\n        <md-input-container fxFlex>\n          <input mdInput placeholder=\"Auto Discount\" max=\"100\" type=\"number\" required\n                 [value]=\"product.auto_discount || 0\"\n                 [(ngModel)]=\"product.auto_discount\" name=\"auto_discount\">\n        </md-input-container>\n        <md-input-container fxFlex>\n          <input mdInput placeholder=\"Min. Stock\" min=\"0\" type=\"number\" required [value]=\"product.min_stock || 0\"\n                 [(ngModel)]=\"product.min_stock\" name=\"min_stock\">\n        </md-input-container>\n\n      </div>\n      <div fxLayout=\"row\" fxLayoutGap=\"20px\">\n        <md-input-container  fxFlex=\"66\" fxLayout=\"row\">\n          <input mdInput placeholder=\"Description\" [value]=\"product.sub_description\"\n                [(ngModel)]=\"product.sub_description\" name=\"sub_description\"/>\n        </md-input-container>\n        <md-input-container  fxFlex=\"33\" fxLayout=\"row\">\n          <input mdInput placeholder=\"Barcode\" [value]=\"product.barcode\"\n                 [(ngModel)]=\"product.barcode\" name=\"barcode\" required maxlength=\"13\" minlength=\"8\" />\n          <md-hint align=\"end\">{{product.barcode?product.barcode.length:0}} / 13</md-hint>\n        </md-input-container>\n      </div>\n      <div fxLayout=\"row\" fxLayoutGap=\"20px\">\n        <md-input-container  fxFlex fxLayout=\"row\">\n          <input mdInput placeholder=\"Default Quantity\" [value]=\"product.default_quantity\"\n                 [(ngModel)]=\"product.default_quantity\" name=\"default_quantity\" type=\"number\" [step]=\"product.is_loose?0.1:1\"\n                 required min=\"0\"/>\n        </md-input-container>\n        <div fxFlex fxLayout=\"row\" fxLayoutGap=\"20px\" fxLayoutAlign=\"center center\">\n          <md-select mdInput placeholder=\"Quantity Type\" [(ngModel)]=\"product.quantity_label\" name=\"shop\"\n                     style=\"width: 100%\"\n          >\n            <md-option [value]=\"'KG'\">KiloGram</md-option>\n            <md-option [value]=\"'GM'\">Gram</md-option>\n            <md-option [value]=\"'MG'\">MilliGram</md-option>\n            <md-option [value]=\"'L'\">Litre</md-option>\n            <md-option [value]=\"'ML'\">MilliLitre</md-option>\n            <md-option [value]=\"'TAB'\">Tablet</md-option>\n            <md-option [value]=\"'SYRUP'\">Syrup</md-option>\n            <md-option [value]=\"'OTH'\">Other</md-option>\n\n          </md-select>\n        </div>\n        <div fxFlex fxLayoutAlign=\"center center\" fxLayout=\"row\">\n            <md-checkbox placeholder=\"Min. Stock\"  required [checked]=\"product.is_loose\"\n                         [(ngModel)]=\"product.is_loose\" name=\"min_stock\">Loose Available</md-checkbox>\n        </div>\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutGap=\"20px\">\n        <div fxFlex *ngIf=\"!product.retail_shop_id\" fxLayoutAlign=\"end end\" fxLayout=\"row\">\n          <md-select mdInput placeholder=\"Select a Shop\" [(ngModel)]=\"product.retail_shop\" name=\"shop\"\n                     style=\"width: 100%\"\n          >\n            <md-option *ngFor=\"let shop of shops\" [value]=\"shop\">\n              {{shop.name}}\n            </md-option>\n          </md-select>\n        </div>\n        <div fxFlex style=\"margin-top: 16px\">\n          <md-input-container fxFlex *ngIf=\"product.retail_shop_id\" fxLayoutAlign=\"start end\" fxLayout=\"row\">\n            <input mdInput [value]=\"product.retail_shop.name\" [readOnly]=\"true\" [disabled]=\"true\" type=\"text\">\n          </md-input-container>\n        </div>\n        <div fxFlex>\n          <tag-input [(ngModel)]=\"brands\" name=\"brand\" [placeholder]=\"'Enter Brand...'\" (onAdd)=\"addBrand()\"\n                     [secondaryPlaceholder]=\"'Enter Brand...'\" [onlyFromAutocomplete]=\"true\" [maxItems]=\"1\">\n            <tag-input-dropdown [autocompleteObservable]='getBrands' [appendToBody]=\"false\">\n              <template let-item=\"item\" let-index=\"index\">\n                {{ item.display }}\n              </template>\n            </tag-input-dropdown>\n          </tag-input>\n        </div>\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutGap=\"20px\">\n        <tag-input [(ngModel)]=\"tags\" name=\"tags\" fxFlex=\"100\" [placeholder]=\"'Enter Tags..'\"\n                   [secondaryPlaceholder]=\"'Enter Tags...'\" [onlyFromAutocomplete]=\"true\" (onAdd)=\"addTags($event)\"\n                   (onRemove)=\"removeTags($event)\"\n                   [identifyBy]=\"'id'\"\n                   [displayBy]=\"'name'\">\n          <tag-input-dropdown [autocompleteObservable]='getTags' [appendToBody]=\"false\"\n                              [identifyBy]=\"'id'\"\n                              [displayBy]=\"'name'\">\n            <template let-item=\"item\" let-index=\"index\">\n              {{ item.name }}\n            </template>\n          </tag-input-dropdown>\n        </tag-input>\n        <tag-input [(ngModel)]=\"taxes\" name=\"taxes\" fxFlex=\"100\" [placeholder]=\"'Enter Taxes...'\"\n                   [secondaryPlaceholder]=\"'Enter Taxes...'\" [onlyFromAutocomplete]=\"true\" (onAdd)=\"addTaxes($event)\"\n                   (onRemove)=\"removeTaxes($event)\"\n                   [identifyBy]=\"'id'\"\n                   [displayBy]=\"'name'\">\n          <tag-input-dropdown [autocompleteObservable]='getTaxes' [appendToBody]=\"false\"\n                              [identifyBy]=\"'id'\"\n                              [displayBy]=\"'name'\">\n            <template let-item=\"item\" let-index=\"index\">\n              {{ item.name }}\n            </template>\n          </tag-input-dropdown>\n        </tag-input>\n      </div>\n      <div fxLayout=\"row\" fxLayoutGap=\"20px\">\n        <tag-input [(ngModel)]=\"salts\" name=\"salts\" fxFlex=\"100\" [placeholder]=\"'Enter Salts..'\"\n                   [secondaryPlaceholder]=\"'Enter Salts...'\" [onlyFromAutocomplete]=\"true\" (onAdd)=\"addSalts($event)\"\n                   (onRemove)=\"removeSalts($event)\"\n                   [identifyBy]=\"'id'\"\n                   [displayBy]=\"'name'\">\n          <tag-input-dropdown [autocompleteObservable]='getSalts' [appendToBody]=\"false\"\n                              [identifyBy]=\"'id'\"\n                              [displayBy]=\"'name'\">\n            <template let-item=\"item\" let-index=\"index\">\n              {{ item.name }}\n            </template>\n          </tag-input-dropdown>\n        </tag-input>\n      </div>\n      <div fxLayout=\"row\" fxLayoutGap=\"20px\">\n        <tag-input [(ngModel)]=\"product.description\" name=\"description\" fxFlex=\"100\"\n                   [placeholder]=\"'Enter Key : Value Description..'\"\n                   [secondaryPlaceholder]=\"'Enter Description...'\" (onAdd)=\"addDescription($event)\"\n                   [validators]=\"validators\"\n                   [identifyBy]=\"'key'\"\n                   [errorMessages]=\"errorMessages\"\n                   [displayBy]=\"'value'\">\n          <template let-item=\"item\" let-index=\"index\">\n            {{ item.key }}:{{ item.value }}\n            <delete-icon (click)=\"removeDescription(item, index)\"></delete-icon>\n          </template>\n        </tag-input>\n      </div>\n\n\n    </form>\n    <md-card-actions fxLayout=\"row\" fxLayoutAlign=\"center center\" fxFlex class=\"push-top\">\n      <button  md-fab md-tooltip=\"cancel\"\n              (click)=\"close()\" class=\"pad-xs push-xs\" color=\"accent\">\n        <md-icon class=\"md-24\">close</md-icon>\n      </button>\n      <span class=\"pad\"></span>\n      <button  md-fab md-tooltip=\"undo\"\n              (click)=\"cancelState()\" class=\"pad-xs push-xs\" color=\"warn\">\n        <md-icon class=\"md-24\">undo</md-icon>\n      </button>\n      <span class=\"pad\"></span>\n      <button md-fab  [disabled]=\"!productForm.form.valid\"\n              (click)=\"saveState()\" class=\"pad-xs push-xs\" color=\"primary\" md-tooltip=\"save\"\n      >\n        <md-icon class=\"md-24\">done</md-icon>\n      </button>\n\n    </md-card-actions>\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ 973:
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" layout-align=\"center center\">\n\n\n  <app-base-table [columns]=\"columns\" [filter]=\"filter\" [addRow]=\"addRow\" [editRow]=\"editRow\"\n                  [toggleRow]=\"toggleRow\" [include]=\"include\" [title]=\"title\">\n\n  </app-base-table>\n\n</div>\n"

/***/ }),

/***/ 974:
/***/ (function(module, exports) {

module.exports = "\n<div layout=\"column\">\n  <div layout=\"row\" class=\"bgc-white-4\" layout-wrap=\"\">\n    <md-card-title flex=\"100\" layout=\"column\" layout-align=\"center center\" class=\"md-title\">Salt Form</md-card-title>\n    <form flex=\"100\" class=\"\" #saltForm=\"ngForm\">\n      <div layout=\"row\" layout-margin>\n        <md-input-container flex>\n          <input mdInput placeholder=\"Salt Name\" minlength=\"1\" maxlength=\"55\" required [value]=\"salt.name || ''\"\n                 [(ngModel)]=\"salt.name\" name=\"name\">\n          <md-hint align=\"end\">{{salt.name?salt.name.length:0}} / 55</md-hint>\n        </md-input-container>\n      </div>\n\n\n      <div layout=\"row\" layout-margin>\n        <div flex *ngIf=\"!salt.retail_shop_id\" layout-align=\"end end\">\n          <md-select mdInput placeholder=\"Select a Shop\" [(ngModel)]=\"salt.retail_shop\" name=\"shop\" required>\n            <md-option *ngFor=\"let shop of shops\" [value]=\"shop\">\n              {{shop.name}}\n            </md-option>\n          </md-select>\n        </div>\n        <md-input-container flex *ngIf=\"salt.retail_shop_id\">\n          <input mdInput [value]=\"salt.retail_shop.name\" [readOnly]=\"true\" [disabled]=\"true\" type=\"text\">\n        </md-input-container>\n      </div>\n\n\n    </form>\n    <md-card-actions layout=\"row\" layout-align=\"center center\" flex class=\"push-top\">\n      <button md-icon-button=\"\" md-fab=\"\" md-raised-button=\"\" md-tooltip=\"cancel\"\n              (click)=\"close()\" class=\"pad-xs push-xs\" color=\"accent\">\n        <md-icon  class=\"md-24\" >close</md-icon>\n      </button>\n      <span class=\"pad\"></span>\n      <button md-icon-button=\"\" md-fab=\"\" md-raised-button=\"\" md-tooltip=\"undo\"\n              (click)=\"cancelState()\" class=\"pad-xs push-xs\" color=\"warn\">\n        <md-icon  class=\"md-24\" >undo</md-icon>\n      </button>\n      <span class=\"pad\"></span>\n      <button md-icon-button=\"\" md-fab=\"\" md-raised-button=\"\" [disabled]=\"!saltForm.form.valid\"\n              (click)=\"saveState()\" class=\"pad-xs push-xs\"  color=\"primary\" md-tooltip=\"save\"\n      ><md-icon class=\"md-24\" >done</md-icon>\n      </button>\n\n    </md-card-actions>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 975:
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" class=\"\" layout-wrap=\"\" layout-align=\"center center\">\n\n\n  <app-base-table [columns]=\"columns\" [filter]=\"filter\" [addRow]=\"addRow\" [editRow]=\"editRow\"\n                  [toggleRow]=\"toggleRow\" [title]=\"title\">\n\n  </app-base-table>\n\n</div>\n"

/***/ }),

/***/ 976:
/***/ (function(module, exports) {

module.exports = "<span class=\"tc-grey-700 md-caption\">\n\n  {{format?format(getValue(column, value)):getValue(column, value)}}\n</span>\n"

/***/ }),

/***/ 977:
/***/ (function(module, exports) {

module.exports = "\n<div layout=\"column\">\n  <div layout=\"row\" class=\"bgc-white-4\" layout-wrap=\"\">\n    <md-card-title flex=\"100\" layout=\"column\" layout-align=\"center center\" class=\"md-title\">Brand Form</md-card-title>\n    <form flex=\"100\" class=\"\" #tagForm=\"ngForm\">\n      <div layout=\"row\" layout-margin>\n        <md-input-container flex>\n          <input mdInput placeholder=\"Tag Name\" minlength=\"1\" maxlength=\"55\" required [value]=\"tag.name || ''\"\n                 [(ngModel)]=\"tag.name\" name=\"name\">\n          <md-hint align=\"end\">{{tag.name?tag.name.length:0}} / 55</md-hint>\n        </md-input-container>\n      </div>\n\n\n      <div layout=\"row\" layout-margin>\n        <div flex *ngIf=\"!tag.retail_shop_id\" layout-align=\"end end\">\n          <md-select mdInput placeholder=\"Select a Shop\" [(ngModel)]=\"tag.retail_shop\" name=\"shop\" required=\"true\">\n            <md-option *ngFor=\"let shop of shops\" [value]=\"shop\">\n              {{shop.name}}\n            </md-option>\n          </md-select>\n        </div>\n        <md-input-container flex *ngIf=\"tag.retail_shop_id\">\n          <input mdInput [value]=\"tag.retail_shop.name\" [readOnly]=\"true\" [disabled]=\"true\" type=\"text\">\n        </md-input-container>\n      </div>\n\n\n    </form>\n    <md-card-actions layout=\"row\" layout-align=\"center center\" flex class=\"push-top\">\n      <button md-icon-button=\"\" md-fab=\"\" md-raised-button=\"\" md-tooltip=\"cancel\"\n              (click)=\"close()\" class=\"pad-xs push-xs\" color=\"accent\">\n        <md-icon  class=\"md-24\" >close</md-icon>\n      </button>\n      <span class=\"pad\"></span>\n      <button md-icon-button=\"\" md-fab=\"\" md-raised-button=\"\" md-tooltip=\"undo\"\n              (click)=\"cancelState()\" class=\"pad-xs push-xs\" color=\"warn\">\n        <md-icon  class=\"md-24\" >undo</md-icon>\n      </button>\n      <span class=\"pad\"></span>\n      <button md-icon-button=\"\" md-fab=\"\" md-raised-button=\"\" [disabled]=\"!tagForm.form.valid\"\n              (click)=\"saveState()\" class=\"pad-xs push-xs\"  color=\"primary\" md-tooltip=\"save\"\n      ><md-icon class=\"md-24\" >done</md-icon>\n      </button>\n\n    </md-card-actions>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 978:
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" class=\"\" layout-wrap=\"\" layout-align=\"center center\">\n\n\n  <app-base-table [columns]=\"columns\" [filter]=\"filter\" [addRow]=\"addRow\" [editRow]=\"editRow\"\n                  [toggleRow]=\"toggleRow\">\n\n  </app-base-table>\n\n\n</div>\n"

/***/ }),

/***/ 979:
/***/ (function(module, exports) {

module.exports = "\n<div layout=\"column\">\n  <div layout=\"row\" class=\"bgc-white-4\" layout-wrap=\"\">\n    <md-card-title flex=\"100\" layout=\"column\" layout-align=\"center center\" class=\"md-title\">Brand Form</md-card-title>\n    <form flex=\"100\" class=\"\" #taxForm=\"ngForm\">\n      <div layout=\"row\" layout-margin>\n        <md-input-container flex>\n          <input mdInput placeholder=\"Tax Name\" minlength=\"1\" maxlength=\"55\" required [value]=\"tax.name || ''\"\n                 [(ngModel)]=\"tax.name\" name=\"name\">\n          <md-hint align=\"end\">{{tax.name?tax.name.length:0}} / 55</md-hint>\n        </md-input-container>\n      </div>\n\n\n      <div layout=\"row\" layout-margin>\n        <div flex *ngIf=\"!tax.retail_shop_id\" layout-align=\"end end\">\n          <md-select mdInput placeholder=\"Select a Shop\" [(ngModel)]=\"tax.retail_shop\" name=\"shop\" required>\n            <md-option *ngFor=\"let shop of shops\" [value]=\"shop\">\n              {{shop.name}}\n            </md-option>\n          </md-select>\n        </div>\n        <md-input-container flex *ngIf=\"tax.retail_shop_id\">\n          <input mdInput [value]=\"tax.retail_shop.name\" [readOnly]=\"true\" [disabled]=\"true\" type=\"text\">\n        </md-input-container>\n\n        <md-input-container flex >\n          <input mdInput [value]=\"tax.value\" name=\"value\" [(ngModel)]=\"tax.value\" type=\"number\" required min=\"0\"\n                 placeholder=\"value\">\n        </md-input-container>\n      </div>\n\n\n    </form>\n    <md-card-actions layout=\"row\" layout-align=\"center center\" flex class=\"push-top\">\n      <button md-icon-button=\"\" md-fab=\"\" md-raised-button=\"\" md-tooltip=\"cancel\"\n              (click)=\"close()\" class=\"pad-xs push-xs\" color=\"accent\">\n        <md-icon  class=\"md-24\" >close</md-icon>\n      </button>\n      <span class=\"pad\"></span>\n      <button md-icon-button=\"\" md-fab=\"\" md-raised-button=\"\" md-tooltip=\"undo\"\n              (click)=\"cancelState()\" class=\"pad-xs push-xs\" color=\"warn\">\n        <md-icon  class=\"md-24\" >undo</md-icon>\n      </button>\n      <span class=\"pad\"></span>\n      <button md-icon-button=\"\" md-fab=\"\" md-raised-button=\"\" [disabled]=\"!taxForm.form.valid\"\n              (click)=\"saveState()\" class=\"pad-xs push-xs\"  color=\"primary\" md-tooltip=\"save\"\n      ><md-icon class=\"md-24\" >done</md-icon>\n      </button>\n\n    </md-card-actions>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 980:
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" class=\"\" layout-wrap=\"\" layout-align=\"center center\">\n\n\n  <app-base-table [columns]=\"columns\" [filter]=\"filter\" [addRow]=\"addRow\" [editRow]=\"editRow\"\n                  [toggleRow]=\"toggleRow\" [title]=\"title\">\n\n  </app-base-table>\n\n\n</div>\n"

/***/ }),

/***/ 981:
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\" layout-fill>\n  <md-toolbar color=\"primary\" class=\"md-whiteframe-z1\">\n    <span>Login</span>\n  </md-toolbar>\n  <div class=\"md-content\" layout-padding flex>\n    <div layout-gt-xs=\"row\" layout-align-gt-xs=\"center start\" class=\"margin\">\n      <div flex-gt-xs=\"50\">\n        <md-card tdMediaToggle=\"gt-xs\" [mediaClasses]=\"['push-top-lg']\" layout=\"column\">\n          <span flex=\"100\" layout-align=\"center center\" layout=\"row\"><md-icon class=\"md-icon-logo\" svgIcon=\"assets:logo\"></md-icon></span>\n          <md-card-title flex=\"100\" layout-align=\"center center\" layout=\"row\"> Login</md-card-title>\n          <md-divider></md-divider>\n          <md-card-content>\n            <form #loginForm=\"ngForm\">\n              <div layout=\"row\">\n                <md-input-container flex>\n                  <input mdInput #userElement #userControl=\"ngModel\" placeholder=\"Username\" type=\"text\"\n                         maxlength=\"30\" name=\"username\" [(ngModel)]=\"username\" required>\n                  <span md-prefix><md-icon>person</md-icon></span>\n                  <md-hint align=\"start\">\n                    <span [hidden]=\"!userControl.errors?.required || userControl.pristine\" class=\"tc-red-600\">Required</span>\n                  </md-hint>\n                </md-input-container>\n              </div>\n              <div layout=\"row\">\n                <md-input-container flex>\n                  <input mdInput #passElement #passControl=\"ngModel\" placeholder=\"Password\" type=\"password\"\n                         name=\"password\" [(ngModel)]=\"password\" required>\n                  <span md-prefix><md-icon>lock</md-icon></span>\n                  <md-hint align=\"start\">\n                    <span [hidden]=\"!passControl.errors?.required || passControl.pristine\" class=\"tc-red-600\">Required</span>\n                  </md-hint>\n\n                </md-input-container>\n              </div>\n            </form>\n          </md-card-content>\n          <md-divider></md-divider>\n          <md-card-actions layout=\"row\">\n            <button flex md-raised-button color=\"accent\" [disabled]=\"!loginForm.form.valid\" (click)=\"login()\">Sign In</button>\n          </md-card-actions>\n        </md-card>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 982:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 983:
/***/ (function(module, exports) {

module.exports = "<p>\n  customer-report works!\n</p>\n"

/***/ }),

/***/ 984:
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" layout-wrap=\"\">\n\n  <md-card-title class=\"tc-blue-700\" layout=\"row\" flex=\"100\">{{customer.name}}<span flex></span>\n    <button md-icon-button=\"\" color=\"accent\" (click)=\"close()\">\n      <md-icon>close</md-icon>\n    </button>\n  </md-card-title>\n  <md-card-subtitle flex=\"100\" class=\"md-title\">Number: {{customer.mobile_number}}</md-card-subtitle>\n  <md-divider class=\"inset\" flex=\"100\"></md-divider>\n  <md-card-content flex=\"100\" layout=\"row\" layout-wrap=\"\">\n\n    <div layout=\"row\" flex=\"100\" layout-wrap=\"\" layout-align=\"center center\" layout-margin=\"\" layout-padding=\"\">\n      <form #amountForm=\"ngForm\" layout=\"row\">\n        <md-input-container flex=\"50\">\n          <input mdInput [(ngModel)]=\"transaction.amount\" [value]=\"null\" name=\"amount\" min=\"0\" required\n                 placeholder=\"Enter Amount\"/>\n        </md-input-container>\n        <div layout-margin=\"\" flex=\"50\">\n          <button md-raised-button=\"\" color=\"primary\" [disabled]=\"!amountForm.valid\" (click)=\"addAmount()\">\n            Add\n          </button>\n        </div>\n      </form>\n    </div>\n\n    <div layout=\"row\" flex=\"50\" layout-wrap=\"\" layout-align=\"start start\">\n      <md-card flex=\"100\">\n        <div layout-padding class=\"tc-blue-700 md-title\">Addresses</div>\n        <md-divider></md-divider>\n        <md-list>\n          <template [ngForOf]=\"customer.addresses\" ngFor let-item>\n            <md-list-item>\n              <md-icon md-list-avatar>home</md-icon>\n              <h4 md-line>{{item.name}}</h4>\n            </md-list-item>\n            <md-divider></md-divider>\n          </template>\n        </md-list>\n      </md-card>\n    </div>\n    <div layout=\"row\" flex=\"50\" layout-wrap=\"\" layout-align=\"start start\">\n      <md-card flex=\"100\">\n        <div layout-padding class=\"tc-blue-700 md-title\">Transactions</div>\n        <md-divider></md-divider>\n        <md-list>\n          <template [ngForOf]=\"customer.transactions\" ngFor let-item>\n            <md-list-item>\n              <md-icon md-list-avatar>attach_money</md-icon>\n              <h4 md-line>{{item.amount}}</h4>\n              <span flex></span>\n              <span class=\"tc-grey-500\">{{item.created_on | date: 'shortDate'}}</span>\n            </md-list-item>\n            <md-divider></md-divider>\n          </template>\n        </md-list>\n      </md-card>\n    </div>\n  </md-card-content>\n</div>\n"

/***/ }),

/***/ 985:
/***/ (function(module, exports) {

module.exports = "<div class=\" bgc-white-4 push-sm table\" flex=\"100\" layout-wrap layout=\"row\"\n     layout-align=\"center center\">\n\n  <div layout=\"row\" layout-align=\"start center\" class=\"pad-left-sm pad-right-sm\" flex=\"100\">\n      <span class=\"push-left-sm\">\n        <span class=\"md-title\">{{title}}</span>\n      </span>\n    <span flex></span>\n    <td-search-box class=\" push-right-sm\" placeholder=\"Search Customer..\"\n                   (searchDebounce)=\"search($event)\" flex [showUnderline]=\"true\" [debounce]=\"500\"\n                   [alwaysVisible]=\"true\">\n    </td-search-box>\n  </div>\n\n  <table td-data-table>\n    <th td-data-table-column\n        *ngFor=\"let column of columns\"\n        [sortable]=\"column.sortable\"\n        [numeric]=\"column.numeric\"\n        (sortBy)=\"sortBy\"\n        (sort)=\"sortOrder\"\n        (sortChange)=\"sort(column.name, sortOrder)\">\n      {{column.label}}\n    </th>\n    <th td-data-table-column >Details</th>\n    <tr td-data-table-row *ngFor=\"let row of filteredData\">\n      <td td-data-table-cell *ngFor=\"let column of columns\"\n          [numeric]=\"column.numeric\">\n        <app-table-row [value]=\"row\" [column]=\"column\" [format]=\"column.format\"></app-table-row>\n      </td>\n      <td td-data-table-cell>\n\n        <button class=\"small-button\"\n                (click)=\"showDetail(row)\">\n          <md-icon md-tooltip=\"details\" color=\"accent\" style=\"cursor: pointer\">info_outline</md-icon>\n        </button>\n      </td>\n    </tr>\n  </table>\n\n</div>\n<div layout=\"row\" layout-wrap class=\"pagination bgc-white-4 tc-black-4 pad-sm\">\n  <td-paging-bar [pageSizes]=\"[25, 50, 75, 100]\" [total]=\"filteredTotal\"\n                 (change)=\"page($event)\"></td-paging-bar>\n</div>\n"

/***/ }),

/***/ 986:
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" layout-wrap=\"\">\n\n  <md-card-title class=\"tc-blue-700\" layout=\"row\" flex=\"100\">Invoice#:&nbsp;{{order.invoice_number}}\n    <span flex></span>\n    <button md-icon-button=\"\" color=\"accent\" (click)=\"close()\">\n      <md-icon>close</md-icon>\n    </button>\n  </md-card-title>\n  <md-card-subtitle flex=\"100\" class=\"md-title\">Amount: {{order.total | currency: 'INR':true:'1.2-2'}}/-</md-card-subtitle>\n  <md-divider class=\"inset\" flex=\"100\"></md-divider>\n  <md-card-content flex=\"100\" layout=\"row\" layout-wrap=\"\">\n    <div layout=\"row\" flex=\"66\" layout-wrap=\"\" layout-align=\"start start\">\n      <md-card flex=\"100\">\n        <div layout-padding=\"\" class=\"tc-blue-700 md-title push-left-sm\">Items</div>\n        <md-divider></md-divider>\n        <md-list>\n          <md-list-item>\n            <md-icon md-list-avatar>view_list</md-icon>\n            <h3 md-line flex=\"45\">Products</h3>\n            <span flex=\"5\"></span>\n            <span flex=\"25\" class=\"tc-grey-900\">Qty</span>\n            <span flex=\"25\" class=\"tc-grey-900\">\n                Price\n              </span>\n          </md-list-item>\n          <md-divider></md-divider>\n          <template [ngForOf]=\"order.items\" ngFor let-item>\n            <md-list-item>\n              <md-icon md-list-avatar>apps</md-icon>\n              <h4 md-line flex=\"45\" layout-align=\"start\" class=\"tc-grey-700\">{{item.product.name}}</h4>\n              <span flex=\"5\"></span>\n              <span flex=\"25\" layout=\"row\" layout-align=\"start\" class=\"tc-grey-700\">\n                x{{item.quantity}}\n              </span>\n              <span flex=\"25\" layout-align=\"end\"  class=\"tc-grey-700\">\n                {{item.total_price | currency:'INR': true: '1.2-2'}}\n              </span>\n            </md-list-item>\n            <md-divider></md-divider>\n          </template>\n        </md-list>\n      </md-card>\n    </div>\n\n    <div layout=\"row\" flex=\"33\" layout-wrap=\"\" layout-align=\"start start\">\n      <md-card flex=\"100\" *ngIf=\"order.customer\">\n        <div layout-padding=\"\" class=\"tc-blue-700 push-left-sm md-title\">Customer</div>\n        <md-divider></md-divider>\n        <md-list>\n          <md-list-item>\n            <md-icon md-list-avatar>account_box</md-icon>\n            <h4 md-line>{{order.customer?.name}}</h4>\n            <span flex></span>\n          </md-list-item>\n          <md-divider></md-divider>\n          <md-list-item>\n            <md-icon md-list-avatar>phone</md-icon>\n            <h4 md-line>{{order.customer?.mobile_number}}</h4>\n            <span flex></span>\n          </md-list-item>\n        </md-list>\n      </md-card>\n      <md-card flex=\"100\" *ngIf=\"order.address\">\n        <div layout-padding=\"\" class=\"tc-blue-700 md-title push-left-sm\">Address</div>\n        <md-divider></md-divider>\n        <md-list>\n          <md-list-item>\n            <md-icon md-list-avatar>home</md-icon>\n            <h4 md-line>{{order.address?.name}}</h4>\n            <span flex></span>\n          </md-list-item>\n        </md-list>\n      </md-card>\n    </div>\n    <div layout=\"row\" flex=\"50\" layout-wrap=\"\" layout-align=\"center center\" layout-margin=\"\" layout-padding=\"\">\n\n    </div>\n\n  </md-card-content>\n</div>\n"

/***/ }),

/***/ 987:
/***/ (function(module, exports) {

module.exports = "<div class=\" bgc-white-4 push-sm table\" flex=\"100\" layout-wrap=\"\" layout=\"row\">\n\n  <div layout=\"row\" layout-align=\"start center\" class=\"pad-left-sm pad-right-sm\" flex=\"100\">\n      <span class=\"push-left-sm\">\n        <span class=\"md-title\">{{title}}</span>\n      </span>\n    <span flex></span>\n    <td-search-box class=\" push-right-sm\" placeholder=\"Search Here..\"\n                   (searchDebounce)=\"search($event)\" flex=\"\" [showUnderline]=\"true\" [debounce]=\"500\"\n                   [alwaysVisible]=\"true\">\n    </td-search-box>\n    <td-search-box class=\" push-right-sm\" placeholder=\"Search Here..\"\n                   (searchDebounce)=\"search($event)\" flex=\"\" [showUnderline]=\"true\" [debounce]=\"500\"\n                   [alwaysVisible]=\"true\">\n    </td-search-box>\n    <td-search-box class=\" push-right-sm\" placeholder=\"Search Here..\"\n                   (searchDebounce)=\"search($event)\" flex=\"\" [showUnderline]=\"true\" [debounce]=\"500\"\n                   [alwaysVisible]=\"true\">\n    </td-search-box>\n    <td-search-box class=\" push-right-sm\" placeholder=\"Search Here..\"\n                   (searchDebounce)=\"search($event)\" flex=\"\" [showUnderline]=\"true\" [debounce]=\"500\"\n                   [alwaysVisible]=\"true\">\n    </td-search-box>\n  </div>\n\n  <table td-data-table>\n    <th td-data-table-column\n        *ngFor=\"let column of columns\"\n        [sortable]=\"column.sortable\"\n        [numeric]=\"column.numeric\"\n        (sortBy)=\"sortBy\"\n        (sort)=\"sortOrder\"\n        (sortChange)=\"sort(column.name, sortOrder)\">\n      {{column.label}}\n    </th>\n    <th td-data-table-column>Details</th>\n    <tr td-data-table-row *ngFor=\"let row of filteredData\">\n      <td td-data-table-cell *ngFor=\"let column of columns\"\n          [numeric]=\"column.numeric\">\n        <app-table-row [value]=\"row\" [column]=\"column\" [format]=\"column.format\"></app-table-row>\n      </td>\n      <td td-data-table-cell>\n\n        <button class=\"small-button\" *ngIf=\"!row.is_void\"\n                (click)=\"toggle(row, filteredData.indexOf(row))\">\n          <md-icon md-tooltip=\"void order\" color=\"warn\" style=\"cursor: pointer\">close</md-icon>\n        </button>\n        <button class=\"small-button\" *ngIf=\"row.is_void\"\n                (click)=\"toggle(row, filteredData.indexOf(row))\">\n          <md-icon md-tooltip=\"unvoid\" color=\"primary\" style=\"cursor: pointer\">check</md-icon>\n        </button>\n        <button class=\"small-button\"\n                (click)=\"showDetail(row)\">\n          <md-icon md-tooltip=\"void order\" color=\"accent\" style=\"cursor: pointer\">info_outline</md-icon>\n        </button>\n      </td>\n    </tr>\n  </table>\n\n</div>\n<div layout=\"row\" layout-wrap=\"\" class=\"pagination bgc-white-4 tc-black-4 pad-sm\">\n  <td-paging-bar [pageSizes]=\"[25, 50, 75, 100]\" [total]=\"filteredTotal\"\n                 (change)=\"page($event)\"></td-paging-bar>\n</div>\n"

/***/ }),

/***/ 988:
/***/ (function(module, exports) {

module.exports = "<td-layout-nav-list logo=\"assets:logo\" toolbarTitle=\"Postica\"\n                    [opened]=\"false\"\n                    [mode]=\"'over'\"\n                    class=\"bgc-white-1\">\n  <div td-toolbar-content layout=\"row\" layout-align=\"start center\" flex>\n    <span flex></span>\n    Reporting\n    <span flex=\"\"></span>\n    <app-user></app-user>\n  </div>\n\n\n  <md-nav-list td-sidenav-content>\n    <app-side-menu></app-side-menu>\n  </md-nav-list>\n  <router-outlet></router-outlet>\n\n</td-layout-nav-list>\n"

/***/ }),

/***/ 989:
/***/ (function(module, exports) {

module.exports = "<td-layout-nav logo=\"assets:covalent\" class=\"dark-grey-blue\">\n  <div td-toolbar-content layout=\"row\" layout-align=\"start center\" flex>\n    <span>App Templates</span>\n    <span flex ></span>\n    <button md-icon-button [mdMenuTriggerFor]=\"notificationsMenu\">\n      <td-notification-count color=\"accent\" [notifications]=\"4\">\n        <md-icon>apps</md-icon>\n      </td-notification-count>\n    </button>\n    <md-menu #notificationsMenu=\"mdMenu\">\n      <td-menu>\n        <div td-menu-header class=\"md-subhead\">Templates</div>\n        <md-nav-list dense>\n          <a md-list-item [routerLink]=\"['/templates']\">\n            <md-icon md-list-avatar>system_update_alt</md-icon>\n            <h4 md-line><span class=\"text-wrap\">Landing Page</span></h4>\n            <p md-line>a landing page template</p>\n          </a>\n          <md-divider></md-divider>\n          <a md-list-item [routerLink]=\"['/templates/dashboard']\">\n            <md-icon md-list-avatar>dashboard</md-icon>\n            <h4 md-line><span class=\"text-wrap\">Dashboard</span></h4>\n            <p md-line>an ngx-charts dashboard template</p>\n          </a>\n          <md-divider></md-divider>\n          <a md-list-item [routerLink]=\"['/templates/email']\">\n            <md-icon md-list-avatar>email</md-icon>\n            <h4 md-line><span class=\"text-wrap\">Email App</span></h4>\n            <p md-line>an email app template</p>\n          </a>\n          <md-divider></md-divider>\n          <a md-list-item [routerLink]=\"['/templates/editor']\">\n            <md-icon md-list-avatar>view_array</md-icon>\n            <h4 md-line><span class=\"text-wrap\">IDE Editor</span></h4>\n            <p md-line>an IDE text editor app template</p>\n          </a>\n        </md-nav-list>\n        <a md-button color=\"accent\" td-menu-footer href=\"https://github.com/Teradata/covalent-quickstart/tree/develop/src/app/templates\" target=\"_blank\">\n          View Code\n        </a>\n      </td-menu>\n    </md-menu>\n    <a md-icon-button mdTooltip=\"View this code\" href=\"https://github.com/Teradata/covalent-quickstart/tree/develop/src/app/templates\" target=\"_blank\"><md-icon svgIcon=\"assets:github\"></md-icon></a>\n  </div>\n  <div class=\"bgc-black inset charts-dark\" flex>\n    <div layout-gt-xs=\"row\" layout-wrap>\n      <div flex-gt-xs=\"40\">\n        <md-card>\n          <md-card-title>Total Sales</md-card-title>\n          <md-card-subtitle>combined sales for all products</md-card-subtitle>\n          <md-divider></md-divider>\n          <div style=\"height:290px;overflow:hidden;\" class=\"pad-top-sm\">\n            <ngx-charts-area-chart-stacked\n              [scheme]=\"colorScheme\"\n              [results]=\"multi\"\n              [gradient]=\"gradient\"\n              [xAxis]=\"showXAxis\"\n              [yAxis]=\"showYAxis\"\n              [legend]=\"showLegend\"\n              [showXAxisLabel]=\"showXAxisLabel\"\n              [showYAxisLabel]=\"showYAxisLabel\"\n              [xAxisLabel]=\"xAxisLabel\"\n              [yAxisLabel]=\"yAxisLabel\">\n            </ngx-charts-area-chart-stacked>\n          </div>\n        </md-card>\n      </div>\n      <div flex-gt-xs=\"60\">\n        <div layout-gt-xs=\"row\">\n          <div flex-gt-xs=\"100\">\n            <ngx-charts-number-card\n              [scheme]=\"colorSchemeDark\"\n              [results]=\"single\">\n            </ngx-charts-number-card>\n          </div>\n        </div>\n        <div layout-gt-xs=\"row\" class=\"pull-top-xs\">\n          <div flex-gt-xs=\"100\">\n            <md-card>\n              <div style=\"height:224px;overflow:hidden;\" class=\"pad-top push-right\">\n                <ngx-charts-bar-horizontal-stacked\n                  [scheme]=\"colorScheme\"\n                  [results]=\"multi\"\n                  [gradient]=\"gradient\"\n                  [xAxis]=\"showXAxis\"\n                  [yAxis]=\"showYAxis\"\n                  [legend]=\"showLegend\"\n                  [showXAxisLabel]=\"showXAxisLabel\"\n                  [showYAxisLabel]=\"showYAxisLabel\"\n                  [xAxisLabel]=\"xAxisLabel\">\n                </ngx-charts-bar-horizontal-stacked>\n              </div>\n            </md-card>\n          </div>\n        </div>\n      </div>\n      <div flex-gt-xs=\"33\">\n        <md-card>\n          <md-card-title>Product Sales</md-card-title>\n          <md-divider></md-divider>\n          <div style=\"height:250px;\" class=\"pad-top\">\n            <ngx-charts-bar-vertical-2d\n              [scheme]=\"colorScheme\"\n              [results]=\"multi\"\n              [gradient]=\"gradient\"\n              [xAxis]=\"showXAxis\"\n              [yAxis]=\"showYAxis\"\n              [legend]=\"showLegend\"\n              [showXAxisLabel]=\"showXAxisLabel\"\n              [showYAxisLabel]=\"showYAxisLabel\"\n              [xAxisLabel]=\"xAxisLabel\"\n              [yAxisLabel]=\"yAxisLabel\">\n            </ngx-charts-bar-vertical-2d>\n          </div>\n        </md-card>\n      </div>\n      <div flex-gt-xs=\"33\">\n        <md-card>\n          <md-card-title>Product Usage</md-card-title>\n          <md-divider></md-divider>\n          <div style=\"height:250px;\" class=\"pad-top\">\n            <ngx-charts-gauge\n              [scheme]=\"colorScheme\"\n              [results]=\"single\"\n              [min]=\"0\"\n              [max]=\"100\"\n              [units]=\"'usage'\"\n              [bigSegments]=\"10\"\n              [smallSegments]=\"5\">\n            </ngx-charts-gauge>\n          </div>\n        </md-card>\n      </div>\n      <div flex-gt-xs=\"33\">\n        <md-card>\n          <md-card-title>Sales Forecast</md-card-title>\n          <md-divider></md-divider>\n          <div style=\"height:250px;\" class=\"pad-top\">\n            <ngx-charts-line-chart\n              [scheme]=\"colorScheme\"\n              [results]=\"multi\"\n              [gradient]=\"gradient\"\n              [xAxis]=\"showXAxis\"\n              [yAxis]=\"showYAxis\"\n              [legend]=\"showLegend\"\n              [showXAxisLabel]=\"showXAxisLabel\"\n              [showYAxisLabel]=\"showYAxisLabel\"\n              [xAxisLabel]=\"xAxisLabel\"\n              [yAxisLabel]=\"yAxisLabel\"\n              [autoScale]=\"autoScale\">\n            </ngx-charts-line-chart>\n          </div>\n        </md-card>\n      </div>\n    </div>\n  </div>\n  <td-layout-footer>\n    <div layout=\"row\" layout-align=\"start center\">\n      <span class=\"md-caption\">Days Shown:</span>\n      <md-slider flex thumbLabel tickInterval=\"1\" step=\"1\" min=\"1\" max=\"30\" value=\"14\"></md-slider>\n    </div>\n  </td-layout-footer>\n  <a md-fab color=\"accent\" class=\"md-fab-position-bottom-right\" style=\"bottom:20px;\" href=\"https://github.com/Teradata/covalent-quickstart/tree/develop/src/app/templates\" target=\"_blank\">\n    <md-icon>code</md-icon>\n  </a>\n</td-layout-nav>\n"

/***/ }),

/***/ 990:
/***/ (function(module, exports) {

module.exports = "<p>\n  stock-report works!\n</p>\n"

/***/ }),

/***/ 991:
/***/ (function(module, exports) {

module.exports = "<div class=\"bottom-margin\">\n  <nav>\n    <h4 class=\"bgc-blue-400\">Dashboard</h4>\n    <ul>\n      <li>\n        <a\n          [routerLinkActive]=\"['active']\"\n          [routerLinkActiveOptions]=\"{exact:true}\"\n          [routerLink]=\"['/dashboard/shops']\">Shops</a>\n      </li>\n    </ul>\n  </nav>\n  <nav>\n    <h4 class=\"bgc-blue-400\">Inventory</h4>\n    <ul>\n      <li>\n        <a\n          [routerLinkActive]=\"['active']\"\n          [routerLinkActiveOptions]=\"{exact:true}\"\n          [routerLink]=\"['/inventory/products']\">Products</a>\n      </li>\n      <li>\n        <a\n          [routerLinkActive]=\"['active']\"\n          [routerLinkActiveOptions]=\"{exact:true}\"\n          [routerLink]=\"['/inventory/brands']\">Brands</a>\n      </li>\n      <li>\n        <a\n          [routerLinkActive]=\"['active']\"\n          [routerLinkActiveOptions]=\"{exact:true}\"\n          [routerLink]=\"['/inventory/distributors']\">Distributor</a>\n      </li>\n      <li>\n        <a\n          [routerLinkActive]=\"['active']\"\n          [routerLinkActiveOptions]=\"{exact:true}\"\n          [routerLink]=\"['/inventory/salts']\">Salts</a>\n      </li>\n      <li>\n        <a\n          [routerLinkActive]=\"['active']\"\n          [routerLinkActiveOptions]=\"{exact:true}\"\n          [routerLink]=\"['/inventory/tags']\">Tags</a>\n      </li>\n      <li>\n        <a\n          [routerLinkActive]=\"['active']\"\n          [routerLinkActiveOptions]=\"{exact:true}\"\n          [routerLink]=\"['/inventory/taxes']\">Taxes</a>\n      </li>\n\n    </ul>\n  </nav>\n\n  <nav>\n    <h4 class=\"bgc-blue-400\">Stocks</h4>\n    <ul>\n      <li>\n        <a\n          [routerLinkActive]=\"['active']\"\n          [routerLinkActiveOptions]=\"{exact:true}\"\n          [routerLink]=\"['/stock/stocks']\">Stocks</a>\n      </li>\n      <li>\n        <a\n          [routerLinkActive]=\"['active']\"\n          [routerLinkActiveOptions]=\"{exact:true}\"\n          [routerLink]=\"['/stock/expiry']\">Expiry</a>\n      </li>\n      <li>\n        <a\n          [routerLinkActive]=\"['active']\"\n          [routerLinkActiveOptions]=\"{exact:true}\"\n          [routerLink]=\"['/stock/shortage']\">Shortage</a>\n      </li>\n      <li>\n        <a\n          [routerLinkActive]=\"['active']\"\n          [routerLinkActiveOptions]=\"{exact:true}\"\n          [routerLink]=\"['/stock/add-stocks']\">Add Stocks</a>\n      </li>\n      <li>\n        <a\n          [routerLinkActive]=\"['active']\"\n          [routerLinkActiveOptions]=\"{exact:true}\"\n          [routerLink]=\"['/stock/bills']\">Purchase History</a>\n      </li>\n    </ul>\n  </nav>\n\n  <nav>\n    <h4 class=\"bgc-blue-400\">Reports</h4>\n    <ul>\n      <li>\n        <a\n          [routerLinkActive]=\"['active']\"\n          [routerLinkActiveOptions]=\"{exact:true}\"\n          [routerLink]=\"['/reporting/sales']\">Sales Report</a>\n      </li>\n      <li>\n        <a\n          [routerLinkActive]=\"['active']\"\n          [routerLinkActiveOptions]=\"{exact:true}\"\n          [routerLink]=\"['/reporting/stock-report']\">Stock Report</a>\n      </li>\n      <li>\n        <a\n          [routerLinkActive]=\"['active']\"\n          [routerLinkActiveOptions]=\"{exact:true}\"\n          [routerLink]=\"['/reporting/customer-report']\">Customer Report</a>\n      </li>\n      <li>\n        <a\n          [routerLinkActive]=\"['active']\"\n          [routerLinkActiveOptions]=\"{exact:true}\"\n          [routerLink]=\"['/reporting/orders']\">Orders</a>\n      </li>\n      <li>\n        <a\n          [routerLinkActive]=\"['active']\"\n          [routerLinkActiveOptions]=\"{exact:true}\"\n          [routerLink]=\"['/reporting/customers']\">Customer</a>\n      </li>\n    </ul>\n  </nav>\n  <nav>\n    <h4 class=\"bgc-blue-400\">Staff</h4>\n    <ul>\n      <li>\n        <a\n          [routerLinkActive]=\"['active']\"\n          [routerLinkActiveOptions]=\"{exact:true}\"\n          [routerLink]=\"['/staff']\">Staff</a>\n      </li>\n\n    </ul>\n  </nav>\n  <nav>\n    <h4 class=\"bgc-blue-400\">Settings</h4>\n    <ul>\n      <li>\n        <a\n          [routerLinkActive]=\"['active']\"\n          [routerLinkActiveOptions]=\"{exact:true}\"\n          [routerLink]=\"['/dashboard/details']\">Details</a>\n      </li>\n    </ul>\n    <ul>\n      <li>\n        <a\n          [routerLinkActive]=\"['active']\"\n          [routerLinkActiveOptions]=\"{exact:true}\"\n          [routerLink]=\"['/dashboard/printer']\">Printer Config</a>\n      </li>\n    </ul>\n  </nav>\n\n\n</div>\n"

/***/ }),

/***/ 992:
/***/ (function(module, exports) {

module.exports = "<p>\n  staff-detail works!\n</p>\n"

/***/ }),

/***/ 993:
/***/ (function(module, exports) {

module.exports = "<td-layout-nav-list logo=\"assets:logo\" toolbarTitle=\"Postica\"\n                    [opened]=\"media.registerQuery('gt-md') | async\"\n                    [mode]=\"(media.registerQuery('gt-md') | async) ? 'side' : 'over'\"\n                    class=\"bgc-white-1\"  [sidenavWidth]=\"(media.registerQuery('gt-xs') | async) ? '200px' : '100%'\">\n  <div td-toolbar-content layout=\"row\" layout-align=\"start center\" flex>\n    <span flex></span>\n    <span>{{title}}</span>\n    <span flex></span>\n    <app-user></app-user>\n  </div>\n\n\n  <md-nav-list td-sidenav-content>\n  <app-side-menu></app-side-menu>\n  </md-nav-list>\n\n  <div class=\" bgc-white-4 push-sm table\" flex=\"100\" layout-wrap=\"\" layout=\"row\" layout-align=\"center center\">\n\n    <div layout=\"row\" layout-align=\"start center\" class=\"pad-left-sm pad-right-sm\" flex=\"100\">\n      <span class=\"push-left-sm\">\n        <span class=\"md-title\">{{title}}</span>\n      </span>\n      <span flex></span>\n      <td-search-box class=\" push-right-sm\" placeholder=\"Search Here..\"\n                     (searchDebounce)=\"search($event)\" flex=\"\" [showUnderline]=\"true\" [debounce]=\"500\"\n                     [alwaysVisible]=\"true\">\n      </td-search-box>\n    </div>\n\n    <table td-data-table>\n      <th td-data-table-column\n          *ngFor=\"let column of columns\"\n          [sortable]=\"column.sortable\"\n          [numeric]=\"column.numeric\"\n          (sortBy)=\"sortBy\"\n          (sort)=\"sortOrder\"\n          (sortChange)=\"sort(column.name, sortOrder)\">\n        {{column.label}}\n      </th>\n      <th td-data-table-column>Details</th>\n      <tr td-data-table-row *ngFor=\"let row of filteredData\">\n        <td td-data-table-cell *ngFor=\"let column of columns\"\n            [numeric]=\"column.numeric\">\n          <app-table-row [value]=\"row\" [column]=\"column\" [format]=\"column.format\"></app-table-row>\n        </td>\n        <td td-data-table-cell>\n\n          <button class=\"small-button\" *ngIf=\"row.active\"\n                  (click)=\"toggle(row, filteredData.indexOf(row))\">\n            <md-icon md-tooltip=\"deactivate\" color=\"warn\" style=\"cursor: pointer\">close</md-icon>\n          </button>\n          <button class=\"small-button\" *ngIf=\"!row.active\"\n                  (click)=\"toggle(row, filteredData.indexOf(row))\">\n            <md-icon md-tooltip=\"activate\" color=\"primary\" style=\"cursor: pointer\">check</md-icon>\n          </button>\n          <button class=\"small-button\"\n                  (click)=\"showDetail(row)\">\n            <md-icon md-tooltip=\"detail\" color=\"accent\" style=\"cursor: pointer\">info_outline</md-icon>\n          </button>\n        </td>\n      </tr>\n    </table>\n\n  </div>\n  <div layout=\"row\" layout-wrap=\"\" class=\"pagination bgc-white-4 tc-black-4 pad-sm\">\n    <td-paging-bar [pageSizes]=\"[25, 50, 75, 100]\" [total]=\"filteredTotal\"\n                   (change)=\"page($event)\"></td-paging-bar>\n  </div>\n</td-layout-nav-list>\n\n\n"

/***/ }),

/***/ 994:
/***/ (function(module, exports) {

module.exports = "<div fxLayoutWrap=\"\" fxLayout=\"column\" class=\"pad-sm\">\n  <div class=\"md-content bgc-white-4\" fxLayoutFill>\n    <td-steps  mode=\"'vertical'\">\n      <td-step #step1\n               [active]=\"state===1\" [disabled]=\"disabled\" [state]=\"stateStep1\" >\n        <ng-template td-step-label><span>Select Shop</span></ng-template>\n        <ng-template td-step-actions>\n          <div fxLayout=\"row\" fxLayoutWrap=\"\" fxFlex=\"100\">\n            <ng-template ngFor [ngForOf]=\"shops\" let-item >\n              <md-card class=\"md-shadow-bottom-z-2\" fxFlex=\"33\">\n                <md-card-content fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                  <md-icon class=\"md-48\" color=\"primary\">{{item.name| truncate:1}}</md-icon>\n                </md-card-content>\n                <md-toolbar fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"bgc-orange-50\"\n                            (click)=\"setShop(item);step1.close()\" style=\"cursor: pointer\">\n                  <a  style=\"text-decoration: none\" >\n                    <span class=\"md-title tc-accent\">{{item.name}}</span>\n                  </a>\n\n                </md-toolbar>\n              </md-card>\n            </ng-template>\n          </div>\n        </ng-template>\n        <ng-template td-step-summaryclass=\"tc-grey-500\">\n          <!--Shop Selected: {{shop?.name}}-->\n        </ng-template>\n      </td-step>\n      <td-step #step2  [state]=\"stateStep2\" [disabled]=\"disabled\" [active]=\"state===2\">\n        <ng-template td-step-label><span>Select Distributor or Item Wise Entry</span></ng-template>\n        <ng-template td-step-actions>\n          <div fxLayout=\"row\" fxLayoutWrap=\"\" fxFlex=\"100\">\n            <md-card fxFlex=\"33\" class=\" md-shadow-bottom-z-2\">\n              <md-card-content fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                <md-icon class=\"md-48\" color=\"primary\">D</md-icon>\n              </md-card-content>\n              <md-toolbar fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"bgc-orange-50\"\n                          (click)=\"setEntryType('distributor');step2.close()\"  style=\"cursor: pointer\">\n                <a  style=\"text-decoration: none\">\n                  <span class=\"md-title tc-accent\">Distributor Wise</span>\n                </a>\n\n              </md-toolbar>\n            </md-card>\n            <md-card fxFlex=\"33\" class=\" md-shadow-bottom-z-2\">\n              <md-card-content fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                <md-icon class=\"md-48\" color=\"primary\">I</md-icon>\n              </md-card-content>\n              <md-toolbar fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"bgc-orange-50\"\n                          (click)=\"setEntryType('item');step2.close()\" style=\"cursor: pointer\">\n                <a  style=\"text-decoration: none\">\n                  <span class=\"md-title tc-accent\">Item Wise</span>\n                </a>\n\n              </md-toolbar>\n            </md-card>\n          </div>\n        </ng-template>\n        <ng-template td-step-summary=\"\">\n          Entry Mode Selected: {{entryType}}\n        </ng-template>\n      </td-step>\n      <td-step #step3 label=\"Add Stock\"\n               [state]=\"stateStep3\" [disabled]=\"disabled\" [active]=\"state===3\">\n\n        <form fxLayout=\"row\" fxLayoutWrap=\"\" fxFlex=\"100\" *ngIf=\"shop?.id && entryType =='distributor'\">\n\n          <div fxLayout=\"row\" fxLayout-margin=\"\" fxFlex=\"100\">\n            <div fxLayout-margin=\"\" fxFlex>\n              <tag-input [(ngModel)]=\"distributors\" name=\"distributor\" [placeholder]=\"'Enter Distributor...'\"\n                         (onAdd)=\"addDistributor($event)\" (onRemove)=\"removeDistributor($event)\"\n                         [secondaryPlaceholder]=\"'Enter Distributor...'\" [onlyFromAutocomplete]=\"true\" [maxItems]=\"1\"\n              >\n                <tag-input-dropdown [autocompleteObservable]='getDistributors'  [appendToBody]=\"false\"\n                                    [identifyBy]=\"'id'\"\n                                    [displayBy]=\"'name'\">\n                  <ng-template let-item=\"item\" let-index=\"index\">\n                    {{ item.name }}\n                  </ng-template>\n                </tag-input-dropdown>\n              </tag-input>\n            </div>\n            <div fxLayout-margin=\"\" fxFlex>\n              <md-input-container fxFlex=\"100\"  fxLayout-margin>\n                <input mdInput type=\"textarea\" [placeholder]=\"'Enter Reference Number'\" name=\"reference_number\"\n                [(ngModel)]=\"bill.reference_number\">\n              </md-input-container>\n            </div>\n            <div fxLayout-margin=\"\" fxFlex>\n              <md-input-container  fxLayout-margin fxFlex=\"100\">\n                <input mdInput type=\"date\" [placeholder]=\"'Bill Date'\" name=\"bill_date\" [(ngModel)]=\"bill.purchase_date\">\n              </md-input-container>\n            </div>\n\n          </div>\n\n          <ng-template ngFor [ngForOf]=\"stocks\" let-item let-i=\"index\">\n            <div fxLayout=\"row\" fxLayoutWrap=\"\" fxFlex=\"100\" >\n              <div fxFlex-shrink fxLayout-margin fxLayout-padding=\"\" class=\"push-left-md\">\n                <input #barcodeCopy  type=\"checkbox\" [name]=\"'add_'+i\"\n                       [value]=\"true\" checked\n                       [(ngModel)]=\"item.add\" />\n              </div>\n              <md-input-container fxFlex=\"35\" fxLayout-margin class=\"push-left-md\">\n                <input mdInput [disabled]=\"true\" [readOnly]=\"true\" [value]=\"item.product.name | truncate: 40\" />\n              </md-input-container>\n              <md-input-container fxFlex=\"10\" fxLayout-margin class=\"push-left-md\">\n                <input mdInput  placeholder=\"Enter Quantity\" type=\"number\" [name]=\"'units_purchased'+i\" [value]=\"item.units_purchased\"\n                       [(ngModel)]=\"item.units_purchased\" min=\"0\" />\n              </md-input-container>\n              <md-input-container fxFlex=\"5\" fxLayout-margin class=\"push-left-md\">\n                <input mdInput [value]=\"item.quantity_label\" [readOnly]=\"true\" />\n              </md-input-container>\n              <md-input-container fxFlex=\"15\" fxLayout-margin class=\"push-left-md\">\n                <input mdInput  placeholder=\"Enter Purchase Amount\" type=\"number\" [name]=\"'purchase_amount'+i\"\n                       [(ngModel)]=\"item.purchase_amount\" min=\"0\" [value]=\"item.purchase_amount\"/>\n              </md-input-container>\n              <md-input-container fxFlex=\"15\" fxLayout-margin class=\"push-left-md\">\n                <input mdInput placeholder=\"Enter Selling Amount\" type=\"number\" min=\"0\" [name]=\"'selling_amount'+i\"\n                       [(ngModel)]=\"item.selling_amount\" [value]=\"item.selling_amount\" />\n              </md-input-container>\n\n            </div>\n\n            <!--<div fxLayout=\"row\" fxLayoutWrap=\"\" fxFlex=\"100\" >-->\n              <!--<div fxFlex>-->\n\n              <!--</div>-->\n              <!--<md-input-container fxFlex=\"20\" fxLayout-margin>-->\n                <!--<input mdInput placeholder=\"Enter Expiry\" type=\"date\" [name]=\"'expiry'+i\"-->\n                       <!--[(ngModel)]=\"item.expiry_date\" />-->\n              <!--</md-input-container>-->\n\n              <!--<md-input-container fxFlex=\"20\" fxLayout-margin>-->\n                <!--<input mdInput  placeholder=\"Enter Barcode Copies\" type=\"number\"-->\n                       <!--[value]=\"item.units_purchased\" name=\"'sasas_'+i\" [(ngModel)]=\"item.copies\"-->\n                        <!--min=\"0\" />-->\n              <!--</md-input-container>-->\n              <!--<button md-raised-button=\"\" color=\"primary\">Print</button>-->\n            <!--</div>-->\n\n          </ng-template>\n          <div fxLayout=\"row\" fxLayout-margin=\"\" fxLayoutAlign=\"center center\" fxFlex=\"100\" *ngIf=\"distributors.length\">\n            <md-card-actions fxLayout=\"row\" fxLayoutAlign=\"center center\" fxFlex class=\"push-top\">\n              <button md-icon-button=\"\" md-fab=\"\" md-raised-button=\"\" md-tooltip=\"cancel\"\n                      (click)=\"close()\" class=\"pad-xs push-xs\" color=\"accent\">\n                <md-icon  class=\"md-24\" >close</md-icon>\n              </button>\n              <span class=\"pad\"></span>\n              <button md-icon-button=\"\" md-fab=\"\" md-raised-button=\"\"\n                      (click)=\"saveBill()\" class=\"pad-xs push-xs\"  color=\"primary\" md-tooltip=\"save\"\n              ><md-icon class=\"md-24\" >done</md-icon>\n              </button>\n\n            </md-card-actions>\n          </div>\n        </form>\n\n\n        <form fxLayout=\"row\" fxLayoutWrap=\"\" fxFlex=\"100\" *ngIf=\"shop?.id && entryType =='item'\" #stockForm=\"ngForm\">\n\n          <div fxLayout=\"row\" fxLayout-margin=\"\" fxFlex=\"100\">\n            <div fxLayout-margin=\"\" fxFlex>\n              <tag-input [(ngModel)]=\"products\" name=\"product\" [placeholder]=\"'Enter Product...'\"\n                         (onAdd)=\"addProduct($event)\" (onRemove)=\"removeProduct($event)\"\n                         [secondaryPlaceholder]=\"'Enter Product...'\" [onlyFromAutocomplete]=\"true\" [maxItems]=\"1\"\n              >\n                <tag-input-dropdown [autocompleteObservable]='getProducts'  [appendToBody]=\"false\"\n                                    [identifyBy]=\"'id'\"\n                                    [displayBy]=\"'name'\">\n                  <ng-template let-item=\"item\" let-index=\"index\">\n                    {{ item.name }}\n                  </ng-template>\n                </tag-input-dropdown>\n              </tag-input>\n            </div>\n\n          </div>\n\n          <ng-template ngFor [ngForOf]=\"stocks\" let-item let-i=\"index\">\n            <div fxLayout=\"row\" fxLayoutWrap=\"\" fxFlex=\"100\" >\n              <md-input-container fxFlex fxLayout-margin>\n                <input mdInput [disabled]=\"true\" [readOnly]=\"true\" [value]=\"item.product.name\" />\n              </md-input-container>\n              <md-input-container fxFlex fxLayout-margin>\n                <input mdInput  placeholder=\"Enter Quantity\" type=\"number\" [name]=\"'units_purchased'+i\" [value]=\"item.units_purchased\"\n                       [(ngModel)]=\"item.units_purchased\" min=\"0\" required/>\n              </md-input-container>\n              <md-input-container fxFlex fxLayout-margin>\n                <input mdInput  placeholder=\"Enter Purchase Amount\" type=\"number\" [name]=\"'purchase_amount'+i\"\n                       [(ngModel)]=\"item.purchase_amount\" min=\"0\" [value]=\"item.purchase_amount\" required/>\n              </md-input-container>\n              <md-input-container fxFlex fxLayout-margin>\n                <input mdInput placeholder=\"Enter Selling Amount\" type=\"number\" min=\"0\" [name]=\"'selling_amount'+i\"\n                       [(ngModel)]=\"item.selling_amount\" [value]=\"item.selling_amount\" required />\n              </md-input-container>\n              <md-input-container fxFlex fxLayout-margin>\n                <input mdInput placeholder=\"Enter Expiry\" type=\"date\" [name]=\"'expiry'+i\" required\n                       [(ngModel)]=\"item.expiry_date\" />\n              </md-input-container>\n            </div>\n\n          </ng-template>\n          <div fxLayout=\"row\" fxLayout-margin=\"\" fxLayoutAlign=\"center center\" fxFlex=\"100\" *ngIf=\"products.length\">\n            <md-card-actions fxLayout=\"row\" fxLayoutAlign=\"center center\" fxFlex class=\"push-top\">\n              <button md-icon-button=\"\" md-fab=\"\" md-raised-button=\"\" md-tooltip=\"cancel\"\n                      (click)=\"step3.close()()\" class=\"pad-xs push-xs\" color=\"warn\">\n                <md-icon  class=\"md-24\" >close</md-icon>\n              </button>\n              <span class=\"pad\"></span>\n              <button md-icon-button=\"\" md-fab=\"\" md-raised-button=\"\"  [disabled]=\"!stockForm.form.valid\"\n                      (click)=\"saveProductStock()\" class=\"pad-xs push-xs\"  color=\"accent\" md-tooltip=\"save\"\n              ><md-icon class=\"md-24\" >done</md-icon>\n              </button>\n\n            </md-card-actions>\n          </div>\n        </form>\n\n      </td-step>\n    </td-steps>\n  </div>\n\n</div>\n\n\n"

/***/ }),

/***/ 995:
/***/ (function(module, exports) {

module.exports = "<div class=\" bgc-white-4 push-sm table\" fxFlex=\"100\" fxLayoutWrap=\"\" fxLayout=\"row\" fxLayoutAlign=\"center\">\n\n  <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"pad-left-sm pad-right-sm\" fxFlex=\"100\">\n      <span class=\"push-left-sm\">\n        <span class=\"md-title\">{{title}}</span>\n      </span>\n    <span fxFlex></span>\n    <td-search-box class=\" push-right-sm\" placeholder=\"Search Product..\"\n                   (searchDebounce)=\"searchProduct($event)\" fxFlex=\"\" [showUnderline]=\"true\" [debounce]=\"500\"\n                   [alwaysVisible]=\"true\">\n    </td-search-box>\n    <td-search-box class=\" push-right-sm\" placeholder=\"Search Distributor..\"\n                   (searchDebounce)=\"searchDistributor($event)\" fxFlex=\"\" [showUnderline]=\"true\" [debounce]=\"500\"\n                   [alwaysVisible]=\"true\">\n    </td-search-box>\n  </div>\n\n  <table td-data-table>\n    <th td-data-table-column\n        *ngFor=\"let column of columns\"\n        [sortable]=\"column.sortable\"\n        [numeric]=\"column.numeric\"\n        (sortBy)=\"sortBy\"\n        (sort)=\"sortOrder\"\n        (sortChange)=\"sort(column.name, sortOrder)\">\n      {{column.label}}\n    </th>\n    <th td-data-table-column  *ngIf=\"editRow\" [numeric]=\"true\">Details</th>\n    <tr td-data-table-row *ngFor=\"let row of filteredData\">\n      <td td-data-table-cell *ngFor=\"let column of columns\"\n          [numeric]=\"column.numeric\">\n        <app-table-row [value]=\"row\" [column]=\"column\" [format]=\"column.format\"></app-table-row>\n      </td>\n      <td td-data-table-cell  *ngIf=\"editRow\" [numeric]=\"true\">\n        <button md-icon-button=\"\" (click)=\"editRow()\"><md-icon color=\"accent\">info</md-icon></button>\n      </td>\n    </tr>\n  </table>\n  <div fxLayout=\"row\" fxLayoutWrap=\"\" class=\"pagination bgc-white-4 tc-black-4 pad-sm md-shadow-bottom-z-1\"\n       fxLayoutAlign=\"center center\" fxFlex=\"100\">\n    <td-paging-bar [pageSizes]=\"[50, 75, 100]\" [total]=\"filteredTotal\"\n                   (change)=\"page($event)\"></td-paging-bar>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ 996:
/***/ (function(module, exports) {

module.exports = "<div>\n  <md-card-title>{{bill.distributor?.name}}</md-card-title>\n  <md-card-subtitle>Ref#{{bill.reference_number}}</md-card-subtitle>\n  <md-divider></md-divider>\n\n  <h4>Items</h4>\n\n  <md-list>\n    <md-list-item>\n      <md-icon md-list-avatar>list</md-icon>\n      <h3 md-line>Product</h3>\n      <span fxFlex=\"\"></span>\n      <span fxFlex=\"10\" class=\"pad-left md-body-1 tc-grey-500\">Stock</span>\n      <span fxFlex=\"10\" class=\"pad-left md-body-1 tc-grey-500\">Sold</span>\n      <span fxFlex=\"10\" class=\"pad-left md-body-1 tc-grey-500\">Expiry</span>\n      <span fxFlex=\"20\" class=\"pad-left md-body-1 tc-grey-500\">Batch#</span>\n      <span fxFlex=\"20\" class=\"pad-left md-body-1 tc-grey-500\">Purchasing</span>\n      <span fxFlex=\"20\" class=\"pad-left md-body-1 tc-grey-500\">Selling Price</span>\n\n    </md-list-item>\n    <ng-template ngFor [ngForOf]=\"bill.purchased_items\" let-item>\n      <md-list-item>\n        <md-icon md-list-avatar>list</md-icon>\n        <h3 md-line>{{item.product_name}}</h3>\n        <span fxFlex></span>\n        <span fxFlex=\"10\" class=\"pad-left md-body-1 tc-grey-500\">{{item.units_purchased}}</span>\n        <span fxFlex=\"10\" class=\"pad-left md-body-1 tc-grey-500\">{{item.units_sold}}</span>\n        <span fxFlex=\"10\" class=\"pad-left md-body-1 tc-grey-500\">{{item.expiry | date: 'medium'}}</span>\n        <span fxFlex=\"20\" class=\"pad-left md-body-1 tc-grey-500\">{{item.batch_number}}</span>\n        <span fxFlex=\"20\" class=\"pad-left md-body-1 tc-grey-500\">{{item.purchase_amount | currency: 'INR':true:'1.2-2'}}</span>\n        <span fxFlex=\"20\" class=\"pad-left md-body-1 tc-grey-500\">{{item.selling_amount | currency: 'INR':true:'1.2-2'}}</span>\n\n      </md-list-item>\n    </ng-template>\n    <md-divider class=\"push-top\"></md-divider>\n    <md-list-item>\n      <md-icon md-list-avatar>attach_money</md-icon>\n      <h3 md-line>Amount</h3>\n      <span fxFlex></span>\n      <span fxFlex=\"70\"></span>\n      <span fxFlex=\"20\" class=\"pad-left md-subhead tc-grey-700\">{{bill.bill_amount | currency: 'INR':true:'1.2-2'}}</span>\n    </md-list-item>\n    <md-list-item>\n      <md-icon md-list-avatar>perm_contact_calendar</md-icon>\n      <h3 md-line>Date</h3>\n      <span fxFlex></span>\n      <span fxFlex=\"70\"></span>\n      <span fxFlex=\"20\" class=\"pad-left md-subhead tc-grey-700\">{{bill.purchase_date}}</span>\n    </md-list-item>\n  </md-list>\n\n</div>\n"

/***/ }),

/***/ 997:
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" class=\"\" layout-wrap=\"\" layout-align=\"center center\">\n\n  <app-base-stock-table [columns]=\"columns\" [filter]=\"filter\" [addRow]=\"\" [editRow]=\"editRow\" [title]=\"title\"\n                        [toggleRow]=\"\" [include]=\"include\" [filters]=\"filters\" [only]=\"only\">\n\n  </app-base-stock-table>\n\n\n</div>\n"

/***/ }),

/***/ 998:
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" class=\"\" layout-wrap=\"\" layout-align=\"center center\">\n\n  <app-base-stock-table [columns]=\"columns\" [filter]=\"filter\" [addRow]=\"\" [editRow]=\"\" [title]=\"title\"\n                        [toggleRow]=\"\" [include]=\"include\" [filters]=\"filters\">\n\n  </app-base-stock-table>\n\n\n</div>\n"

/***/ }),

/***/ 999:
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" class=\"\" layout-wrap=\"\" layout-align=\"center center\">\n\n<app-base-stock-table [columns]=\"columns\" [filter]=\"filter\" [addRow]=\"\" [editRow]=\"\" [title]=\"title\"\n                [toggleRow]=\"\" [include]=\"include\" [filters]=\"filters\" [only]=\"only\">\n\n</app-base-stock-table>\n\n\n</div>\n"

/***/ })

},[1253]);
//# sourceMappingURL=main.bundle.js.map