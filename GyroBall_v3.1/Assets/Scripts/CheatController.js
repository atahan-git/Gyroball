#pragma strict

import UnityEngine.UI;

var bGyro : Button;
var bSlide : Button;
var bMusic : Button;
var bPickup : Image;

var tutPanel : GameObject;

var resetPanel : GameObject;

var GyroTutPanel : GameObject;
var SlideTutPanel : GameObject;


function Start () {
//(PlayerPrefs.SetInt("Money", 99999999);

	//if the default values havent set
	if(PlayerPrefs.GetInt("Hat", 666) == 666){
		setDef();//set them
		FirstTime();	
	}
	SetControlMode(PlayerPrefs.GetInt("ContMode", 0));
	
	SetColors();
}

function FirstTime() {

	tutPanel.SetActive(true);
	//theText = opTutText.text;
	//opTutText.text = "Tutorial";

}

function Click (){
	
	tutPanel.SetActive(false);
//	opTutText.text = theText;

}

function unBuy () {

	for(var i = 0; i <= 64; i++){
	
		PlayerPrefs.SetInt(i.ToString(), 0);
	}
	PlayerPrefs.SetInt("Hat", 64);
	setDef();
	ResMoney();

}

function ResetScore (){

	PlayerPrefs.SetInt("HighScore", 0);
	PlayerPrefs.SetInt("NormalHS", 0);
	PlayerPrefs.SetInt("ReverseHS", 0);
	PlayerPrefs.SetInt("ScreenHS", 0);

}

function ResMoney () {

	PlayerPrefs.SetInt("Money", 0);

}

function ResAll (){
	ResClose();
	PlayerPrefs.DeleteAll();
	setDef();
	
}

function ResOpen (){
	resetPanel.SetActive(true);
}

function ResClose (){
	resetPanel.SetActive(false);
}

function MusicSwitch(){

	if(PlayerPrefs.GetInt("Music", 1) == 1){
		PlayerPrefs.SetInt("Music", 0);
	}else{
		PlayerPrefs.SetInt("Music", 1);
	}
	
	SetColors();

}

function SetColors (){

	if(PlayerPrefs.GetInt("Music", 1) == 0){
		bMusic.colors.normalColor = Color.red;
		bMusic.colors.highlightedColor = Color.red;
		bMusic.colors.pressedColor = Color.red;
	
	}else{
		bMusic.colors.normalColor = Color.green;
		bMusic.colors.highlightedColor = Color.green;
		bMusic.colors.pressedColor = Color.green;
		
	}
	
	if(PlayerPrefs.GetInt("Pickup", 1) == 1){
		bPickup.color = Color.cyan;
		
	}else{
		bPickup.color = Color.red;
	
	}
}


function setDef (){
	//set default values
	PlayerPrefs.SetInt("0", 1);
	PlayerPrefs.SetInt("100", 1);
	PlayerPrefs.SetInt("200", 1);
	PlayerPrefs.SetInt("Hat",PlayerPrefs.GetInt("Hat", 9));
	PlayerPrefs.SetInt("9", 1);
	PlayerPrefs.SetInt("Cloth",PlayerPrefs.GetInt("Cloth", 100));
	PlayerPrefs.SetInt("Ball",PlayerPrefs.GetInt("Ball", 200));
	PlayerPrefs.SetInt("BG",PlayerPrefs.GetInt("BG", 200));
	PlayerPrefs.SetInt("Block",PlayerPrefs.GetInt("Block", 200));
	PlayerPrefs.SetInt("Spike",PlayerPrefs.GetInt("Spike", 200));
	PlayerPrefs.SetInt("Wall",PlayerPrefs.GetInt("Wall", 200));

}


function SetControlMode (mode : int){

	PlayerPrefs.SetInt("ContMode",mode);
	if(mode == 0){
		bGyro.interactable = false;
		bSlide.interactable = true;
		GyroTutPanel.SetActive(true);
		SlideTutPanel.SetActive(false);
	}else{
		bGyro.interactable = true;
		bSlide.interactable = false;
		GyroTutPanel.SetActive(false);
		SlideTutPanel.SetActive(true);
	}

}

function PickupSwitch(){
	if(PlayerPrefs.GetInt("Pickup", 1) == 1){
		PlayerPrefs.SetInt("Pickup", 0);
	}else{
		PlayerPrefs.SetInt("Pickup", 1);
	}
	SetColors();
}