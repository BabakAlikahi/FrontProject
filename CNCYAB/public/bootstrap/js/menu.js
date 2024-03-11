$('.li_child1').each(function () {
    var li_child1_link_media = $('.li_child1_link_media', this);
    var ul_child2 = $('.ul_child2', this);
    li_child1_link_media.click(function () {
        ul_child2.fadeToggle(200);
    });
});