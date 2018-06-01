#pragma strict
import UnityEngine.UI;

private var gameMode : int;

static var isAlive = true;
static var Score : int = 0;
var HighScore : int = 0;
var ThisHS : int = 0;

var DeathCanvas : GameObject;
var ArrowCanvas : GameObject;
var inScore : Text;
var inHiScore : Text;
var inThisHS : Text;
var endScore : Text;
var endHiScore : Text;
var endNormal : Text;
var endReverse : Text;
var endScreen : Text;
var money : Text;

var isInvul = false;
static var s : DeathCont;

function Start () {

	s = this;

	gameMode = PlayerPrefs.GetInt("GameMode", 0);
	
	Score = 0;
	isAlive = true;
	ArrowCanvas.SetActive(true);
	DeathCanvas.SetActive(false);
	//set specifric high scores
	if(gameMode == 0){//normal
		ThisHS = PlayerPrefs.GetInt("NormalHS", 0);
		inThisHS.text = "Normal HS: " + ThisHS;
	}else if(gameMode == 1){//reverse
		ThisHS = PlayerPrefs.GetInt("ReverseHS", 0);
		inThisHS.text = "Reverse HS: " + ThisHS;
	}else if(gameMode == 2){//screen
		ThisHS = PlayerPrefs.GetInt("ScreenHS", 0);
		inThisHS.text = "Screen HS: " + ThisHS;
	}	
	//set al high score
	HighScore = PlayerPrefs.GetInt("HighScore", 0);
	inHiScore.text = "HighScore: " + HighScore;
	

}

function Update () {
	
	money.text = PlayerPrefs.GetInt("Money") + "$";
	if(!isAlive) Die();
	inScore.text = "Score: " + Score;
}

function Die(){

	ArrowCanvas.SetActive(false);
	DeathCanvas.SetActive(true);

	if(Score > ThisHS){
	
		if(gameMode == 0){//normal
			PlayerPrefs.SetInt("NormalHS", Score);
		}else if(gameMode == 1){//reverse
			PlayerPrefs.SetInt("ReverseHS", Score);
		}else if(gameMode == 2){//screen
			PlayerPrefs.SetInt("ScreenHS", Score);
		}
		
		ThisHS = Score;
		
		if(Score > HighScore){
		
			PlayerPrefs.SetInt("HighScore", Score);
		
			HighScore = Score;	
		
		}
	}

	endScore.text = "Score: " + Score;
	endHiScore.text = "HighScore: " + HighScore;
	endNormal.text = "Normal HS: " + PlayerPrefs.GetInt("NormalHS", 0);
	endReverse.text = "Reverse HS: " + PlayerPrefs.GetInt("ReverseHS", 0);
	endScreen.text = "Screen HS: " + PlayerPrefs.GetInt("ScreenHS", 0);

}

function Revieve () {

	Application.LoadLevel("1");

}

function Back () {
	
	Application.LoadLevel("MEnu");

}
