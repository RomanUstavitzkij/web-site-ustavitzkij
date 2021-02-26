let NumberObject = function (number) {
    number > 1000 ? this.thousand = number.slice(-4, -3) : this.thousand = 0;
    number > 100 ? this.hundred = number.slice(-3, -2) : this.hundred = 0;
    number > 10 ? this.tenth = number.slice(-2, -1) : this.tenth = 0;
    this.oneth = number.slice(-1);
}

NumberObject.prototype.show = function () {
    alert('тисячі: ' + this.thousand +
        '\nсотні: ' + this.hundred +
        '\nдесятки: ' + this.tenth +
        '\nодиниці: ' + this.oneth)
}

const numb = prompt('enter number 0-9999');
if (numb >= 0 & numb <= 9999) {
    let n = new NumberObject(numb);
    n.show();
}
else {
    let n = new NumberObject(0);
    n.show();
}