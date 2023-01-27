let IsGameDialogOpen = false;
$(document).ready(() => {
    InitCarousel();
});


const InitCarousel = () => {
    $('.owl-carousel').owlCarousel({
        slideSpeed: 300,
        paginationSpeed: 400,
        items: 1,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
    })
}


let DefaultValue = 50_269_923_500.01

setInterval(() => {
    DefaultValue += Math.floor(Math.random() * 50);
    console.log(DefaultValue)
    $('#odometer').html(DefaultValue)
}, 4000)

const ResetDialogButton = () => {
    $('.tab-dialog-btn').removeClass("button-2");
    $('.tab-dialog-btn').removeClass("button-1");
    $('.tab-dialog-btn').addClass("button-1");
    $('.tab-box').hide();
}

const OpenDialog = () => {
    IsGameDialogOpen = true;
    $('body').css("overflowY", "hidden");
    $('.GAME_DIALOG').show();
}

const CloseDialog = () => {
    IsGameDialogOpen = false;
    $('body').css("overflowY", "scroll");
    $('.GAME_DIALOG').hide();
}


const OpenCasinoDialog = () => {
    ResetDialogButton();
    $('.casino-tab-btn').removeClass("button-1");
    $('.casino-tab-btn').addClass("button-2");
    $('.casino-tab-box').show();
    OpenDialog();
}

const OpenSlotDialog = () => {
    ResetDialogButton();
    $('.slot-tab-btn').removeClass("button-1");
    $('.slot-tab-btn').addClass("button-2");
    $('.slot-tab-box').show();
    OpenDialog();
}


const OpenSportsDialog = () => {
    ResetDialogButton();
    $('.sports-tab-btn').removeClass("button-1");
    $('.sports-tab-btn').addClass("button-2");
    $('.sports-tab-box').show();
    OpenDialog();
}


const OpenLoginDialog = () => {
    $('body').css("overflowY", "hidden");
    $('.LOGIN_DIALOG').show()
}



const CloseLoginDialog = () => {
    $('.LOGIN_DIALOG').hide()
    if (IsGameDialogOpen) return;
    $('body').css("overflowY", "scroll");
}







const OpenRegisterDialog = () => {
    $('body').css("overflowY", "hidden");
    $('.REGISTER_DIALOG').show()
}



const CloseRegisterDialog = () => {
    $('.REGISTER_DIALOG').hide()
    if (IsGameDialogOpen) return;
    $('body').css("overflowY", "scroll");
}





