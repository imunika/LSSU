$(document).ready(() => {
    stork.register(
        'landscapes',
        'landscapes.st',
        {
            showProgress: false,
            minimumQueryLength: 1
        }
    );
    // hide magnifying glass when unfocusing search input
    $("#search").blur((e) => {
        if (e.target.value.length > 0) {
          $("#search").css('background-position', '-200px');
        } else {
          $("#search").css('background-position', 'right');
        }
    });
});
