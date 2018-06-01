#pragma strict

var xSpites : Sprite[];
var pSprites : Sprite[];
var spriteRenderer : SpriteRenderer;

function Start () {
	XAnimation();

}

function Update () {

}

function XAnimation () {
	for(var curSprite : Sprite in pSprites){
		var x = 0;
		while(x < 4){
			yield;
			x++;
		}
		spriteRenderer.sprite = curSprite;
	}
	Destroy(gameObject);
}