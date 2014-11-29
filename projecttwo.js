/**
 * Created by jamestench on 11/28/14.
 */

// returns if a number is only an number i.e. eliminates NaN and Infinity
function isActualNumber(num) {
    return typeof num === 'number' && isFinite(num);
}

// tests if x and y are both numbers then does an equality check if they are
// error if one or both are not numbers
function getRelationship(x, y) {
    if (isActualNumber(x) && isActualNumber(y)) {
        if (x > y) {
            return '>';
        }
        else if (y > x) {
            return '<';
        }
        else {
            return '=';
        }
    }
    // both are not numbers, display plural sentence
    else if (!isActualNumber(x)  && !isActualNumber(y)) {
        return "Can't compare relationships because " + x + " and " + y + " are not numbers";
    }
    // need to find what number is not the number, and display it and singular sentence
    else {
        var notTheNumber;
        if (!isActualNumber(x)) {
            notTheNumber = x;
        }
        else {
            notTheNumber = y;
        }
        return "Can't compare relationships because " + notTheNumber +" is not a number";
    }
};

// Try logging these functions to test your code!
//console.log(getRelationship(1,4));
//console.log(getRelationship(1,1));
//console.log(getRelationship("that",2));
//console.log(getRelationship("this"," something else"));
//console.log(getRelationship(3));
//console.log(getRelationship("hi"));
//console.log(getRelationship(NaN));
//console.log(getRelationship(NaN, undefined));


var moonWalkers = [
    "Neil Armstrong",
    "Buzz Aldrin",
    "Pete Conrad",
    "Alan Bean",
    "Alan Shepard",
    "Edgar Mitchell",
    "David Scott",
    "James Irwin",
    "John Young",
    "Charles Duke",
    "Eugene Cernan",
    "Harrison Schmitt"
];

// function that puts name in lastname, firstname format
// that was in format firstname lastname
function reverseName(n) {
    var fname = n.split(' ')[0];
    var lname = n.split(' ')[1];
    return lname + ', ' + fname;
}

// loop over each name and call the reverse name function
// return sorted array
function alphabetizer(names) {
    for (var name in names) {
        names[name] = reverseName(names[name]);
    }
    names.sort();
    return names;
}

// Try logging your results to test your code!
//console.log(alphabetizer(moonWalkers));

var psiResults;

psiResults = {
    "kind": "pagespeedonline#result",
    "id": "/speed/pagespeed",
    "responseCode": 200,
    "title": "PageSpeed Home",
    "score": 90,
    "pageStats": {
        "numberResources": 22,
        "numberHosts": 7,
        "totalRequestBytes": "2761",
        "numberStaticResources": 16,
        "htmlResponseBytes": "91981",
        "cssResponseBytes": "37728",
        "imageResponseBytes": "13909",
        "javascriptResponseBytes": "247214",
        "otherResponseBytes": "8804",
        "numberJsResources": 6,
        "numberCssResources": 2
    },
    "formattedResults": {
        "locale": "en_US",
        "ruleResults": {
            "AvoidBadRequests": {
                "localizedRuleName": "Avoid bad requests",
                "ruleImpact": 0.0
            },
        "MinifyJavaScript": {
            "localizedRuleName": "Minify JavaScript",
            "ruleImpact": 0.1417,
            "urlBlocks": [
                {
                    "header": {
                        "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
                        "args": [
                            {
                                "type": "BYTES",
                                "value": "1.3KiB"
                            },
                            {
                                "type": "INT_LITERAL",
                                "value": "0"
                            }
                        ]
                    },
                    "urls": [
                        {
                            "result": {
                                "format": "Minifying $1 could save $2 ($3% reduction).",
                                "args": [
                                    {
                                        "type": "URL",
                                        "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
                                    },
                                    {
                                        "type": "BYTES",
                                        "value": "717B"
                                    },
                                    {
                                        "type": "INT_LITERAL",
                                        "value": "1"
                                    }
                                ]
                            }
                        },
                {
                    "result": {
                        "format": "Minifying $1 could save $2 ($3% reduction).",
                        "args": [
                            {
                                "type": "URL",
                                "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
                            },
                            {
                                "type": "BYTES",
                                "value": "258B"
                            },
                            {
                                "type": "INT_LITERAL",
                                "value": "0"
                            }
                        ]
                    }
                }
            ]
        }
]
},
"SpriteImages": {
    "localizedRuleName": "Combine images into CSS sprites",
        "ruleImpact": 0.0
}
}
},
"version": {
    "major": 1,
        "minor": 11
}
}

// returns ruleResults object from result
function getRuleResults(result) {
    return result.formattedResults.ruleResults;
}

// returns pageStats object from result
function getPageStats(result) {
    return result.pageStats;
}


// Iterate through the localizedRuleNames in ruleResults and
// return an array of their strings.
// extract localRule names
function ruleList(result) {
    var ruleResults = getRuleResults(result);
    // array to hold the names
    var localRuleNames = [];
    for (var rule in ruleResults) {
        if (ruleResults.hasOwnProperty(rule)) {
            localRuleNames.push(ruleResults[rule].localizedRuleName);
        }
    }
    return localRuleNames;
}

// Iterate through pageStats in the psiResults object and
// return the total number of bytes to load the website.
// count all items in pageStats object that end in 'Bytes'
function totalBytes(result) {
    var pageStats = getPageStats(result);
    var total = 0;
    // loop over items, and if ends in Bytes add it to total
    for (var item in pageStats) {
        if (pageStats.hasOwnProperty(item)) {
            if (item.search('Bytes$') > 0)
                total += Number(pageStats[item]);
        }
    }
    return total;
}


console.log(ruleList(psiResults));