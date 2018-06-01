#pragma strict

var wallSize : float = 50;

private var lockVar = true;


function Start () {
	

}

function OnTriggerEnter2D (collider : Collider2D) {
	//print(collider.gameObject.tag);
	if(collider.gameObject.tag == "Player" && lockVar){
		//print("teleport");
		transform.position.y -= 50;
		locker();
	}
}

function locker (){
	lockVar = false;
	yield;
	yield;
	lockVar = true;

}