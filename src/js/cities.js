const mapRegions = document.querySelector(".map__regions");
const regions = mapRegions.getElementsByClassName("region");
const map = document.querySelector(".map");
const mapPictureBox = map.querySelector(".map__picture-box"); 

const cityСoordinates = [
    {
        city: 'Москва',
        left: '155px',
        top: '392.82px',
        fontSize: '14px'
    },
    {
        city: 'Калининград',
        left: '42px', 
        top: '292.5px', 
    },
    {
        city: 'Н. Новгород',
        left: '199.17px',
        top: '428.96px',
    },
    {
        city: 'Санкт-Петербург',
        left: '131px', //101 -30
        top: '301.6px', //221 -80
        fontSize: '16px'
    },
    {
        city: 'Ярославль',
        left: '190px',
        top: '365.82px',
    },
    {
        city: 'Воронеж',
        left: '108.5px',
        top: '414.83px',
    },
    {
        city: 'Белгород',
        left: '104.5px',
        top: '445px',
    },
    {
        city: 'Самара',
        left: '206px',
        top: '475.1px',
    },
    {
        city: 'Казань', 
        left: '269.17px',
        top: '467.1px',
    },
    {
        city: 'Ростов-на-Дону',
        left: '74.38px',
        top: '488.1px',
        fontSize: '14px'
    },
    {
        city: 'Уфа',
        left: '280.17px',
        top: '505.1px',
    },
    {
        city: 'Краснодар',
        left: '56.38px',
        top: '547.5px',
        fontSize: '14px'
    },
    {
        city: 'Волгоград',
        left: '120px',
        top: '529.5px',
    },
    {
        city: 'Оренбург',
        left: '233.17px',
        top: '533.5px',
    },
    {
        city: 'Ижевск',
        left: '344.9px',
        top: '458.1px',
    },
    {
        city: 'Пермь',
        left: '398px',
        top: '468.1px',
        fontSize: '14px'
    },
    {
        city: 'Сургут',
        left: '454px',
        top: '480.1px',
    },
    {
        city: 'Екатеринбург',
        left: '324.9px',
        top: '497.1px',
    },
    {
        city: 'Тюмень',
        left: '426.5px',
        top: '531.5px',
        fontSize: '14px'
    },
    {
        city: 'Челябинск',
        left: '325px',
        top: '531.5px',
        fontSize: '14px'
    },
    {
        city: 'Омск',
        left: '480.5px',
        top: '642.66px',
        fontSize: '14px'
    },
    {
        city: 'Новосибирск',
        left: '516px',
        top: '622.66px',
    },
    {
        city: 'Томск',
        left: '596px',
        top: '606.66px',
        fontSize: '14px',
        flexDirection: 'column-reverse'
    },
    {
        city: 'Красноярск',
        left: '643px',
        top: '622.66px',
    },
    {
        city: 'Иркутск',
        left: '704px',
        top: '656.66px',
        fontSize: '14px'
    },
    {
        city: 'Хабаровск',
        left: '985px',
        top: '644.66px',
        fontSize: '16px',
        flexDirection: 'column-reverse'
    },
    {
        city: 'Владивосток',
        left: '966.13px',
        top: '742.92px',
        fontSize: '16px'
    }
]

const elementGeneratir = (titles, first = false) => { 
    if (titles === 'Все') {
        titles = cityСoordinates.map( city => city.city)
    }
    const selectCity = cityСoordinates.filter(el => titles.includes(el.city))
    const elements = selectCity.map(el => {
        let div = document.createElement('div');

        div.style.left = el.left;
        div.style.top = el.top;
        
        if (first) {
            div.style.left = parseInt(el.left) - 30 + 'px';
            div.style.top = parseInt(el.top) - 80 + 'px';
        }

        if (mapPictureBox.scrollHeight === 443) {
            div.style.left = parseInt(el.left) - 70 + 'px';
            div.style.top = parseInt(el.top) - 126 + 'px';
        } 
        
        div.style.fontSize = el.fontSize ? el.fontSize : '12px';
        div.style.flexDirection = el.flexDirection ? el.flexDirection : 'column;';
        div.className = "city-container";
        div.innerHTML = `<div class="city-dot"></div><span class="city-name">${el.city}</span>`;
        return div
    })
    return elements
}

const swichCities = (current, allCities) => {
    switch (current) {
        case 'Все':
                allCities.forEach(city => city.remove());   // удаление
                elementGeneratir('Все').forEach(el => map.appendChild(el)) //генерация всех городов
            break;
        case 'Москва':
                allCities.forEach(city => city.remove());
                elementGeneratir(['Москва']).forEach(el => map.appendChild(el)) //генерация города
            break;
        case 'Центр':
                allCities.forEach(city => city.remove());     
                elementGeneratir(['Ярославль', 'Воронеж', 'Белгород']).forEach(el => map.appendChild(el))
            break;
        case 'Северо-запад':
                allCities.forEach(city => city.remove());     
                elementGeneratir(['Санкт-Петербург', 'Калининград']).forEach(el => map.appendChild(el))
            break;
        case 'Юг':
                allCities.forEach(city => city.remove());     
                elementGeneratir(['Ростов-на-Дону', 'Волгоград', 'Краснодар']).forEach(el => map.appendChild(el))
            break;
        case 'Волга':
                allCities.forEach(city => city.remove());     
                elementGeneratir(['Н. Новгород', 'Самара', 'Казань', 'Уфа', 'Оренбург']).forEach(el => map.appendChild(el))
            break;
        case 'Урал':
                allCities.forEach(city => city.remove());     
                elementGeneratir(['Ижевск', 'Пермь', 'Сургут', 'Екатеринбург', 'Тюмень', 'Челябинск']).forEach(el => map.appendChild(el))
            break;
        case 'Сибирь':
                allCities.forEach(city => city.remove());     
                elementGeneratir(['Омск', 'Новосибирск', 'Томск', 'Красноярск', 'Иркутск']).forEach(el => map.appendChild(el))
            break;
        case 'Дальний восток':
                allCities.forEach(city => city.remove());     
                elementGeneratir(['Хабаровск', 'Владивосток']).forEach(el => map.appendChild(el))
            break;
        default:
                allCities.forEach(city => city.remove()); 
                elementGeneratir('Все').forEach(el => map.appendChild(el))
            break;
    }
}


window.addEventListener("DOMContentLoaded", elementGeneratir('Все', true).forEach(el => mapPictureBox.appendChild(el))) //загрузка всех городов после отрисовки DOM
//allCities.forEach(city => city.remove());
//window.addEventListener("DOMContentLoaded", elementGeneratir('Все').forEach(el => mapPictureBox.appendChild(el))) //загрузка всех городов после отрисовки DOM

for (let i = 0; i < regions.length; i++) {
    regions[i].addEventListener("click", function () {
        
        const current = document.getElementsByClassName("region-activ");
        const currentLine = document.getElementsByClassName("line-activ");

        const parent = currentLine[0].parentNode;
        parent.removeChild(currentLine[0])

        current[0].className = current[0].className.replace(" region-activ", "");
        this.className += " region-activ";
        this.innerHTML += '<div class="line-activ"></div>';
        
        const allCities = document.querySelectorAll('.city-container');

        swichCities(current[0].outerText, allCities)
  });
}

const mapDetailed = document.querySelector(".map__detailed");
const mapArrow = mapDetailed.querySelector(".map__arrow");
const mapDetailedNav = map.querySelector(".map__detailed-nav");
const overlay = map.querySelector('.overlay');

overlay.addEventListener("click", function () {
    mapArrow.style.transform = mapArrow.style.transform === '' ? 'rotate(180deg)' : '';
    mapDetailedNav.style.display = mapDetailedNav.style.display === 'none' ? 'flex' : 'none';
    overlay.style.display = overlay.style.display === 'none' ? 'unset' : 'none';
})

mapDetailed.addEventListener("click", function () {
    mapArrow.style.transform = mapArrow.style.transform === '' ? 'rotate(180deg)' : '';
    mapDetailedNav.style.display = mapDetailedNav.style.display === 'none' ? 'flex' : 'none';
    overlay.style.display = overlay.style.display === 'none' ? 'unset' : 'none';
})

const detailedRegions = mapDetailedNav.getElementsByTagName("h5");
const detailedCities = mapDetailedNav.getElementsByTagName("span");

for (let i = 0; i < detailedRegions.length; i++) { //перебор регионов
    detailedRegions[i].addEventListener("click", function () {
        
        const allCities = document.querySelectorAll('.city-container');
        
        swichCities(detailedRegions[i].outerText, allCities)

        mapArrow.style.transform = mapArrow.style.transform === '' ? 'rotate(180deg)' : '';
        mapDetailedNav.style.display = mapDetailedNav.style.display === 'none' ? 'flex' : 'none';
        overlay.style.display = overlay.style.display === 'none' ? 'unset' : 'none';
  });
}

for (let i = 0; i < detailedCities.length; i++) { //перебор городов
    detailedCities[i].addEventListener("click", function () {
        
        const allCities = document.querySelectorAll('.city-container');
        
        allCities.forEach(city => city.remove());   // удаление городов с карты
        
        if (detailedCities[i].outerText === 'Нижний Новгород') {
            elementGeneratir(['Н. Новгород']).forEach(el => map.appendChild(el)) //генерация всех городов
        }
        else {
            elementGeneratir([detailedCities[i].outerText]).forEach(el => map.appendChild(el)) //генерация всех городов
        }
    
        mapArrow.style.transform = mapArrow.style.transform === '' ? 'rotate(180deg)' : '';
        mapDetailedNav.style.display = mapDetailedNav.style.display === 'none' ? 'flex' : 'none';
        overlay.style.display = overlay.style.display === 'none' ? 'unset' : 'none';
    });
}