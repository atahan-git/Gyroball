#pragma strict

var maxRot = 30;
var rotSpeed = 0.2;
var rotMax = 3;
var curRot = 0f;
var isLeft = true;

private var myCam : GameObject;
var go : GameObject;

function Start () {
	go = new GameObject();
	myCam = GameObject.FindGameObjectWithTag("MainCamera");
	go.AddComponent(Transform);
	go.transform.rotation.eulerAngles.z = 180;
	myCam.transform.parent = go.transform;
	print("start");
}

function Update () {

	if(isLeft){
		if(go.transform.rotation.eulerAngles.z > 150) curRot -= rotSpeed;
		else isLeft = false;
	
	}else{

		if(go.transform.rotation.eulerAngles.z < 210) curRot += rotSpeed;
		else isLeft = true;
	
	}
	curRot = Mathf.Clamp(curRot, -rotMax, rotMax);
	//print(myCam.transform.rotation.eulerAngles.z);
	print(curRot);
	go.transform.rotation.eulerAngles.z += curRot;
	//print(curRot);
}

function OnDisable (){

	myCam.transform.rotation.eulerAngles.z = 0;

}