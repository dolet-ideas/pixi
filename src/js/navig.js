PubSub.subscribe('gotoslide',function (msg,data) {
    $('.pagination a').removeClass('is-active');
    $('[data-gotoslide="' + data.to+'"]').addClass('is-active');
})