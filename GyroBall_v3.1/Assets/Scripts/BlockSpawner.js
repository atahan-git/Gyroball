#pragma strict

var coinChance = 4;//one in x chance to spawn a coin
var coinDownOffset : float = -1.1;
var coin : GameObject;

var block : GameObject;
var myCam : Transform;
static var TheCam : Transform;
var myBall : GameObject;
static var theBall : GameObject;

var Xarea : float = 5;//spawn genişliği
var SAmmount : int = 1;//spawn amount
var SDistance : float = 5;//spawn distance
var curY : float = 0;
var RDistance : float = 10;//render distance
var minDistance : float = 2;//min distance between blocks

var Z : float = 0; //current z

var theBlock : GameObject[]; //used to temporaryly store blocks

var curObjective : int;
function Start () {

	curObjective = 0;

}
//spawn block
function FixedUpdate () {
	TheCam = myCam;
	theBall = myBall;
	if(myCam.position.y < curY + RDistance){//if we are far in the max distance
		for(var i : int = 1; i <= SAmmount; i++){//spawn some blocks
		
			var thePos : Vector3 = Vector3(Random.Range(Xarea, -Xarea), curY, Z);//get a random position
	
			theBlock[i] = Instantiate(block, thePos, transform.rotation);//instantiate
			
			//--------------COIN SPAWNER----------------
			if(Random.Range(0,coinChance) == 0) Instantiate(coin, thePos + Vector3(thePos.x + Random.Range(-minDistance, minDistance), coinDownOffset, 0), transform.rotation);
			
			//fixs them
			RandomSolver(i);
		}
		curY -= SDistance;
	}
	if(myBall == null) return;
	if(myBall.transform.position.y < curObjective){
	
		DeathCont.Score++;
		curObjective -= SDistance;
	
	}
	
}
//make sure they arent inside each other
function RandomSolver (m : int){

	if(theBlock[m-1] != null){
		if(theBlock[m].transform.position.x < theBlock[m-1].transform.position.x + minDistance && theBlock[m].transform.position.x > theBlock[m-1].transform.position.x - minDistance){
			//if they are make them move a bit farther away
			if(theBlock[m].transform.position.x < theBlock[m-1].transform.position.x){
				theBlock[m].transform.position.x -= minDistance;
			}else{
				theBlock[m].transform.position.x += minDistance;
			}
		}

		theBlock[m].transform.position.x = Mathf.Clamp(theBlock[m].transform.position.x, -Xarea, Xarea);
	}
}