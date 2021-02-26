const test = (mail) =>{
    let regex = /\w{1,}\@gmail\.com/im;
    return regex.test(mail);
}

let mail = prompt('enter google mail');
alert(test(mail));