$(document).ready(function() {
  var xHTML = "<p>X</p>";
  var oHTML = "<p>O</p>";
  var yourHTML = "";
  var comHTML = "";
  var totalMoves = 0;
  const open = [
    {
      "boxNumber": 0,
      "box": true,
      "playerInput": false,
      "aiInput": false
    },
    {
      "boxNumber": 1,
      "box": true,
      "playerInput": false,
      "aiInput": false
    },
    {
      "boxNumber": 2,
      "box": true,
      "playerInput": false,
      "aiInput": false
    },
    {
      "boxNumber": 3,
      "box": true,
      "playerInput": false,
      "aiInput": false
    },
    {
      "boxNumber": 4,
      "box": true,
      "playerInput": false,
      "aiInput": false
    },
    {
      "boxNumber": 5,
      "box": true,
      "playerInput": false,
      "aiInput": false
    },
    {
      "boxNumber": 6,
      "box": true,
      "playerInput": false,
      "aiInput": false
    },
    {
      "boxNumber": 7,
      "box": true,
      "playerInput": false,
      "aiInput": false
    },
    {
      "boxNumber": 8,
      "box": true,
      "playerInput": false,
      "aiInput": false
    },
  ] // var open object end
  const reset = () => {
    totalMoves = 0;
      for (var z = 0; z < open.length; z++) {
        open[z].box = true;
        open[z].playerInput = false;
        open[z].aiInput = false;
      }
      for (var y = 0; y < 9; y++) {
        var box = '#box' + y;
        $(box).html(" ");
      }
  } // function reset end
  const aiPopUp = () => $('.aiWin-container').show('slow');
  const aiWin = () => {
    if (open[0].aiInput === true && open[1].aiInput === true && open[2].aiInput === true) {
        aiPopUp();
      } else if (open[3].aiInput === true && open[4].aiInput === true && open[5].aiInput === true) {
        aiPopUp();
      } else if (open[6].aiInput === true && open[7].aiInput === true && open[8].aiInput === true) {
        aiPopUp();
      } else if (open[0].aiInput === true && open[3].aiInput === true && open[6].aiInput === true) {
        aiPopUp();
      } else if (open[1].aiInput === true && open[4].aiInput === true && open[7].aiInput === true) {
        aiPopUp();
      } else if (open[2].aiInput === true && open[5].aiInput === true && open[8].aiInput === true) {
        aiPopUp();
      } else if (open[0].aiInput === true && open[4].aiInput === true && open[8].aiInput === true) {
        aiPopUp();
      } else if (open[2].aiInput === true && open[4].aiInput === true && open[6].aiInput === true) {
        aiPopUp();
      }
  } // function playerWin end
  const aiInput = (boxNumber) => {
    $('#box' + boxNumber.toString()).html(comHTML);
    open[boxNumber].box = false;
    open[boxNumber].aiInput = true;
    totalMoves += 1;
  } // function aiInput end
  const aiMove = () => {
    var aiMove = setTimeout(function() {
      // winning play ********************************************************************************************************
      var winningPlay = false;
      if (open[4].box === true) {
        aiInput(4);
        winningPlay = true;
      } else if (open[0].box === true && open[1].aiInput === true && open[2].aiInput === true) {
        aiInput(0);
        winningPlay = true;
      } else if (open[0].aiInput === true && open[1].box === true && open[2].aiInput === true) {
        aiInput(1);
        winningPlay = true;
      } else if (open[0].aiInput === true && open[1].aiInput === true && open[2].box === true) {
        aiInput(2);
        winningPlay = true;
      } else if (open[3].box === true && open[4].aiInput === true && open[5].aiInput === true) {
        aiInput(3);
        winningPlay = true;
      } else if (open[3].aiInput === true && open[4].box === true && open[5].aiInput === true) {
        aiInput(4);
        winningPlay = true;
      } else if (open[3].aiInput === true && open[4].aiInput === true && open[5].box === true) {
        aiInput(5);
        winningPlay = true;
      } else if (open[6].box === true && open[7].aiInput === true && open[8].aiInput === true) {
        aiInput(6);
        winningPlay = true;
      } else if (open[6].aiInput === true && open[7].box === true && open[8].aiInput === true) {
        aiInput(7);
        winningPlay = true;
      } else if (open[6].aiInput === true && open[7].aiInput === true && open[8].box === true) {
        aiInput(8);
        winningPlay = true;
      } else if (open[0].box === true && open[3].aiInput === true && open[6].aiInput === true) {
        aiInput(0);
        winningPlay = true;
      } else if (open[0].aiInput === true && open[3].box === true && open[6].aiInput === true) {
        aiInput(3);
        winningPlay = true;
      } else if (open[0].aiInput === true && open[3].aiInput === true && open[6].box === true) {
        aiInput(6);
        winningPlay = true;
      } else if (open[1].box === true && open[4].aiInput === true && open[7].aiInput === true) {
        aiInput(1);
        winningPlay = true;
      } else if (open[1].aiInput === true && open[4].box === true && open[7].aiInput === true) {
        aiInput(4);
        winningPlay = true;
      } else if (open[1].aiInput === true && open[4].aiInput === true && open[7].box === true) {
        aiInput(7);
        winningPlay = true;
      } else if (open[2].box === true && open[5].aiInput === true && open[8].aiInput === true) {
        aiInput(2);
        winningPlay = true;
      } else if (open[2].aiInput === true && open[5].box === true && open[8].aiInput === true) {
        aiInput(5);
        winningPlay = true;
      } else if (open[2].aiInput === true && open[5].aiInput === true && open[8].box === true) {
        aiInput(8);
        winningPlay = true;
      } else if (open[0].box === true && open[4].aiInput === true && open[8].aiInput === true) {
        aiInput(0);
        winningPlay = true;
      } else if (open[0].aiInput === true && open[4].box === true && open[8].aiInput === true) {
        aiInput(4);
        winningPlay = true;
      } else if (open[0].aiInput === true && open[4].aiInput === true && open[8].box === true) {
        aiInput(8);
        winningPlay = true;
      } else if (open[2].box === true && open[4].aiInput === true && open[6].aiInput === true) {
        aiInput(2);
        winningPlay = true;
      } else if (open[2].aiInput === true && open[4].box === true && open[6].aiInput === true) {
        aiInput(4);
        winningPlay = true;
      } else if (open[2].aiInput === true && open[4].aiInput === true && open[6].box === true) {
        aiInput(6);
        winningPlay = true;
      }
      // defense play ******************************************************************************************************************
      var defensePlay = false;
      if (winningPlay === false && open[0].box === true && open[1].playerInput === true && open[2].playerInput === true) {
        aiInput(0);
        defensePlay = true;
      } else if (winningPlay === false && open[1].box === true && open[0].playerInput === true && open[2].playerInput === true) {
        aiInput(1);
        defensePlay = true;
      } else if (winningPlay === false && open[2].box === true && open[0].playerInput === true && open[1].playerInput === true) {
        aiInput(2);
        defensePlay = true;
      } else if (winningPlay === false && open[3].box === true && open[4].playerInput === true && open[5].playerInput === true) {
        aiInput(3);
        defensePlay = true;
      } else if (winningPlay === false && open[4].box === true && open[3].playerInput === true && open[5].playerInput === true) {
        aiInput(4);
        defensePlay = true;
      } else if (winningPlay === false && open[5].box === true && open[3].playerInput === true && open[4].playerInput === true) {
        aiInput(5);
        defensePlay = true;
      } else if (winningPlay === false && open[6].box === true && open[7].playerInput === true && open[8].playerInput === true) {
        aiInput(6);
        defensePlay = true;
      } else if (winningPlay === false && open[7].box === true && open[6].playerInput === true && open[8].playerInput === true) {
        aiInput(7);
        defensePlay = true;
      } else if (winningPlay === false && open[8].box === true && open[6].playerInput === true && open[7].playerInput === true) {
        aiInput(8);
        defensePlay = true;
      } else if (winningPlay === false && open[0].box === true && open[3].playerInput === true && open[6].playerInput === true) {
        aiInput(0);
        defensePlay = true;
      } else if (winningPlay === false && open[3].box === true && open[0].playerInput === true && open[6].playerInput === true) {
        aiInput(3);
        defensePlay = true;
      } else if (winningPlay === false && open[6].box === true && open[0].playerInput === true && open[3].playerInput === true) {
        aiInput(6);
        defensePlay = true;
      } else if (winningPlay === false && open[1].box === true && open[4].playerInput === true && open[7].playerInput === true) {
        aiInput(1);
        defensePlay = true;
      } else if (winningPlay === false && open[4].box === true && open[1].playerInput === true && open[7].playerInput === true) {
        aiInput(4);
        defensePlay = true;
      } else if (winningPlay === false && open[7].box === true && open[1].playerInput === true && open[4].playerInput === true) {
        aiInput(7);
        defensePlay = true;
      } else if (winningPlay === false && open[2].box === true && open[5].playerInput === true && open[8].playerInput === true) {
        aiInput(2);
        defensePlay = true;
      } else if (winningPlay === false && open[5].box === true && open[2].playerInput === true && open[8].playerInput === true) {
        aiInput(5);
        defensePlay = true;
      } else if (winningPlay === false && open[8].box === true && open[2].playerInput === true && open[5].playerInput === true) {
        aiInput(8);
        defensePlay = true;
      } else if (winningPlay === false && open[0].box === true && open[4].playerInput === true && open[8].playerInput === true) {
        aiInput(0);
        defensePlay = true;
      } else if (winningPlay === false && open[4].box === true && open[0].playerInput === true && open[8].playerInput === true) {
        aiInput(4);
        defensePlay = true;
      } else if (winningPlay === false && open[8].box === true && open[0].playerInput === true && open[4].playerInput === true) {
        aiInput(8);
        defensePlay = true;
      } else if (winningPlay === false && open[2].box === true && open[4].playerInput === true && open[6].playerInput === true) {
        aiInput(2);
        defensePlay = true;
      } else if (winningPlay === false && open[4].box === true && open[2].playerInput === true && open[6].playerInput === true) {
        aiInput(4);
        defensePlay = true;
      } else if (winningPlay === false && open[6].box === true && open[2].playerInput === true && open[4].playerInput === true) {
        aiInput(6);
        defensePlay = true;
      }
      // find ways to win play *****************************************************************************************************
      var found = false;
      if (winningPlay === false && defensePlay === false && open[0].aiInput === true && open[3].box === true && open[6].box === true) {
        aiInput(3);
        found = true;
      } else if (winningPlay === false && defensePlay === false && open[0].aiInput === true && open[4].box === true && open[8].box === true) {
        aiInput(4);
        found = true;
      } else if (winningPlay === false && defensePlay === false && open[0].aiInput === true && open[1].box === true && open[2].box === true) {
        aiInput(1);
        found = true;
      } else if (winningPlay === false && defensePlay === false && open[1].aiInput === true && open[0].box === true && open[2].box === true) {
        aiInput(0);
        found = true;
      } else if (winningPlay === false && defensePlay === false && open[1].aiInput === true && open[4].box === true && open[7].box === true) {
        aiInput(4);
        found = true;
      } else if (winningPlay === false && defensePlay === false && open[2].aiInput === true && open[0].box === true && open[1].box === true) {
        aiInput(0);
        found = true;
      } else if (winningPlay === false && defensePlay === false && open[2].aiInput === true && open[4].box === true && open[6].box === true) {
        aiInput(4);
        found = true;
      } else if (winningPlay === false && defensePlay === false && open[2].aiInput === true && open[5].box === true && open[8].box === true) {
        aiInput(5);
        found = true;
      } else if (winningPlay === false && defensePlay === false && open[3].aiInput === true && open[0].box === true && open[6].box === true) {
        aiInput(0);
        found = true;
      } else if (winningPlay === false && defensePlay === false && open[3].aiInput === true && open[4].box === true && open[5].box === true) {
        aiInput(4);
        found = true;
      } else if (winningPlay === false && defensePlay === false && open[4].aiInput === true && open[3].box === true && open[5].box === true) {
        aiInput(3);
        found = true;
      } else if (winningPlay === false && defensePlay === false && open[4].aiInput === true && open[1].box === true && open[7].box === true) {
        aiInput(1);
        found = true;
      } else if (winningPlay === false && defensePlay === false && open[4].aiInput === true && open[0].box === true && open[8].box === true) {
        aiInput(0);
        found = true;
      } else if (winningPlay === false && defensePlay === false && open[4].aiInput === true && open[2].box === true && open[6].box === true) {
        aiInput(2);
        found = true;
      } else if (winningPlay === false && defensePlay === false && open[5].aiInput === true && open[2].box === true && open[8].box === true) {
        aiInput(2);
        found = true;
      } else if (winningPlay === false && defensePlay === false && open[5].aiInput === true && open[3].box === true && open[4].box === true) {
        aiInput(3);
        found = true;
      } else if (winningPlay === false && defensePlay === false && open[6].aiInput === true && open[0].box === true && open[3].box === true) {
        aiInput(0);
        found = true;
      } else if (winningPlay === false && defensePlay === false && open[6].aiInput === true && open[4].box === true && open[2].box === true) {
        aiInput(4);
        found = true;
      } else if (winningPlay === false && defensePlay === false && open[6].aiInput === true && open[7].box === true && open[8].box === true) {
        aiInput(7);
        found = true;
      } else if (winningPlay === false && defensePlay === false && open[7].aiInput === true && open[1].box === true && open[4].box === true) {
        aiInput(1);
        found = true;
      } else if (winningPlay === false && defensePlay === false && open[7].aiInput === true && open[6].box === true && open[8].box === true) {
        aiInput(6);
        found = true;
      } else if (winningPlay === false && defensePlay === false && open[8].aiInput === true && open[6].box === true && open[7].box === true) {
        aiInput(6);
        found = true;
      } else if (winningPlay === false && defensePlay === false && open[8].aiInput === true && open[0].box === true && open[4].box === true) {
        aiInput(0);
        found = true;
      } else if (winningPlay === false && defensePlay === false && open[8].aiInput === true && open[2].box === true && open[5].box === true) {
        aiInput(2);
        found = true;
      }
      // random play ***************************************************************************************************************
      while (totalMoves < 9 && winningPlay === false && defensePlay === false && found === false) {
        var randomNum = Math.floor(Math.random() * (8 - 0));
        if (open[randomNum].box === true) {
          aiInput(randomNum);
          break;
        }
      }
      aiWin();
      if(totalMoves === 9) {
        reset();
      }
    },
    1000);
  } // function aiMove end
  const playerPopUp = () => $('.playerWin-container').show('slow');
  const playerWin = () => {
    if (open[0].playerInput === true && open[1].playerInput === true && open[2].playerInput === true) {
        playerPopUp();
      } else if (open[3].playerInput === true && open[4].playerInput === true && open[5].playerInput === true) {
        playerPopUp();
      } else if (open[6].playerInput === true && open[7].playerInput === true && open[8].playerInput === true) {
        playerPopUp();
      } else if (open[0].playerInput === true && open[3].playerInput === true && open[6].playerInput === true) {
        playerPopUp();
      } else if (open[1].playerInput === true && open[4].playerInput === true && open[7].playerInput === true) {
        playerPopUp();
      } else if (open[2].playerInput === true && open[5].playerInput === true && open[8].playerInput === true) {
        playerPopUp();
      } else if (open[0].playerInput === true && open[4].playerInput === true && open[8].playerInput === true) {
        playerPopUp();
      } else if (open[2].playerInput === true && open[4].playerInput === true && open[6].playerInput === true) {
        playerPopUp();
      }
  } // function playerWin end
  const playerMove = (boxNumber) => {
    if (open[boxNumber].box) {
      $('#box' + boxNumber.toString()).html(yourHTML);
      open[boxNumber].box = false;
      open[boxNumber].playerInput = true;
      totalMoves += 1;
      playerWin();
      aiMove();
    }
  } // function playerMove end
  $('.playerWin-container').hide();
  $('.aiWin-container').hide();
  $('#setting').hide().show('slow');
  $('#xOption').click(function() {
    yourHTML = xHTML;
    comHTML = oHTML;
    $('.popup-container').hide();
  }); // #xOption click end
  $('#oOption').click(function() {
    yourHTML = oHTML;
    comHTML = xHTML;
    $('.popup-container').hide();
  }); // #oOption click end
  $('#playerResetButton').click(function() {
    reset();
    $('.playerWin-container').hide();
  });
  $('#aiResetButton').click(function() {
    reset();
    $('.aiWin-container').hide();
  });
  // player moves *******************************
  $('#box0').click(function() {
    playerMove(0);
  });
  $('#box1').click(function() {
    playerMove(1);
  });
  $('#box2').click(function() {
    playerMove(2);
  });
  $('#box3').click(function() {
    playerMove(3);
  });
  $('#box4').click(function(){
    playerMove(4);
  });
  $('#box5').click(function() {
    playerMove(5);
  });
  $('#box6').click(function() {
    playerMove(6);
  });
  $('#box7').click(function() {
    playerMove(7);
  });
  $('#box8').click(function() {
    playerMove(8);
  });
}); // document ready end
