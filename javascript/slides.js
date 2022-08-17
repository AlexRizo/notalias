//Responsive Mobile:

//Parents
var parent_panorama         = document.querySelector(".section-panorama");
var parent_padel_warehouse  = document.querySelector(".section-padel-warehouse");
var parent_mansion_folclor  = document.querySelector(".section-mansion-folclor");
var parent_printa           = document.querySelector(".section-printa");
var parent_altozano         = document.querySelector(".section-academia-altozano");
var parent_dos_cimas        = document.querySelector(".section-dos-cimas");
var parent_centro_ejecutivo = document.querySelector(".section-centro-ejecutivo");
var parent_mhuna            = document.querySelector(".section-mhuna");
var parent_palu             = document.querySelector(".section-palu");
var parent_navarra          = document.querySelector(".section-navarra");
var parent_convention       = document.querySelector(".section-the-convention");
var parent_ezlabon          = document.querySelector(".section-ezlabon");

//Childs
var child_mansion1 = document.querySelector(".mansion-folclor-01");
var child_printa1 = document.querySelector(".printa-01");
var child_printa2 = document.querySelector(".printa-02");
var child_dos_cimas1 = document.querySelector(".dos-cimas-01");
var child_centro_ejecutivo1 = document.querySelector(".centro-ejecutivo-01");
var child_mhuna1 = document.querySelector(".mhuna-01");
var child_palu = document.querySelector(".palu-05");

if(width <= 858){
    parent_mansion_folclor.removeChild(child_mansion1);
    parent_printa.removeChild(child_printa1);
    parent_printa.removeChild(child_printa2);
    parent_dos_cimas.removeChild(child_dos_cimas1);
    parent_centro_ejecutivo.removeChild(child_centro_ejecutivo1);
    parent_mhuna.removeChild(child_mhuna1);
}else if(width > 858){
    parent_palu.removeChild(child_palu);
}