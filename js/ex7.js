var a = [2, 2, 4, 1, 5, 6, 6, 4, 8];
var b = [];
var c;
var len = a.length;
for (var i = 0; i < len; i++) {
    if (i + 1 == len) {
        b.push(a[i] * 2);
    } else {
        b.push(a[i] + a[i + 1]);
        i++;
    }
}

document.write("Sum of pair is :" + b);