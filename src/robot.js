const PACKAGE_MAXIMUM_WEIGHT = 10;

/**
 * Trouver prochain article à ajouter dans le carton.
 *
 * Complexité: o(1)
 *
 * @param packageWeight
 * @param categorizedArticles
 * @returns {number}
 */
function findNextArticleToFill(packageWeight, categorizedArticles) {
    let nextArticleWeight = PACKAGE_MAXIMUM_WEIGHT - packageWeight; // poids idéal pour l'article prochain

    while (categorizedArticles[nextArticleWeight] <= 0 && nextArticleWeight > 0) {
        nextArticleWeight --;
    }

    return nextArticleWeight;
}

/**
 * packager les articles. pour chaque poids, chercher le prochain article.
 *
 * Complexité: o(n)
 *
 * @param categorizedArticles
 * @returns {Array}
 */
function pack(categorizedArticles) {
    const packages = [];
    for(let articleWeight = categorizedArticles.length - 1; articleWeight >= 1; articleWeight--) { // complexiteé o(1)
        while(categorizedArticles[articleWeight] > 0) { // complexité en o(n)
            let packageString = '';
            let packageWeight = articleWeight;

            packageString += articleWeight;
            categorizedArticles[articleWeight] --; // décrémenter le nombre d'article

            while (packageWeight < PACKAGE_MAXIMUM_WEIGHT) {
                const nextArticleWeight = findNextArticleToFill(packageWeight, categorizedArticles);
                if(nextArticleWeight > 0) {
                    categorizedArticles[nextArticleWeight] --;
                    packageWeight += nextArticleWeight;
                    packageString += nextArticleWeight;
                } else {
                    break;
                }
            }

            packages.push(packageString);
        }
    }
    return packages;
}


/**
 * Categoriser les poids d'article en poids. Compter le nombre d'article suivant le poids.
 *
 * @param inputArticles
 * @returns {Array}
 */
function categorizeArticles(inputArticles) {
    const categorizedArticles = [];
    let i;
    for(i = 0; i < PACKAGE_MAXIMUM_WEIGHT; i ++) {
        categorizedArticles[i] = 0;
    }
    for (i = 0; i < inputArticles.length; i++) {
        const packageWeight = parseInt(inputArticles[i]);
        categorizedArticles[packageWeight]++;
    }
    return categorizedArticles;
}

/**
 * Categoriser les articles en poids d'abord, les stocker dans un map, afin de parcourir les donnees plus rapidement.
 *
 * Emballer les articles en parcourant le map créé auparavant.
 *
 * @param articlesWeightInput {string}
 * @returns {string}
 */
module.exports.pack = function (articlesWeightInput) {
    const categorizedArticles = categorizeArticles(articlesWeightInput);
    const packages = pack(categorizedArticles);
    return packages.join('/');
};
