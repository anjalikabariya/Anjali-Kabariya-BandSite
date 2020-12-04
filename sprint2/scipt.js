// function myFunction() {
//     let show__header__array = ["DATES", "VENUE", "LOCATION"];
//     const dates__array = ["Mon Dec 17 2018", "Mon Dec 17 2018", "Mon Dec 17 2018","Mon Dec 17 2018","Mon Dec 17 2018","Mon Dec 17 2018"];
//     const venue__array= ["Ronald Lane", "Ronald Lane", "Ronald Lane","Ronald Lane","Ronald Lane","Ronald Lane"];
//     const location__array= ["San Francisco, CA", "San Francisco, CA", "San Francisco, CA","San Francisco, CA","San Francisco, CA","San Francisco, CA"];
//     var table = document.createElement("div");
//     table.setAttribute("id", "shows__table");
//     document.querySelector(".shows__table").append(table);

//     var x=document.createElement("div");
//     x.setAttribute("id","shows__table-dates");
//     x.setAttribute("class","shows__table-dates");
//     let header__date = document.createElement("div");
//     header__date.setAttribute("class","shows__table-header");
//     header__date.innerText="DATES";
//     document.getElementById("shows__table").appendChild(x);
//     for(let i=0; i<dates__array.length;i++){
//         var title=document.createElement("div");
//         title.setAttribute("class","shows__table-title");
//         var titletext= document.createTextNode(show__header__array[0]);
//         title.appendChild(titletext);

//         var element=document.createElement("div");
//         element.setAttribute("class","shows__table-element");
//         var textnode= document.createTextNode(dates__array[i]);
//         element.appendChild(textnode);

//         document.getElementById("shows__table-dates").appendChild(title);
//         document.getElementById("shows__table-dates").appendChild(element);
//     }

//     var y=document.createElement("div");
//     y.setAttribute("id","shows__table-venue");
//     y.setAttribute("class","shows__table-venue");
//     let header__venue = document.createElement("div");
//     header__venue.setAttribute("class","shows__table-header");
//     header__venue.innerText="VENUE";
//     document.getElementById("shows__table").appendChild(y);
//     for(let i=0; i<venue__array.length;i++){
//         var title=document.createElement("div");
//         title.setAttribute("class","shows__table-title");
//         var titletext= document.createTextNode(show__header__array[1]);
//         title.appendChild(titletext);

//         var element=document.createElement("div");
//         element.setAttribute("class","shows__table-element");
//         var textnode= document.createTextNode(venue__array[i]);
//         element.appendChild(textnode);
        
//         document.getElementById("shows__table-venue").appendChild(title);
//         document.getElementById("shows__table-venue").appendChild(element);
//     }
//     var z=document.createElement("div");
//     z.setAttribute("id","shows__table-location");
//     z.setAttribute("class","shows__table-location");
//     let header__location = document.createElement("div");
//     header__location.setAttribute("class","shows__table-header");
//     header__location.innerText="LOCATION";
//     document.getElementById("shows__table").appendChild(z);
//     for(let i=0; i<location__array.length;i++){
//         var title=document.createElement("div");
//         title.setAttribute("class","shows__table-title");
//         var titletext= document.createTextNode(show__header__array[2]);
//         title.appendChild(titletext);

//         var element=document.createElement("div");
//         element.setAttribute("class","shows__table-element");
//         var textnode= document.createTextNode(location__array[i]);
//         element.appendChild(textnode);
        
//         document.getElementById("shows__table-location").appendChild(title);
//         document.getElementById("shows__table-location").appendChild(element);

//     }
//     var w=document.createElement("div");
//     w.setAttribute("id","shows__table-buttons");
//     document.getElementById("shows__table").appendChild(w);
//     let btnTitle = document.createElement("br");
//     document.getElementById("shows__table-buttons").appendChild(btnTitle);
//     for(let i=0; i<dates__array.length;i++){
//         let btn = document.createElement("div");
//         btn.setAttribute("class", "shows__table-button");
        
//         btn.innerHTML='<button class="shows__button-buyTicket">Buy Tickets</button>';
        
//         document.getElementById("shows__table-buttons").appendChild(btn);
//     }
// }



//   



// 
//     for(let i=0; i<location__array.length;i++){
//         var title=document.createElement("div");
//         
//         var titletext= document.createTextNode(show__header__array[2]);
//         title.appendChild(titletext);

//         var element=document.createElement("div");
//         
//         var textnode= document.createTextNode(location__array[i]);
//         element.appendChild(textnode);
        
//         document.getElementById("shows__table-location").appendChild(title);
//         document.getElementById("shows__table-location").appendChild(element);

//     }




//create function that will be called on body load to display main content
//table of show tickets

function myFunction() {
    //create arrays of dates, venue, location, button
    let show__header__array = ["DATE", "VENUE", "LOCATION","BUTTON"];
    const shows__array = [["Mon Dec 17 2018", "Mon Dec 17 2018", "Mon Dec 17 2018","Mon Dec 17 2018","Mon Dec 17 2018","Mon Dec 17 2018"], ["Ronald Lane", "Ronald Lane", "Ronald Lane","Ronald Lane","Ronald Lane","Ronald Lane"], ["San Francisco, CA", "San Francisco, CA", "San Francisco, CA","San Francisco, CA","San Francisco, CA","San Francisco, CA"]];
    var table = document.createElement("div");
    table.setAttribute("id", "shows__table");
    
    //main table container
    document.querySelector(".shows__table").append(table);
    var table_header = document.createElement("div");
    table_header.setAttribute("class","shows__table-header");

    //header of shows table to be displayed in tablet and desktop viewport
    for (let index = 0; index < show__header__array.length; index++) {
        var container = document.createElement("div");
        container.setAttribute("class","shows__table-header_element")
        if(index!==show__header__array.length-1){
            var a = document.createTextNode(show__header__array[index]);
            container.appendChild(a);
        }
        else{
            //assigning id to button element header container to set it's property to display:none in css
            container.setAttribute("id", "shows__button-header");
            var foo = document.createTextNode(show__header__array[index]);
            container.appendChild(foo);
        }
        table_header.appendChild(container);
    }
    
    

    //table content created by looping through arrays defined at top
    table.appendChild(table_header);
    console.log(shows__array.length);
   
    //currently there are 6 rows in the table
    for (let i = 0; i < 6; i++) {
   
        //each table row has 4 columns
        var row=document.createElement("div");
        row.setAttribute("class","shows__table-row");

        for (let j = 0; j < 3; j++) {
            //container for entry element. 
            var entry =document.createElement("div");
            var title=document.createElement("div");
            var element = document.createElement("div");
            
            //each entry contains title and content of element
            title.setAttribute("class","shows__table-title");
            element.setAttribute("class","shows__table-element");

            //entries are retrieved from array
            var y = document.createTextNode(show__header__array[j]);
            
            var x= document.createTextNode(shows__array[j][i]);
            
            //each title and element are appended to entry of element
            title.appendChild(y);
            element.appendChild(x);
            entry.appendChild(title);
            entry.appendChild(element);
            //entry is appended to row
            row.appendChild(entry);
            
    }
    //new button element created for "Buy Tickets" option 
    var btn = document.createElement("div");
    btn.setAttribute("class", "shows__table-button");
    btn.innerHTML='<button class="shows__button-buyTicket">Buy Tickets</button>';
    //button is appended to row after entries
    row.appendChild(btn);
    //row is appended to table container
    document.getElementById("shows__table").appendChild(row);
}
}
