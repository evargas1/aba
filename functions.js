function addClass() {
    var elem = document.getElementById("myNav");
    elem.classList.add("open");
    console.log("here clicked")
}

function removeClass() {
    var elem = document.getElementById("myNav");
    elem.classList.remove("open");
    console.log("here clicked here removed hehe")
}

$(document).on('submit', '#schedule', function (e){
    e.preventDefault();
    $("#schedule").css({ display: "none" });
    $("#personal-info").css({ display: "flex" });

});


$( document ).ready(function() {
    var todays_date = new Date().toLocaleDateString("en-ca");
    console.log(todays_date);
    $('#date').attr("min", todays_date);
});


$(document).on('submit', '#personal-info', function (e){
    e.preventDefault();
    var date = $('#date').val();
    var time = $('#time').val();
    var name = $('#fname').val();
    var check_name = name.indexOf(" ");

    if (check_name >= 0){
        $("#personal-info").css({ display: "none" });
        $("#success-message").css({ display: "block" }).append(date + " at " + time);
        $("#error-box").css({ display: "none" });
    } else {
        $("#error-box").css({ display: "block" });
        $("#fname").addClass('error');
    }

});
