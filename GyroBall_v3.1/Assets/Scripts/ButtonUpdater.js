#pragma strict

function Start () {

	BroadcastMessage("UpdateButton");

}

function Update () {

}

function OnEnable (){

	BroadcastMessage("UpdateButton");

}

public function UpdateAll (){

	BroadcastMessage("UpdateButton");

}