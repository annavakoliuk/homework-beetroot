fetch('https://dummyjson.com/products/10').then((response) => {
        console.log(response)
        return response.json();
    })
    .then(data => {
        console.log(data);
        const wrapper = document.querySelector('.container')

        const info = `
        <div class="info-and-img">
            <div class="image-holder">
                <img src="${data.thumbnail}" alt="#">
            </div>
            <div class="info">
                <h1 class="info-line">${data.brand}</h1>
                <span class="info-line">Price: ${data.price}</span>
                <span class="info-line">Ratings: ${data.rating}:</span>
                <span class="info-line">Category: ${data.category}</span>
                <span class="info-line">Description:</span>
                <p class="info-line">${data.description}</p>
                <div class="btn-holder">
                    <a href="#" class="btn">Buy</a>
                </div>
            </div>
        </div>
        <div class="images">
        </div>
        `;

        wrapper.insertAdjacentHTML('beforeend', info);
        const imagesSection = document.querySelector('.images');

        data.images.map(image => {
            const newImg = `
            <div class="image-holder">
                <img src="${image}" alt="#">
            </div>
            `
            imagesSection.insertAdjacentHTML('beforeend', newImg);
        })
    })