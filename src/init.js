$(document).ready(function() {
  window.dancers = [];
  var linedUpPosArr = [];
  var randomPosArr = [];
  var topPos = 50;
  var isLinedUp = false;

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    let randTopPos = Number(dancer.$node.css('top').slice(0, dancer.$node.css('top').length - 2));
    let randLeftPos = Number(dancer.$node.css('left').slice(0, dancer.$node.css('left').length - 2));

    window.dancers.push(dancer);
    linedUpPosArr.push([topPos, 0]);
    randomPosArr.push([randTopPos, randLeftPos]);
    topPos += 100;

    $('body').append(dancer.$node);
  });

  // This function lines up all the dancers
  $('.lineUpButton').on('click', function(event) {
    // I - array of dancers
    // O - a top and left position

    // If lined up is false
    if (!isLinedUp) {
      // Call set position on each dancer on lined up array
      for (let i = 0; i < window.dancers.length; i++) {
        let curDancer = window.dancers[i];
        curDancer.setPosition(linedUpPosArr[i][0], linedUpPosArr[i][1]);
      }
      // Change lined up to true
      isLinedUp = true;
    } else { // else
      // Call set position on each dancer on rand pos array
      for (let i = 0; i < window.dancers.length; i++) {
        let curDancer = window.dancers[i];
        curDancer.setPosition(randomPosArr[i][0], randomPosArr[i][1]);
      }
      // Change lined up to false
      isLinedUp = false;
    }
  });
});

