 var app = new Vue({
     el : "#app",
     data : {
        timeNow : (new Date()) .getTime (), 
        // timeBefore : 1488930695721
        timeBefore : new Date("2020-03-12 17:23:34").getTime()
     }
 })