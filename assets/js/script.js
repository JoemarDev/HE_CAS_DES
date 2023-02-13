// Accout Scripts
let isLogin = false;



let IsGameDialogOpen = false;
$(document).ready(() => {
    InitCarousel();
    InitAccount();
});



const InitAccount = () => {
    if (isLogin) {
        $('.UserIsMember').show()
        $('.UserIsGuess').hide()
    } else {
        $('.UserIsMember').hide()
        $('.UserIsGuess').show()
    }
}


const OpenTransferDialog = () => {
    if (!isLogin) return OpenLoginDialog()
    $('.TRANSFER_MONEY_DIALOG').toggle()
}


const LoginAccount = () => {
    isLogin = true;
    $('.UserIsMember').show()
    $('.UserIsGuess').hide()
    CloseRegisterDialog()
    CloseLoginDialog()
}


const LougoutAccount = () => {
    $('.UserIsMember').hide()
    $('.UserIsGuess').show()
    $('.TRANSFER_MONEY_DIALOG').hide()
    isLogin = false;
}

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







const OpenPageDialog = () => {
    if (!isLogin) return OpenLoginDialog()
    $('body').css("overflowY", "hidden");
    $('.PAGE_DIALOG_CONTENT').show()
    $('.ACCOUNT_DIALOG_CONTENT').hide()
}

const ClosePageDialog = () => {
    $('body').css("overflowY", "scroll");
    $('.PAGE_DIALOG_CONTENT').hide()
    $('.ACCOUNT_DIALOG_CONTENT').hide()
}


const OpenAccountDialog = () => {
    if (!isLogin) return OpenLoginDialog()
    $('body').css("overflowY", "hidden");
    $('.ACCOUNT_DIALOG_CONTENT').show()
    $('.PAGE_DIALOG_CONTENT').hide()
}

const CloseAccountDialog = () => {
    if (!isLogin) return OpenLoginDialog()
    $('body').css("overflowY", "hidden");
    $('.PAGE_DIALOG_CONTENT').hide()
    $('.ACCOUNT_DIALOG_CONTENT').hide()
}

const ResetTabs = () => {
    $('.tab-content-child').hide()
    $('.dialog-tabs').removeClass('tab-active')
}

const OpenAnouncementTab = () => {
    OpenPageDialog();
    ResetTabs()
    $('.AN_tab').addClass('tab-active')
    $('.announcement_dialog').show()
}

const OpenFAQTab = () => {
    OpenPageDialog();
    ResetTabs()
    $('.FQ_tab').addClass('tab-active')
    $('.faq_dialog').show()
}

const OpenEventTab = () => {
    OpenPageDialog();
    ResetTabs()
    $('.EV_tab').addClass('tab-active')
    $('.event_dialog').show()
}

const OpenInquiryTab = () => {
    OpenPageDialog();
    ResetTabs()
    $('.INQ_tab').addClass('tab-active')
    $('.inquiry_dialog').show()
}


const OpenNoteTab = () => {
    OpenPageDialog();
    ResetTabs()
    $('.NT_TAB').addClass('tab-active')
    $('.notebox_dialog').show()
}

const OpenPartnerTab = () => {
    OpenPageDialog();
    ResetTabs()
    $('.PI_TAB').addClass('tab-active')
    $('.partnership_dialog').show()
}


const OpenMoneyMoveTab = () => {
    OpenAccountDialog();
    ResetTabs()
    $('.MON_tab').addClass('tab-active')
    $('.money_move_dialog').show()
}

const OpenDepositTab = () => {
    OpenAccountDialog();
    ResetTabs()
    $('.DEP_tab').addClass('tab-active')
    $('.deposit_dialog').show()
}

const OpenWithdrawDialog = () => {
    OpenAccountDialog();
    ResetTabs()
    $('.WIT_tab').addClass('tab-active')
    $('.withdrawal_dialog').show()
}


const OpenBonusDialog = () => {
    OpenAccountDialog();
    ResetTabs()
    $('.BON_tab').addClass('tab-active')
    $('.bonus_dialog').show()
}

const OpenFriendDialog = () => {
    OpenAccountDialog();
    ResetTabs()
    $('.FR_TAB').addClass('tab-active')
    $('.friend_dialog').show()
}

const OpenCouponDialog = () => {
    OpenAccountDialog();
    ResetTabs()
    $('.COU_TAB').addClass('tab-active')
    $('.coupon_dialog').show()
}


const OpenHistoryDialog = () => {
    OpenAccountDialog();
    ResetTabs()
    $('.HIS_TAB').addClass('tab-active')
    $('.history_dialog').show()
}

const OpenPasswordDialog = () => {
    OpenAccountDialog();
    ResetTabs()
    $('.PASS_TAB').addClass('tab-active')
    $('.password_dialog').show()
}



const OpenAnouncementContent = () => $('.announcement_content').toggle()

const OpenEventContent = () => $('.event_content').toggle()


const WriteInquiry = () => {
    $('.write_inquiry').show();
    $('.inquiry_lists').hide()
}

const ListInquiry = () => {
    $('.write_inquiry').hide();
    $('.inquiry_lists').show()
}
