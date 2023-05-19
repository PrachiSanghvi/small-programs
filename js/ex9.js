function stringreplace(str) {

    return str.replace(/[0-9]/, '$').replace(/[0-9]/g, '');
}
document.write("Replace First digit with $ and remove other digit");
document.write(stringreplace('abc1dabc'));
document.write("<br/>");
document.write(stringreplace('p3yth4on5'));