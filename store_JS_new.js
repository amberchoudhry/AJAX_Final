
$(function() {

//$('.u-full-width#category').on('click', function(e) { 
    //alert("dropdown clicked");
    //e.preventDefault();

    var data;
    var data2;
    var results;
    var newContent;
    var i;
    $.ajax({
        beforeSend: function(xhr){
            if (xhr.overrideMimeType) {
                xhr.overrideMimeType("application/json");
            }
        }
    });
    
    /*function loadResults() {
        $.getJSON('store_JSON.json')
            .done( function(data) {
            results = data;
            var newContent = '';
            alert("json file reached");
            
            for (i=0; i<data.items.length; i++) {
                if($(':selected').val() == "blouses") {
                    if (data.items[i].category == "Blouses") {
                        
                        newContent += '<h5>' + data.items[0].name + '</h5>';
                        newContent += '<h5>' + data.items[0].price + '</h5><br>';
                       
                        newContent += '<p class="whichSize">' + "Choose Size: " + '</p>';
                        newContent += '<a href="#">' + '<p class="small1">' + "S" + '</p>' + '</a>';
                        newContent += '<a href="#">' + '<p class="medium1">' + "M" + '</p>' + '</a>';
                        newContent += '<a href="#">' + '<p class="large2">' + "L" + '</p>' + '</a>';
                        sizeCheck(data, 0);
                    };
                };
            
            $('#content').html(newContent);
            
        }).fail( function() {
            alert("json file not reached");
            $('#content').html('Sorry! We could not load the results at this moment');
        });
    }
    loadResults();
    
});*/
    
    
$('.u-full-width#search').on('input', function(e) {
    //alert("search bar typing");
    e.preventDefault();
    var data2;
    
    function loadSearch() {
    
    
    //$('.u-full-width#search').on('input', function(e) {
    //alert("search bar typing");
    //e.preventDefault();
    //var data2;
            
        $.getJSON('store_JSON.json')
            .done( function(data) {
            var newContent = '';
            var newContent2 = '';
            var newContent3 = '';
            var newContent4 = '';
            var items = [];
            
   function sizeCheck(data, i) {
    //alert("sizecheck reached");
       //for (i=0; i<data.items.length; i++) {
            if (data.items[i].small == true) {
                //$('p.small1').css('color','blue');
                $('p.small1').addClass('blue');
                $('p.small2').addClass('gray');
                
            }
           else {
                //$('p.small1').css('color','gray');

               $('p.small2').addClass('gray');
               $('p.small1').addClass('blue');
           };
       
            if (data.items[i].medium == true) {
                //$('p.small1').css('color','blue');
                $('p.medium1').addClass('blue');
                $('p.medium2').addClass('gray');
            }
           else {
                //$('p.small1').css('color','gray'); 
               $('p.medium2').addClass('gray');
               $('p.medium1').addClass('blue');
           };
       
            if (data.items[i].large == true) {
                //$('p.small1').css('color','blue');
                $('p.large1').addClass('blue');
                $('p.large2').addClass('gray');
            }
           else {
                //$('p.small1').css('color','gray');
               $('p.large2').addClass('gray');
               $('p.large1').addClass('blue');
           };
       //};                 
}
            
function blueBlouse(data) {
    //var newContent;
    //var data;
    //var items = [];
    //$.getJSON('store_JSON.json')
    var i=0;
            //alert("blue blouse reached");
            newContent += '<h5>' + data.items[0].name + '</h5>';
            newContent += '<img class="picture" src="blueblouse.jpg">';
            newContent += '<h5>' + data.items[0].price + '</h5><br>';
            newContent += '<p class="whichSize">' + "Choose Size: " + '</p>';
            newContent += '<p class="small1">' + "S" + '</p>';
            newContent += '<p class="medium1">' + "M" + '</p>';
            newContent += '<p class="large2">' + "L" + '</p>';
    
            $('#content').html(newContent);
    $('#content').css('background-image','url("crossword.png")');
            sizeCheck(data, 0);
            /*if (data.items[0].small == true) {
                $('p.small1').css('color','blue');   
            }
            else {
                $('p.small1').css('color','gray');    
            };*/
    //return i;       

}
function redBlouse(data) {
    //var newContent2;
    //var data;
    //var items = [];
    //$.getJSON('store_JSON.json')
    var i=1;
            //alert("red blouse reached");
            newContent += '<h5>' + data.items[1].name + '</h5>';
            newContent += '<img class="picture" src="redblouse.jpg">';
            newContent += '<h5>' + data.items[1].price + '</h5><br>';
            newContent += '<p class="whichSize">' + "Choose Size: " + '</p>';
            newContent += '<p class="small2">' + "S" + '</p>';
            newContent += '<p class="medium1">' + "M" + '</p>';
            newContent += '<p class="large1">' + "L" + '</p>';
            $('#content').html(newContent);
     $('#content').css('background-image','url("crossword.png")');
            sizeCheck(data, 1);
            /*if (data.items[1].small == true) {
                $('p.small2').css('color','blue');   
            }
           else {
                $('p.small2').css('color','gray');    
           };*/
      //return i;      
}
function greenBlouse(data) {
    //var newContent2;
    //var data;
    //var items = [];
    //$.getJSON('store_JSON.json')
    var i=2;
            //alert("red blouse reached");
            newContent += '<h5>' + data.items[2].name + '</h5>';
            newContent += '<img class="picture" src="greenblouse.jpg">';
            newContent += '<h5>' + data.items[2].price + '</h5><br>';
            newContent += '<p class="whichSize">' + "Choose Size: " + '</p>';
            newContent += '<p class="small1">' + "S" + '</p>';
            newContent += '<p class="medium2">' + "M" + '</p>';
            newContent += '<p class="large1">' + "L" + '</p>';
            $('#content').html(newContent);
     $('#content').css('background-image','url("crossword.png")');
            sizeCheck(data, 2);
            /*if (data.items[1].small == true) {
                $('p.small2').css('color','blue');   
            }
           else {
                $('p.small2').css('color','gray');    
           };*/
      //return i;      
}
function blackBlouse(data) {
    //var newContent2;
    //var data;
    //var items = [];
    //$.getJSON('store_JSON.json')
    var i=3;
            //alert("red blouse reached");
            newContent += '<h5>' + data.items[3].name + '</h5>';
            newContent += '<img class="picture" src="blackblouse.jpg">';
            newContent += '<h5>' + data.items[3].price + '</h5><br>';
            newContent += '<p class="whichSize">' + "Choose Size: " + '</p>';
            newContent += '<p class="small2">' + "S" + '</p>';
            newContent += '<p class="medium2">' + "M" + '</p>';
            newContent += '<p class="large1">' + "L" + '</p>';
            $('#content').html(newContent);
     $('#content').css('background-image','url("crossword.png")');
            sizeCheck(data, 3);
            /*if (data.items[1].small == true) {
                $('p.small2').css('color','blue');   
            }
           else {
                $('p.small2').css('color','gray');    
           };*/
      //return i;      
}
function blueDress(data) {
    //var newContent2;
    //var data;
    //var items = [];
    //$.getJSON('store_JSON.json')
    var i=4;
            //alert("red blouse reached");
            newContent += '<h5>' + data.items[4].name + '</h5>';
            newContent += '<img class="picture" src="bluedress.jpg">';
            newContent += '<h5>' + data.items[4].price + '</h5><br>';
            newContent += '<p class="whichSize">' + "Choose Size: " + '</p>';
            newContent += '<p class="small1">' + "S" + '</p>';
            newContent += '<p class="medium1">' + "M" + '</p>';
            newContent += '<p class="large2">' + "L" + '</p>';
            $('#content').html(newContent);
     $('#content').css('background-image','url("crossword.png")');
            sizeCheck(data, 4);
            /*if (data.items[1].small == true) {
                $('p.small2').css('color','blue');   
            }
           else {
                $('p.small2').css('color','gray');    
           };*/
      //return i;      
}
function redDress(data) {
    //var newContent2;
    //var data;
    //var items = [];
    //$.getJSON('store_JSON.json')
    var i=5;
            //alert("red blouse reached");
            newContent += '<h5>' + data.items[5].name + '</h5>';
            newContent += '<img class="picture" src="reddress.jpg">';
            newContent += '<h5>' + data.items[5].price + '</h5><br>';
            newContent += '<p class="whichSize">' + "Choose Size: " + '</p>';
            newContent += '<p class="small2">' + "S" + '</p>';
            newContent += '<p class="medium1">' + "M" + '</p>';
            newContent += '<p class="large1">' + "L" + '</p>';
            $('#content').html(newContent);
     $('#content').css('background-image','url("crossword.png")');
            sizeCheck(data, 5);
            /*if (data.items[1].small == true) {
                $('p.small2').css('color','blue');   
            }
           else {
                $('p.small2').css('color','gray');    
           };*/
      //return i;      
}
function greenDress(data) {
    //var newContent2;
    //var data;
    //var items = [];
    //$.getJSON('store_JSON.json')
    var i=6;
            //alert("red blouse reached");
            newContent += '<h5>' + data.items[6].name + '</h5>';
            newContent += '<img class="picture" src="greendress.jpg">';
            newContent += '<h5>' + data.items[6].price + '</h5><br>';
            newContent += '<p class="whichSize">' + "Choose Size: " + '</p>';
            newContent += '<p class="small1">' + "S" + '</p>';
            newContent += '<p class="medium2">' + "M" + '</p>';
            newContent += '<p class="large1">' + "L" + '</p>';
            $('#content').html(newContent);
     $('#content').css('background-image','url("crossword.png")');
            sizeCheck(data, 6);
            /*if (data.items[1].small == true) {
                $('p.small2').css('color','blue');   
            }
           else {
                $('p.small2').css('color','gray');    
           };*/
      //return i;      
}
function blackDress(data) {
    //var newContent2;
    //var data;
    //var items = [];
    //$.getJSON('store_JSON.json')
    var i=7;
            //alert("red blouse reached");
            newContent += '<h5>' + data.items[7].name + '</h5>';
            newContent += '<img class="picture" src="blackdress.jpg">';
            newContent += '<h5>' + data.items[7].price + '</h5><br>';
            newContent += '<p class="whichSize">' + "Choose Size: " + '</p>';
            newContent += '<p class="small2">' + "S" + '</p>';
            newContent += '<p class="medium2">' + "M" + '</p>';
            newContent += '<p class="large1">' + "L" + '</p>';
            $('#content').html(newContent);
     $('#content').css('background-image','url("crossword.png")');
            sizeCheck(data, 7);
            /*if (data.items[1].small == true) {
                $('p.small2').css('color','blue');   
            }
           else {
                $('p.small2').css('color','gray');    
           };*/
      //return i;      
}
function blueJeans(data) {
    //var newContent2;
    //var data;
    //var items = [];
    //$.getJSON('store_JSON.json')
    var i=8;
            //alert("red blouse reached");
            newContent += '<h5>' + data.items[8].name + '</h5>';
            newContent += '<img class="picture" src="bluejeans.jpg">';
            newContent += '<h5>' + data.items[8].price + '</h5><br>';
            newContent += '<p class="whichSize">' + "Choose Size: " + '</p>';
            newContent += '<p class="small1">' + "S" + '</p>';
            newContent += '<p class="medium1">' + "M" + '</p>';
            newContent += '<p class="large2">' + "L" + '</p>';
            $('#content').html(newContent);
     $('#content').css('background-image','url("crossword.png")');
            sizeCheck(data, 8);
            /*if (data.items[1].small == true) {
                $('p.small2').css('color','blue');   
            }
           else {
                $('p.small2').css('color','gray');    
           };*/
      //return i;      
}
function whiteJeans(data) {
    //var newContent2;
    //var data;
    //var items = [];
    //$.getJSON('store_JSON.json')
    var i=9;
            //alert("red blouse reached");
            newContent += '<h5>' + data.items[9].name + '</h5>';
            newContent += '<img class="picture" src="whitejeans.jpg">';
            newContent += '<h5>' + data.items[9].price + '</h5><br>';
            newContent += '<p class="whichSize">' + "Choose Size: " + '</p>';
            newContent += '<p class="small2">' + "S" + '</p>';
            newContent += '<p class="medium1">' + "M" + '</p>';
            newContent += '<p class="large1">' + "L" + '</p>';
            $('#content').html(newContent);
     $('#content').css('background-image','url("crossword.png")');
            sizeCheck(data, 9);
            /*if (data.items[1].small == true) {
                $('p.small2').css('color','blue');   
            }
           else {
                $('p.small2').css('color','gray');    
           };*/
      //return i;      
}
function redJeans(data) {
    //var newContent2;
    //var data;
    //var items = [];
    //$.getJSON('store_JSON.json')
    var i=10;
            //alert("red blouse reached");
            newContent += '<h5>' + data.items[10].name + '</h5>';
            newContent += '<img class="picture" src="redjeans.jpg">';
            newContent += '<h5>' + data.items[10].price + '</h5><br>';
            newContent += '<p class="whichSize">' + "Choose Size: " + '</p>';
            newContent += '<p class="small1">' + "S" + '</p>';
            newContent += '<p class="medium2">' + "M" + '</p>';
            newContent += '<p class="large1">' + "L" + '</p>';
            $('#content').html(newContent);
     $('#content').css('background-image','url("crossword.png")');
            sizeCheck(data, 10);
            /*if (data.items[1].small == true) {
                $('p.small2').css('color','blue');   
            }
           else {
                $('p.small2').css('color','gray');    
           };*/
      //return i;      
}
function blackJeans(data) {
    //var newContent2;
    //var data;
    //var items = [];
    //$.getJSON('store_JSON.json')
    var i=11;
            //alert("red blouse reached");
            newContent += '<h5>' + data.items[11].name + '</h5>';
            newContent += '<img class="picture" src="blackjeans.jpg">';
            newContent += '<h5>' + data.items[11].price + '</h5><br>';
            newContent += '<p class="whichSize">' + "Choose Size: " + '</p>';
            newContent += '<p class="small2">' + "S" + '</p>';
            newContent += '<p class="medium2">' + "M" + '</p>';
            newContent += '<p class="large1">' + "L" + '</p>';
            $('#content').html(newContent);
     $('#content').css('background-image','url("crossword.png")');
            sizeCheck(data, 11);
            /*if (data.items[1].small == true) {
                $('p.small2').css('color','blue');   
            }
           else {
                $('p.small2').css('color','gray');    
           };*/
      //return i;      
};
               
            //$('.u-full-width#search').on('input', function(e) {
                
                //alert("search bar typing");
                //e.preventDefault();
                if ($(':text').val().length == 0) {
                    
                    newContent += '<h5>Showing all Items</h5>';
                    blueBlouse(data);
                    redBlouse(data);
                    greenBlouse(data);
                    blackBlouse(data);
                    blueDress(data);
                    redDress(data);
                    greenDress(data);
                    blackDress(data);
                    blueJeans(data);
                    whiteJeans(data);
                    redJeans(data);
                    blackJeans(data);
                }
                
                if(($(':text').val() == "b") || ($(':text').val() == "bl")) {
                    
                        /*newContent += '<h5>' + data.items[2].name + '</h5>';
                        newContent += '<h5>' + data.items[2].price + '</h5><br>';    
                        newContent += '<p class="whichSize">' + "Choose Size: " + '</p>';
                        newContent += '<p class="small3">' + "S" + '</p>';
                        newContent += '<p class="medium">' + "M" + '</p>';
                        newContent += '<p class="large">' + "L" + '</p>';
                        $('#content').html(newContent);*/
                        //sizeCheck();
              
                    //sizeCheck(data);
                    //alert("b reached");
                    blueBlouse(data);
                    blueDress(data);
                    blueJeans(data);
                    blackBlouse(data);
                    blackDress(data);
                    blackJeans(data);
                    //redJeans(data);
                    //$('#content').html(newContent);
                }
                if($(':text').val() == "bla") {
                    blackBlouse(data);
                    blackDress(data);
                    blackJeans(data);
                }
                if($(':text').val() == "blu") {
                    blueBlouse(data);
                    blueDress(data);
                    blueJeans(data);
                }
                if($(':text').val() == "r") {
                    redBlouse(data);
                    redDress(data);
                    redJeans(data);
                }
                if($(':text').val() == "g") {
                    greenBlouse(data);
                    greenDress(data);
                }
                if($(':text').val() == "w") {
                    whiteJeans(data);   
                }
                
                /*if($(':text').val() == "bl") {
                    
                        newContent += '<h5>' + data.items[2].name + '</h5>';
                        newContent += '<h5>' + data.items[2].price + '</h5><br>';    
                        newContent += '<p class="whichSize">' + "Choose Size: " + '</p>';
                        newContent += '<p class="small3">' + "S" + '</p>';
                        newContent += '<p class="medium">' + "M" + '</p>';
                        newContent += '<p class="large">' + "L" + '</p>';
                        $('#content').html(newContent);
                        sizeCheck();
              
                    sizeCheck();
                    blueBlouse(data);
                    redBlouse(data);
                    alert("bl reached");
                    greenBlouse(data);
                    blueDress(data);
                    redDress(data);
                    blackDress(data);
                    whiteJeans(data);
                    $('#content').html(newContent);
                };*/
            
                //sizeCheck();
                //$('#content p.large1').after(newContent2);
                //$('#content p.large2').after(newContent2);
            //};
            
            //sizeCheck();
            //$('#content p.small1').after(newContent2);
            //$('#content p.small2').after(newContent3);
            //$('#content p.small3').after(newContent2);
            //sizeCheck();
           //blueBlouse();
        /*function sizeCheck(j) {
                 var a;
                 a=j;
                 a=125;

                 switch (data.items[0].small){
                        case true:
                            newContent2 += '<p class="blue">' + "In Stock" + '</p>';
                        case false:
                            newContent3 += '<p class="black">' + "Out of Stock" + '</p>';
                 };
                   
        };*/ 
        //sizeCheck();
        //blueBlouse();
        //sizeCheck(data);
         //};
            //})
        }).fail( function() {
            alert("json file not reached");
            $('#content').html('Sorry! We could not load the results at this moment');
        });
     //loadSearch(data);   
//});
    }
    loadSearch();


});
    
});
