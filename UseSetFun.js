function SetRetFunction(){
const countries = new Set();
countries.add('India');
countries.add('Nepal');
countries.add('Sri Lanka');
countries.add('Pakistan');

return countries;

}

var myCountries = SetRetFunction();
var itr = myCountries.values();
for (var i = 0; i < myCountries.size; i++) {
    console.log(itr.next().value);
}