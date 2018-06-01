#pragma strict

function Start () {

}

function Update () {

	transform.rotation = Quaternion.LookRotation(Input.acceleration, Vector3.right);

}
