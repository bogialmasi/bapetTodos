//tesztelve
module.exports = (objRep) => {
    const {myModel} = objRep;
    return (req, res, next) => {
        
        const oneTodo = myModel.findOne({id: req.params.tid})
        if( !oneTodo ){
            return res.status(404).json({Error: 'Nincs ilyen esemény'})
        }
        res.locals.todo = oneTodo;
        return next();
    }
}