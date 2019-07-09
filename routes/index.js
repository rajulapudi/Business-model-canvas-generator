var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

/* GET home page. */
router.use(express.static('views'));

router.post('/', (req, res) => {
    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;
    var phone = req.body.phone;
    var kp1name = req.body.kp1name;
    var kp1purpose = req.body.kp1purpose;
    var kp2name = req.body.kp2name;
    var kp2purpose = req.body.kp2purpose;
    var KA1 = req.body.KA1;
    var KA2 = req.body.KA2;
    var KA3 = req.body.KA3;
    var KA4 = req.body.KA4;
    var KA5 = req.body.KA5;
    var KR1 = req.body.KR1;
    var KR2 = req.body.KR2;
    var KR3 = req.body.KR3;
    var KR4 = req.body.KR4;
    var KR5 = req.body.KR5;
    var vptextarea = req.body.vptextarea;
    var CRH1 = req.body.CRH1;
    var CRH2 = req.body.CRH2;
    var CRH3 = req.body.CRH3;
    var CH1 = req.body.CH1;
    var CH2 = req.body.CH2;
    var CH3 = req.body.CH3;
    var CSH1 = req.body.CSH1;
    var CSH2 = req.body.CSH2;
    var CSH3 = req.body.CSH3;
    var CS1 = req.body.CS1;
    var CS2 = req.body.CS2;
    var CS3 = req.body.CS3;
    var revStream1 = req.body.revStream1;
    var revPercentage1 = req.body.revPercentage1;
    var revStream2 = req.body.revStream2;
    var revPercentage2 = req.body.revPercentage2;
    var revStream3 = req.body.revStream3;
    var revPercentage3 = req.body.revPercentage3;

    res.render('bmc.ejs', {
        fname: fname,
        lname: lname,
        email: email,
        phone: phone,
        kp1name: kp1name,
        kp1purpose: kp1purpose,
        kp2name: kp2name,
        kp2purpose: kp2purpose,
        KA1: KA1,
        KA2: KA2,
        KA3: KA3,
        KA4: KA4,
        KA5: KA5,
        KR1: KR1,
        KR2: KR2,
        KR3: KR3,
        KR4: KR4,
        KR5: KR5,
        vptextarea: vptextarea,
        CRH1: CRH1,
        CRH2: CRH2,
        CRH3: CRH3,
        CH1: CH1,
        CH2: CH2,
        CH3: CH3,
        CSH1: CSH1,
        CSH2: CSH2,
        CSH3: CSH3,
        CS1: CS1,
        CS2: CS2,
        CS3: CS3,
        revStream1: revStream1,
        revPercentage1: revPercentage1,
        revStream2: revStream2,
        revPercentage2: revPercentage2,
        revStream3: revStream3,
        revPercentage3: revPercentage3
    })
})

module.exports = router;