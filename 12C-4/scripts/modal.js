function m_close(){
    $(".m_popup").css({
        'z-index':'-50',
        'opacity':'0'
    })
}
function m_open(){
    $(".m_popup").css({
        'z-index':'100',
        'opacity':'1'
    })
}