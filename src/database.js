const mongoose = require ('mongoose')
mongoose.connect('mongodb://Localhost/mean-employees',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(db => console.log('DB Connected'))
.catch((err) => console.log(err))