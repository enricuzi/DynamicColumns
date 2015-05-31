$(document).ready(function(){
    $(".header input").focus();
    var box_count = 0;
    $("#cols").change(function () {
        box_count = $(this).val();
        $(".row.boxes").html("");
        var md = Math.floor(12/box_count);
        var class_md = "col-md-" + md;

        var sm = Math.floor(md * 2);
        var class_sm = "col-sm-" + sm;

        var xs = "col-xs-12";

        for (var i=0; i<box_count; i++) {
            $(".row.boxes").append(
                $("<div><div class='box'></div></div>").addClass(class_md).addClass(class_sm).addClass(xs)
            );
        }
    });
});