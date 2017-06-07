//字符串替换的思想
function tmpl(str, obj) {
    if (typeof str === 'string') {
        console.log(arguments);
        return str.replace(/<%=\s*([^%>]+)\s*%>/g, function() {
            var key = arguments[1];
            console.log(key);
            console.log(arguments);
            return obj[key];
        });
    }
}

var str = "Hello, <%= name%>";
var obj = {name: "Lzz"};

console.log(tmpl(str,obj));