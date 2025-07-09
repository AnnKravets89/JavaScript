fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(recipesObjects => {
        console.log(recipesObjects);
        let {recipes} = recipesObjects;

        for (let recipe of recipes) {
            let recipeCard = document.createElement('div');
            recipeCard.classList.add('recipe-card');

                let containerDiv = document.createElement("div");
                containerDiv.classList.add("recipe-block");

                    let imgDiv = document.createElement('div');
                    imgDiv.classList.add('img-block');

                        let img = document.createElement("img");
                        img.src = recipe.image;

                    let titleDiv = document.createElement("div");
                    titleDiv.classList.add('title-block');

                        let title = document.createElement("div");
                        title.classList.add('title');

                            let h2 = document.createElement("h2");
                            h2.innerText = `${recipe.id}. ${recipe.name}`;

                            let ratingItem = document.createElement("p");
                            ratingItem.innerText = `rating: ${recipe.rating}`;

                        let infoDiv = document.createElement("div");
                        infoDiv.classList.add('info-block');

                            let mealDiv = document.createElement("div");
                                for(let meal of recipe['mealType']) {
                                    let pMeal = document.createElement("p");
                                    pMeal.innerText = meal;
                                    mealDiv.appendChild(pMeal);
                                }

                            let cuisineItem = document.createElement("p");
                            cuisineItem.innerText = `Cuisine: ${recipe.cuisine}`;

                            let difItem = document.createElement("p");
                            difItem.innerText = `Difficulty: ${recipe.difficulty}`;

                        let ingredientDiv = document.createElement("div");
                        ingredientDiv.classList.add('ingredient-block');

                            let ingredientTitle = document.createElement("h3");
                            ingredientTitle.innerText = 'Ingredients';

                            let ul = document.createElement("ul");
                                for(let ingredient of recipe['ingredients']) {
                                    let li = document.createElement("li");
                                    li.innerText = ingredient;
                                    ul.appendChild(li);
                                }

                        let cookDiv = document.createElement("div");
                        cookDiv.classList.add('cook-block');

                            let instructionDiv = document.createElement("div");
                            instructionDiv.classList.add('instruction-block');

                                let cookSteps = document.createElement("h3");
                                cookSteps.innerText = 'Cooking instructions';

                                    let ol = document.createElement("ol");
                                    for(let i = 0; i < recipe['instructions'].length; i++) {
                                        let li = document.createElement("li");
                                        li.innerText = recipe['instructions'][i];
                                        ol.appendChild(li);
                                    }

                let cookItemsDiv = document.createElement("div");
                cookItemsDiv.classList.add('cook-items-block');

                    let cookTimeDiv = document.createElement("div");
                    cookTimeDiv.classList.add('cook-time');

                        let servCount = document.createElement("p");
                        servCount.innerText = `Servings: ${recipe.servings}`;

                        let prepTime = document.createElement("p");
                        prepTime.innerText = `Preparation time: ${recipe.prepTimeMinutes} minutes`;

                        let cookTime = document.createElement("p");
                        cookTime.innerText = `Cooking time: ${recipe.cookTimeMinutes} minutes`;

                        let calories = document.createElement("p");
                        calories.innerText = `Calories: ${recipe.caloriesPerServing} kcal`;

                    let reviewDiv = document.createElement("div");
                    reviewDiv.classList.add('review');

                        let revCount = document.createElement("p");
                        revCount.innerText = `Review Count: ${recipe.reviewCount}`;

                        let tagsDiv = document.createElement("div");
                        tagsDiv.innerText = 'Tags:';
                            for(let tag of recipe['tags']) {
                                let pTag = document.createElement('p');
                                pTag.innerText = tag;
                                tagsDiv.appendChild(pTag);
                            }

                                                            cookTimeDiv.append(servCount, prepTime, cookTime, calories)
                                                        cookItemsDiv.append(reviewDiv, cookTimeDiv);
                                                    instructionDiv.append(cookSteps, ol);
                                                cookDiv.append(ingredientDiv, instructionDiv);
                                            ingredientDiv.append(ingredientTitle, ul);
                                        infoDiv.append(mealDiv, cuisineItem, difItem);
                                    title.append(h2, ratingItem);
                                titleDiv.append(title, infoDiv, cookDiv);
                            reviewDiv.append(revCount, tagsDiv);
                        imgDiv.appendChild(img);
                    containerDiv.append(imgDiv, titleDiv);
                recipeCard.append(containerDiv, cookItemsDiv);
            document.body.appendChild(recipeCard);
        }
    });
