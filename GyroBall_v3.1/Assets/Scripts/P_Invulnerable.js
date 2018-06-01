#pragma strict

var prefabShield : GameObject;

static var isInvulnerable : boolean = false;

private var myShield : GameObject;

function Start () {

	var myBall : GameObject = Stuff.theBall;

	myShield = Instantiate(prefabShield, myBall.transform.position, myBall.transform.rotation);
	myShield.transform.parent = myBall.transform;
	isInvulnerable = true;
	

}

function Update () {

}

function OnDisable (){
	//isInvulnerable = false;
	//Destroy(myShield);
	myShield.GetComponent(Shield).Disable();
}