#pragma strict

var ball : GameObject;
var Exp : GameObject;

function Start () {

	ball = Stuff.theBall;
	Exp = Stuff.theExp;


}

function Update () {

	//ball = BlockSpawner.theBall;

}

function OnCollisionEnter2D (theColl : Collision2D){
	if(P_Invulnerable.isInvulnerable) return;
	if(DeathCont.s.isInvul) return;
	Debug.Log("[DEATH] Player dies at " + Time.time.ToString() + ".");
	Instantiate(Exp, ball.transform.position, ball.transform.rotation);
	Destroy(ball);
	DeathCont.isAlive = false;

}