#pragma strict

import UnityEngine.UI;

var beastText : Text;

var Theball : Transform;
var curSpeed : float = 0.000;
var StartSpeed : float = 0.100;
var SpeedInc : float = 0.001;

var ClampDistance : float = 20;
private var Smooth : float = 2;

function Start () {

	curSpeed = StartSpeed;
	Smooth = ClampDistance / 400;
}

function FixedUpdate () {
	//beastText.text = "B= " + curSpeed;
	if(Theball == null) return;
	if(transform.position.y > Theball.position.y + ClampDistance) transform.position.y = Mathf.Lerp(transform.position.y, Theball.position.y, Smooth);

	curSpeed += SpeedInc;
	
	transform.position.y -= curSpeed;

}