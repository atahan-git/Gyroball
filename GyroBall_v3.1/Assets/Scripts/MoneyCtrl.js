#pragma strict
import UnityEngine.UI;

//use "PlayerPref.GetInt("Money") to use money stuff

var thaThing = 0;

var displayText : Text;

static var thisOne : MoneyCtrl;

function Awake () {
	if(thisOne == null){
		thisOne = this;
		DontDestroyOnLoad (gameObject);
	}else{
		Destroy(gameObject);
	}
	if(PlayerPrefs.GetInt("Money", 0) == 0) PlayerPrefs.SetInt("Money", 0);//make sure this gives 0 insted of null
	UpdateMoney();
	//AddMoney(9999);
}

function AddMoney (toAdd : int){

	PlayerPrefs.SetInt("Money", PlayerPrefs.GetInt("Money") + toAdd);
	UpdateMoney();

}

function FixedUpdate (){

	UpdateMoney();
}


function UpdateMoney (){

	if(displayText != null)displayText.text = PlayerPrefs.GetInt("Money") + "$";

}