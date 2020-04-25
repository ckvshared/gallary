const wrapper = document.querySelector('.wrapper');
// console.log('wrapper', wrapper);

function createCard(cardObj) {
    return `
    <div class="card">
                <div class="header">
                    <img class="header-image" src="${cardObj.download_url}">
                    <div class="header-title">
                        ${cardObj.author}
                    </div>
                </div>
                <div class="image-wrapper">
                    <img class="image" src="${cardObj.download_url}" alt="test image">
                </div>
                <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
    `;
}

fetch("https://picsum.photos/v2/list")
    .then(function(response) {
        return response.json();
    })
    .then((data) => {
        // console.log('data', data);

        let cardList = '';
        
        data.forEach((cardObj) => {
            cardList = cardList + createCard(cardObj)
        })

        wrapper.innerHTML = cardList;

        let msnry;

        setTimeout(() => {          
            msnry = new Masonry(wrapper);
        }, 1000);

        setTimeout(() => {
            msnry.reloadItems();
        }, 2000);
        
    });

