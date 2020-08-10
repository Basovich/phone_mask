(function () {
    var phone_mask = function phone_mask(elems, mask) {
        var phoneInput = document.querySelectorAll(elems);
        var mask = mask;

        if (!phoneInput.length) return false;

        for (var i = 0; i < phoneInput.length; i++) {
            phoneInput[i].addEventListener('keydown', initMask);
        }

        function initMask(event) {
            if (!(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) { event.preventDefault() }

            if (/[0-9\+\ \-\(\)]/.test(event.key)) {
                var currentString = this.value;
                var currentLength = currentString.length;
                if (/[0-9]/.test(event.key)) {
                    if (mask[currentLength] == '_') {
                        this.value = currentString + event.key;
                    } else {
                        for (var i = currentLength; i < mask.length; i++) {
                            if (mask[i] == '_') {
                                this.value = currentString + event.key;
                                break;
                            }
                            currentString += mask[i];
                        }
                    }
                }
            }
        }

    }


    window.phone_mask = phone_mask;
})()





