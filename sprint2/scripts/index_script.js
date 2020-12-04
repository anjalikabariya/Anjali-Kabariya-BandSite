let form=document.getElementById('comment__form');
const commentArray = [{"name":"Theodore Duncan", "date":"11/15/2018","comment":"How can someone be so good!! you can tell he lives for this and loves to do it everyday. Everytime i see him i feel instantly happy! he's definitely my favorite ever!"}, {"name":"Gary Wong", "date":"12/12/2019", "comment":"Every time i see him shred i feel so motivated to get off my couch and hop on my board. He's so talented i wish i can ride like him one day so i can really enjoy myself."}, {"name":"Micheal Lyons", "date":"12/18/2019", "comment":"They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greates opening of a concert I have EVER witnessed."}];
let com__container = document.getElementById("com__container");
function display(data) {
    let comment__container = document.createElement("div");
    let comment__image = document.createElement("div");
    let comment__image_icon = document.createElement("span");
    let comment = document.createElement("div");
    let comment__header = document.createElement("div");
    let comment__header_writer = document.createElement("div");
    let comment__header_timestamp = document.createElement("p");
    let comment__text = document.createElement("p");

    comment__container.setAttribute("class", "comment__container");
    comment__image.setAttribute("class", "comment__image");
    comment__image_icon.setAttribute("class", "comment__image-icon");
    comment.setAttribute("class", "comment");
    comment__header.setAttribute("class","comment__header");
    comment__header_writer.setAttribute("class", "comment__header-writer");
    comment__header_timestamp.setAttribute("class", "comment__header-timestamp");
    comment__text.setAttribute("class", "comment__text");

    comment__header_writer.innerText = data.name;
    comment__header_timestamp.innerText = data.date;
    comment__text.innerText = data.comment;

    comment__image.appendChild(comment__image_icon);
    comment__header.appendChild(comment__header_writer);
    comment__header.appendChild(comment__header_timestamp);
    comment.appendChild(comment__header);
    comment.appendChild(comment__text);
    comment__container.appendChild(comment__image);
    comment__container.append(comment);

    com__container.prepend(comment__container);
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
