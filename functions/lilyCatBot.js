//ref : https://gripgermskiller.club/cat-means/
// Random
// meow meowwwwwwwww : normal 50%
// Mew Mew : normal 20%
// sssssssssss : angry 5%
// zzzzzzzz 5%
// empty 20%

class Preset {
    constructor(word, weight) {
        this.word = word;
        this.weight = weight;
    }
}

function getLilyWording() {
    var result = "";
    var sumPreset = 0;

    const presetList = [
        new Preset("meow", 50),
        new Preset("mew mew~", 20),
        new Preset("ssssssss", 5),
        new Preset("ZzzZzzzZ", 5),
        new Preset("", 20)
    ];

    const random = Math.floor(Math.random() * 100);

    for (let i = 0; i < presetList.length; i++) {
        sumPreset += presetList[i].weight
        if (random < sumPreset) {
            result = presetList[i].word;

            if (result == presetList[0].word) {
                const addLongMeow = random % 10;
                for (let j = 0; j < addLongMeow; j++) {
                   result += "w";
                }
              }

            console.log(result);
            break;
          }
      }

    return result;
}

module.exports = { getLilyWording };