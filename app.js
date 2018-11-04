$(function () {
    var topics = ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish", "bird", "ferret", "turtle", "sugar glider", "frog", "chicken", "duck", "snake", "pig", "tiger", "columba", "monkey", "cattle", "dolphin"];
    for (var i = 0; i < topics.length; i++) {
        $("#btn").append("<button id='imgeBtn' class='btn btn-info btn-sm' value='" + topics[i] + "'>" + topics[i] + "</button>");
    }
    $(".btn.btn-info.btn-sm").on("click", function () {//#imgeBtn?????
        $("#gifs-appear-here").empty();
        console.log($(this).val());
        var animal = $(this).val();
        //jquery
        var url = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=zRB9LCcolb5ZTM75roz00qpYLPkrqvUX&limit=10";
        console.log("success got url", url);
        var xhr = $.get(url);
        xhr.done(function (response) {
            var results = response.data;
            for (var n = 0; n < results.length; n++) {
                var imgEle = $("<img>");//define tag img
                imgEle.attr("src", results[n].images.original_still.url);
                imgEle.attr("data-still", results[n].images.original_still.url);
                imgEle.attr("data-animate", results[n].images.original.url);
                // imgEle.attr("data-state", "still");

                // imgEle.attr("valueId",  results[n].id);
                // console.log("id",imgEle.attr("valueId"));
                console.log("src", imgEle.attr("src"));
                // $("#gifs-appear-here").append("<img valueId='" + response.data[n].id + "' src='" + response.data[n].images.original_still.url + "'>");
                $("#gifs-appear-here").append(imgEle);
                $("img").on("click", function () {
                    var aniUrl = $(this).attr("data-animate");
                    var stillUrl = $(this).attr("data-still");
                    var url = $(this).attr("src");
                    src = (url == stillUrl)
                    ? aniUrl
                    : stillUrl;
                    $(this).attr("src",src);
                    // var state = $(this).attr("data-state");
                    // if (state == 'still') {
                    //     $(this).attr("src", $(this).attr("data-animate"));
                    //     console.log($(this).attr("data-animate"));
                    //     $(this).attr("data-state", 'animate');
                    // } else {
                    //     $(this).attr("src", $(this).attr("data-still"));
                    //     $(this).attr("data-state", 'still');
                    // }
                });
            }
        });
    });
    $("#submit").on("click", function () {
        var addimg = $("input:text").val();// $("input").attr("text");
        console.log(topics.includes(addimg));
        if (topics.includes(addimg)) {
            alert("You have aready " + addimg + " button");
            return;
        } else {
            $("#btn").append("<button id='imgeBtn' class='btn btn-info btn-lg' value='" + addimg + "'>" + addimg + "</button>");
        }

    });
    // $("img").on("click",function () 
    // $(document).on("click", "img", function () {
    //     var state = $(this).attr("data-state");
    //     if (state == 'still') {
    //         $(this).attr("src", $(this).attr("data-animate"));
    //         console.log($(this).attr("data-animate"));
    //         $(this).attr("data-state", 'animate');
    //     } else {
    //         $(this).attr("src", $(this).attr("data-still"));
    //         $(this).attr("data-state", 'still');
    //     }
    //     // // e.preventDefault();
    //     // var gifId = $(this).attr("valueId");
    //     // var imgSrc = $(this).attr('src');
    //     // console.log("id",gifId);
    //     // console.log("src",imgSrc);
    //     // //query by gif_id
    //     // var url = "http://api.giphy.com/v1/gifs/" + gifId + "?api_key=zRB9LCcolb5ZTM75roz00qpYLPkrqvUX";
    //     // // url="http://api.giphy.com/v1/gifs/vIJaz7nMJhTUc?api_key=zRB9LCcolb5ZTM75roz00qpYLPkrqvUX"
    //     // // var src,img1Url,img2Url;
    //     // console.log("url", url);
    //     // //ajax
    //     // $.ajax({
    //     //     // async:false,
    //     //     url: url,
    //     //     method: "GET"
    //     // }).then(function (response) {
    //     //     var src, img1Url, img2Url;
    //     //     img1Url = response.data.images.original_still.url;
    //     //     img2Url = response.data.images.downsized.url;
    //     //     src = (imgSrc == img1Url)//not working because meta0/meta1
    //     //         ? img2Url
    //     //         : img1Url;
    //     //     $("img").attr("src", src);
    //     //     // $("#img").attr("src", src+"?random="+new Date().getTime());
    //     //     // $(this).attr('src', src);
    //     //     // $(this).css("src",src);
    //     // });
    //     // var imgEle = $(this);
    //     // console.log(imgEle + "======imgEle:response??======");
    // });

});