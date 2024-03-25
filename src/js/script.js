
const hamburger = document.querySelector('.hamburger'),
  menu = document.querySelector('.menu'),
  closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
  menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__lines-top-measure'),
  lines = document.querySelectorAll('.skills__lines-orange');

counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});




(function ($) {
  $(function () {

    $('.modal__close').on('click', function () {
      $('.overlay, .modal').fadeOut('slow');
    });

    // form validation setings

    function validateForms(form) {
      $(form).validate({
        rules: {
          name: {
            required: true,
            minlength: 2
          },
          email: {
            required: true,
            email: true
          },
          textarea: {
            required: true,
            minlength: 5
          },
          agree: {
            required: true
          }
        },
        messages: {
          name: {
            required: "Пожалуйста введите своё имя",
            minlength: jQuery.validator.format("Введите {0} символа")
          },
          email: {
            required: "Пожалуйста введите свою почту",
            email: "Неправильно введен адрес почты"
          },
          textarea: {
            required: "Пожалуйста напишите сообщение",
            minlength: jQuery.validator.format("Хотя бы {0} символов")
          }
        }
      });
    };

    validateForms('form');





    $('form').submit(function (e) {
      e.preventDefault();

      if (!$(this).valid()) {
        return;
      };

      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
      }).done(function () {
        $(this).find("input").val("");
        $('form').trigger('reset');

        $('.overlay, #thanks').fadeIn('slow');
      });
      return false;
    });


  });
})(jQuery);