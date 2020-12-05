//select comment form and comment container where comments will be appended to display
let form=document.getElementById('comment__form');
let com__container = document.getElementById("com__container");

//fetch apikey from website and assign it to global variable
var registerUrl = "https://project-1-api.herokuapp.com/register";
var apiKey = axios.get(registerUrl);
//construct url using apikey to shows data from api
var commentUrl = `https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`;

//function to be called on body load to display default comments from array
getComment = () => {
    axios.get(commentUrl)
      .then(res => {
        res.data.forEach(element => {
            display(element)
        })})
};
  
//function called within getComment() function to create new container and display individual comments
function display(data) {
    //main comment container
    let comment__container = document.createElement("div");
    comment__container.setAttribute("class", "comment__container");

    //comment image container
    let comment__image = document.createElement("div");
    comment__image.setAttribute("class", "comment__image");

    //comment image icon 
    let comment__image_icon = document.createElement("span");
    comment__image_icon.setAttribute("class", "comment__image-icon");

    //comment container for comment author, date and text
    let comment = document.createElement("div");
    comment.setAttribute("class", "comment");

    //comment header container
    let comment__header = document.createElement("div");
    comment__header.setAttribute("class","comment__header");

    //comment author
    let comment__header_writer = document.createElement("div");
    comment__header_writer.setAttribute("class", "comment__header-writer");
    
    //comment date
    let comment__header_timestamp = document.createElement("p");
    comment__header_timestamp.setAttribute("class", "comment__header-timestamp");

    //comment text
    let comment__text = document.createElement("p");
    comment__text.setAttribute("class", "comment__text");

    //set innertext of author, data and comment from values or elements passed as parameters in function
    comment__header_writer.innerText = data.name;
    let day = new Date(data.timestamp);
    comment__header_timestamp.innerText = day.toLocaleDateString();
    comment__text.innerText = data.comment;

    //append content to respective containers
    comment__image.appendChild(comment__image_icon);
    comment__header.appendChild(comment__header_writer);
    comment__header.appendChild(comment__header_timestamp);
    comment.appendChild(comment__header);
    comment.appendChild(comment__text);
    comment__container.appendChild(comment__image);
    comment__container.append(comment);
    //display comments in newest to oldest form
    com__container.prepend(comment__container);
}

//add eventlistener to comment button in new comment section
form.addEventListener('submit', function (event) {
    //pevent page from refreshing
    event.preventDefault();
    let dt = new Date();
    // convert date to required format
    let date = dt.toLocaleDateString();
    let name = event.target.name.value;
    let comment_input = event.target.comment.value;
    // post comment to api in JSON format
    
        axios.post(commentUrl, { 
            "name": name,
            "comment": comment_input
        })
        .then(result => {
            while(name !== "" && comment_input !== ""){
                console.log("`comment` JSON object was created")
                //call display function to display new comment at the top
                display(result)
            }
        })
        .catch(error => {
            console.log("Error code 400")});
    
    document.getElementById("comment__form").reset();
});


