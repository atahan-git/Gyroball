using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CloudMover : MonoBehaviour {

	public float speed = 1f;
	public float deathheight = 0f;

	// Use this for initialization
	public void SetUp (float _speed, float _deathHeight) {
		speed = _speed;
		deathheight = _deathHeight;
	}
	
	// Update is called once per frame
	void Update () {
		transform.Translate (speed * Time.deltaTime, 0, 0);

		if (transform.position.y > deathheight) {
			Destroy (gameObject);
		}
	}
}
