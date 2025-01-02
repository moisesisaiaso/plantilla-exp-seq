const errorHandler = (err, req, res, next) => {
    if (err.name === "SequelizeValidationError") {
        //Error que ocurre cuando se produce una validacion fallida en uno o mas campos de un modelo
        const errObj = {};
        err.errors.map((err) => {
            errObj[err.path] = err.message;
        });

        return res.status(400).json(errObj);
    }
    if (err.name === "SequelizeForeignKeyConstrainError") {
        // Error que ocurre cuando hay una violacion de una restrincion de clave foranea en sequelize.
        return res.status(400).json({
            message: err.message,
            error: err.parent.detail,
        });
    }
    if (err.name === "SequelizeDatabaseError") {
        // Error quye ocurre durante la ejecucion de una consulta SQL
        return res.status(400).json({
            message: err.message,
        });
    }
    return res.status(500).json({
        message: err.message,
        error: err,
    });
};

module.exports = errorHandler;
