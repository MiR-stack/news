
const categories = ['food','book','health','nature','travel','magazine','sports','tech']

function homePage (req,res){
    res.render('pages/homePage',{categories})
}

module.exports = {homePage}