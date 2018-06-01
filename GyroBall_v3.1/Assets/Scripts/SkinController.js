#pragma strict

enum allTypes{hat,cloth,ball,bg,block,spike,wall};

var objectType = allTypes.hat;

var allSprites : AllSprites;

var spriteRenderer : SpriteRenderer;

function Start () {
	spriteRenderer = GetComponent(SpriteRenderer);
	//yield;
	allSprites = AllSprites.thisone;
	Menu();
}

function Update () {

}

function Menu (){
	switch(objectType){
		case allTypes.hat: spriteRenderer.sprite = allSprites.hats[PlayerPrefs.GetInt("Hat")]; break;
		case allTypes.cloth: spriteRenderer.sprite = allSprites.clothes[PlayerPrefs.GetInt("Cloth")-100]; break;
		case allTypes.ball: spriteRenderer.sprite = allSprites.ballses[PlayerPrefs.GetInt("Ball")-200]; break;
		case allTypes.bg: spriteRenderer.sprite = allSprites.backgrounds[PlayerPrefs.GetInt("BG")-200]; break;
		case allTypes.block: spriteRenderer.sprite = allSprites.blocks[PlayerPrefs.GetInt("Block")-200]; break;
		case allTypes.spike: spriteRenderer.sprite = allSprites.spikes[PlayerPrefs.GetInt("Spike")-200]; break;
		case allTypes.wall: spriteRenderer.sprite = allSprites.wallses[PlayerPrefs.GetInt("Wall")-200]; break;
	}

}