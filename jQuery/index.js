// $("h1").css("color","red");
//instead of doing this, we can just do-->

// $("h1").addClass("big-title");

//we can also remove classes using the removeClass method...
// to add multiple classes just add a space...

$("h1").addClass("big-title margin-50");

//to check whether the element has a particular class or not...
$("h1").hasClass("big-title");
//returns a boolean value 

//to manipulate text its the .text method or also the .html method...
$("h1").html("<em>Bye</em>");

//to add attributes use .attr method.
//for getting just name the attribute...
$("a").attr("href","https://www.google.com");

//adding event listners is so easy with jQuery
$("button").click(function (){
    $("h1").css("color","red");
})

$("input").keydown(function(event){
    console.log(event.key);
})

$("body").keydown(function(event){
    $("h1").text(event.key);
})

//one more method of adding event listners is using the on method.
$("h1").on("mouseover",function(){
    $("h1").css("color","red");
})

//adding and removing elements using jQuery
// $("h1").before("<button>Before</button>");
// $("h1").after("<button>After</button>");
// $("h1").prepend("<button>Prepend</button>");
// $("h1").append("<button>Append</button>");

//before and after are quite understandable.
//prepend and append on the other hand is appending the html inside the h1
//its like <h1><button>Prepend</button>hello<button>Append</button></h1>

//.remove() will remove the tags.

//adding animations...so easy
// $("button").click(function(){
//     $("h1").fadeToggle();
// })
// $("button").click(function(){
//     $("h1").slideToggle();
// })

//custom animations
// $("button").click(function(){
//     $("h1").animate({margin: "20%"});
// })
//remember that only numerical css values can be passed in this animate method, we cannot use color :"red";

//chaining of animations..
$("button").click(function(){
    $("h1").slideUp().slideDown().animate({margin: "20%"});
})