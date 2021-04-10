import app from "./app"
import login from "./endpoints/login"
import myProfile from "./endpoints/myProfile"
import otherProfile from "./endpoints/otherProfile"
import signup from "./endpoints/signup"
import createRecipe from "./endpoints/createRecipe"
import getRecipe from "./endpoints/getRecipe"

app.post('/signup', signup)
app.post('/login', login)
app.get('/user/profile', myProfile)
app.get('/user/:id', otherProfile)
app.post('/recipe', createRecipe)
app.get('/recipe/:id', getRecipe)