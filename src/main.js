function findNextArticleToFill(packageWeight, categorizedArticles) {
    var nextArticleWeight = 10 - packageWeight;

    while (categorizedArticles[nextArticleWeight] <= 0 && nextArticleWeight > 0) {
        nextArticleWeight --;
    }

    return nextArticleWeight;
}
function repack(categorizedArticles) {
    var packages = [];
    for(var articleWeight = 1; articleWeight<categorizedArticles.length; articleWeight++) {
        while(categorizedArticles[articleWeight] > 0) {
            var packageString = '';
            var packageWeight = articleWeight;

            packageString += articleWeight;
            categorizedArticles[articleWeight] --; // decrement the number in categorizedArticles

            while (packageWeight < 10) {
                var nextArticleWeight = findNextArticleToFill(packageWeight, categorizedArticles);
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

function parse(input) {
    var toReturn = [0,0,0,0,0,0,0,0,0,0];
    for (var i = 0; i < input.length; i++) {
        var packageWeight = parseInt(input[i]);
        toReturn[packageWeight]++;
    }
    return toReturn;
}

module.exports.execute = function (input) {
    var categorizedArticles = parse(input);
    var repackedPackages = repack(categorizedArticles);
    return repackedPackages.join('/');
};
