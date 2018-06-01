using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ParallaxScroller : MonoBehaviour {

	public GameObject[] clouds;

	public float cloudMult = 0.7f;

	public GameObject[] city;

	public float cityMult = 0.4f;

	// Use this for initialization
	void Start () {
		lastPos = transform.position;
	}


	Vector3 lastPos;
	// Update is called once per frame
	void Update () {
		Vector3 deltaPos = lastPos - transform.position;

		for (int i = 1; i <= clouds.Length; i++) {
			clouds [i-1].transform.Translate (deltaPos / (4*i * i) * cloudMult);
		}

		for (int i = 1; i <= city.Length; i++) {
			city [i-1].transform.Translate (deltaPos / (4*i * i) * cityMult);
		}

		lastPos = transform.position;
	}
}
