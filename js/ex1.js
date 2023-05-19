$(document).ready(function () {
    test50(50, 12);
    test50(25, 25);
    test50(23, 215);
    test50(50, 50);

});

function test50(a, b) {
    if (a == 50 || b == 50 || a + b == 50) {
        document.write(true);
        document.write("<br/>");

    }
    else {
        document.write(false);
        document.write("<br/>");

    }
}