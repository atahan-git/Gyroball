#pragma strict

//PlayerPrefs.SetInt("GameMode", 0)

var levelPlay = "1";

var menuMain : GameObject;
var menuCredits : GameObject;
var menuOptions : GameObject;
var menuHats : GameObject;
var menuCloths : GameObject;
var menuSkins : GameObject;

var menuCur : GameObject;

function Start () {
Application.targetFrameRate = 60;


}

//this changes the menus
function ChangeMenu (menuToChange : GameObject){
	menuCur.SetActive(false);
	menuCur = menuToChange;
	menuToChange.SetActive(true);
}

//this will start the game
function Play () {
	Application.LoadLevel(levelPlay);
}

//opens corresponding gamemode
function Normal () {
	PlayerPrefs.SetInt("GameMode", 0);
	Play();
}
function Reverse (){
	PlayerPrefs.SetInt("GameMode", 1);
	Play();
}
function ScreenMode (){
	PlayerPrefs.SetInt("GameMode", 2);
	Play();
}

//opens corresponding menu
function buttonMain () {
	ChangeMenu(menuMain);
}

function buttonCredits (){
	ChangeMenu(menuCredits);
}

function buttonOptions (){
	ChangeMenu(menuOptions);
}

function buttonHats (){
	ChangeMenu(menuHats);
}

function buttonCloths (){
	ChangeMenu(menuCloths);
}

function buttonSkins (){
	ChangeMenu(menuSkins);
}