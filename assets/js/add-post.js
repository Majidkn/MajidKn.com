$(function() {
    var default_content = '<!DOCTYPE html><html> <head> <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/> <meta name="language" content="fa"/> <meta name="viewport" content="width=device-width, initial-scale=1"> <meta name="description" content="[DESCRIPTION]"/> <title>[TITLE]</title> <link rel="stylesheet" href="../assets/css/style.css"> </head> <body style="overflow: scroll; background: #e7e7e7"> <section style="background: #1b74bf;"> <h1 style="border: 0">[TITLE]</h1> </section> <article class="post">[CONTENT]</article></body></html>';
    $('.generate').click(function () {
        var content = CKEDITOR.instances['editor'].getData();
        var title = $('.title').val();
        var description = $('.description').val();
        var result = default_content.replace('[TITLE]',title);
        if(description) result = result.replace('[DESCRIPTION]',description);
        result = result.replace('[CONTENT]',content);
        result = result.replace('[TITLE]',title);
        $('.result').text(result);
    })
})
