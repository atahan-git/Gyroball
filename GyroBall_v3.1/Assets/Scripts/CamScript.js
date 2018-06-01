#pragma strict

var ball : Transform;
var Gravity : Transform;

var Zoffset : float = -10;
var Yoffset : float = 5;

var quaToAdd : Quaternion;

var gameMode : int;

function Start () {
	gameMode = PlayerPrefs.GetInt("GameMode", 0);
}

function Update () {
	if(ball != null){
		transform.position = ball.position + Vector3(0, Yoffset, Zoffset);
		/*if(gameMode == 0)
		
		else */if(gameMode == 1)
		transform.rotation = quaToAdd;
		else if(gameMode == 2)
		transform.rotation = Quaternion.Slerp(transform.rotation, Quaternion(Gravity.rotation.x, Gravity.rotation.y, -Gravity.rotation.z, Gravity.rotation.w), 0.2);
		//print(transform.rotation);
	}
}