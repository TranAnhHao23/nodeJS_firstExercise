const newsRoute = require('./news.route')
const siteRoute = require('./site.route')


function route(app) {
    app.use('/news', newsRoute);



    // app.get('/news', (req, res) => {
    //     res.render('news');
    // });

    // app.get('/search', (req, res) => {
    //     console.log(req.query)
    //     res.render('search');
    // });
    //
    // app.post('/search',(req, res) =>{
    //     // console.log(req.body)
    //
    //     res.send("hello")
    // })

    // Cho vào dưới cùng
    app.use('/', siteRoute);

}

module.exports = route;
