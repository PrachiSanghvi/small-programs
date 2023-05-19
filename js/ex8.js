function prefix_sums(n) {
    var sum = [];
    var len = n.length;
    for (var i = 0; i < len; i++) {
        sum[i] = 0;
        for (var j = 0; j < i + 1; j++) {
            sum[i] += n[j];
        }
    }
    return sum;
}
document.write("Prefix Sum is:<br/>")
document.write(prefix_sums([1, 2, 3, 4, 5]));
document.write("<br/>");
document.write(prefix_sums([1, 2, -3, 4, 5]));
