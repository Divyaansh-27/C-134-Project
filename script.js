var date= new Date()
var display_date= date.toLocaleDateString()
$(document).ready(function(){
    $("#display_date").html(display_date)
})
var predicted_emotion
$(function () {
    $("#predict_button").click(function () {
        var input_data={
            "text":$("#text").val()
        }
        $.ajax({
            type:"POST",
            url:"/predict_emotion",
            data:JSON.stringify(input_data),
            dataType:"json",
            contentType:"application/json",
            success:function(result){
                predicted_emotion=result.data.predicted_emotion
                emo_url=result.data.predicted_emotion_imagUrl
                $("#prediction").html(predicted_emotion)
                $("#prediction").css("display","block")
                $("#emo_img_url").attr("src",emo_url)
                $("#emo_img_url").css("display","block")
            },
            error:function(result){
                alert(result.responseJSON.message)
            }
        });
    });
})
            success:function(result){
                alert(result.responseJSON.mesasa
            }