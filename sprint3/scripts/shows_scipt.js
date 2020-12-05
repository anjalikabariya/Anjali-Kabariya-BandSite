var registerUrl = "https://project-1-api.herokuapp.com/register";
var apiKey = axios.get(registerUrl);
apiKey.then(res => console.log(res.data));
apiKey.catch(err => console.log(err));

var showsUrl = `https://project-1-api.herokuapp.com/showdates?api_key=${apiKey}`;

getShowDates = () => {
    axios.get(showsUrl)
        .then(res => {
            res.data.forEach(element => {
                myFunction(element, res.data.length)
            });
        })
}

function myFunction(data, length) {
    //create arrays of dates, venue, location, button
    let show__header__array = ["DATE", "VENUE", "LOCATION","BUTTON"];
    var table = document.getElementById("shows__table");
    var row=document.createElement("div");
    row.setAttribute("class","shows__table-row");
    
    for (let index = 0; index < show__header__array.length-1; index++) {
        var entry = document.createElement("div");
        var title = document.createElement("div");
        title.setAttribute("class","shows__table-title");
        var element = document.createElement("div");
        element.setAttribute("class","shows__table-element");

        var a = document.createTextNode(show__header__array[index]);
        
        if(index==0){
            var b = document.createElement("bold");
            b.innerText = data.date;
        }
        else if(index==1){
            var b = document.createTextNode(data.place);
        }
        else{
            var b = document.createTextNode(data.location);
        }
        
        title.appendChild(a);
        element.appendChild(b);
        entry.appendChild(title);
        entry.appendChild(element);
        row.appendChild(entry);
    }
    // new button element created for "Buy Tickets" option 
    var btn = document.createElement("div");
    btn.setAttribute("class", "shows__table-button");
    btn.innerHTML='<button class="shows__button-buyTicket">Buy Tickets</button>';
    //button is appended to row after entries
    row.appendChild(btn);
    //row is appended to table container
    table.appendChild(row);

}