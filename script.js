fetch("http://recreate.nirajan.dk/wp-json/wp/v2/bike?_embed")
.then(initial => initial.json())
.then(callBack)

function callBack(data) {
    console.log(data)
    data.forEach(showBike);
}

function showBike(singleBike){
    console.log(singleBike)

     const cate = singleBike._embedded["wp:term"][0][0].name;

    const img_url = singleBike._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;

    const template = document.querySelector("template").content;
    const clone = template.cloneNode(true);

    const elMain = document.querySelector("main");


    clone.querySelector(".name").textContent = singleBike.title.rendered;

    clone.querySelector(".category").textContent = cate;

     clone.querySelector(".price").textContent = singleBike .price;

     clone.querySelector(".instock").textContent = singleBike.instock;

    clone.querySelector(".img").src = img_url;

    elMain.appendChild(clone);
          }
