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

  });