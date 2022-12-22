const validator = {
    name: {
        regEx: /^([a-zA-Z]+\s)*[a-zA-Z]+$/,
        error: 'Only aplhabetic letters are allowed with spaces in between.',
    },
    email: {
        regEx: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        error: 'Invalid email address.',
    },
    phone: {
        regEx: /'1?\s*\W?\s*([2-9][0-8][0-9])\s*\W?\s*([2-9][0-9]{2})\s*\W?\s*([0-9]{4})(\se?x?t?(\d*))?'/,
        // regEx: /^\d+$/,
        error: 'Enter a valid phone number without a + sign.',
    },
    password: {
        regEx: /(?=^.{8,16}$)(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        error:
            'Password minimum length 8 (with uppercase, a number and special character)',
    },
    numeric: {
        regEx: /^\d+$/,
        error: 'Only numeric digits allowed.',
    },
};

export default validator;
