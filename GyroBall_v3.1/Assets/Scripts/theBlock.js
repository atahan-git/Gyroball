#pragma strict

var RDistance : float = 5;

var Rspeed : int = 0;


function Start () {
	Rspeed = Random.Range(-3,3);
}

function Update () {
	
	transform.rotation.eulerAngles.z += Rspeed;
	if(BlockSpawner.TheCam ==null) return;
	if(transform.position.y > BlockSpawner.TheCam.position.y + RDistance) Destroy(gameObject);

}

function OnTriggerEnter2D (theColl : Collider2D){
	if(theColl.gameObject.tag == "Player"){
		if(Stuff.theBall == null) return;
		var ball = Stuff.theBall;
		var Exp = Stuff.theExp;

		var theExp = Instantiate(Exp, ball.transform.position, ball.transform.rotation);
	
		theExp.gameObject.transform.localScale = Vector3(0.5,0.5,0.5);
	
		Destroy(gameObject);
	}
}