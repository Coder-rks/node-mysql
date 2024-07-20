const authenticateSignup = (req: any, res: any, next: any) => {
    console.log('User authenticated');
    next();
}

const authenticateSignIn = (req: any, res: any, next: any) => {
    console.log('User authenticated');
    next();
}

module.exports = {
    authenticateSignup,
    authenticateSignIn
}