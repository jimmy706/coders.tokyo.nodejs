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
        const links = [...pageList.querySelectorAll("[data-locate]")];
        const prev = pageList.querySelector(".page-prev");
        const next = pageList.querySelector(".page-next");
        const prevLink = prev.querySelector(".page-link");
        const nextLink = next.querySelector(".page-link");
        const prevLocate = parseInt(locate) - 1;
        const nextLocate = parseInt(locate) + 1;

        // set link for next and prev 
        prevLink.href = `/products?page=${prevLocate}`;
        nextLink.href = `/products?page=${nextLocate}`;
        
        // add disabled class if page at edge
        if(links.length == locate)
            next.classList.add("disabled");
        else if(locate == 1)
            prev.classList.add("disabled");
        

        links.forEach(link => {
            if(link.dataset.locate == locate){
                link.classList.add("active");
            }
        })
    }
};


