let Week = function (lang, ...days){
    this.language =lang;
    this.day = days; 
    this.whatTheDay = function(num){
        return this.day[num-1];
    }
}

let en = new Week('en', 'Sunday', 'Monday', 'Tuesday', 'Thirsday', 'Friday', 'Saturday');
let ua = new Week('ua', 'Понеділок', 'Вівторок', 'Середа', 'Чертверг', 'Пятниця', 'Субота', 'Неділя');

let isWork = true;
while(isWork){
    let language = prompt('Choose \'ua\' or \'en\'\:').toUpperCase();
    if(language == 'UA'){
        let d = Number.parseInt(prompt('Який день тижня показати?'));
        let day = ua.whatTheDay(d);
        alert(day);
        isWork = false;
    }
    else if(language == 'EN'){
        let d = Number.parseInt(prompt('What day of the week i must show?'));
        let day = en.whatTheDay(d);
        alert(day);
        isWork = false;
    }
    else{
        alert('Щось пішло не так, спробуйте ще раз');
        isWork;
    }
}