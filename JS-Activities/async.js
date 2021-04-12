async function getRecipeAW() {
    const IDs = await getIds()
    const recipe = await getRecipe(IDs[1])
    const publisher = await getPublisher(`Jonas`)
    return recipe.title 
}
function getIds() {
    var promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve([123, 456, 789])
        }, 1500);
    });
    return promise;
}
function getRecipe(id) {
    var promise = new Promise(function(resolve, reject) {
        setTimeout((id) => {
            const recipe = {title: `Tomato`, publisher: `Jonas`}
            resolve(recipe)
        }, 1500, id)
    });
    return promise;
}
function getPublisher(publisher) {
    var promise = new Promise(function(resolve, reject) {
        setTimeout((publisher) => {
            const recipe = {title: `Tomato`, publisher: `Jonas`}
            resolve(recipe)
        }, 1500, publisher)
    });
    return promise;
}
getRecipeAW().then(result => console.log(`${result} is the best ever`));