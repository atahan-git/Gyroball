#pragma strict

var scriptToBeActivatedOnCollision : MonoBehaviour;
var theCollider : CircleCollider2D;
var spireRenderer : SpriteRenderer;

var pickupTime = 3f;//time the pickup will stay active
var emergencyMoveAmmount = -1f;

function Start () {

}

function Update () {

}

function OnTriggerEnter2D (theColl : Collider2D){

	if(theColl.gameObject.tag == "Player"){
		scriptToBeActivatedOnCollision.enabled = true;
		theCollider.enabled = false;
		spireRenderer.enabled = false;
		Timer();
	}else if(theColl.gameObject.tag == "Block") transform.position.y += emergencyMoveAmmount;

}

function Timer (){

	while(pickupTime > 0){
		pickupTime -= Time.deltaTime;
		yield;
	}
	scriptToBeActivatedOnCollision.enabled = false;
	Destroy(gameObject);

}