function fetchMemes() {
    console.log("function working")
    let mainDiv = document.createElement('div');
    let divRow = document.createElement('div');
    mainDiv.id = 'memes'
    mainDiv.className = "container"
    divRow.className = "row"
    mainDiv.appendChild(divRow);

    const xhr = new XMLHttpRequest;
    xhr.open("GET", 'https://www.reddit.com/r/ProgrammerHumor/top.json', true);
    xhr.onload = function () {
        if (this.status == 200) {
            const memesData = JSON.parse(this.responseText);
            console.log(memesData)
            for (let p = 0; p < memesData.data.children.length; p++) {
                if (memesData.data.children[p].data.post_hint === 'image') {
                    let h4 = document.createElement('h5');
                    let image = document.createElement('img');
                    let divCol = document.createElement('div');
                    let divCard = document.createElement('div');
                    let divHeader = document.createElement('div');
                    let divFooter = document.createElement('div');
                    let icon = document.createElement('i');
                    divCard.id = "myCard";
                    divCol.className = "col-sm-12 col-lg-4 col-md-6"
                    divCard.className = "card  text-dark shadow p-3 mb-5  rounded"
                    divHeader.className = "card-header"
                    divFooter.className = "card-footer"
                    let linkFooter = document.createElement('a');
                    image.src = memesData.data.children[p].data.url_overridden_by_dest;
                    console.log(image.src)
                    image.className = "img-fluid"
                    h4.textContent = memesData.data.children[p].data.title;
                    h4.className = "d-flex justify-content-center"
                    divHeader.appendChild(h4);
                    divCard.appendChild(divHeader);
                    divCard.appendChild(image);
                    divCard.appendChild(divFooter);
                    divFooter.appendChild(linkFooter);
                    linkFooter.appendChild(icon)
                    icon.className = "bi bi-twitter"
                    linkFooter.target = "_blank"
                    linkFooter.id = "twtLink"
                    linkFooter.href = `https://twitter.com/share?url=${memesData.data.children[p].data.url_overridden_by_dest}`
                    linkFooter.setAttribute('target', '_blank');
                    divCol.appendChild(divCard)
                    divRow.appendChild(divCol);
                    mainDiv.appendChild(divRow);
                }
            }
            document.body.appendChild(mainDiv);
        }
    }
    xhr.send();
} 