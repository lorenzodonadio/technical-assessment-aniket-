/* TODO
Complete this type to match the given JSON data (https://jsonkeeper.com/b/OHVP)
here is one of the items:
{
	"id": 1,
	"first_name": "Gary",
	"last_name": "Browse",
	"email": "gbrowse0@smh.com.au",
	"ip_address": "183.208.170.41",
	"avatar": "https://robohash.org/commodipraesentiumexpedita.png?size=50x50&set=set1",
	"created_at": "2021-12-21T05:13:35Z",
	"country": "CN"
}

**careful** `avatar` and `country` may contail null values*/

export interface Person {
	id: number;
}
