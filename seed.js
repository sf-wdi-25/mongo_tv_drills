var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my-tv-db');

var Character = require('./models/character.js');



// // 1. Create Jon Snow

// var data = {name: "Jon Snow", actor_name: "Kit Harington", show: "Game of Thrones"};

// Character.create(data, function(err, character){
//   if(err) { console.log(err); }
//   console.log(character);
//   process.exit()
// });




// 2. Create Arya Stark

// var data = {name: "Arya Stark", actor_name: "Maisey Williams", show: "Game of Thrones"};

// Character.create(data, function(err, character){
//   if(err) { console.log(err); }
//   console.log(character);
//   process.exit()
// });



// // 3. What is Jon Snow's `_id`?
// this will vary, check your console output!

// // 4. Fetch All Characters

// Character.find({}, function(err, all_characters){
//   if(err) { console.log(err); };
//   console.log(all_characters)
// });



// // 5. Fetch Jon Snow by Id

// Character.find({_id: "5665e2a6c5389f246064cb17"}, function(err, character){
//   if(err) { console.log(err); };
//   console.log("Jon Snow's _id is", character._id)
// });



// // 6. Delete Jon Snow
// Character.remove({_id: "5665e2a6c5389f246064cb17"}, function(err){
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Deleted Jon Snow");
//   }
// });


// // 7. Delete Everything in the Database
// Character.remove({}, function(err){
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Deleted All Characters");
//   }
// });


// // 8. Fetch All Characters again (confirm deletion)
// Character.find({}, function(err, characters){
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Character count: ", characters.length);
//   }
// });


// // 9. Create a seed task that:

var list = [
  {name: "Jon Snow", actor_name: "Kit Harington", show: "Game of Thrones"},
  {name: "Arya Stark", actor_name: "Maisey Williams", show: "Game of Thrones"}
];

Character.remove({}, function(err){
  if(err) {
    console.log(err);
    process.exit();
  }

  Character.create(list, function(err, characters){
    if(err) {
      console.log(err);
      process.exit();
    } else {
      console.log("Number of characters created:", characters.length)
      process.exit();
    }
  })

});


// // 10. Bonus: woops, we've been spelling "Maisie Williams" wrong ("i-e" not "e-y")! Can you "update" her name with the correct spelling using the Node REPL?

// Character.findOneAndUpdate({actor_name: "Maisey Williams"}, {actor_name: "Maisie Williams"}, function(err, character){
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Updated: ", character)
//   }
// })
