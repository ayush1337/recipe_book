import React from 'react';
import parse from 'html-react-parser';
import VegCheck from '../components/VegCheck';
import { Link } from 'react-router-dom';

const Recipe = () => {
  const {
    title,
    readyInMinutes,
    servings,
    image,
    summary,
    instructions,
    vegetarian,
  } = {
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    veryHealthy: false,
    cheap: false,
    veryPopular: false,
    sustainable: false,
    lowFodmap: false,
    weightWatcherSmartPoints: 4,
    gaps: 'no',
    preparationMinutes: -1,
    cookingMinutes: -1,
    aggregateLikes: 2,
    healthScore: 1,
    creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
    license: 'CC BY 3.0',
    sourceName: 'Foodista',
    pricePerServing: 113.96,
    extendedIngredients: [
      {
        id: 1002050,
        aisle: 'Baking',
        image: 'extract.png',
        consistency: 'LIQUID',
        name: 'almond extract',
        nameClean: 'almond extract',
        original: '1/2 teaspoon almond extract',
        originalName: 'almond extract',
        amount: 0.5,
        unit: 'teaspoon',
        meta: [],
        measures: {
          us: {
            amount: 0.5,
            unitShort: 'tsps',
            unitLong: 'teaspoons',
          },
          metric: {
            amount: 0.5,
            unitShort: 'tsps',
            unitLong: 'teaspoons',
          },
        },
      },
      {
        id: 12061,
        aisle: 'Nuts',
        image: 'almonds.jpg',
        consistency: 'SOLID',
        name: 'almonds',
        nameClean: 'almonds',
        original: 'cups toasted almonds, chopped',
        originalName: 'toasted almonds, chopped',
        amount: 1.0,
        unit: 'cups',
        meta: ['toasted', 'chopped'],
        measures: {
          us: {
            amount: 1.0,
            unitShort: 'cup',
            unitLong: 'cup',
          },
          metric: {
            amount: 143.0,
            unitShort: 'g',
            unitLong: 'grams',
          },
        },
      },
      {
        id: 19903,
        aisle: 'Sweet Snacks',
        image: 'dark-chocolate-pieces.jpg',
        consistency: 'SOLID',
        name: 'bittersweet chocolate',
        nameClean: 'semisweet chocolate',
        original: '1/4 cup bittersweet chocolate, melted',
        originalName: 'bittersweet chocolate, melted',
        amount: 0.25,
        unit: 'cup',
        meta: ['melted'],
        measures: {
          us: {
            amount: 0.25,
            unitShort: 'cups',
            unitLong: 'cups',
          },
          metric: {
            amount: 43.75,
            unitShort: 'ml',
            unitLong: 'milliliters',
          },
        },
      },
      {
        id: 1001,
        aisle: 'Milk, Eggs, Other Dairy',
        image: 'butter-sliced.jpg',
        consistency: 'SOLID',
        name: 'butter',
        nameClean: 'butter',
        original: '5 tablespoons butter',
        originalName: 'butter',
        amount: 5.0,
        unit: 'tablespoons',
        meta: [],
        measures: {
          us: {
            amount: 5.0,
            unitShort: 'Tbsps',
            unitLong: 'Tbsps',
          },
          metric: {
            amount: 5.0,
            unitShort: 'Tbsps',
            unitLong: 'Tbsps',
          },
        },
      },
      {
        id: 1082047,
        aisle: 'Spices and Seasonings',
        image: 'salt.jpg',
        consistency: 'SOLID',
        name: 'kosher salt',
        nameClean: 'kosher salt',
        original: 'Kosher salt',
        originalName: 'Kosher salt',
        amount: 24.0,
        unit: 'servings',
        meta: [],
        measures: {
          us: {
            amount: 24.0,
            unitShort: 'servings',
            unitLong: 'servings',
          },
          metric: {
            amount: 24.0,
            unitShort: 'servings',
            unitLong: 'servings',
          },
        },
      },
      {
        id: 8065,
        aisle: 'Cereal',
        image: 'rice-crispy-cereal.png',
        consistency: 'SOLID',
        name: 'rice krispies',
        nameClean: 'rice krispies cereal',
        original: '5 cups Rice Krispies',
        originalName: 'Rice Krispies',
        amount: 5.0,
        unit: 'cups',
        meta: [],
        measures: {
          us: {
            amount: 5.0,
            unitShort: 'cups',
            unitLong: 'cups',
          },
          metric: {
            amount: 140.0,
            unitShort: 'g',
            unitLong: 'grams',
          },
        },
      },
      {
        id: 1052050,
        aisle: 'Baking',
        image: 'vanilla.jpg',
        consistency: 'SOLID',
        name: 'chocolate vanilla swirl marshmallows',
        nameClean: 'vanilla',
        original: '10 ounces chocolate vanilla swirl marshmallows',
        originalName: 'chocolate vanilla swirl marshmallows',
        amount: 10.0,
        unit: 'ounces',
        meta: [],
        measures: {
          us: {
            amount: 10.0,
            unitShort: 'oz',
            unitLong: 'ounces',
          },
          metric: {
            amount: 283.495,
            unitShort: 'g',
            unitLong: 'grams',
          },
        },
      },
      {
        id: 2050,
        aisle: 'Baking',
        image: 'vanilla-extract.jpg',
        consistency: 'LIQUID',
        name: 'vanilla extract',
        nameClean: 'vanilla extract',
        original: '1/2 teaspoon vanilla extract',
        originalName: 'vanilla extract',
        amount: 0.5,
        unit: 'teaspoon',
        meta: [],
        measures: {
          us: {
            amount: 0.5,
            unitShort: 'tsps',
            unitLong: 'teaspoons',
          },
          metric: {
            amount: 0.5,
            unitShort: 'tsps',
            unitLong: 'teaspoons',
          },
        },
      },
    ],
    id: 658727,
    title: 'Rocky Road Rice Krispie Treats',
    readyInMinutes: 45,
    servings: 24,
    sourceUrl:
      'http://www.foodista.com/recipe/B6CZP8TL/rocky-road-rice-krispie-treats',
    image: 'https://spoonacular.com/recipeImages/658727-556x370.jpg',
    imageType: 'jpg',
    taste: {
      sweetness: 85.8,
      saltiness: 34.77,
      sourness: 0.0,
      bitterness: 0.0,
      savoriness: 0.0,
      fattiness: 100.0,
      spiciness: 0.0,
    },
    summary:
      'Rocky Road Rice Krispie Treats requires around <b>45 minutes</b> from start to finish. One portion of this dish contains roughly <b>2g of protein</b>, <b>6g of fat</b>, and a total of <b>123 calories</b>. This recipe serves 24 and costs $1.14 per serving. 2 people were glad they tried this recipe. A mixture of butter, vanillan extract, chocolate vanilla swirl marshmallows, and a handful of other ingredients are all it takes to make this recipe so yummy. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 22%</b>. This score is not so outstanding. Try <a href="https://spoonacular.com/recipes/nutella-rocky-road-rice-krispie-treats-501017">Nutella Rocky Road Rice Krispie Treats</a>, <a href="https://spoonacular.com/recipes/rocky-road-rice-krispies-treats-507964">Rocky Road Rice Krispies Treats</a>, and <a href="https://spoonacular.com/recipes/coconut-rocky-road-treats-430044">Coconut Rocky Road Treats</a> for similar recipes.',
    cuisines: [],
    dishTypes: [],
    diets: [],
    occasions: [],
    winePairing: {
      pairedWines: ['cream sherry', 'port wine', 'moscato dasti'],
      pairingText:
        "Cream Sherry, Port Wine, and Moscato d'Asti are my top picks for Rice Crispy Treats. A common wine pairing rule is to make sure your wine is sweeter than your food. Delicate desserts go well with Moscato d'Asti, nutty desserts with cream sherry, and caramel or chocolate desserts pair well with port. The NV Johnson Estate Cream Sherry with a 5 out of 5 star rating seems like a good match. It costs about 19 dollars per bottle.",
      productMatches: [
        {
          id: 430626,
          title: 'NV Johnson Estate Cream Sherry',
          description:
            'Very aromatic with notes of hazelnut, vanilla, and a touch of oak followed by sweet raisins and a touch of yeast. Clean lasting finish. Good now but will reward those allow it to age"". A favorite pre-prandial beverage. Consider it with nuts before dinner as an aperitif, or after dinner with dessert, especially chocolates and fruit-based desserts. Also wonderful on cold afternoons, served with biscotti to dip in ""Italian-style"". "',
          price: '$19.49',
          imageUrl: 'https://spoonacular.com/productImages/430626-312x231.jpg',
          averageRating: 1.0,
          ratingCount: 2.0,
          score: 0.8571,
          link: 'https://www.amazon.com/Johnson-Estate-Cream-Sherry-750/dp/B00D3GQSRW?tag=spoonacular-20',
        },
      ],
    },
    instructions:
      '<ol><li>In a large soup pot, melt butter and marshmallows, stirring to combine.</li><li>Add extracts and stir.</li><li>Add cereal and 1 cup of almonds and mix well.</li><li>Spread into a 913 dish sprayed with baking spray. Flatten until smooth and even on top.</li><li>Drizzle melted chocolate on top and sprinkle over last 1/3 cup of almonds.</li><li>Sprinkle salt on top (about 1/2 teaspoon).</li><li>Allow to cool completely before cutting into squares.  (Putting them in the fridge for an hour or so once theyve reached room temp is the easiest way to cut into them.)</li></ol>',
    analyzedInstructions: [
      {
        name: '',
        steps: [
          {
            number: 1,
            step: 'In a large soup pot, melt butter and marshmallows, stirring to combine.',
            ingredients: [
              {
                id: 19116,
                name: 'marshmallows',
                localizedName: 'marshmallows',
                image: 'normal-marshmallows.jpg',
              },
              {
                id: 1001,
                name: 'butter',
                localizedName: 'butter',
                image: 'butter-sliced.jpg',
              },
              {
                id: 0,
                name: 'soup',
                localizedName: 'soup',
                image: '',
              },
            ],
            equipment: [
              {
                id: 404752,
                name: 'pot',
                localizedName: 'pot',
                image: 'stock-pot.jpg',
              },
            ],
          },
          {
            number: 2,
            step: 'Add extracts and stir.',
            ingredients: [],
            equipment: [],
          },
          {
            number: 3,
            step: 'Add cereal and 1 cup of almonds and mix well.',
            ingredients: [
              {
                id: 12061,
                name: 'almonds',
                localizedName: 'almonds',
                image: 'almonds.jpg',
              },
              {
                id: 8029,
                name: 'cereal',
                localizedName: 'cereal',
                image: 'rice-crispy-cereal.png',
              },
            ],
            equipment: [],
          },
          {
            number: 4,
            step: 'Spread into a 913 dish sprayed with baking spray. Flatten until smooth and even on top.',
            ingredients: [
              {
                id: 0,
                name: 'baking spray',
                localizedName: 'baking spray',
                image: 'vegetable-oil.jpg',
              },
              {
                id: 0,
                name: 'spread',
                localizedName: 'spread',
                image: '',
              },
            ],
            equipment: [],
          },
          {
            number: 5,
            step: 'Drizzle melted chocolate on top and sprinkle over last 1/3 cup of almonds.',
            ingredients: [
              {
                id: 19081,
                name: 'chocolate',
                localizedName: 'chocolate',
                image: 'milk-chocolate.jpg',
              },
              {
                id: 12061,
                name: 'almonds',
                localizedName: 'almonds',
                image: 'almonds.jpg',
              },
            ],
            equipment: [],
          },
          {
            number: 6,
            step: 'Sprinkle salt on top (about 1/2 teaspoon).Allow to cool completely before cutting into squares.  (Putting them in the fridge for an hour or so once theyve reached room temp is the easiest way to cut into them.)',
            ingredients: [
              {
                id: 2047,
                name: 'salt',
                localizedName: 'salt',
                image: 'salt.jpg',
              },
            ],
            equipment: [],
          },
        ],
      },
    ],
    originalId: null,
    spoonacularScore: 27.461475372314453,
    spoonacularSourceUrl:
      'https://spoonacular.com/rocky-road-rice-krispie-treats-658727',
  };
  return (
    <>
      <Link
        to="/"
        className="flex items-center gap-1 text-orange-600 font-semibold pb-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
          />
        </svg>
        back
      </Link>
      <div className="w-full bg-white shadow p-4 rounded grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="px-2 py-1 rounded text-opacity-85  text-white bg-gradient-to-r from-amber-500 to-orange-500 font-medium text-sm">
              Dish Name
            </h1>
            <h2 className=" font-semibold text-2xl px-2">{title}</h2>
          </div>
          <div className="flex gap-2 text-xs px-2 flex-col items-start md:flex-row">
            <p>Preparation Time: {readyInMinutes} mins</p>
            <p>Servings: {servings}</p>
            <VegCheck vegetarian={vegetarian} />
          </div>
          <div className="md:hidden overflow-hidden rounded ">
            <img src={image} alt={title} className="w-full" />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="px-2 py-1 rounded text-opacity-85 text-sm text-white bg-gradient-to-r from-amber-500 to-orange-500 font-medium">
              Summary
            </h1>
            <p className="text-sm px-2">{parse(summary)}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="px-2 py-1 rounded text-opacity-85 text-sm text-white bg-gradient-to-r from-amber-500 to-orange-500 font-medium">
              Instructions
            </h1>
            <p className="instruction text-sm px-2">{parse(instructions)}</p>
          </div>
        </div>
        <div className="hidden md:block rounded overflow-hidden self-start">
          <img src={image} alt={title} className="w-full" />
        </div>
      </div>
    </>
  );
};

export default Recipe;
