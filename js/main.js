
$(document).ready(function() {
    $('#form').submit(function() {
        if (document.form.name.value == '' || document.form.phone.value == '') {
            valid = false;
            return valid;
        }
        $.ajax({
            type: "POST",
            url: "mail/mail.php",
            data: $(this).serialize()
        }).done(function() {
            alert("Дякую за повідомлення! Наш менеджер скоро зв'яжеться з вами.");
        });
        return false;
    });

    $('#form-1').submit(function() {
        if (document.getElementById('phone-input').value == '') {
            valid = false;
            return valid;
        }
        $.ajax({
            type: "POST",
            url: "mail/mail-2.php", // Создайте аналогичный файл для второй формы
            data: $(this).serialize()
        }).done(function() {
            alert("Дякую за заявку!");
        });
        return false;
    });
});
