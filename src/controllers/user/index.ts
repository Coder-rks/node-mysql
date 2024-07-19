const models = require('../../models');

module.exports.signup = (req:any, res:any) => {
    //get the body
    //req.body.email
    //req.body.password

    models.user.create({
        email: req.body.email,
        password: req.body.password
    }).then((resp: any) => {
        console.log(resp.dataValues);
    });

    res.status(200).json({message: 'signed up successfully'});
}

module.exports.signin = (req: any, res: any) => {
    res.status(200).json({message: 'signed in successfully'});
}