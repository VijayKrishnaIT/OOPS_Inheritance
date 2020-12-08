/*
class class_one {
    constructor(public arg1: any) { }
}

class class_two extends class_one { }

let obj: class_two = new class_two("Hello");
console.log(obj.arg1);   //Hello
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
class class_one {
    arg1: any;
    constructor(param1: any) {
        this.arg1 = param1;
    }
    getArg1(): any {
        return this.arg1;
    }
}

class class_two extends class_one {
    //overiding will happen if we call arg1
    arg2: any;
    constructor(param1: any, param2: any) {
        super(param2);
        this.arg2 = param1;
    }
    getArg2(): any {
        return this.arg2;
    }
}

let obj: class_two = new class_two("Hello1", "Hello2");
console.log(obj.getArg1(), obj.getArg2()); // Hello2 Hello1
*/
/*
class class_one {
    arg1: any;
    constructor(param1: any) {
        this.arg1 = param1;
    }
}

class class_two extends class_one {
    arg2: any;
    constructor(param1: any, param2: any) {
        super(param1)
        this.arg2 = param2;
    }
}

*/
/*
//multi level inheritance
class class_three extends class_two {
    arg3: any;
    constructor(param1: any, param2: any, param3: any) {
        super(param1, param2);
        this.arg3 = param3;
    }
}

let obj: class_three = new class_three("hello1", "hello2", "hello3");
console.log(obj.arg1, obj.arg2, obj.arg3);  //hello1 hello2 hello3

*/
/*
//multiple inheritance


class class_one { }
class class_two { }
class class_three extends from class_one, class_two { }
*/
/*
class class_one {
    arg1: any = "Hello1";
}
class class_two extends class_one {
    arg2: any = "Hello2";
}

class class_three extends class_one {
    arg2: any = "Hello3";
};

class class_four extends class_one {
    arg2: any = "Hello4";
};

let obj1: class_two = new class_two();
console.log(obj1.arg1, obj1.arg2);

let obj2: class_three = new class_three();
console.log(obj2.arg1, obj2.arg2);

let obj3:class_four = new class_four();
console.log(obj3.arg1, obj3.arg2);

*/
//hirarichal inheritance
var class_one = /** @class */ (function () {
    function class_one() {
        this.arg1 = "Hello_1";
    }
    return class_one;
}());
;
var class_two = /** @class */ (function (_super) {
    __extends(class_two, _super);
    function class_two() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.arg2 = "Hello_2";
        return _this;
    }
    return class_two;
}(class_one));
;
var class_three = /** @class */ (function (_super) {
    __extends(class_three, _super);
    function class_three() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.arg2 = "Hello_3";
        return _this;
    }
    return class_three;
}(class_one));
;
var class_four = /** @class */ (function (_super) {
    __extends(class_four, _super);
    function class_four() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.arg2 = "Hello_4";
        return _this;
    }
    return class_four;
}(class_one));
;
var obj1 = new class_two();
console.log(obj1.arg1, obj1.arg2); //Hello_1 Hello_2
var obj2 = new class_three();
console.log(obj2.arg1, obj2.arg2); //Hello_1 Hello_3
var obj3 = new class_four();
console.log(obj3.arg1, obj3.arg2); //Hello_1 Hello_4
/*
//Hybrid

class class_one { }

class class_two extends class_one { }

class class_three extends class_one { }

class class_four extends class_two, class_three { }


//Hybrid inheritance also not supported by TypeScript


*/
