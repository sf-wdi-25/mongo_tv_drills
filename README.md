## MongoDB: TV CRUD Drills

This lab is designed to drill you on CRUDing resources in MongoDB.

Your goal is to create a "seed task" that will populate your database with records. Seed data is fake data that we use to test out our application.

## Setting up Mongoose
Add `mongoose` to `package.json`:

``` bash
npm install --save mongoose
```

Next, let's connect to our database in `seed.js`:

``` js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my-tv-db');
```

## TV Character Challenge
Your goal is to seed a "characters" database. Each entry should include:

* the name of the character
* the name of the actor
* the title of the show

#### TV Characters Setup
To begin, let's create a new "character" model, and add it to `models/character.js`.

First we need to require mongoose:

``` js
var mongoose = require('mongoose');
```

Then we need to specify what fields our "character" object has, and the datatype of each field:

``` js
var CharacterSchema = new mongoose.Schema({
  name: String,
  actor_name: String,
  show: String
});
```

Finally, we need to `export` our `Character` model so that we can use it elsewhere in our application:

``` js
var Character = mongoose.model('Character', CharacterSchema);
module.exports = Character;
```

Now we're ready to "import" or `require` our character model. We'll do this in `seed.js`:

``` js
var Character = require("models/character.js");
```

As a sanity check, try running:

```js
node seed.js
```

And make sure you don't see any errors.

#### Mongo in the Node REPL
You can also play with your database inside of the Node REPL. From the command line, run:

``` js
node    # launch the node REPL
var Character = require("models/character.js");
Character.find({}, function(err, characters){
    if(err) { console.log(err); }
    console.log(characters)
})
```

## Part 1. TV Character Challenge

For the following challenge you will need to use Mongoose Models methods for creating and reading resources: http://mongoosejs.com/docs/api.html#model_Model

1. Create Jon Snow
    - `{name: "Jon Snow", actor_name: "Kit Harington", show: "Game of Thrones"}`
2. Create Arya Stark
    `name: "Arya Stark", actor_name: "Maisey Williams", show: "Game of Thrones"`
3. What is Jon Snow's `_id`?
4. Fetch All Characters
5. Fetch Jon Snow by Id
6. Delete Jon Snow
7. Delete Everything in the Database
8. Fetch All Characters again (confirm deletion)
9. Create a seed task that:
    - Clears the database of all entries
    - Creates Jon Snow & Arya Stark (Bonus: do it in _one_ action, not _two_).
    - Logs the number of records that were created.
10. Bonus: woops, we've been spelling "Maisie Williams" wrong ("i-e" not "e-y")! Can you "update" her name with the correct spelling using the Node REPL?


## Part 2. TV Show Challenge
1. Just like you did with the Character Challenge, can you create and export a `Show` model that has the following fields:

    * title: String
    * year: Number

2. Can you create a seed task that populates your show database with data?

```js
var shows = [
    {title: "Game of Thrones", year: 2011},
    {title: "True Detective", year: 2014}
];
```

## Bonus: Add Characters to Shows
1. Can you figure out how to "embed" character documents inside of shows? For example, "Game of Thrones" would have a `characters` field that holds an array of `Characters`. What data becomes redundant once you've embedded the documents?
