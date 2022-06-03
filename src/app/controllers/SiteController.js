class SiteController {

    home(req, res) {
        res.render('home');
    }

    search(req, res) {
        res.render('search');
    }

    contact(req, res) {
        res.send('this is contact page')
    }
}


module.exports = new SiteController();
