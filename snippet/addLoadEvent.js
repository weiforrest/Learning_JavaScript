// 手动管理onload事件队列
function addLoadEvent(func) {
    var oldOnLoad = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function (){
            oldOnLoad();
            func();
        }
    }
}
