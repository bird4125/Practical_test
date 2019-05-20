function m_open(){
    var mod = $("#wrap .modal");   
    mod.css({'z-index' : 100,'opacity' : 1})
}

function m_close(){
    var mod = $("#wrap .modal");   
    mod.css({'z-index' : -100,'opacity' : 0})
}