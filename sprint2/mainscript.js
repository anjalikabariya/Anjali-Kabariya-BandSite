let form=document.getElementById('comment__form');
const commentArray = [{"name":"Micheal Lyons", "date":"12/08/2019", "comment":"They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greates opening of a concert I have EVER witnessed."}, {"name":"Micheal Lyons", "date":"12/08/2019", "comment":"They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greates opening of a concert I have EVER witnessed."},{"name":"Micheal Lyons", "date":"12/08/2019", "comment":"They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greates opening of a concert I have EVER witnessed."}];
function display(data) {
    let div=document.createElement('div');
    let div1 = data.name;
    let div2 = data.date;
    let div3 = data.comment;
    div.innerHTML= '<div class="comment__container"><div class="comment__image"><img src="./Assets/Images/Mohan-muruge.jpg" alt="person-image" class="comment__image-icon"></div><div class="comment"><div class="comment__header"><h4 class="comment__header-writer">' + div1 + '</h4><p class="comment__header-timestamp">' + div2 + '</p></div><p class="comment__text">' + div3 + '</p></div></div>';
    document.querySelector('.com__container').prepend(div);
}
function render() {
    for(let i=0; i<commentArray.length;i++){
        display(commentArray[i]);
    }
}



form.addEventListener('submit', function (event) {
    event.preventDefault();
    let dt = new Date();
    let new_comment = {"name":event.target.name.value ,"date":dt.toLocaleDateString() ,"comment":event.target.comment.value};
    commentArray.push(new_comment);
    display(commentArray[commentArray.length-1]);
    document.getElementById("comment__form").reset();
});
