// to select a winner: empty array
var unluckyFools = [];

// create a function
$('#fate').click(function() {
    // get the input
    var names = document.getElementById('names').value;

    // separate names and push to empty array
    var unluckyFools = names.split(',');

    // get a random name: this is the winner
    var unlucky = unluckyFools[Math.floor(Math.random()*unluckyFools.length)];

    // ruin their day
    unlucky = '✨ ' + unlucky + ' ✨';

    // display their name
    $('#unlucky-con').addClass('open'); 
    $('#unlucky').addClass('open');
    $('#close').addClass('open');
    $('#unlucky').text(unlucky);
  });

 $("#close").click(function() {
    $('#unlucky-con').removeClass('open'); 
    $('#unlucky').removeClass('open');
    $('#close').removeClass('open');
}); 