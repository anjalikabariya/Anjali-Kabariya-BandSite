function myFunction() {
    let show__header__array = ["date-show", "venue", "location",""];
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