// const mongoose = require("mongoose")
// const uri = "mongodb+srv://vaishnav790779:vaishnav9892@cluster0.rirgpaf.mongodb.net/?appName=Cluster0"


// const connection = async () => {

//     try {
//         const connect = await mongoose.connect(uri)
//         console.log("database connected successfully");
//     } catch (error) {
//         console.log("vyshnav chette :",error);
//         process.exit()

//     }

//     // const connect = await mongoose.connect(uri)


// }

// module.exports = connection


const mongoose = require("mongoose")
const uri = "mongodb+srv://vaishnav790779:vaishnav9892@cluster0.rirgpaf.mongodb.net/?appName=Cluster0"

const connectiion = async () => {
    try {
        const connect = await mongoose.connect(uri)
        console.log("connection successfully");

    } catch (error) {
        console.log("please wait some times", error);
        process.exit()

    }
}

module.exports = connectiion