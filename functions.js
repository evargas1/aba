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

$(document).on('submit', '#personal-info', function (e){
    e.preventDefault();
    $("#personal-info").css({ display: "none" });
    $("#success-message").css({ display: "block" });
});
