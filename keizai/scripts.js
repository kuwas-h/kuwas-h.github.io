$(function () {
    /** 
     * フォントサイズ変更
     */
    const changeFontSize = function () {
        $w = $('#field_wrapper_2').innerWidth(); //親要素の幅を取得
        $w = $w / 3;
        $('#text_wrapper').css('font-size',　$w + 'px');
    }
    $(window).on('load resize', changeFontSize);
});