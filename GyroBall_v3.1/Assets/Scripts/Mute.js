#pragma strict
import UnityEngine.UI;

var Laudio : AudioListener;
var bMusic : Image;

var mute : Sprite;
var unmute : Sprite;


function Start (){

		FirstSet();

}


function MusicSwitch(){

	if(PlayerPrefs.GetInt("Music", 1) == 1){
		PlayerPrefs.SetInt("Music", 0);

	}else{
		PlayerPrefs.SetInt("Music", 1);

	}

	FirstSet();
}

function FirstSet (){

	if(PlayerPrefs.GetInt("Music", 1) == 0){
		bMusic.sprite = unmute;
		Laudio.enabled = false;
	
	}else{
		bMusic.sprite = mute;
		Laudio.enabled = true;
	
	}



}