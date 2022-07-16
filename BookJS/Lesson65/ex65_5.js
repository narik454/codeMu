class Validator {
    isMail(str) {
        let regMail = /^[A-z\d]+\W?[a-z]+@[A-z]+\.[a-z]{2,3}$/;
        return regMail.test(str);
    }

    isDomain(str) {
        let regDomain = /^[a-z\d]+\.[a-z]{2,3}$/;
        return regDomain.test(str);
    }

    isDate(str) {
        let regDate = /(^[0-2][1-9]|3[01])\.(1[0-2]|0[1-9])\.([1-2]\d{3}$)/;
        return regDate.test(str);
    }

    isPhone(str) {
        let regPhone = /^(\+7|8)[ (-]?\d{3}[ )-]?\d{3}[ -]?\d{2}[ -]\d{2}$/;
        return regPhone.test(str);
    }
}

let validator = new Validator();

console.log(validator.isMail('ds_23-gs@d_sd.ffd'));
console.log(validator.isDomain('13254.sd'));
console.log(validator.isDate('01.01.1999'));
console.log(validator.isPhone('8999 999 99 99'));