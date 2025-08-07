(function (G9D) {
    //预处理
    function reloadPath() {
        var hash = window.location.hash;
        if (hash) {
            hash = hash.slice(1);
        }
        if (!hash.startsWith("/")) {
            hash = "/" + hash;
            window.location.hash = hash;
        }
        if(hash.endsWith("/")){
            hash = hash.slice(0, -1);
            window.location.hash = hash;
        }
        var paths = hash.slice(1).split("/");
        if (paths.length < 1) {
            paths = ["/"];
        }
        paths = paths.map(decodeURIComponent);
        if (!G9D.paths) {
            G9D.paths = [];
        }
        G9D.paths.length = 0;
        for (var i = 0; i < paths.length; i++) {
            G9D.paths.push(paths[i]);
        }
    };
    reloadPath();
    window.addEventListener("hashchange", reloadPath);
    G9D.listen = function(callback){
        window.addEventListener("hashchange", callback);
        callback();
    };
})(window.G9D || (window.G9D = {}));