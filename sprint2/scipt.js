// let form=document.getElementById('comment__form');

// function render(data) {
//     let div=document.createElement('div');
//     let div1 = data.name;
//     let div2 = data.date;
//     let div3 = data.comment;
//     div.innerHTML= '<div class="comment__container"><div class="comment__image"><img src="./Assets/Images/Mohan-muruge.jpg" alt="person-image" class="comment__image-icon"></div><div class="comment"><div class="comment__header"><h3 class="comment__header-writer">' + div1 + '</h3><p class="comment__header-timestamp">' + div2 + '</p></div><p class="comment__text">' + div3 + '</p></div></div>';
//     document.querySelector('.com__container').prepend(div);
// }

// const commentArray = [{"name":"Micheal Lyons", "date":"12/08/2019", "comment":"They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greates opening of a concert I have EVER witnessed."}, {"name":"Micheal Lyons", "date":"12/08/2019", "comment":"They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greates opening of a concert I have EVER witnessed."},{"name":"Micheal Lyons", "date":"12/08/2019", "comment":"They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greates opening of a concert I have EVER witnessed."}];

// form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     let dt = new Date();
//     let new_comment = {"name":event.target.name.value ,"date":dt.toLocaleString() ,"comment":event.target.comment.value};
//     commentArray.push(new_comment);
//     for(let i=0; i<commentArray.length;i++){
//         render(commentArray[i]);
//     }
// });

function myFunction() {
    let show__header__array = ["date-show", "venue", "location","button"];
    const shows__array = [["Mon Dec 17 2018", "Mon Dec 17 2018", "Mon Dec 17 2018","Mon Dec 17 2018","Mon Dec 17 2018","Mon Dec 17 2018"], ["Ronald Lane", "Ronald Lane", "Ronald Lane","Ronald Lane","Ronald Lane","Ronald Lane"], ["San Francisco, CA", "San Francisco, CA", "San Francisco, CA","San Francisco, CA","San Francisco, CA","San Francisco, CA"], ["button","button","button","button","button","button"]];
    var x = document.createElement("TABLE");
    x.setAttribute("id", "shows__table");
    document.body.appendChild(x);

    var y = document.createElement("TR");
    y.setAttribute("id", "shows__table-header");
    document.getElementById("shows__table").appendChild(y);
    for (let j = 0; j < 4; j++) {
        var z = document.createElement("TD");
        var t = document.createTextNode(show__header__array[j]);
        z.appendChild(t);
        document.getElementById("shows__table-header").appendChild(z);
    }
    
    for (let i = 0; i < 6; i++) {
        var y = document.createElement("TR");
        y.setAttribute("id", "shows__table-row"+i);
        document.getElementById("shows__table").appendChild(y);

        for (let j = 0; j < 4; j++) {
                var z = document.createElement("TD");
                var t = document.createTextNode(shows__array[j][i]);
                z.appendChild(t);
                document.getElementById("shows__table-row"+i).appendChild(z);
        }       
    }
}