#pragma strict

import UnityEngine.UI;

var compMenu : GameObject;

var inputField : InputField;

function Start () {

}

function Update () {

}

function MenuOpen (){

	compMenu.SetActive(true);
	
	var calcValue : int = (PlayerPrefs.GetInt("HighScore", 0) * 7)*(PlayerPrefs.GetInt("HighScore", 0) * 7) + 13;
	
	inputField.text = calcValue + ":" + PlayerPrefs.GetInt("HighScore", 0);


}

function Back (){

	compMenu.SetActive(false);


}