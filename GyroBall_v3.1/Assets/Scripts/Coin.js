#pragma strict

var coinValue = 1;
var coinXPValue = 20;

function Start () {

}

function Update () {

}

function OnTriggerEnter2D (){
	
	PlayerPrefs.SetInt("XP", PlayerPrefs.GetInt("XP", 0) + coinXPValue);
	PlayerPrefs.SetInt("Money", PlayerPrefs.GetInt("Money", 0) + coinValue);
	Destroy(gameObject);

}