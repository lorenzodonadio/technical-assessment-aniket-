## Technical assessment for Deerns

I would say: The assessment is a simple exercise to test your web development abilities, we recommend to have git available in your laptop and your IDE of choice (but we advise vscode). Before the assessment is good to refresh your knowledge of Svelte, Typescript and css (specially tailwind). 


This assessment was created to be completed in 1 hour, we dont expect all the tasks to be completed 100% since it is a short amount of time. What is important is your though process when going through the tasks, as at the end of the time the candidate will be asked to demostrate what he/she accomplished and explain it

Have fun and be creative

### Setup

First lets get this repo working in your localhost so you can perform the tasks.

**We strongly advice to use VS code and have git bash/configured**

```bash
# clone this repo in your directory of choice,
git clone https://github.com/lorenzodonadio/technical-assessment.git
# navigate to the repo folder
cd technical-assessment
#open vs code here
code .
# open a cmd terminal in vscode
# install node packages
npm install

#start a development server
npm run dev

# open http://localhost:3000/ in your browser
```

### tasks

For this assignment you are asked to modify 4 files

- `src/lib/types/personType.ts` #Type file for "person" data
- `src/routes/+page.server.ts` #Home endpoint
- `src/lib/components/Card.svelte` #Card component
- `src/routes/+page.svelte` #Home page

Please follow this steps:

1. Complete the personType.ts file and use this type wherever is subsequently needed, (If you are not familiar with Typescript just skip and "any[]" type)
2. Modify the home endpoint (index.ts) to correctly get the json data hosted in this url:`https://api.npoint.io/7116b399239c3967fad5`
3. Complete the Card.svelte component to display correctly and nicely the relevant information of one person
4. Display all the data contained in the home page (index.svelte), as cards. If possible style the page nicely, be creative.
5. **Bonus** Only if you have time, implement:
   - filtering to only display people form a certain country
   - search bar, search people by name
   - sort cards by most recent/oldest

### help and tips:

- Commit constantly and at the end of the time make a final commit :)

- Feel free to use any CSS you want, but TailwindCSS is already configured in this project you you can go ahead and use it if you want.

- This is what the data looks like (an array of objects like this one):

```json
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
```

**careful** `avatar` and `country` may contail null values

- use {#each} block to display many cards https://svelte.dev/tutorial/each-blocks
