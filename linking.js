var text = {
    en: {
        header: '%cMade with Laravel & %c❤ %cby Jersyfi',
        body: '%cFor more information about me and my work visit https://jersyfi.de or https://github.com/Jersyfi'
    },
    de: {
        header: '%cErstellt mit Laravel & %c❤ %cvon Jersyfi',
        body: '%cBesuche https://jersyfi.de oder https://github.com/Jersyfi um mehr ünformationen über mich und meine Arbeit zu bekommen'
    },
    no: {
        header: '%cCreated with Laravel & %c❤ %cav Jersyfi',
        body: '%cBesøk https://jersyfi.de eller https://github.com/Jersyfi for å få mer informasjon om meg og arbedet mitt'
    }
}

switch (navigator.language) {
    case 'de':
        loadText = text.de
        break;

    case 'no':
        loadText = text.de
        break;

    default:
        loadText = text.en
        break;
}

console.log(loadText.header, 'color: blue; font-size: 28px;', 'color: red; font-size: 28px;', 'color: blue; font-size: 28px;')
console.log(loadText.body, 'font-size: 16px;')
