#pragma strict


function Start () {

}

function Update () {

	var allCogs = GameObject.FindGameObjectsWithTag("Block");
	for(var theCog : GameObject in allCogs){
	
		var theCollider = theCog.GetComponent(CircleCollider2D);
		
		theCollider.isTrigger = true;
	
	}

}

function OnDisable (){

	var allCogs = GameObject.FindGameObjectsWithTag("Block");
	for(var theCog : GameObject in allCogs){
	
		var theCollider = theCog.GetComponent(CircleCollider2D);
		
		theCollider.isTrigger = false;
	
	}
	
}