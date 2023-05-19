function input(val) {
    document.getElementById("inputno").value += val;
}

function clr() {
    document.getElementById("inputno").value = " ";
}

function result() {
    try {
        var x = eval(document.getElementById("inputno").value);

    }
    catch (e) {
        var x = 'Error';
    }
    document.getElementById("inputno").value = x;
}
