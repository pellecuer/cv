// assets/js/app.js

require("../css/app.css");

var $collectionHolder;

//add new items (experience forms)
var $addNewItem = $("<a href='#' class='btn btn-info'>Add new item</a>");

$(document).ready(function() {
  //getTheCollerion Holder
  $collectionHolder = $("#exp_list");

  //add remove button to existing items
  $collectionHolder.find(".card").each(function() {
    addRemoveButtton($(this));
  });
});

//add new items (experience forms)

//remove them

function addRemoveButtton($card) {
  //create remove button
  var $removeButton = $("<a href='#' class='btn btn-danger'>Remove</a>");

  var $cardFooter = $("<div class='card-footer'></div>").append($removeButton);

  //handle the click eventg of the remove button
  $removeButton.click(function (e) {
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

//remove them
