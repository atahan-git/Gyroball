#pragma strict

import UnityEngine.UI;

var myObjects : Rigidbody2D[];

var Arrow : RectTransform;

//var mobileMode = true;

enum contMods{Gyro, Slide};
var controlMode = contMods.Gyro; 

var gravity : float = -9.81;

var gravSlider : Slider;
var gravText : Text;

var bGyro : Button;
var bSlide : Button;

var maxRot = 90;
var StartRot = 180;

function Start () {

	if(PlayerPrefs.GetInt("ContMode",0) == 0){
		controlMode = contMods.Gyro;
		
		gravSlider.gameObject.SetActive(false);
		
		bGyro.interactable = false;
		bSlide.interactable = true;
	}else{
		controlMode = contMods.Slide;
		
		gravSlider.gameObject.SetActive(true);
		
		bGyro.interactable = true;
		bSlide.interactable = false;
	}
	

}

function SetControlMode (mode : int){

	PlayerPrefs.SetInt("ContMode",mode);
	if(mode == 0){
		bGyro.interactable = false;
		bSlide.interactable = true;
	}else{
		bGyro.interactable = true;
		bSlide.interactable = false;
	}

}

function FixedUpdate () {
	
	if(controlMode == contMods.Gyro){
		transform.rotation.z = Quaternion.LookRotation(Input.acceleration, Vector3.back).x;

	}else{

		transform.rotation.eulerAngles.z = gravSlider.value;
		//print(gravSlider.value);
		//print(transform.rotation.eulerAngles.z);

	}
	//transform.rotation.eulerAngles.z = Mathf.Clamp(transform.rotation.eulerAngles.z, StartRot - maxRot, StartRot + maxRot);
	Arrow.rotation.eulerAngles.z = transform.rotation.eulerAngles.z + 180;
	
	for(var Rigidbodys : Rigidbody2D in myObjects){
		if(Rigidbodys != null){
		Rigidbodys.AddForce(transform.up * gravity);
		}
	}
	//gravity -= 0.005;
	//gravText.text = "G= " + gravity;

}