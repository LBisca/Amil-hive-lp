$(document).ready(function() {
  let e = 1,
    s = document.getElementById('slider').children.length;
  $('#slider-bar-progress').addClass('progressing');
  let a = setInterval(() => {
    l();
  }, 5000);
  const l = () => {
    $('#slider-bar-progress').toggleClass('progressing'),
      $(`#slide_${e}`).removeClass('hidden'),
      $(`#slide-description_${e}`).removeClass('hidden'),
      $('#header-grafismo').addClass('rotate'),
      setTimeout(() => {
        $('#header-grafismo').removeClass('rotate');
      }, 900),
      setTimeout(() => {
        $('#slider-bar-progress').toggleClass('progressing');
      }, 100);
    for (let a = 0; a < s; a++)
      a !== e &&
        ($(`#slide-description_${a}`).addClass('hidden'),
        $(`#slide_${a}`).addClass('hidden'));
    e < s - 1 ? e++ : (e = 0);
  };
  $('#next-slide').click(() => {
    l(), $('#next-slide').toggleClass('disabled-click');
    setTimeout(() => {
      $('#next-slide').toggleClass('disabled-click');
    }, 1000);
    clearInterval(a),
      (a = setInterval(() => {
        l();
      }, 5000));
  });

  $('#person-select').val('1');

  let t = 1,
    r = 1,
    o = $(`#carousel-holder_${t}`).children().length;
  console.log(o);
  const d = e => {
      t !== e + 1 &&
        ($('.btn-navigate-carousel').toggleClass('fade'),
        setTimeout(() => {
          $('.btn-navigate-carousel').toggleClass('fade');
        }, 500)),
        (t = e + 1),
        (o = $(`#carousel-holder_${t}`).children().length),
        (r = 1),
        $('#menu-holder')
          .find('.carousel-holder')
          .each((s, a) => {
            s !== e
              ? ($(a).removeClass('active'), $(a).css('display', 'none'))
              : ($(a).css('display', 'flex'),
                setTimeout(() => {
                  $(a).addClass('active');
                }, 100)),
              $(a)
                .find('.carousel')
                .each((e, s) => {
                  $(s).removeClass('active right left far'),
                    0 === e && $(s).addClass('active'),
                    1 === e && $(s).addClass('right'),
                    e > 1 && $(s).addClass('right far');
                });
          }),
        $('#person-menu')
          .find('P')
          .each((s, a) => {
            s !== e ? $(a).removeClass('active') : $(a).addClass('active');
          }),
        i();
    },
    i = () => {
      r < o
        ? setTimeout(() => {
            $('.next').addClass('active');
          }, 400)
        : r === o && $('.next').removeClass('active'),
        r > 1
          ? setTimeout(() => {
              $('.previous').addClass('active');
            }, 400)
          : 1 === r && $('.previous').removeClass('active');
    };
  $('.next').click(() => {
    $(`.carousel_${r - 1}`).addClass('left far'),
      $(`.carousel_${r}`).addClass('left'),
      $(`.carousel_${r}`).removeClass('active'),
      $(`.carousel_${r + 1}`).removeClass('right left'),
      $(`.carousel_${r + 2}`).removeClass('far'),
      $(`.carousel_${r + 1}`).addClass('active'),
      r++,
      $('.btn-navigate-carousel').toggleClass('fade'),
      setTimeout(() => {
        $('.btn-navigate-carousel').toggleClass('fade');
      }, 400),
      i();
  }),
    $('.previous').click(() => {
      $(`.carousel_${r + 1}`).addClass('right far'),
        $(`.carousel_${r}`).addClass('right'),
        $(`.carousel_${r}`).removeClass('active'),
        $(`.carousel_${r - 1}`).removeClass('right left'),
        $(`.carousel_${r - 2}`).removeClass('far'),
        $(`.carousel_${r - 1}`).addClass('active'),
        r--,
        $('.btn-navigate-carousel').toggleClass('fade'),
        setTimeout(() => {
          $('.btn-navigate-carousel').toggleClass('fade');
        }, 400),
        i();
    }),
    $('#menu_1').click(() => {
      d(0);
    }),
    $('#menu_2').click(() => {
      d(1);
    }),
    $('#menu_3').click(() => {
      d(2);
    });

  $('#optionPerson').click(() => {
    $('#optionPerson').addClass('active');
    $('#optionCompany').removeClass('active');
    $('#section-company').removeClass('active');
    $('#section-person').addClass('active');
    $('#options-detail')
      .children()
      .each((index, elm) => {
        if (index == 0) {
          t = 1;
          currentMenu = 1;
          f(0);
          d(0);
          $(elm).addClass('active');
        } else {
          $(elm).removeClass('active');
        }
      });
  });
  
    $('#rdp-pf').click(() => {
    $('#optionPerson').addClass('active');
    $('#optionCompany').removeClass('active');
    $('#section-company').removeClass('active');
    $('#section-person').addClass('active');
    $('#options-detail')
      .children()
      .each((index, elm) => {
        if (index == 0) {
          t = 1;
          currentMenu = 1;
          f(0);
          d(0);
          $(elm).addClass('active');
        } else {
          $(elm).removeClass('active');
        }
      });
  });
  
 
  

  $('#person-select').change(e => {
    console.log(e.target.value);
    if (e.target.value === '1') {
      $('#person-200-classic-price').html('   R$ 46,50');
      $('#person-200-classic-link').attr(
        'href',
        'https://www.amildentalvenda.com.br/plano-odontologico/dental-200-para-1-a-2-pessoas/961413'
      );
      $('#person-50-classic-link').attr(
        'href',
        'https://www.amildentalvenda.com.br/para-uma-ou-duas-pessoas/individualNext'
      );
      $('#person-50-classic-price').html('  R$ 36,71 ');
    } else if (e.target.value === '2') {
      $('#person-200-classic-price').html('   R$ 34,00 ');
      $('#person-200-classic-link').attr(
        'href',
        'https://www.amildentalvenda.com.br/plano-odontologico/dental-200-para-3-ou-mais/961419'
      );
      $('#person-50-classic-link').attr(
        'href',
        'https://www.amildentalvenda.com.br/para-tr%C3%AAs-pessoas-ou-mais/familiarNext'
      );
      $('#person-50-classic-price').html('   R$ 27,60 ');
    }
  });

  $('#company-select').change(e => {
    if (e.target.value === '1') {
      $('#company-200-classic-price').html('   R$ 27,00 ');
      $('#company-200-classic-link').attr(
        'href',
        'https://www.amildentalvenda.com.br/plano-odontologico/dental-200-doc-pme/55226'
      );
      $('#company-50-classic-price').html('   R$ 20,90 ');
      $('#company-50-classic-link').attr(
        'href',
        'https://www.amildentalvenda.com.br/pequenas-e-m%C3%A9dias-empresas/NextPmeRegiao'
      );
    } else if (e.target.value === '2') {
      $('#company-200-classic-price').html('   R$ 23,00 ');
      $('#company-200-classic-link').attr(
        'href',
        'https://www.amildentalvenda.com.br/plano-odontologico/dental-200-doc-pme/55226'
      );
      $('#company-50-classic-link').attr(
        'href',
        'https://www.amildentalvenda.com.br/pequenas-e-m%C3%A9dias-empresas/NextPmeRegiao'
      );
      $('#company-50-classic-price').html('   R$ 17,90 ');
    }
  });

  // $('#company-200-classic-price').html('  R$  27,00 ');
  // $('#company-200-classic-price').html('  R$  23,00 ');

  $('#optionCompany').click(() => {
    $('#optionCompany').addClass('active');
    $('#optionPerson').removeClass('active');
    $('#section-person').removeClass('active');
    $('#section-company').addClass('active');
    $('#options-detail')
      .children()
      .each((index, elm) => {
        if (index == 1) {
          t = 1;
          currentMenu = 1;
          f(0);
          d(0);
          $(elm).addClass('active');
        } else {
          $(elm).removeClass('active');
        }
      });
  });
  
   $('#rdp-pme').click(() => {
    $('#optionCompany').addClass('active');
    $('#optionPerson').removeClass('active');
    $('#section-person').removeClass('active');
    $('#section-company').addClass('active');
    $('#options-detail')
      .children()
      .each((index, elm) => {
        if (index == 1) {
          t = 1;
          currentMenu = 1;
          f(0);
          d(0);
          $(elm).addClass('active');
        } else {
          $(elm).removeClass('active');
        }
      });
  });

  let currentMenu = 1,
    currentSlide = 1,
    optionsLength = $(`#company-carousel-holder_${currentMenu}`).children()
      .length;
  const f = e => {
      currentMenu !== e + 1 &&
        ($('.btn-navigate-carousel').toggleClass('fade'),
        setTimeout(() => {
          $('.btn-navigate-carousel').toggleClass('fade');
        }, 500)),
        (currentMenu = e + 1),
        (optionsLength = $(`#company-carousel-holder_${currentMenu}`).children()
          .length),
        (currentSlide = 1),
        $('#company-menu-holder')
          .find('.carousel-holder')
          .each((s, a) => {
            s !== e
              ? ($(a).removeClass('active'), $(a).css('display', 'none'))
              : ($(a).css('display', 'flex'),
                setTimeout(() => {
                  $(a).addClass('active');
                }, 100)),
              $(a)
                .find('.carousel')
                .each((e, s) => {
                  $(s).removeClass('active right left far'),
                    0 === e && $(s).addClass('active'),
                    1 === e && $(s).addClass('right'),
                    e > 1 && $(s).addClass('right far');
                });
          }),
        $('#company-menu')
          .find('P')
          .each((s, a) => {
            s !== e ? $(a).removeClass('active') : $(a).addClass('active');
          }),
        j();
    },
    j = () => {
      currentSlide < optionsLength
        ? setTimeout(() => {
            $('.company-next').addClass('active');
          }, 400)
        : currentSlide === optionsLength &&
          $('.company-next').removeClass('active'),
        currentSlide > 1
          ? setTimeout(() => {
              $('.company-previous').addClass('active');
            }, 400)
          : 1 === currentSlide && $('.company-previous').removeClass('active');
    };

  $('.company-next').click(() => {
    $(`.company-carousel_${currentSlide - 1}`).addClass('left far'),
      $(`.company-carousel_${currentSlide}`).addClass('left'),
      $(`.company-carousel_${currentSlide}`).removeClass('active'),
      $(`.company-carousel_${currentSlide + 1}`).removeClass('right left'),
      $(`.company-carousel_${currentSlide + 2}`).removeClass('far'),
      $(`.company-carousel_${currentSlide + 1}`).addClass('active'),
      currentSlide++,
      $('.btn-navigate-carousel').toggleClass('fade'),
      setTimeout(() => {
        $('.btn-navigate-carousel').toggleClass('fade');
      }, 400),
      j();
  }),
    $('.company-previous').click(() => {
      $(`.company-carousel_${currentSlide + 1}`).addClass('right far'),
        $(`.company-carousel_${currentSlide}`).addClass('right'),
        $(`.company-carousel_${currentSlide}`).removeClass('active'),
        $(`.company-carousel_${currentSlide - 1}`).removeClass('right left'),
        $(`.company-carousel_${currentSlide - 2}`).removeClass('far'),
        $(`.company-carousel_${currentSlide - 1}`).addClass('active'),
        currentSlide--,
        $('.btn-navigate-carousel').toggleClass('fade'),
        setTimeout(() => {
          $('.btn-navigate-carousel').toggleClass('fade');
        }, 400),
        j();
    }),
    $('#company-menu_1').click(() => {
      console.log(currentMenu, 'currentMenu');
      console.log(optionsLength, 'length');
      console.log(currentSlide, 'currentSlide');
      f(0);
    }),
    $('#company-menu_2').click(() => {
      f(1);
    });
    

});
$(document).ready(function() {
    $('.bottom').click(function() {
        $('html, body').animate({
            scrollTop:$('#optionPerson').position().top
        }, 600);
        return false;
    });

    $('.footpo').click(function() {
        $('html, body').animate({
            scrollTop:$('#optionPerson').position().top
        }, 600);
        return false;
    });


});
if (document.cookie.indexOf("User") < 0) {
        // do nothing
    }
    else {    
        window.location.replace("https://www.amildentalvenda.com.br/sales");
    }
    