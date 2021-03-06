//fetch apikey from website and assign it to global variable
var registerUrl = "https://project-1-api.herokuapp.com/register";
var apiKey = axios.get(registerUrl);
apiKey.then(res => console.log(res.data));
apiKey.catch(err => console.log(err));

//construct url using apikey to shows data from api
var showsUrl = `https://project-1-api.herokuapp.com/showdates?api_key=${apiKey}`;

//function to be called on body load to display shows table by default
getShowDates = () => {
    axios.get(showsUrl)
        .then(res => {
            res.data.forEach(element => {
                myFunction(element, res.data.length)
            });
        })
}

//function to be passed to getShowDates() to construct new containers for all entries to be displayed in shows table
function myFunction(data, length) {
    //create arrays of dates, venue, location, button
    let show__header__array = ["DATE", "VENUE", "LOCATION","BUTTON"];
    //fetch shows__table container
    var table = document.getElementById("shows__table");
    //create row for each data object obtained from response
    var row=document.createElement("div");
    row.setAttribute("class","shows__table-row");
    
    //loop through each object and create entry for each element
    for (let index = 0; index < show__header__array.length-1; index++) {
        //create title and element variables to store respective title and element in entry variable
        var entry = document.createElement("div");
        var title = document.createElement("div");
        title.setAttribute("class","shows__table-title");
        var element = document.createElement("div");
        element.setAttribute("class","shows__table-element");
        //fil title variable by using show header array
        var a = document.createTextNode(show__header__array[index]);
        //fill element variable according to index of loop. Maintain column sequence: Date, venue, location and button
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
        
        //append title and element to entry variable
        title.appendChild(a);
        element.appendChild(b);
        entry.appendChild(title);
        entry.appendChild(element);

        //append each entry variable to row
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