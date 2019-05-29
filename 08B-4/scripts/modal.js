function m_close(){
    $(".modal").css({
        'z-index':'-100',
        'visibility':'hidden'
    })
}
function m_open(){
    $(".modal").css({
        'z-index':'100',
        'visibility':'visible'
    })
}