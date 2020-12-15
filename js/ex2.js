var a = [1, 2, 31, 34, 22, 31, 2, 34];
var b = [];
var c = [];

var len = a.length;
for (var i = 0; i < len; i++) {
    if (b.indexOf(a[i]) === -1) {
        b.push(a[i]);
    }
    else {
        c.push(a[i]);
    }
}
c.sort();
document.write("Duplicate value is "+c);
