function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

window.onload = function () {

    let pageList = document.querySelector("#page-list");
    if (pageList) {
        const locate = getUrlParameter("page") || 1;
        const links = pageList.querySelectorAll("[data-locate]");

        links.forEach(link => {
            if(link.dataset.locate === locate){
                link.classList.add("active");
            }
        })
    }
};


