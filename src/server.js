const app = require("./app");
const sequelize = require("./utils/connection");

const PORT = process.env.PORT || 8080;

const main = async () => {
    try {
        await sequelize.sync();
        console.log("Database connected");
        app.listen(PORT);
        console.log(`Server running on port: ${PORT}`);
        console.log(`http://localhost:${PORT}`);
    } catch (error) {
        console.log(error);
    }
};

main();
