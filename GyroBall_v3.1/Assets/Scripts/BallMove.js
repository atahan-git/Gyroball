#pragma strict

var jump : float = 2;

var myRot : float = 200;

var isClicked = false;
var reqTouch = 0;

private var rigidbodys : Rigidbody2D;

function Start () {

	rigidbodys = GetComponent.<Rigidbody2D>();

}

function Update () {

	Jump();

}

function Jump(){

	if(Input.GetKeyDown(KeyCode.Space) || Input.touchCount > reqTouch && !isClicked || Input.GetKeyDown(KeyCode.Mouse1)){
		rigidbodys.velocity.y = jump;
		rigidbodys.AddTorque(Random.Range(-myRot, myRot),0);
		isClicked = true;
	}
	if(Input.GetKeyUp(KeyCode.Space) || Input.touchCount <=  reqTouch){
		isClicked = false;
	}



}

function SlideClickDown (){

	reqTouch = 1;

}

function SlideClickUp (){

	Yielder();

}

function Yielder (){

	yield;
	reqTouch = 0;

}
