// assets/js/app.js

require("../css/app.css");

var $collectionHolder;

//add new items (experience forms)
var $addNewItem = $('<a href="#" class="btn btn-info mt-4">Add new item</a>');

$(document).ready(function() {
  //getTheCollection Holder
  $collectionHolder = $("#exp_list");

  //Append the add new item to the collection holder
  $collectionHolder.append($addNewItem);
  $collectionHolder.data('index', $collectionHolder.find('.card').length)

  //add remove button to existing items
  $collectionHolder.find('.card').each(function(){
    addRemoveButtton($(this));
  })


  //handle the click event for addNew item
  $addNewItem.click(function(e){
    e.preventDefault();
    //create a new form and append it to collectionHolder
    addNewForm();
  })

});

function addNewForm(){
  //getting the prototype
  var prototype = $collectionHolder.data('prototype');

  //get the index
  var index = $collectionHolder.data('index')


  //create the form
  var newForm=prototype;

  newForm= newForm.replace(/_name_/g. index);


  $collectionHolder.data('index', index+1);
  //create the card
  var $card = $("<div class= 'card card-warning'><div class='card-heading'></div></div>");

  //create the card body and append the form to it
  var $cardBody = $("<div class='card-body'></div>").append(newForm);

  //append the body to the card
  $card.append($cardBody);

  //append the remove button to the new card
  addRemoveButtton($card);

  //append the $card to the addNewItem
  $addNewItem.before($card);

}

  //add new items (experience forms)


  //remove them

function addRemoveButtton($card) {
  //create remove button
  var $removeButton = $("<a href='#' class='btn btn-danger'>Remove</a>");
  
  //appending the remove button to the card footer
  var $cardFooter = $("<div class='card-footer'></div>").append($removeButton);

  //handle the click eventg of the remove button
  $removeButton.click(function (e) {
    e.preventDefault();
    $(e.target).parents('.card').slideUp(1000, function() {
        $(this).remove();
    })
  });

  //append the footer to the card
  $card.append($cardFooter);
}


// // setup an "add a tag" link
// var $addTagButton = $('<button type="button" class="add_tag_link">Add a tag</button>');
// var $newLinkLi = $('<li></li>').append($addTagButton);

// jQuery(document).ready(function() {
//     // Get the ul that holds the collection of tags
//     $collectionHolder = $('ul.tags');

//     // add the "add a tag" anchor and li to the tags ul
//     $collectionHolder.append($newLinkLi);

//     // count the current form inputs we have (e.g. 2), use that as the new
//     // index when inserting a new item (e.g. 2)
//     $collectionHolder.data('index', $collectionHolder.find(':input').length);

//     $addTagButton.on('click', function(e) {
//         // add a new tag form (see next code block)
//         addTagForm($collectionHolder, $newLinkLi);
//     });
// });


