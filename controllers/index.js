module.exports = {
    helloWorld: async(req, res, next) => {
        res.status(200).send({'status':200,'message':'HELLO WORLD!'})
    }
}