$('#section1 .mobile li').mouseenter(function(){
    let liNum = $(this).index();
    console.log(liNum);
    if(liNum == 0){
        $('#section1 .tv .screen img').attr('src', 'images/zzz.gif')
    } else {
        $('#section1 .tv .screen img').attr('src', 'images/screen'+liNum+'.png')
    }
})