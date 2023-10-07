for(var i = 0; i < 10; i++){
    document.getElementById("artworks-grid").innerHTML += `
    <div class="artwork">
        <img src="/explore-images/art10.avif" alt="Artwork 4">
    </div>
    `
}


for(a in artworks){
    document.getElementById("artworks-grid").innerHTML += `
    <div class="artwork">
        <img src="${a["arturl"]}">
    </div>
    `
}