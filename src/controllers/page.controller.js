const Page = require('../models/page.model')

//Simple version, without validation or sanitation
// exports.test = (req, res) => {
//     res.send('Greetings from the Test controller!')
// }

exports.page_details = (req, res) => {
    Page.findById(req.params.id, (err, page) => {
        if (err) return next(err);
        res.send(page)
    })
};

exports.page_create = (req, res) => {
    let page = new Page(
        {
            title: req.body.title,
            description: req.body.description
        }
    )

    page.save((err) => {
        if (err) {
            return next(err)
        }
        res.send('Page created successfully')
    })
}

exports.page_update = (req, res) => {
    Page.findByIdAndUpdate(req.params.id, {$set: req.body},
        (err, page) => {
            if (err) {
                return next(err)
            }
            res.send('Page updated')
        }
    )
}

exports.page_delete = (req, res) => {
    Page.findByIdAndRemove(req.params.id, (err) => {
        if (err) {
            return next(err)
        }
        res.send('Deleted successfully')
    })
}