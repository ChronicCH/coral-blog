//变量提升经典题
var a= [];
for (var i= 0;i<10;i++)
    {
        a[i] = function(){
            console.log(i)
        }
    }
a[6]();
//判断布尔
if ([]) {
    console.log('true');
}
// true

if ({}) {
    console.log('true');
}

console.log(function () { /*
line 1
line 2
line 3
*/})

var obj = {a: 1, b: 2, c: 3};

for (var i in obj) {
    console.log('键名：', i);
    console.log('键值：', obj[i]);
}

var obj = {};
if ('toString' in obj) {
    console.log(obj.hasOwnProperty('toString')) // false
}