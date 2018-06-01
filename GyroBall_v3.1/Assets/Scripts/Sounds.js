#pragma strict

static var thisOne : Sounds;
static var otherOne : Sounds;

function Start () {

	if(thisOne == null){
		thisOne = this;
		DontDestroyOnLoad(gameObject);
	}else if( otherOne == null){
		otherOne = this;
		DontDestroyOnLoad(gameObject);
	}else{
		Destroy(gameObject);
	}
}

function Update () {

}