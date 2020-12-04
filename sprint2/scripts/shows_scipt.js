function myFunction() {
    //create arrays of dates, venue, location, button
    let show__header__array = ["DATE", "VENUE", "LOCATION","BUTTON"];
    const shows__array = [["Mon Dec 17 2018", "Tue July 18 2019", "Fri July 22 2019","Sat Aug 12 2019","Fri Sept 12 2019","Wed Aug 11 2019"], ["Ronald Lane", "Pier 3 East", "View Longue","Hyatt Agency","Moscow Center","Pres Club"], ["San Francisco, CA", "San Francisco, CA", "San Francisco, CA","San Francisco, CA","San Francisco, CA","San Francisco, CA"]];
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
