let form=document.getElementById('comment__form');

function render(data) {
    let div=document.createElement('div');
    let div1 = data.name;
    let div2 = data.date;
    let div3 = data.comment;
    div.innerHTML= '<div class="comment__container"><div class="comment__image"><img src="./Assets/Images/Mohan-muruge.jpg" alt="person-image" class="comment__image-icon"></div><div class="comment"><div class="comment__header"><h3 class="comment__header-writer">' + div1 + '</h3><p class="comment__header-timestamp">' + div2 + '</p></div><p class="comment__text">' + div3 + '</p></div></div>';
    // div.innerHTML = '<div class="comment__container"><div class="comment__image"><img src="./Assets/Images/Mohan-muruge.jpg" alt="person-image" class="comment__image-icon"></div><div class="comment"><div class="comment__header"><h3 class="comment__header-writer">';
    
    // div.innerHTML += '</h3><p class="comment__header-timestamp">';
    
    // div.innerHTML += '</p></div><p class="comment__text">';
    
    // div.innerHTML += '</p></div></div>';
    document.querySelector('.com__container').prepend(div);
}

const commentArray = [{"name":"Micheal Lyons", "date":"12/08/2019", "comment":"They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greates opening of a concert I have EVER witnessed."}, {"name":"Micheal Lyons", "date":"12/08/2019", "comment":"They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greates opening of a concert I have EVER witnessed."},{"name":"Micheal Lyons", "date":"12/08/2019", "comment":"They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greates opening of a concert I have EVER witnessed."}];

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let dt = new Date();
    let new_comment = {"name":event.target.name.value ,"date":dt.toLocaleString() ,"comment":event.target.comment.value};
    commentArray.push(new_comment);
    for(let i=0; i<commentArray.length;i++){
        render(commentArray[i]);
    }
});