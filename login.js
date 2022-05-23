$(document).ready(function () {
    $('#usn').keyup(function () {
        un_check();
    });
    function un_check() {
        var un_val = $('#usn').val();

        if (un_val.trim() == "") {
            $('#usninvalid').show();
            $('#usninvalid').html('This Fiesld Cannot be Empty');
            $('#usninvalid').focus();
            $('#usninvalid').css("color", "red");
            un_error = false;
            return false;
        } else {
            $('#usninvalid').hide();
        }
        if ((un_val.length < 3) || (un_val.length > 15)) {
            $('#usninvalid').show();
            $('#usninvalid').focus();
            $('#usninvalid').html('Username Must be Between 3-20 Characters');
            $('#usninvalid').css("color", "red");
            un_error = false;
            return false;
        } else {
            $('#usninvalid').hide();
        }
    }
    $('#pasl').keyup(function () {
        pas_check();
    });
    function pas_check() {
        var pas_val = $('#pasl').val();
        if (pas_val.trim() == "") {
            $('#paslinvalid').show();
            $('#paslinvalid').html('Password Cannot be Empty');
            $('#paslinvalid').focus();
            $('#paslinvalid').css("color", "red");
            pas_error = false;
            return false;
        } else {
            $('#paslinvalid').hide();
        }

        if ((pas_val.length < 3) || (pas_val.length > 20)) {
            $('#paslinvalid').show();
            $('#paslinvalid').focus();
            $('#paslinvalid').html('Password Must be Between 3-20 Characters');
            $('#paslinvalid').css("color", "red");
            pas_error = false;
            return false;
        } else {
            $('#paslinvalid').hide();
        }

    }
    $('#loginbtn').click(function () {

        pas_error = true;
        un_error = true;

        un_check();
        pas_check();

        if ((pas_check == true) && (un_check == true)) {
            $form.submit();
            return true;
        }
        else {
            return false;
        }
    });

});