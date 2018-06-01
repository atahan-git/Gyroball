#pragma strict

var menuMShop : GameObject;
var menuHat : GameObject;
var menuCloth : GameObject;
var menuSkin : GameObject;

var menuCur : GameObject;

//this changes the menus
function ChangeMenu (menuToChange : GameObject){
	menuCur.SetActive(false);
	menuCur = menuToChange;
	menuToChange.SetActive(true);
	

}

//opens corresponding menu
function buttonHat () {
	ChangeMenu(menuHat);
}
function buttonCloth () {
	ChangeMenu(menuCloth);
}
function buttonSkin () {
	ChangeMenu(menuSkin);
}

function buttonMShop (){
	ChangeMenu(menuMShop);

}
