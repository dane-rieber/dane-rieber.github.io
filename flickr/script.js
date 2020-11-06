var lastUpdate;

window.onscroll = function(ev) {
    if ((window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight) {
        if ((Date.now() - lastUpdate) < 500) return;
        lastUpdate = Date.now();
        makeApiCall(false);
    }
};

var page = 1;

function makeApiCall(refresh) {
    if (refresh) {
        $('#results').text('');
        page = 1;
    } else {
        page++;
    }

    const numPictures = $('#numPictures').find(':selected').text();
    const searchTerms = $('#searchTerm').val().replaceAll(' ', ',');

    const url = getUrl(searchTerms, numPictures, page);

    console.log(url);

    $.ajax(url, {
        dataType: 'json', success: function(data, status, xhr) {
            console.log(data);

            var results = '';
            data.photos.photo.forEach(p => results += getCard(p));
            $('#results').append(results);
        }
    });
}

function getUrl(tags, numPictures, page) {
    return `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=d5e6164057da1dfec8bf6c11c6527842&tags=${tags}&per_page=${numPictures}&page=${page}&privacy_filter=1&safe_search=1&format=json&nojsoncallback=1`
}

function getCard(photo) {
    return `
    <div class="col-sm-4 mt-5">
        <div class="card">
            <img class="card-img-top" src="https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg" alt="${photo.title}">
            <div class="card-body">
                <h5 class="card-title">${photo.title}</h5>
           </div>
        </div>
    </div>`;
}