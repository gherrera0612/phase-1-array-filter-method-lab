// Code your solution here
function findMatching(array, name) {
   return array.filter(
    (match) => match.toUpperCase() === name.toUpperCase()
   );
}
// returns all drivers that match the passed in name
//uppercase helps sense it is case sensitive

function fuzzyMatch(array, string) {
    return array.filter (
    (match) => match.toUpperCase().indexOf(string.toUpperCase()) === 0
    );
}

function matchName(array,matchedName){
    return array.filter((record) =>record.name === matchedName);
}