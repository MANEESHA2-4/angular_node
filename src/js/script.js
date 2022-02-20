document.querySelectorAll(".footorsection..box").for each((item)=>{
    //console.log(item);
    item.addEventListener("click",(event)=>{

        let imgsrc=item.querySelector(".thumbnail img").src;
        let title=item.querySelector(".infobox h5").textContent;
        let price=item.querySelector(".infobx.price").textContent;
        //console.log(imgsrc);
        //console.log(title);
        //console.log(price);
    })
};