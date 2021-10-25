const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();

const { checkNumbersForPrime, checkOneNumberForPrime } = require("../handler/primeHandler");


router.get('/myapi/sum', 
check('nums')
    .isLength({ min: 1})
    .withMessage('at least one number should be entered (?nums=1)')
    .matches(/^[0-9,]+$/)
    .withMessage('only positive integer numbers are allowed'),
(req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    res.send(checkNumbersForPrime(req.query.nums));
});

router.get('/myapi/checkprime', 
check('number')
    .isLength({ min: 1})
    .withMessage('number should have at least one digit (?nums=1)')
    .matches(/^[0-9]+$/)
    .withMessage('only positive numbers allowed'),
(req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    res.send(checkOneNumberForPrime(req.query.number));
});

module.exports = router;