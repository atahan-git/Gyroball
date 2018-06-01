#pragma strict
import UnityEngine.UI;

/*-------------------------------------------
---------Hat index starts from zero----------
---------Cloth index starts from 64----------
---------Skin index starts from 128----------
-------------------------------------------*/
var index : int = 0;
var price : int = 0;

var isBought = false;
var image : Image;

var button : Button;
var buttonText : Text;

var buttonUpdater : ButtonUpdater;
/*-----------------------------------
----REMEMBER TO CHANGE THE BUTTON----
----THE FUNCTION THE BUTTON CALLS----
-----------------------------------*/

function Awake () {
	image = transform.Find("Image").GetComponent(Image);
	if(PlayerPrefs.GetInt(index.ToString(), 0) == 1) isBought = true;
	else isBought = false;
	UpdateButton();
	//buttonUpdater.UpdateAll();
}

function OnEnable () {
	if(PlayerPrefs.GetInt(index.ToString(), 0) == 1) isBought = true;
	else isBought = false;
	UpdateButton();
	//buttonUpdater.UpdateAll();
}

//changes corresponding thing
//if not bought buys it
function changeHat () {
	//if not bought yet buys it
	if(!isBought){
		PlayerPrefs.SetInt(index.ToString(), 1); //sets it to bought
		PlayerPrefs.SetInt("Money", PlayerPrefs.GetInt("Money") - price);
		isBought = true;
	}
	
	button.colors.normalColor = Color.cyan;
			button.colors.highlightedColor = Color.cyan;
	
	//if bought sets hat
	PlayerPrefs.SetInt("Hat", index);
	buttonUpdater.UpdateAll();
}

function changeCloth () {
	//if not bought yet buys it
	if(!isBought){
		PlayerPrefs.SetInt(index.ToString(), 1); //sets it to bought
		PlayerPrefs.SetInt("Money", PlayerPrefs.GetInt("Money") - price);
		isBought = true;
	}
	//if bought sets current cloth
	PlayerPrefs.SetInt("Cloth", index);
	
	button.colors.normalColor = Color.cyan;
			button.colors.highlightedColor = Color.cyan;
	
	buttonUpdater.UpdateAll();
}

function changeSkin () {
	//if not bought yet buys it
	if(!isBought){
		PlayerPrefs.SetInt(index.ToString(), 1); //sets it to bought
		PlayerPrefs.SetInt("Money", PlayerPrefs.GetInt("Money") - price);
		isBought = true;
	}
	//if bought sets current cloth
	PlayerPrefs.SetInt("Ball", index);
	PlayerPrefs.SetInt("BG", index);
	PlayerPrefs.SetInt("Block", index);
	PlayerPrefs.SetInt("Spike", index);
	PlayerPrefs.SetInt("Wall", index);
	
	button.colors.normalColor = Color.cyan;
			button.colors.highlightedColor = Color.cyan;
	
	buttonUpdater.UpdateAll();
}

function UpdateButton () {

	buttonText.text = price + "$";
	
	//if we have bought it make it display select
	if(isBought){
		if(PlayerPrefs.GetInt("Hat") == index){
			buttonText.text = "Selected";
			button.colors.normalColor = Color.cyan;
			button.colors.highlightedColor = Color.cyan;
		}else if(PlayerPrefs.GetInt("Cloth") == index){
			buttonText.text = "Selected";
			button.colors.normalColor = Color.cyan;
			button.colors.highlightedColor = Color.cyan;
		}else if(PlayerPrefs.GetInt("Ball") == index){
			buttonText.text = "Selected";
			button.colors.normalColor = Color.cyan;
			button.colors.highlightedColor = Color.cyan;
		}else{
			buttonText.text = "Select";
			button.colors.normalColor = Color.green;
		}
		button.interactable = true;
		image.color = Color.white;
	}
	//if we dont have enough money
	else if(PlayerPrefs.GetInt("Money") < price){
		button.interactable = false; //disable it
		button.colors.normalColor = Color.white;
		if(index < 200)image.color = Color.black;
	} 
	else{
		button.interactable = true; //if we do enable it
		button.colors.normalColor = Color.yellow;
		if(index < 200)image.color = Color.black;
	}

}