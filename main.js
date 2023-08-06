function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    return Math.round(rand)
  }
/*
  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r
    i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date()
    a = s.createElement(o),
      m = s.getElementsByTagName(o)[0]
    a.async = 1
    a.src = g
    m.parentNode.insertBefore(a, m)
  })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga')
*/
/*
  ga('create', 'UA-55942683-1', 'auto')
  ga('send', 'pageview')
*/
// function funonload() {
// document.getElementById("apDiv47").style.display = 'none';
// }
function hoverr(ff, ff1, ff2) {
  var speed = 0, oh = 182, ow = 246, oh1 = 71, ow1 = 150, olf = 50, otp = 48, ke = 1, i = 0, ort = 45
  $(ff).hover(function () {
    var speed = 0, oh = 182, ow = 246, oh1 = 71, ow1 = 150, olf = 50, otp = 48, ke = 1, i = 0, ort = 45
    ka = ($(ff1).get(0).scrollHeight - $(ff1).get(0).clientHeight)
    if (ka > 0) {
      while (i < 200) {
        $(ff1).stop().animate({height: oh1 * ke, width: ow1 * ke, left: olf * ke, top: otp * ke}, speed)
        ka = ($(ff1).get(0).scrollHeight - $(ff1).get(0).clientHeight)
        if (ka == 0) i = 220
        ke = ke + 0.01
        i++
      }
      $(ff1).stop().animate({height: oh1, width: ow1, left: olf, top: otp}, 0)
    }
    if (ff == '#apDiv59') {
      lf0 = 19
      tp0 = 234
      lf = lf0 - ow * (ke - 1)
      tp = tp0 - oh * (ke - 1) / 2
    }
    if (ff == '#apDiv62') {
      lf0 = 103
      tp0 = 487
      lf = lf0 - ow * (ke - 1) / 2
      tp = tp0 - oh * (ke - 1) / 2
    }
    if (ff == '#apDiv65') {
      lf0 = 475
      tp0 = 487
      lf = lf0 - ow * (ke - 1) / 2
      tp = tp0 - oh * (ke - 1) / 2
    }
    if (ff == '#apDiv67') {
      tp0 = 234
      tp = tp0 - oh * (ke - 1) / 2
    }
    if (ff == '#apDiv59' || ff == '#apDiv62' || ff == '#apDiv65') {
      $(ff).stop().animate({height: oh * ke, width: ow * ke, left: lf, top: tp}, 400)
    } else {
      $(ff).stop().animate({height: oh * ke, width: ow * ke, top: tp}, 400)
    }
    $(ff1).stop().animate({height: oh1 * ke, width: ow1 * ke, left: olf * ke, top: otp * ke}, 400)
    $(ff2).stop().animate({top: otp * ke, right: ort * ke}, 400)
  }, function () {
    speed = 400
    if (ff == '#apDiv59' || ff == '#apDiv62' || ff == '#apDiv65') {
      $(ff).stop().animate({height: oh, width: ow, left: lf0, top: tp0}, speed)
    } else {
      $(ff).stop().animate({height: oh, width: ow, top: tp0}, speed)
    }
    $(ff1).stop().animate({height: oh1, width: ow1, left: olf, top: otp}, speed)
    $(ff2).stop().animate({top: otp, right: ort}, speed)
  })
}
function MM_callJS(jsStr) {
  return eval(jsStr)
}
function newAsk() {
  window.location.reload()
}
function zg6() {
  document.getElementById('apDiv107t').style.display = 'block'
}
function zg14() {
  document.getElementById('apDiv149t').style.display = 'block'
}
function close() {
  document.getElementById('apDiv107t').style.display = 'none'
  document.getElementById('apDiv149t').style.display = 'none'
}
function tx9(kv6) {
  document.getElementById('apDiv134').style.display = 'block'
  document.getElementById('apDiv135').style.display = 'none'
  document.getElementById('apDiv136').style.display = 'none'
  document.getElementById('apDiv139').style.display = 'none'
  document.getElementById('apDiv140').style.display = 'none'
  document.getElementById('apDiv141').style.display = 'none'

  if (kv6 == 6) {
    document.getElementById('apDiv134').style.display = 'none'
  }

  if (kv6 == 1) document.getElementById('apDiv135').style.display = 'block'
  if (kv6 == 2) document.getElementById('apDiv136').style.display = 'block'
  if (kv6 == 3) document.getElementById('apDiv139').style.display = 'block'
  if (kv6 == 4) document.getElementById('apDiv140').style.display = 'block'
  if (kv6 == 5) document.getElementById('apDiv141').style.display = 'block'
}
function tx8(kv1) {
  if (kv1 == 3) {
    document.getElementById('apDiv132').style.display = 'none'
    document.getElementById('apDiv143').style.display = 'none'
    document.getElementById('apDiv116').style.display = 'none'
    document.getElementById('apDiv117').style.display = 'none'
    document.getElementById('apDiv144').style.display = 'none'
    document.getElementById('apDiv147').style.display = 'none'
    document.getElementById('pusk').style.display = 'none'
    document.getElementById('apDiv149').style.display = 'none'
    document.getElementById('apDiv122').style.display = 'none'
    // document.getElementById('apDiv121').style.opacity = '0'
    document.getElementById('apDiv130').style.display = 'block'
    document.getElementById('row1').style.display = 'flex'
    document.getElementById('row2').style.display = 'flex'
    document.getElementById('apDiv121').style.display = 'block'
    $('#apDiv121').animate({opacity: "1"}, 600)

  }
  if (kv1 == 2) {
    document.getElementById("apDiv2").style.opacity = '0'
    document.getElementById("apDiv2").style.display = 'block'
    $("#apDiv2").animate({opacity: "1"}, 9600)
  }

  if (kv1 == 1) {
    // console.log(1)
    strv = document.getElementById('qv1').value
    if (strv == '') {
      alert('Поле пустое. Пожалуйста наберите ваш вопрос...')
    } else {
      if (strv.indexOf('?', 0) == -1) strv = strv + ' ?'
      strv = strv.substring(0, strv.indexOf('?', 0)) + ' ' + '?'
      document.getElementById('apDiv44').style.display = 'none'
      var fw1 = strv.split(" ")[0]
      var fw2 = strv.split(" ")[1]

      if (fw2 == undefined) {

        strv = strv + ' '
        var fw1 = strv.split(" ")[0]
        var fw2 = strv.split(" ")[1]
      }

      var vvp = 2

      var a = function (fw1) {
        fw1 = fw1.toLowerCase()
        if (fw1 == "кто" || fw1 == "кого" || fw1 == "кому" || fw1 == "когда" || fw1 == "кем" || fw1 == "что" || fw1 == "чего" || fw1 == "чему" || fw1 == "чем" || fw1 == "отчего" || fw1 == "какая" || fw1 == "какие" || fw1 == "какому" || fw1 == "какой" || fw1 == "какое" || fw1 == "какого" || fw1 == "каких" || fw1 == "каким" || fw1 == "каков" || fw1 == "какова" || fw1 == "каковы" || fw1 == "о каких" || fw1 == "о каком" || fw1 == "какую" || fw1 == "чей" || fw1 == "чья" || fw1 == "чьей" || fw1 == "чью" || fw1 == "о чьей" || fw1 == "чьи" || fw1 == "чьего" || fw1 == "чьему" || fw1 == "о чьем" || fw1 == "чьих" || fw1 == "чьим" || fw1 == "о чьих" || fw1 == "чьими" || fw1 == "который" || fw1 == "которая" || fw1 == "которые" || fw1 == "которого" || fw1 == "сколько" || fw1 == "скольких" || fw1 == "скольким" || fw1 == "сколькими" || fw1 == "где" || fw1 == "куда" || fw1 == "зачем" || fw1 == "откуда" || fw1 == "как" || fw1 == "почему" || fw1 == "о ком" || fw1 == "о чем" || fw1 == "каково" || fw1 == "каковой" || fw1 == "каковы" || fw1 == "отчего") {
          return 1
        } else {
          return 2
        }
      }
      var vvp2 = 2
      vvp1 = a(fw1)
      vvp2 = a(fw2)
      if (vvp1 == 1 || vvp2 == 1) vvp = 1
      if (vvp == 2) {
        aa1 = 'pr1'
        tx1()
      }
      if (vvp == 1) {
        document.getElementById("apDiv8").style.display = "block"
        $('#apDiv22').show(600, function () {})
        document.getElementById("apDiv2").style.display = 'none'
        aa1 = 'pr6'
      } else {
        aa1 = 'pr1'
        tx1()
      }

    } // strv
  } // kv1
}
function tx7(kv2) {

  if (kv2 == 1) {
    var n1 = document.getElementById("otvm1").value
    if (n1 > 9) n1 = 9
    if (n1 < 10) {
      document.getElementById("apDiv23").style.display = 'block'
      document.getElementById("apDiv2").style.display = 'none'
      document.getElementById("apDiv8").style.display = 'none'
      document.getElementById("apDiv22").style.display = 'none'

      for (i = 1; i < 10; i++) {
        document.getElementById("ot" + i).disabled = true
      }

      for (i = 1; i < +n1 + 1; i++) {
        document.getElementById("ot" + i).disabled = false
      }
    } else {
      for (i = 1; i < 11; i++) {
        document.getElementById("ot" + i).disabled = true
      }
      tx1()
    }
  } else {
    document.getElementById("apDiv22").style.display = 'none'
  }
}
function tx6() {

  document.getElementById('apDiv84').style.display = 'none'
  // document.getElementById("apDiv88").style.display = 'block'
}
function tx5(k1) {
  if (k1 == 1) {
    document.getElementById('sec1').style.display = 'none'
    document.getElementById('apDiv85').style.display = 'none'
    document.getElementById('apDiv93').style.display = 'none'
    $('#apDiv81').animate({height: "show"}, 600)
    document.getElementById('apDiv84').style.display = 'block'
  }
  if (k1 == 2) {
    $('#apDiv81').animate({height: "hide"}, 600)
    function func() {
      document.getElementById("apDiv86").style.opacity = '0'
      // document.getElementById("sec1").style.opacity = '0'
      $('#apDiv85').show(0, function () {})
      $('#apDiv93').show(0, function () {})
      // $('#sec1').show(0, function () {})
      $("#apDiv86").animate({opacity: "1"}, 0)
      document.getElementById('sec1').style.display = 'block'
    }
    // $("#sec1").animate({opacity: "1"}, 0)
    setTimeout(func, 600)
    // document.getElementById('apDiv88').style.display = 'none'
    // $('#sec1').animate({height: "show"}, 10000)
    document.getElementById('apDiv84').style.display = 'block'
  }
}
function del121() {
  document.getElementById('apDiv130').style.display = 'none'
  document.getElementById('row1').style.display = 'none'
  document.getElementById('row2').style.display = 'none'
}
function tx4(kv4) {
  if (window.innerWidth > 525) document.getElementById('apDiv116').style.display = 'block'
  if (kv4 != 4) document.getElementById("apDiv116").style.opacity = '0'
  document.getElementById('apDiv117').style.display = 'none'
  // document.getElementById('apDiv9').style.display = 'none'
  document.getElementById('apDiv132').style.display = 'none'
  // document.getElementById('apDiv133').style.display = 'none'
  document.getElementById('apDiv144').style.display = 'none'
  document.getElementById('apDiv147').style.display = 'none'
  document.getElementById('apDiv148').style.display = 'none'
  document.getElementById('apDiv149').style.display = 'none'
  document.getElementById('apDiv131').style.display = 'none'

  if (kv4 == 0) {
    // document.getElementById('apDiv121').style.display = 'none'
    document.getElementById('apDiv122').style.display = 'block'
    del121()
    // document.getElementById('apDiv130').style.display = 'none'
    // document.getElementById('row1').style.display = 'none'
    // document.getElementById('row2').style.display = 'none'
    if (window.innerWidth < 526) document.getElementById('apDiv116').style.display = 'none'
    document.getElementById('apDiv116').innerHTML = 'Законы Мерфи'
    $("#apDiv116").animate({opacity: "1"}, 1200)
    document.getElementById('apDiv144').style.display = 'block'
    document.getElementById("apDiv144").style.opacity = '0'
    $("#apDiv144").animate({opacity: "1"}, 1200)
    const merfTxt = [
      {"txt1": "Закон Мерфи", "txt2": "Если какая-нибудь неприятность может произойти, она случиться."},
      {"txt1": " Закон Мерфи (следствиe №1) ", "txt2": "Все не так легко, как кажется."},
      {"txt1": " Закон Мерфи (следствиe №2)", "txt2": "Всякая работа требует больше времени, чем вы думаете."},
      {
        "txt1": " Закон Мерфи (следствиe №3)",
        "txt2": "Из всех неприятностей произойдет именно та, ущерб от которой больше.",
      },
      {
        "txt1": " Закон Мерфи (следствиe №4)",
        "txt2": "Если четыре причины возможных неприятностей заранее устранимы, то всегда найдется пятая.",
      },
      {
        "txt1": " Закон Мерфи (следствиe №5)",
        "txt2": "Предоставленные самим себе события имеют тенденцию развиваться от плохого к худшему.",
      },
      {
        "txt1": " Закон Мерфи (следствиe №6)",
        "txt2": "Как только вы принимаетесь делать какую-то работу, находится другая, которую надо сделать еще раньше.",
      },
      {"txt1": " Закон Мерфи (следствиe №7)", "txt2": "Всякое решение плодит новые проблемы."},
      {"txt1": " Наблюдение Ренара", "txt2": "Есть моменты, когда все удается. Не ужасайтесь, это пройдет."},
      {
        "txt1": " Закон Чизхолма №1",
        "txt2": "Все, что может испортиться — портится. Все, что не может испортиться — портится тоже.",
      },
      {
        "txt1": " Закон Чизхолма №2",
        "txt2": "Когда дела идут хорошо, что-то должно случиться в самом ближайшем будущем. Когда дела идут хуже некуда, в самом ближайшем будущем они пойдут еще хуже. Если вам кажется, что ситуация улучшается, значит вы чего-то не заметили.",
      },
      {
        "txt1": " Закон Чизхолма №3",
        "txt2": "Любые предложения люди понимают иначе, чем тот, кто их вносит. Даже если ваше объяснение настолько ясно, что исключает всякое ложное толкование, все равно найдется человек, который поймет вас неправильно.",
      },
      {
        "txt1": " Теорема Гинзберга",
        "txt2": "Выиграть нельзя. Остаться при своих нельзя. Нельзя даже выйти из игры.",
      },
      {
        "txt1": " Комментарии Эрмана",
        "txt2": "Перед тем, как улучшиться, ситуация ухудшается. Кстати, кто сказал, что она улучшится?",
      },
      {
        "txt1": " Законы Паддера	",
        "txt2": "Все, что начинается хорошо, кончается плохо. Все, что начинается плохо, кончается еще хуже.",
      },
      {
        "txt1": " Теорема Стокмайера",
        "txt2": "Если кажется, что работу сделать легко, то будет непременно трудно. Если на вид она трудна, то выполнить ее абсолютно невозможно.",
      },
      {
        "txt1": " Закон динамики Зимерги",
        "txt2": "Если вы уже открыли банку с червями, то единственный способ их снова запечатать — это воспользоваться банкой большего размера.",
      },
      {"txt1": " Закон падения Эмерсона", "txt2": "Под всякой бездной раскрывается другая, еще более глубокая."},
      {
        "txt1": " Закон фортуны Марка Твена",
        "txt2": "Один раз в жизни фортуна стучится в дверь каждого человека, но во многих случаях человек в это время сидит в соседнем кабачке и не слышит ее стука.",
      },
    ]
    const rand = randomInteger(0, 18)
    document.getElementById('apDiv4').innerHTML = merfTxt[rand].txt1
    document.getElementById('apDiv5').innerHTML = merfTxt[rand].txt2

    // $.ajax(
    // 	{
    // 		url: "txtm.php",
    // 		success: function (mr) {
    // 			document.getElementById('apDiv4').innerHTML = mr.split(">")[1];
    // 			document.getElementById('apDiv5').innerHTML = mr.split(">")[0];
    // 		}
    // 	});
  }

  if (kv4 == 1) {
    // document.getElementById('apDiv121').style.display = 'none'
    document.getElementById('apDiv122').style.display = 'block'
    del121()
    if (window.innerWidth < 526) document.getElementById('apDiv116').style.display = 'none'
    document.getElementById('apDiv116').innerHTML = 'Цитата для Вас'
    $("#apDiv116").animate({opacity: "1"}, 1200)
    document.getElementById('apDiv132').style.display = 'block'
    document.getElementById("apDiv132").style.opacity = '0'
    $("#apDiv132").animate({opacity: "1"}, 1200)
    document.getElementById('apDiv142').style.display = 'block'
    document.getElementById('apDiv143').style.display = 'block'
    var um1 = Math.floor(Math.random() * 12) + 1
    var mm = 'apDiv143'
    var ko1, kl
    if (um1 == 1) {
      ko1 = 'Цитата Смит'
      kl = '11'
    }
    if (um1 == 2) {
      ko1 = 'Аристотель'
      kl = '12'
    }
    if (um1 == 3) {
      ko1 = 'Вольтер'
      kl = '13'
    }
    if (um1 == 4) {
      ko1 = 'Далай Лама'
      kl = '21'
    }
    if (um1 == 5) {
      ko1 = 'Джим Рон'
      kl = '22'
    }
    if (um1 == 6) {
      ko1 = 'Конфуций'
      kl = '23'
    }
    if (um1 == 7) {
      ko1 = 'Марк Аврелий'
      kl = '31'
    }
    if (um1 == 8) {
      ko1 = 'Махатма Ганди'
      kl = '32'
    }
    if (um1 == 9) {
      ko1 = 'Пифагор'
      kl = '33'
    }
    if (um1 == 10) {
      ko1 = 'Соломон'
      kl = '41'
    }
    if (um1 == 11) {
      ko1 = 'Фома Аквинский'
      kl = '42'
    }
    if (um1 == 12) {
      ko1 = 'Эйнштейн'
      kl = '43'
    }
    document.getElementById('apDiv142').innerHTML = ko1

    const rand = randomInteger(0, 2)
    const kl11 = [
      "Заблуждения, заключающие в себе некоторую долю правды, — самые опасные.",
      "Трудно заставить человека понять что-либо, если его заработок обеспечивается непониманием этого.",
      "За исключением цифр, нет ничего более обманчивого, чем факты.",
    ]

    document.getElementById('apDiv143').innerHTML = kl11[rand]

    // $.ajax(
    // 	{
    // 		url: "txt1.php",
    // 		cache: false,
    // 		type: "GET",
    // 		data: { 'id': kl },
    // 		eId: mm,
    // 		success: function (html) {
    // 			document.getElementById(this.eId).innerHTML = html;
    // 		}
    // 	});
  }

  if (kv4 == 2) {
    // document.getElementById('apDiv121').style.display = 'none'
    document.getElementById('apDiv122').style.display = 'block'
    del121()
    if (window.innerWidth < 526) document.getElementById('apDiv116').style.display = 'none'
    document.getElementById('apDiv116').innerHTML = 'О программе'
    $("#apDiv116").animate({opacity: "1"}, 1200)
    document.getElementById('apDiv117').style.display = 'block'
    document.getElementById("apDiv117").style.opacity = '0'
    $("#apDiv117").animate({opacity: "1"}, 1200)
  }
  /*
        if (kv4 == 3) {
          document.getElementById('apDiv116').innerHTML = 'Тесты'
          $("#apDiv116").animate({opacity: "1"}, 1200)
          document.getElementById('apDiv133').style.display = 'block'
          document.getElementById("apDiv133").style.opacity = '0'
          $("#apDiv133").animate({opacity: "1"}, 1200)
        }
  */

  if (kv4 == 4) {
    document.getElementById('apDiv122').style.display = 'none'
    if (window.innerWidth < 526) document.getElementById('apDiv116').style.display = 'none'
    $("#apDiv116").animate({opacity: "0"}, 60)
    $("#apDiv147").animate({opacity: "0"}, 1200)
    document.getElementById("apDiv148").style.opacity = '0'
    document.getElementById('apDiv148').style.display = 'block'
    $("#apDiv148").animate({opacity: "1"}, 1200)
    $("#apDiv149").animate({opacity: "0"}, 1200)
    document.getElementById('apDiv149').style.display = 'none'
    document.getElementById("apDiv131").style.opacity = '1'
    document.getElementById('apDiv131').style.display = 'block'
    document.getElementById('mag11').style.display = 'none'
    document.getElementById('mag12').style.display = 'none'
    document.getElementById('mag13').style.display = 'none'
    document.getElementById('mag14').style.display = 'none'
    document.getElementById('mag15').style.display = 'none'
    document.getElementById('mag21').style.display = 'none'
    document.getElementById('mag22').style.display = 'none'
    document.getElementById('mag23').style.display = 'none'
    document.getElementById('mag24').style.display = 'none'
    document.getElementById('mag25').style.display = 'none'
    document.getElementById('mag31').style.display = 'none'
    document.getElementById('mag32').style.display = 'none'
    document.getElementById('mag33').style.display = 'none'
    document.getElementById('mag34').style.display = 'none'
    document.getElementById('mag35').style.display = 'none'

    function uss2() {

      var of1 = '1' + Math.floor(Math.random() * 5 + 1)
      var of2 = '2' + Math.floor(Math.random() * 5 + 1)
      var of3 = '3' + Math.floor(Math.random() * 5 + 1)

      document.getElementById('mag' + of3).style.display = 'block'
      document.getElementById('mag' + of2).style.display = 'block'
      document.getElementById('mag' + of1).style.display = 'block'
      document.getElementById('mag' + of1).style.opacity = '0'
      document.getElementById('mag' + of2).style.opacity = '0'
      document.getElementById('mag' + of3).style.opacity = '0'
      $('#mag' + of1).animate({opacity: "1"}, 2400)
      $('#mag' + of2).animate({opacity: "0.1"}, 2400)
      $('#mag' + of3).animate({opacity: "1"}, 2400)
      $('#mag' + of1).animate({opacity: "0"}, 2400)
      $('#mag' + of2).animate({opacity: "0"}, 2400)
      $('#mag' + of3).animate({opacity: "0"}, 2400)
    }

    for (i = 0; i < 2; i++) {
      if (i == 0) {
        tt = setTimeout(uss2, 300)
      } else {
        tt1 = setInterval(uss2, 3600)
      }
    }
  } // kv4 == 4

  if (kv4 == 5 || kv4 == 6) {
    // document.getElementById('apDiv121').style.display = 'none'
    document.getElementById('apDiv122').style.display = 'block'
    document.getElementById('pusk').style.display = 'block'
    del121()

    if (window.innerWidth < 526) document.getElementById('apDiv116').style.display = 'none'
    document.getElementById('apDiv116').innerHTML = 'Тренировка интуитивного восприятия'
    $("#apDiv116").animate({opacity: "1"}, 1200)
    if (kv4 == 6) {
      clearInterval(tt1)
      trr = 0
      $("#apDiv131").animate({opacity: "0"}, 1200)

      function uss3() {
        document.getElementById('apDiv131').style.display = 'none'
      }

      tt2 = setTimeout(uss3, 2400)
    }

    document.getElementById('apDiv147').style.display = 'block'
    document.getElementById("apDiv147").style.opacity = '0'
    $("#apDiv147").animate({opacity: "1"}, 1200)
    $("#apDiv148").animate({opacity: "0"}, 600)
    document.getElementById('apDiv149').style.display = 'block'
    document.getElementById("apDiv149").style.opacity = '0'
    $("#apDiv149").animate({opacity: "1"}, 1200)
  }

  /*
        if (kv4 == 7) {
          document.getElementById('apDiv116').innerHTML = 'Как избавиться от НИЩЕТЫ ?'
          $("#apDiv116").animate({opacity: "1"}, 1200)

          /!*	if (kv4 == 7) {
            clearInterval(tt1);
            trr = 0;
            $("#apDiv131").animate({opacity: "0"}, 1200);
              function uss3() {
              document.getElementById('apDiv131').style.display = 'none';
              }
            tt2 = setTimeout(uss3,2400);
            }
          *!/
          document.getElementById('apDiv9').style.display = 'block'
          document.getElementById("apDiv9").style.opacity = '0'
          $("#apDiv9").animate({opacity: "1"}, 1200)
        }
  */

}  // tx4
function tx2(n2) {
  if (n2 == 5) {
    document.getElementById("ot1").value = ''
    document.getElementById("ot2").value = ''
    document.getElementById("ot3").value = ''
    document.getElementById("ot4").value = ''
    document.getElementById("ot5").value = ''
    document.getElementById("ot6").value = ''
    document.getElementById("ot7").value = ''
    document.getElementById("ot8").value = ''
  }
  if (n2 == 6) {
    document.getElementById("apDiv23").style.display = 'none'
    document.getElementById("apDiv22").style.display = 'none'
    document.getElementById("apDiv8").style.display = 'block'
    tx1()
  }
  if (n2 == 8) {
    $("#apDiv121").animate({opacity: "0"}, 600)
    $('#apDiv121').hide(600, function () {
    })
  }
}
window.vp1 = 35
function tx1(n1) {
  // document.getElementById('txs').src = 'texstr.html'
  // document.getElementById('footer').style.backgroundImage = 'url("img/101_6.png")'
  document.getElementById('body').style.backgroundImage = 'url("img/101.png")'
  // document.getElementById('apDiv112').style.backgroundImage = 'url("img/101_6.png")'
  document.getElementById('apDiv113').style.color = 'white'
  document.getElementById('apDiv114').style.color = 'white'

  kk1 = 0

  document.getElementById('apDiv28').style.display = 'none'
  document.getElementById('apDiv85').style.display = 'none'
  document.getElementById('apDiv93').style.display = 'none'
  document.getElementById('apDiv89').style.display = 'none'

  var tip = 1

  document.getElementById('apDiv551').style.display = 'block'
  document.getElementById('apDiv651').style.display = 'block'

  if (n1) {
    var n1 = n1
  } else {
    var n1 = 1000

    if (aa1 == 'pr5' || aa1 == 'pr6') {
      if (document.getElementById("otvm1").value == '2') {
        aa1 = 'pr5'
      } else {
        aa1 = 'pr6'
      }
    }

    if (tip == 1) {
    } else {
      aa1 = $('input[name="kogda"]:checked').val()
    }

    if (aa1 == 'pr4') {
      document.getElementById('sts1').innerHTML = 'День'
      document.getElementById('sts2').innerHTML = 'Месяц'
      document.getElementById('sts3').innerHTML = 'Год'
    }
    if (aa1 == 'pr5') {
      document.getElementById('apDiv551').style.display = 'none'
      document.getElementById('sts1').innerHTML = '№1'
      document.getElementById('sts2').innerHTML = '---'
      document.getElementById('sts3').innerHTML = '№2'

      var otk = 0
      document.getElementById('tb11').innerHTML = document.getElementById("ot1").value
      document.getElementById('tb12').innerHTML = document.getElementById("ot2").value
      if (document.getElementById("ot1").value != "") {
        document.getElementById('tb11').style.border = '1px solid #000'
        otk++
      }
      if (document.getElementById("ot2").value != "") {
        document.getElementById('tb12').style.border = '1px solid #000'
        otk++
      }
      if (otk == 0) {
        document.getElementById('apDiv74').style.display = 'none'
      } else {
        document.getElementById('apDiv74').style.display = 'block'
      }
    }  //pr5

    if (aa1 == 'pr6') {
      document.getElementById('apDiv651').style.display = 'none'
      document.getElementById('apDiv541').style.display = 'none'
      // document.getElementById('apDiv551').style.display = 'none'
      // document.getElementById('apDiv541').style.height = '24px'
      // document.getElementById('apDiv541').style.top = '64px'
      document.getElementById('sts1').innerHTML = '->'
      document.getElementById('sts2').innerHTML = '№...'
      document.getElementById('sts3').innerHTML = '->'
      var otk = 0
      document.getElementById('tb11').innerHTML = document.getElementById("ot1").value
      document.getElementById('tb12').innerHTML = document.getElementById("ot2").value
      document.getElementById('tb13').innerHTML = document.getElementById("ot3").value
      document.getElementById('tb21').innerHTML = document.getElementById("ot4").value
      document.getElementById('tb22').innerHTML = document.getElementById("ot5").value
      document.getElementById('tb23').innerHTML = document.getElementById("ot6").value
      document.getElementById('tb31').innerHTML = document.getElementById("ot7").value
      document.getElementById('tb32').innerHTML = document.getElementById("ot8").value
      document.getElementById('tb33').innerHTML = document.getElementById("ot9").value
      if (document.getElementById("ot1").value != "") {
        document.getElementById('tb11').style.border = '1px solid #000'
        otk++
      }
      if (document.getElementById("ot2").value != "") {
        document.getElementById('tb12').style.border = '1px solid #000'
        otk++
      }
      if (document.getElementById("ot3").value != "") {
        document.getElementById('tb13').style.border = '1px solid #000'
        otk++
      }
      if (document.getElementById("ot4").value != "") {
        document.getElementById('tb21').style.border = '1px solid #000'
        otk++
      }
      if (document.getElementById("ot5").value != "") {
        document.getElementById('tb22').style.border = '1px solid #000'
        otk++
      }
      if (document.getElementById("ot6").value != "") {
        document.getElementById('tb23').style.border = '1px solid #000'
        otk++
      }
      if (document.getElementById("ot7").value != "") {
        document.getElementById('tb31').style.border = '1px solid #000'
        otk++
      }
      if (document.getElementById("ot8").value != "") {
        document.getElementById('tb32').style.border = '1px solid #000'
        otk++
      }
      if (document.getElementById("ot9").value != "") {
        document.getElementById('tb33').style.border = '1px solid #000'
        otk++
      }

      if (otk == 0) {
        document.getElementById('apDiv74').style.display = 'none'
      } else {
        document.getElementById('apDiv74').style.display = 'block'
      }
    }

    $('#apDiv8').hide(600, function () {
    })
    document.getElementById("apDiv12").style.display = "none"
    document.getElementById("apDiv38").style.display = "block"
    // $('#apDiv38').show(600, function () {})

    if (document.getElementById("qv1").value == '') {
      document.getElementById('apDiv42').innerHTML = "Вы не заполнили вопрос. Из-за этого правильность ответа будет несколько ниже (в любом случае, не забудьте задуманный вопрос)..."
    } else {
      document.getElementById('apDiv42').innerHTML = "Вопрос:" + "\n" + strv
    }

    function us3() {

      var rb1 = Math.floor(Math.random() * 4)
      if (rb1 == 0) {
        var tp = '390px'
        lf = '665px'
      }

      if (rb1 == 1) {
        var tp = '450px'
        lf = '327px'
      }

      if (rb1 == 2) {
        var tp = '410px'
        lf = '20px'
      }

      if (rb1 == 3) {
        var tp = '236px'
        lf = '6px'
      }


      document.getElementById("apDiv43").style.top = tp
      document.getElementById("apDiv43").style.left = lf
      $('#apDiv43').show(1200, function () {
      })
      $("#apDiv43").animate({height: "hide"}, 2400)
    }

    tim3 = setInterval(us3, 4800)

    $("#apDiv28").animate({height: "show"}, 300)
    $("#apDiv45").animate({height: "show"}, 3600)

    function us4() {
      //todo Use
      /*
                $("#apDiv45").animate({opacity: "1"}, 3600)
                $("#apDiv45").animate({opacity: "0"}, 4800)
      */
    }

    tim4 = setInterval(us4, 14400)
  }
  if (aa1 == 'pr5' || aa1 == 'pr6') {
    $('#apDiv22').hide(1200, function () {
    })
  } else {
  }

  if (n1 != 31) {
    $('#apDiv30').show(3600, function () {
    })
    document.getElementById("apDiv40").style.display = "block"
    bv11 = 0, bv21 = 0, bv31 = 0
    document.getElementById('apDiv541').style.width = '0px'
    document.getElementById('apDiv551').style.width = '0px'
    document.getElementById('apDiv651').style.width = '0px'

    var i = 0
    if (kk1 == 0) {
      function us2() {
        bv11 = 0, bv21 = 0, bv31 = 0
        for (n = 1; n < 100; n++) {
          var bv = Math.floor(Math.random() * 3)
          if (bv == 0) {
            bv11++
          }

          if (bv == 1) {
            bv21++
          }

          if (bv == 2) {
            bv31++
          }

        }
        var bv1 = Math.floor(Math.random() * 3 + 1 / 2)
        const mult = 2
        document.getElementById('apDiv541').style.width = bv11 * mult + 'px'
        document.getElementById('apDiv551').style.width = bv21 * mult + 'px'
        document.getElementById('apDiv651').style.width = bv31 * mult + 'px'
/*
        document.getElementById('apDiv541').style.width = bv11 * 5 + 'px'
        document.getElementById('apDiv551').style.width = bv21 * 5 + 'px'
        document.getElementById('apDiv651').style.width = bv31 * 5 + 'px'
*/
      }

      tim1 = setInterval(us2, 100)
    }
  } // != 31

  if (n1 == 31) {
    b1 = bv11, b2 = bv21, b3 = bv31
    bq1 = bv11, bq2 = bv21, bq3 = bv31

    var bu1 = b3 - b1
    var vx = 0, vx1 = 0, bu2 = 1, vxn = 10000
    if (bu1 < 0) {
      bu1 = b1 - b3
      bu2 = 0
    }
    if (bu1 > 12) vx = vxn

    while (vx < vxn) {
      b1 = 0, b2 = 0, b3 = 0, bu3 = 1
      for (n = 1; n < 100; n++) {
        var bv = Math.floor(Math.random() * 3)
        if (bv == 0) {
          b1++
        }

        if (bv == 1) {
          b2++
        }

        if (bv == 2) {
          b3++
        }

      }
      var bu1 = b3 - b1
      vx1 = vx
      if (bu1 < 0) {
        bu1 = b1 - b3
        bu3 = 0
      }
      if (bu1 > 12 && bu2 == bu3) vx = vxn
      vx++
    }

    if (b2 > b1 && b2 > b3) {
      b1r = 0, b2r = 0, b3r = 0
      for (n = 1; n < 100; n++) {
        var bvr = Math.floor(Math.random() * 3)
        if (bvr == 0) {
          b1r++
        }

        if (bvr == 1) {
          b2r++
        }

        if (bvr == 2) {
          b3r++
        }

      }

      if (b2r > b1r && b2r > b3r) {
        b5 = 1
        b6 = b2
      } else {
        var dlt = (b2 - Math.min(b1, b2, b3)) / 2
        b2 = Math.min(b1, b2, b3)
        b1 = Math.floor(b1 + dlt)
        b3 = Math.ceil(b3 + dlt)

      }
    }

    bo1 = b1, bo2 = b2, bo3 = b3

    document.getElementById('apDiv41').src = 'img/101_1.png'
    document.getElementById('apDiv45').style.display = 'none'
    document.getElementById('apDiv74').style.display = 'none'

    $("#apDiv44").animate({opacity: "0"}, 300)  //матрас
    $('#apDiv46').hide(100, function () {
    })  //пирамида

    $("#apDiv59").animate({opacity: "0"}, 0)
    $("#apDiv62").animate({opacity: "0"}, 0)
    $("#apDiv65").animate({opacity: "0"}, 0)
    $("#apDiv67").animate({opacity: "0"}, 0)
    $('#apDiv71').show(100, function () {
      // $('#apDiv71').show(1200, function () {
    })

    clearInterval(tim1)
    clearInterval(tim3)
    clearInterval(tim4)
    kk1 = 1
    kvk = 0

    function delta(progress) {
      function d(progress) {
        return 1 - Math.sin(Math.acos(progress))
      }

      return 1 - d(1 - progress)
    }

    const widthScreen = window.innerWidth
    console.log('DDD', window.innerWidth)

    let heightLine = '23px'
    if (window.innerWidth < 526) {
      heightLine = '8px'
    }

    document.getElementById('apDiv541').style.height = heightLine
    if (aa1 == 'pr5') {
      document.getElementById('apDiv551').style.height = '0'
    } else {
      document.getElementById('apDiv551').style.height = heightLine
    }
    document.getElementById('apDiv651').style.height = heightLine

    if (aa1 == 'pr6') {
      document.getElementById('apDiv541').style.height = heightLine
      document.getElementById('apDiv551').style.height = '0px'
      document.getElementById('apDiv651').style.height = '0px'
    }
    var from = 0
    var to = 8 //200
    var duration = 3000
    var start = new Date().getTime()
    setTimeout(function () {
        var now = (new Date().getTime()) - start // Текущее время
        var progress = now / duration
        var result = (to - from) * delta(progress) + from
        console.log('>>', to, from, result)
        document.getElementById('apDiv541').style.width = result + "px"
        document.getElementById('apDiv551').style.width = result + "px"
        document.getElementById('apDiv651').style.width = result + "px"

        if (progress < 1) {// Если анимация не закончилась
          setTimeout(arguments.callee, 10)
        } else {
          $('#apDiv71').hide(20, function () {
            // $('#apDiv71').hide(2400, function () {
          })
          document.getElementById('apDiv541').style.width = b1 * 5 + "px"
          document.getElementById('apDiv551').style.width = b2 * 5 + "px"
          document.getElementById('apDiv651').style.width = b3 * 5 + "px"
          document.getElementById('apDiv70').innerHTML = v2 + '%'
          $('#apDiv47').show(1200, function () {
          })
          $("#apDiv59").animate({opacity: "1"}, 0)
          $("#apDiv62").animate({opacity: "1"}, 0)
          $("#apDiv65").animate({opacity: "1"}, 0)
          $("#apDiv67").animate({opacity: "1"}, 0)
          $('#apDiv59').show(1200, function () {
          })
          $('#apDiv62').show(3600, function () {
          })
          $('#apDiv65').show(6000, function () {
          })
          $('#apDiv67').show(8400, function () {
          })

          $('#apDiv72').show(300, function () {
          })

        }
      }
      , 10)  // setTimeout
  }  //n1 == 31

  var b5, b6
  var bb = 100

  /*
      if (b1 == b3) {
        alert('Oops - это ошибка. Повторите действие!')
        var b11 = b1
        var b31 = b3
        for (i2 = 0; i2 < 100; i2++) {
          var b = Math.floor(Math.random() * 2)
          if (b == 0) {
            b1++
          }

          if (b == 1) {
            b3++
          }

        }
        if (b3 > b1) {
          b1 = b1 - 1
          b3 = b3 + 1
        } else {
          b1 = b1 + 1
          b3 = b3 - 1
        }
        var b2 = 100 - (b1 + b3)
      }
  */

  var b1a = b1, b2a = b2, b3a = b3
  var b4 = Math.max(b1, b2, b3)
  if (b4 == b1) {
    b5 = 0
    b6 = b1
  }
  if (b4 == b2) {
    b5 = 1
    b6 = b2
  }
  if (b4 == b3) {
    b5 = 2
    b6 = b3
  }

  if (b1 == b2) {
    if (b2 < b3) {
      b5 = 2
      b6 = b3
    } else {
      b5 = 0
      b6 = b1
    }
  }

  if (b2 == b3) {
    if (b1 < b2) {
      b5 = 2
      b6 = b3
    } else {
      b5 = 0
      b6 = b1
    }
  }

  bu1 = b3 - b1
  if (bu1 < 0) bu1 = b1 - b3

  var x = Math.round((b6 - 34) * 100 / 12)
  var vvx

  if (vx1 == 0) {
    vvx = 20
  } else {
    vvx = -vx1
  }

  v2 = x + vvx + bu1
  v3 = v2
  if (v2 < 67) v = 1
  if (v2 >= 67 && v2 < 81) v = 2
  if (v2 >= 81) v = 3


  if (v2 < 53) {
    v2 = 53 + Math.floor(Math.random() * 3)
  }

  if (v2 > 92) var v2 = 92

  setTimeout(us1, 20)

  function us1() {
    if (aa1 == 'pr6') {
      var kp = document.getElementById("otvm1").value
      var kp1 = Math.floor(Math.random() * kp) + 1
      document.getElementById('otvm1').value = kp1
      document.getElementById("otvm1").style.backgroundColor = '#FF9'
      document.getElementById("ot" + kp1).style.backgroundColor = '#0CF'
      var sr1 = document.getElementById("ot" + kp1).value
      document.getElementById('apDiv48').innerHTML = '№' + kp1
      document.getElementById('apDiv49').innerHTML = sr1
    }

    if (aa1 == 'pr5') {
      var sr = Math.floor(Math.random() * 2) + 1
      if (sr == 1) var sr1 = document.getElementById('ot1').value
      if (sr == 2) var sr1 = document.getElementById('ot2').value
      document.getElementById('apDiv48').innerHTML = '№' + sr
      document.getElementById('apDiv49').innerHTML = sr1
    }

    if (aa1 == "pr1" || aa1 == "pr2" || aa1 == "pr3") {
      var klv = b5 + "" + v
      var kls = b5 + "" + v
      var r = Math.floor(Math.random() * 3) + 1
      var i = Math.floor(Math.random() * 3) + 1
      var klr = b5 + "" + r
      var kli = b5 + "" + i
      if (kls == "13" || kls == "12") kls = "11"
      if (klr == "13" || klr == "12") klr = "11"
      if (kli == "13" || kli == "12") kli = "11"
      console.log('klv=', klv, 'b5=', b5, 'v=', v)
      var mm = 'apDiv48'
      const kv = [
        [
          [
            "Скорее всего нет.",
            "Нет, хотя и не безспорно.",
          ],
          [
            "Нет, и это несомненно.",
            "Думаю, нет.",
            "Сожалею, но нет.",
          ],
          [
            "Нет, нет и еще раз нет.",
            "Конечно нет. Я уверен в этом.",
            "Конечно нет. Я не сомневаюсь в этом.",
            "Конечно нет. Без вариантов.",
            "Конечно нет, и это правда.",
          ],
        ],
        [
          [
            "Непонятно, но скорее 'нет', чем 'да'.",
          ],
          [
            "Ничего сейчас не ясно.",
          ],
          [
            "Непонятно, но скорее 'да', чем 'нет'.	",
          ],
        ],
        [
          [
            "Да, хотя и с некоторыми сомнениями.",
            "Скорее всего да.",
          ],
          [
            "Да. Это точно.",
            "Да. Безусловно.",
            "Да. Безспорно.	",
          ],
          [
            "Конечно да. Я уверен.",
            "Конечно да. Я абсолютно уверен.",
            "Конечно да. Я совершенно уверен.",
            "Конечно да. Без тени сомнений.",
            "Конечно да. Я ручаюсь.",
          ],
        ],
      ]
      /*
      const kv1 = [
        [
          "Скорее всего нет.",
          "Нет, хотя и не безспорно."
        ],
        [
          "Нет, и это несомненно.",
          "Думаю, нет.",
          "Сожалею, но нет."
        ],
        [
          "Нет, нет и еще раз нет.",
          "Конечно нет. Я уверен в этом.",
          "Конечно нет. Я не сомневаюсь в этом.",
          "Конечно нет. Без вариантов.",
          "Конечно нет, и это правда."
        ]
      ]
      const kv2 = [
        [
          "Непонятно, но скорее 'нет', чем 'да'."
        ],
        [
          "Ничего сейчас не ясно."
        ],
        [
          "Непонятно, но скорее 'да', чем 'нет'.	"
        ]
      ]
      const kv3 = [
        [
          "Да, хотя и с некоторыми сомнениями.",
          "Скорее всего да."
        ],
        [
            "Да. Это точно.",
            "Да. Безусловно.",
            "Да. Безспорно.	"
        ],
        [
          "Конечно да. Я уверен.",
          "Конечно да. Я абсолютно уверен.",
          "Конечно да. Я совершенно уверен.",
          "Конечно да. Без тени сомнений.",
          "Конечно да. Я ручаюсь."
        ]
      ]
*/
      const kvv = kv[b5][v - 1]
      const idx = randomInteger(0, kvv.length - 1)
      console.log('>0', idx, kvv)
      const rand_v = kv[b5][v-1][idx]
      console.log('>>>>', idx, kv, kv[b5], kv[b5][v-1], rand_v)
      document.getElementById('apDiv48').innerHTML = rand_v

      // $.ajax(
      // 	{
      // 		url: "txtv.php",
      // 		cache: false,
      // 		type: "GET",
      // 		data: { 'id': klv },
      // 		eId: mm,
      // 		success: function (html) {
      // 			document.getElementById(this.eId).innerHTML = html;
      // 		}
      // 	});
    }  //if pr1 pr2 pr3

    var um1 = Math.floor(Math.random() * 3) + 1
    var mm = 'apDiv51'
    var ko1, kl
    if (um1 == 1) {
      ko1 = 'Адам Смит'
      kl = '11'
    }
    if (um1 == 2) {
      ko1 = 'Аристотель'
      kl = '12'
    }
    if (um1 == 3) {
      ko1 = 'Вольтер'
      kl = '13'
    }
    const kl1 = [
      [
        "Заблуждения, заключающие в себе некоторую долю правды, — самые опасные.",
        "Трудно заставить человека понять что-либо, если его заработок обеспечивается непониманием этого.",
        "За исключением цифр, нет ничего более обманчивого, чем факты.",
      ],
      [
        "Плохие люди полны сожаления.",
        "Снижайте Ваши желания до уровня Ваших текущих возможностей.Увеличивайте их только тогда, когда увеличены Ваши возможности.",
        "Изменение во всех вещах приятно.",
        "Рекомендация может быть названа лучшим средством убеждения.",
        "Достоинство заключается не в обладаемых наградах, а в заслуживании их.",
        "Тот, кто имеет много друзей, не имеет ни одного.",
        "Личная прелесть является лучшей рекомендацией, чем рекомендательное письмо.",
        "Возможное отсутствие способностей предпочтительнее невозможных способностей.",
        "Конец труда — приобретение лени.",
        "Сила ума — сущность жизни.",
        "Боги слишком любят шутки.",
      ],
      [
        "Один хороший друг стоит больше всех благ этого мира.",
        "Если что - то глупо сказать пропойте это.",
        "Некоторые умные люди больны атеизмом, а глупцы суевериями.",
        "Если вы будете договаривать все до конца скоро можете наскучить собеседнику.",
        "Труд дает человеку свободу от трех бед скуки, нужды и пороков.",
        "Если человек пригоден только для себя, то он ни на что не пригоден.",
        "Можно наговорить много глупостей, следуя лишь желанию сказать что - либо.",
        "Самая необходимая для человека вещь это излишек.",
        "Глупый человек никогда не меняется.",
      ],
    ]
    const rand1 = randomInteger(0, 2)
    const rand11 = randomInteger(0, kl1[rand1].length - 1)

    // document.getElementById('apDiv51').style.opacity = "0"
    // document.getElementById('apDiv51').style.display = "none"
    document.getElementById('apDiv51').innerHTML = kl1[rand1][rand11]
    // $('#apDiv51').animate({ opacity: "1" }, 1600);
    // document.getElementById('apDiv51').style.display = "block"

    // $.ajax(
    // 	{
    // 		url: "txt1.php",
    // 		cache: false,
    // 		type: "GET",
    // 		data: { 'id': kl },
    // 		eId: mm,
    // 		success: function (html) {
    // 			document.getElementById(this.eId).innerHTML = html;
    // 		}
    // 	});

    document.getElementById('apDiv52').innerHTML = ko1

    var um2 = Math.floor(Math.random() * 3) + 1
    var mm = 'apDiv53'
    var ko2
    if (um2 == 1) {
      ko2 = 'Далай Лама'
      kl = '21'
    }
    if (um2 == 2) {
      ko2 = 'Джим Рон'
      kl = '22'
    }
    if (um2 == 3) {
      ko2 = 'Конфуций'
      kl = '23'
    }

    const kl2 = [
      [
        "Будь добр всегда, когда это возможно. А это всегда возможно.",
        "Счастье не бывает сразу готовым. Оно случается благодаря Вашим действиям.",
        "Я нахожу надежду в самом мрачном из дней и концентрируюсь на самом ярком.",
        "В терпимости враг — лучший учитель.",
        "Сон — лучшая медитация.",
        "Иногда человек производит впечатление говоря что-нибудь, но иногда человек производит большее впечатление сохраняя молчание.",
        "Цель наших жизней — быть счастливыми.",
        "Мы никогда не сможем добиться спокойствия во внешнем мире, пока не добьемся его во внутреннем.",
      ],
      [
        "Самая большая ценность в жизни – это не то, что вы получаете, а то кем вы становитесь.",
        "Дисциплина – это мост между целью и достижением.",
        "Идея может изменить жизнь. Иногда чтобы сделать следующий шаг – нужна всего одна новая идея.",
        "Если вы не готовы рискнуть ради необычного, вам придется довольствоваться повседневностью.",
        "Если вы еще не составили свой жизненный план, то вы являетесь частью чужого плана. И как вы думаете, как много места там оставлено для вас? Совсем немного.",
        "Это – всего лишь паруса, а не направление ветра, которое определяет наш путь.",
        "Добивайтесь успеха за определенное время.",
        "Не гонитесь за успехом — он сам придет к вам в свое время.",
        "Успех – это набор правил, которых надо придерживаться ежедневно.",
        "Успех это ваш спутник, когда вы движетесь к достижению своей цели.",
        "Не прочитанная книга не сможет вам помочь.",
        "Найдите время оценить свое прошлое – опыт, полученный раннее, будет отличным вложением в ваше будущее.",
        "Возведя стену, чтобы не пустить в душу грусть, мы закрываем путь для счастья.",
        "Время ценнее денег. Деньги можно заработать — время заработать невозможно.",
        "Нам не избежать одной из двух вещей: сожалений от не сделанного или разочарования от сделанного.",
        "Все хорошие дела для других, в итоге оставляют след в нашей душе.",
        "Если, вы знаете, чего вы хотите, то вы обязательно найдете способ это получить.",
        "Тот, кто помогает людям – получит славу, богатство, признание, счастье.",
        "Желание без стремления не ценится.",
        "Слова помогают в двух вещах: дают пищу для ума и дают направление для понимания и осознания.",
      ],
      [
        "Выбери работу, которую любишь, и тебе не придется работать ни одного дня в твоей жизни.",
        "Лучший человек скромен в своей речи, но решителен в своих действиях.",
        "Не навязывай другим то, что себе не желаешь.",
        "Оставить недоделанным то, что верно, — показатель недостатка храбрости.",
        "Тот, кто учится, но не думает, потерян! Тот, кто думает, но не учится, в большой опасности.",
        "Более позорно не доверять нашим друзьям, чем быть обманутыми ими.",
        "Жизнь действительно проста, но мы стараемся ее усложнить.",
        "Настоящее знание — это знать степень своего невежества.",
        "Молчание — лучший друг, который никогда не предает.",
        "Учи прошлое, если желаешь предугадать будущее.",
        "Людям, желающим постоянно иметь счастье или мудрость, нужно часто меняться.",
        "Быть обиженным — пустяк, если Вы не помните это.",
        "Мы должны чувствовать сожаление, но не тонуть под его давлением.",
        "Чего не желаешь себе, не делай другим.",
        "Когда нарастает гнев, подумай о последствиях.",
        "Когда очевидно, что цель не может быт достигнута, не меняй цель, меняй шаги действий.",
        "Куда бы ты ни шел, иди от всего своего сердца.",
      ],
    ]
    const rand2 = randomInteger(0, 2)
    const rand12 = randomInteger(0, kl1[rand2].length - 1)
    document.getElementById('apDiv53').innerHTML = kl2[rand2][rand12]

    // $.ajax(
    // 	{
    // 		url: "txt1.php",
    // 		cache: false,
    // 		type: "GET",
    // 		data: { 'id': kl },
    // 		eId: mm,
    // 		success: function (html) {
    // 			document.getElementById(this.eId).innerHTML = html;
    // 		}
    // 	});
    document.getElementById('apDiv54').innerHTML = ko2

    var um3 = Math.floor(Math.random() * 3) + 1
    var mm = 'apDiv55'
    var ko3
    if (um3 == 1) {
      ko3 = 'Марк Аврелий'
      kl = '31'
    }
    if (um3 == 2) {
      ko3 = 'Махатма Ганди'
      kl = '32'
    }
    if (um3 == 3) {
      ko3 = 'Пифагор'
      kl = '33'
    }

    const kl3 = [
      [
        "Мечтайте о великом: лишь великие мечты в силах затронуть людские души.",
        "Самый презренный вид малодушия — это жалость к самому себе.",
        "Не мудри над собой, старайся быть простым.",
        "Начни с самого себя и исследуй прежде самого себя.",
        "Человека хорошего, благожелательного и искреннего можно узнать и по его глазам.",
        "Не все же разглагольствовать о том, каким должен быть человек, пора и стать им.",
        "Измени отношение к вещам, которые тебя беспокоят, и ты будешь от них в безопасности.",
      ],
      [
        "Если хочешь изменить мир, изменись сам.",
        "Единственный способ жить — это давать жить другим.",
        "Как только поверишь в то, что достиг идеала, дальнейшее развитие приостанавливается и начинается движение вспять.",
        "Начните менять в себе то, что вы хотите изменить вокруг.",
        "Это всегда было тайной для меня: как люди могут уважать себя, унижая таких же, как они сами.",
        "Человеку никогда не докричаться туда, куда доносится тихий, негромкий голос совести.",
        "Сила — в отсутствии страха, а не в количестве мускулов на нашем теле.",
        "Если ты хочешь перемену в будущем — стань этой переменой в настоящем.",
        "В вопросах совести закон большинства не действует.",
        "Не будь у меня чувства юмора, я давно бы покончил с собой.",
      ],
      [
        "Первым правилом установи для себя самого уважение к себе .",
        "Всегда соблюдайте меру и в пище и в питии.",
        "Дружи с истиной до мученичества, но не защищай ее до нетерпимости.",
        "Ни при каких обстоятельствах не теряй самоуважения!",
        "Все изучай, давай уму первое место.",
        "Если ты рожден орлом, не стремись стать лучшим среди галок.",
        "Во время того, как ты гневаешься не нужно ни разговаривать, ни действовать.",
        "Делай великое, но не обещай великого.",
        "Жизнь подобна игре: одни приходят на них соревноваться, иные торговать, а везунчики смотреть.",
      ],
    ]
    const rand3 = randomInteger(0, 2)
    const rand13 = randomInteger(0, kl3[rand3].length - 1)
    document.getElementById('apDiv55').innerHTML = kl3[rand3][rand13]

    // $.ajax(
    // 	{
    // 		url: "txt1.php",
    // 		cache: false,
    // 		type: "GET",
    // 		data: { 'id': kl },
    // 		eId: mm,
    // 		success: function (html) {
    //
    // 			document.getElementById(this.eId).innerHTML = html;
    // 		}
    // 	});
    document.getElementById('apDiv56').innerHTML = ko3

    var um4 = Math.floor(Math.random() * 3) + 1
    var mm = 'apDiv57'
    var ko4
    if (um4 == 1) {
      ko4 = 'Соломон'
      kl = '41'
    }
    if (um4 == 2) {
      ko4 = 'Фома Аквинский'
      kl = '42'
    }
    if (um4 == 3) {
      ko4 = 'Эйнштейн'
      kl = '43'
    }

    const kl4 = [
      [
        "Погибели предшествует гордость, и падению — надменность.",
        "Гнев губит и даже самых умных.",
        "Коварное сердце не найдет добра, и лукавый язык попадет в беду.",
        "Никогда не ссорься без веской причины.",
        "Подающий нищему сам не обеднеет.",
        "Душа ленивого человека желает, но напрасно.",
        "Никогда не замышляй против ближнего зла.",
        "От обилия мечтаний много лишних пустых слов.",
        "Глупый, когда он молчит, может иногда показаться мудрым.",
        "Страх не что иное, как отсутствие помощи от разума.",
        "От любого труда получишь прибыль, а от разговоров впустую только ущерб.",
        "Не дружи с гневливым и не общайся с человеком вспыльчивым.",
      ],
      [
        "Невозможно желать того, что до этого момента не было познано.",
        "Разве может богатство приносить настоящее счастье, если для получения богатства человеку приходится страдать?",
        "Мне часто приходилось жалеть о том, что я сказал, но я так редко раскаивался в том, что смолчал.",
        "Знание есть сила, знание есть ценность. Не зазорно добывать его из любого источника.",
        "Если ты не хочешь что-то иметь завтра, отбрось его сегодня, а если хочешь что-то иметь завтра, то приобретай это сегодня.",
        "Любить кого-то значит желать добра.",
        "Счастливому нужны друзья для того, чтобы творить для них добрые дела.",
        "Умным человеком можно считать лишь того, кто стремится к достижимой цели.",
      ],
      [
        "Глупо делать то же самое и ожидать другого результата.",
        "Нужно стараться стремиться не к успеху, а к тому, чтобы твоя жизнь имела смысл.",
        "Жизнь можно сравнить с ездой на велосипеде сохраняешь равновесие когда ты двигаешься.",
        "Если ты будешь думать так же ,как те, кто проблему создал ты ее никогда не решишь.",
        "В мире есть две бесконечные вещи. Это Вселенная и глупость. Насчет Вселенной полной уверенности нет.",
        "Смерть это старый долг, а долги нужно оплачивать.",
        "Гравитация не виновата в падении тех людей, которые теряют равновесие от любви.",
        "Для начала выучите правила игры, а затем наУчитесь играть лучше всех.",
        "Любопытство очень ценная штука важно не переставать задавать вопросы!",
      ],
    ]
    const rand4 = randomInteger(0, 2)
    const rand14 = randomInteger(0, kl4[rand4].length - 1)
    document.getElementById('apDiv57').innerHTML = kl4[rand4][rand14]

    // $.ajax(
    // 	{
    // 		url: "txt1.php",
    // 		cache: false,
    // 		type: "GET",
    // 		data: { 'id': kl },
    // 		eId: mm,
    // 		success: function (html) {
    // 			document.getElementById(this.eId).innerHTML = html;
    // 		}
    // 	});

    document.getElementById('apDiv58').innerHTML = ko4
    // document.getElementById('nd14').value = ko4;
    document.getElementById('rot').style.display = 'none'
    // document.getElementById('rot1').style.display = 'block'
  } // us1

  //todo use
  /*
        hoverr('#apDiv59', '#apDiv51', '#apDiv52')
        hoverr('#apDiv62', '#apDiv53', '#apDiv54')
        hoverr('#apDiv65', '#apDiv55', '#apDiv56')
        hoverr('#apDiv67', '#apDiv57', '#apDiv58')
  */

} // func tx1

