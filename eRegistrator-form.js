
function setERegistratorFormWidth () {
    let el = document.getElementById('eRegistrator-form'),
        elWidth = el.clientWidth,
        classList = 'eRegistrator-form ';

    if (640 <= elWidth && elWidth <= 1023) classList += 'eRegistrator-form--640-1023';
    if (1024 <= elWidth && elWidth <= 1599) classList += 'eRegistrator-form--1024-1599';
    if (elWidth >= 1600) classList += 'eRegistrator-form--1600';

    el.className = classList;
}

window.onload = () => {
    setERegistratorFormWidth();
};

window.onresize = () => {
    setERegistratorFormWidth();
};