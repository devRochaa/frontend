$(window).on("load", ()=>{
    $(".preloader").fadeOut("slow");
});

$('.ipt-cnpj').mask('00.000.000/0000-00', {reverse: true});
$('.ipt-phone').mask('(00) 0000-0000');