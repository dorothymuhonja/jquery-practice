//  jQuery(document).ready(function () {
//    jQuery('h1').click(function () {
//      alert('This is a heading tag');
//      alert('I told you this is a heading tag');
//    });

//    jQuery('p').click(function () {
//      alert('This is a paragraph');
//    });
//    jQuery('img').click(function () {
//      alert('This is an image');
//    });
//  });

  $(document).ready(function () {
    // $('h1').click(function () {
    //   alert('This is a heading tag');
    //   alert('I told you this is a heading tag');
    // });

    // $('p').click(function () {
    //   alert('This is a paragraph');
    // });
    // $('img').click(function () {
    //   alert('This is an image');
    // });
    
       $('.clickable').click(function() {
        $('#walrus-showing').toggle();
        $('#walrus-hidden').toggle();
    });

       $("button#green").click(function() {
        $("body").removeClass();
        $("body").addClass("green-background");
    });

        $('button#yellow').click(function () {
        $('body').removeClass();
        $('body').addClass('yellow-background');
     });
     
        $('button#red').click(function () {
        $('body').removeClass();
        $('body').addClass('red-background');
    });


    $("button#hello").click(function(){
        $("ul#user").prepend("<Hello!>");
        $("ul#webpage").prepend("<Why hello there!>");
        $('li').click(function() {
            alert('hi');
        });
    });
          $('ul#user')
            .children('li')
            .first()
            .click(function () {
              $(this).remove();
            });
          $('ul#webpage')
            .children('li')
            .first()
            .click(function () {
              $(this).remove();
            });
    $('button#goodbye').click(function () {
        $('ul#user').prepend('<li>Goodbye!<i>');
        $('ul#webpage').prepend('<li>Goodbye, dear user!</li>');
    });

    $('button#stop').click(function () {
        $('ul#user').prepend('<li>Stop copying me!!</li>');
        $('ul#webpage').prepend('<li>Pardon me. I meant no offense.</li>');
    });

  });