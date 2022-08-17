const width = document.documentElement.clientWidth;

addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu');
    
    if(btn_menu){
        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.navbar-mobile');
            const space = document.querySelector('.bottom')
            space.classList.toggle('show')
            menu_items.classList.toggle('show');
        });
    }
});

function showTitle() {
    for (let i = 1; i <= 20; i++) {
        const title = document.querySelector('.black');
        if(title){
            title.classList.add('white');
            title.classList.remove('black');
        }
    }
}
function quitTitle() {
    for (let i = 1; i <= 20; i++) {
        const title = document.querySelector('.white');
        if(title){
            title.classList.add('black');
            title.classList.remove('white');
        }
    }
}

function quitMenu() {
    const menu_items = document.querySelector('.navbar-mobile');
    const space = document.querySelector('.bottom');
    space.classList.remove('show');
    menu_items.classList.remove('show');
}

function nextSection() {
    fullpage_api.moveSectionDown();
}

//Panorama//
function openPanorama(){
    const description = document.getElementById('descriptionPanorama');
    const btn_open = document.getElementById('content-section-panorama');
    const btn_open_desktop = document.getElementById('btn-open-panorama');
    description.classList.add('show-sec');
    btn_open.classList.add('hide_btn');
    btn_open_desktop.classList.add('hide_btn_desktop');
}

function closePanorama(){
    const description = document.getElementById('descriptionPanorama');
    const btn_open = document.getElementById('content-section-panorama');
    const btn_open_desktop = document.getElementById('btn-open-panorama');
    description.classList.remove('show-sec');
    btn_open.classList.remove('hide_btn');
    btn_open_desktop.classList.remove('hide_btn_desktop');
    
}

//Fair Play Padel Club//
// function openFairPlay(){
//     const description = document.getElementById('descriptionFairPlay');
//     const btn_open = document.getElementById('content-section-fair-play');
//     description.classList.add('show-sec');
//     btn_open.classList.add('hide_btn');
// }

// function closeFairPlay(){
//     const description = document.getElementById('descriptionFairPlay');
//     const btn_open = document.getElementById('content-section-fair-play');
//     description.classList.remove('show-sec');
//     btn_open.classList.remove('hide_btn');
// }

//Padel Warehouse//
function openWarehouse(){
    const description = document.getElementById('descriptionWarehouse');
    const btn_open = document.getElementById('content-section-warehouse');
    const btn_open_desktop = document.getElementById('btn-open-warehouse');
    btn_open_desktop.classList.add('hide_btn_desktop');
    description.classList.add('show-sec');
    btn_open.classList.add('hide_btn');
}

function closeWarehouse(){
    const description = document.getElementById('descriptionWarehouse');
    const btn_open = document.getElementById('content-section-warehouse');
    const btn_open_desktop = document.getElementById('btn-open-warehouse');
    btn_open_desktop.classList.remove('hide_btn_desktop');
    description.classList.remove('show-sec');
    btn_open.classList.remove('hide_btn');
}

//Mansión Folclor//
function openMansion(){
    const description = document.getElementById('descriptionMansion');
    const btn_open = document.getElementById('content-section-mansion');
    const btn_open_desktop = document.getElementById('btn-open-mansion');
    btn_open_desktop.classList.add('hide_btn_desktop');
    description.classList.add('show-sec');
    btn_open.classList.add('hide_btn');
}

function closeMansion(){
    const description = document.getElementById('descriptionMansion');
    const btn_open = document.getElementById('content-section-mansion');
    const btn_open_desktop = document.getElementById('btn-open-mansion');
    btn_open_desktop.classList.remove('hide_btn_desktop');
    description.classList.remove('show-sec');
    btn_open.classList.remove('hide_btn');
}

//Printa//
function openPrinta(){
    const description = document.getElementById('descriptionPrinta');
    const btn_open = document.getElementById('content-section-printa');
    const btn_open_desktop = document.getElementById('btn-open-printa');
    btn_open_desktop.classList.add('hide_btn_desktop');
    description.classList.add('show-sec');
    btn_open.classList.add('hide_btn');
}

function closePrinta(){
    const description = document.getElementById('descriptionPrinta');
    const btn_open = document.getElementById('content-section-printa');
    const btn_open_desktop = document.getElementById('btn-open-printa');
    btn_open_desktop.classList.remove('hide_btn_desktop');
    description.classList.remove('show-sec');
    btn_open.classList.remove('hide_btn');
}

//Academia Altozano//
function openAltozano(){
    const description = document.getElementById('descriptionAltozano');
    const btn_open = document.getElementById('content-section-altozano');
    const btn_open_desktop = document.getElementById('btn-open-altozano');
    btn_open_desktop.classList.add('hide_btn_desktop');
    description.classList.add('show-sec');
    btn_open.classList.add('hide_btn');
}

function closeAltozano(){
    const description = document.getElementById('descriptionAltozano');
    const btn_open = document.getElementById('content-section-altozano');
    const btn_open_desktop = document.getElementById('btn-open-altozano');
    btn_open_desktop.classList.remove('hide_btn_desktop');
    description.classList.remove('show-sec');
    btn_open.classList.remove('hide_btn');
}

//Dos Cimas//
function openCimas(){
    const description = document.getElementById('descriptionCimas');
    const btn_open = document.getElementById('content-section-cimas');
    const btn_open_desktop = document.getElementById('btn-open-cimas');
    btn_open_desktop.classList.add('hide_btn_desktop');
    description.classList.add('show-sec');
    btn_open.classList.add('hide_btn');
}

function closeCimas(){
    const description = document.getElementById('descriptionCimas');
    const btn_open = document.getElementById('content-section-cimas');
    const btn_open_desktop = document.getElementById('btn-open-cimas');
    btn_open_desktop.classList.remove('hide_btn_desktop');
    description.classList.remove('show-sec');
    btn_open.classList.remove('hide_btn');
}

//Centro Ejecutivo//
function openCentro(){
    const description = document.getElementById('descriptionCentro');
    const btn_open = document.getElementById('content-section-centro');
    const btn_open_desktop = document.getElementById('btn-open-centro');
    btn_open_desktop.classList.add('hide_btn_desktop');
    description.classList.add('show-sec');
    btn_open.classList.add('hide_btn');
}

function closeCentro(){
    const description = document.getElementById('descriptionCentro');
    const btn_open = document.getElementById('content-section-centro');
    const btn_open_desktop = document.getElementById('btn-open-centro');
    btn_open_desktop.classList.remove('hide_btn_desktop');
    description.classList.remove('show-sec');
    btn_open.classList.remove('hide_btn');
}

//Mhuna//
function openMhuna(){
    const description = document.getElementById('descriptionMhuna');
    const btn_open = document.getElementById('content-section-mhuna');
    const btn_open_desktop = document.getElementById('btn-open-mhuna');
    btn_open_desktop.classList.add('hide_btn_desktop');
    description.classList.add('show-sec');
    btn_open.classList.add('hide_btn');
}

function closeMhuna(){
    const description = document.getElementById('descriptionMhuna');
    const btn_open = document.getElementById('content-section-mhuna');
    const btn_open_desktop = document.getElementById('btn-open-mhuna');
    btn_open_desktop.classList.remove('hide_btn_desktop');
    description.classList.remove('show-sec');
    btn_open.classList.remove('hide_btn');
}

//Palu//
function openPalu(){
    const description = document.getElementById('descriptionPalu');
    const btn_open = document.getElementById('content-section-palu');
    const btn_open_desktop = document.getElementById('btn-open-palu');
    btn_open_desktop.classList.add('hide_btn_desktop');
    description.classList.add('show-sec');
    btn_open.classList.add('hide_btn');
}

function closePalu(){
    const description = document.getElementById('descriptionPalu');
    const btn_open = document.getElementById('content-section-palu');
    const btn_open_desktop = document.getElementById('btn-open-palu');
    btn_open_desktop.classList.remove('hide_btn_desktop');
    description.classList.remove('show-sec');
    btn_open.classList.remove('hide_btn');
}

//Navarra//
function openNavarra(){
    const description = document.getElementById('descriptionNavarra');
    const btn_open = document.getElementById('content-section-navarra');
    const btn_open_desktop = document.getElementById('btn-open-navarra');
    btn_open_desktop.classList.add('hide_btn_desktop');
    description.classList.add('show-sec');
    btn_open.classList.add('hide_btn');
}

function closeNavarra(){
    const description = document.getElementById('descriptionNavarra');
    const btn_open = document.getElementById('content-section-navarra');
    const btn_open_desktop = document.getElementById('btn-open-navarra');
    btn_open_desktop.classList.remove('hide_btn_desktop');
    description.classList.remove('show-sec');
    btn_open.classList.remove('hide_btn');
}

//The Convention 2021 y 2022//
function openConvention(){
    const description = document.getElementById('descriptionConvention');
    const btn_open = document.getElementById('content-section-convention');
    const btn_open_desktop = document.getElementById('btn-open-convention');
    btn_open_desktop.classList.add('hide_btn_desktop');
    description.classList.add('show-sec');
    btn_open.classList.add('hide_btn');
}

function closeConvention(){
    const description = document.getElementById('descriptionConvention');
    const btn_open = document.getElementById('content-section-convention');
    const btn_open_desktop = document.getElementById('btn-open-convention');
    btn_open_desktop.classList.remove('hide_btn_desktop');
    description.classList.remove('show-sec');
    btn_open.classList.remove('hide_btn');
}

//Ezlabon//
function openEzlabon(){
    console.log('openEzlabon');
    const description = document.getElementById('descriptionEzlabon');
    const btn_open = document.getElementById('content-section-ezlabon');
    const btn_open_desktop = document.getElementById('btn-open-ezlabon');
    btn_open_desktop.classList.add('hide_btn_desktop');
    description.classList.add('show-sec');
    btn_open.classList.add('hide_btn');
}

function closeEzlabon(){
    const description = document.getElementById('descriptionEzlabon');
    const btn_open = document.getElementById('content-section-ezlabon');
    const btn_open_desktop = document.getElementById('btn-open-ezlabon');
    btn_open_desktop.classList.remove('hide_btn_desktop');
    description.classList.remove('show-sec');
    btn_open.classList.remove('hide_btn');
}

function setSize() {
    if (width <= 950) {
        fullpage_api.moveTo(2);
    }
}

function prev(){
    fullpage_api.moveSlideLeft();

    clearInterval(g_interval);
    g_interval = setInterval(function () {
        fullpage_api.moveSlideRight();
    }, 3000);
}

function next(){
    fullpage_api.moveSlideRight();

    clearInterval(g_interval);
    g_interval = setInterval(function () {
        fullpage_api.moveSlideRight();
    }, 3000);
}

function closeDescriptions() {
    closePanorama();
    // closeFairPlay();
    closeWarehouse();
    closeMansion();
    closePrinta();
    closeAltozano();
    closeCimas();
    closeCentro();
    closeMhuna();
    closePalu();
    closeNavarra();
    closeConvention();
    closeEzlabon();
    quitMenu();
}

function init() {
    if (width <= 858) {
        fullpage_api.moveTo(2);
    }else{
        quitTitle()
        fullpage_api.moveTo(1);
    }
}