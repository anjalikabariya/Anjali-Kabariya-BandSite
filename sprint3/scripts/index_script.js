let form=document.getElementById('comment__form');
let com__container = document.getElementById("com__container");

var registerUrl = "https://project-1-api.herokuapp.com/register";
var apiKey = axios.get(registerUrl);
var commentUrl = `https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`;

getComment = () => {
    axios.get(commentUrl)
      .then(res => {
        res.data.forEach(element => {
            console.log(element)
            display(element)
        })})
};
  

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
    let day = new Date(data.timestamp);
    comment__header_timestamp.innerText = day.toLocaleDateString();
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

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let dt = new Date();
    let date = dt.toLocaleDateString();
    axios.post(commentUrl, { 
        "name": event.target.name.value,
	    "comment": event.target.comment.value
    })
    .then(result => {
        console.log("`comment` JSON object was created")
        display(result)
    })
    .catch(error => {
        console.log("Error code 400")});
    document.getElementById("comment__form").reset();
});


