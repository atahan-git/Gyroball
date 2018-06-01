#pragma strict

var XP : int;
var level : int;
var maxXP : int = 100;
var oldLevel : int; //unused for now

var LevelText : Text;

PlayerPrefs.SetInt("level", 0);

function Update(){
	//Get XP and level from PlayerPrefs
	XP = PlayerPrefs.GetInt("XP", 0);
	level = PlayerPrefs.GetInt("level", 0);
	print(XP);
	//Check if the player has completed a level and update XP and level accordingly
	if(XP == maxXP){
		level++;
		XP = 0;
	}
}

function LateUpdate(){
	//Display new level and XP 
	//<toBeAdded>, create a pop-up if the player has completed the level </toBeAdded>
	LevelText.text = "Level " + level + ", " + (maxXP - XP) + " XP until level " + (level + 1);
	//Update XP and level on PlayerPrefs
	PlayerPrefs.SetInt("XP", XP);
	PlayerPrefs.SetInt("level", level);
}