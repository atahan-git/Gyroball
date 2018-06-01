#pragma strict

var deathTime = 3;

var thickTime : float = 0.5;

function Start(){
	Invoke("Disable", deathTime);
}

function Disable(){
	/*var i = 9999;
	while(i > 0){
		gameObject.GetComponent(SpriteRenderer).enabled = false;
		yield;
		yield;
		gameObject.GetComponent(SpriteRenderer).enabled = true;
		yield;
		yield;
		i--;
	}*/
	P_Invulnerable.isInvulnerable = false;
	Destroy(gameObject);
}