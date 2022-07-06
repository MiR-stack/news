// home page

const categories = [
  "food",
  "book",
  "health",
  "nature",
  "travel",
  "magazine",
  "sports",
  "tech",
];

async function homePage(req, res) {
  const user = req.body.user;
  const error = req.body.error;

  res.render("pages/homePage", { categories, user, error });
}

// register page

function register(req, res) {
  const user = req.body.user;
  const error = req.query.error;

  if (user) return res.redirect("/");
  res.render("pages/registration", { error, user });
}

function login(req,res){
  const user = req.body.user;
  const error = req.query.error;

  if (user) return res.redirect("/");
  res.render("pages/login", { error, user });
}


// create post 

function createPost(req,res){
  const user = req.body.user;
  const error = req.query.error;

  if (!user) return res.redirect("/");
  res.render("pages/createPost", { error, user });
}

module.exports = { homePage, register,login,createPost };
