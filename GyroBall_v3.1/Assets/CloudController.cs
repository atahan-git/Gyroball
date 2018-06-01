using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CloudController : MonoBehaviour {

	public GameObject[] clouds;
	public GameObject layer;

	public float sizeMult = 1f;

	public Vector2 distance = new Vector2(2,3);
	public Vector2 count = new Vector2(1,2);
	public Vector2 speed = new Vector2(1,1.5f);
	public Vector2 xRange = new Vector2 (-5,5);

	// Use this for initialization
	void Start () {
		
	}


	float leastHeight = 0;
	// Update is called once per frame
	void Update () {

		while (leastHeight > transform.position.y- 10) {
			leastHeight -= Random.Range (distance.x,distance.y);
			int _count = (int)(Random.Range (count.x,count.y));

			for (int i = 0; i < _count; i++) {
				GameObject cloud = (GameObject)Instantiate (clouds[Random.Range(0,clouds.Length-1)],layer.transform);
				cloud.transform.position = new Vector3 (Random.Range(xRange.x,xRange.y),leastHeight + Random.Range(-0.2f,0.2f),layer.transform.position.z);

				cloud.GetComponent<CloudMover> ().SetUp ((Random.Range(0,2) == 0 ? 1 : -1)*Random.Range(speed.x,speed.y), leastHeight + 10);
			}
		}
	}
}
