const mongoose = require('mongoose')
const mongoUrl = 'mongodb://127.0.0.1:27017/menu'

const connection = mongoose.createConnection(mongoUrl, () => {
    console.log('mongodb/menu connect')
});

module.exports = connection

// module.exports = app => {
//     main().catch( err => console.log(err) )

//     async function main(){
//         await mongoose.connect(mongoUrl, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         }, () => {
//             console.log('mongodb connect')
//         })
//     }
// }