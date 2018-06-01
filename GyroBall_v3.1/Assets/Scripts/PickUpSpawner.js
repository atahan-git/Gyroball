#pragma strict

var xRange : float; //distance these can spawn

var minDis : float = -5;
var maxDis : float = -7;

var disMultiplier = 2f; //everytime a pickup spawns min and max distance increases

var renderDis = 5f; //the distance before a powerup gets destroyed

var theBall : Transform;

var allPickups : GameObject[];

private var curPickup : GameObject;

function Start () {

	if(PlayerPrefs.GetInt("Pickup", 1) == 0) Destroy(gameObject);
	else{
		theBall = Stuff.theBall.transform;
	
		SpawnOne();
	}
}

function Update () {

	if(curPickup == null) SpawnOne();
	else if(theBall.position.y + renderDis < curPickup.transform.position.y) SpawnOne();

}

function SpawnOne (){

	
	//decide pickup
	var randomPickup = allPickups[Random.Range(0,allPickups.length)];
	print(randomPickup);
	//decide x
	var randomX = Random.Range(-xRange,xRange);
	//decide y
	var valueToBeAddedToY : float;
	if(curPickup != null) valueToBeAddedToY = curPickup.transform.position.y;
	else valueToBeAddedToY = 0;
	var randomY = valueToBeAddedToY + Random.Range(minDis, maxDis);
	
	curPickup = Instantiate(randomPickup, Vector3(randomX, randomY, 0), transform.rotation);

	minDis *= disMultiplier;
	maxDis *= disMultiplier;
}