function bonjour()
{
    let div_a_écrire = document.getElementById('bienvenue');
    div_a_écrire.innerHTML = "Bonjour et bienvenue,";

    let numberOfSeasons = 6;
    document.getElementById('saisons').innerHTML= numberOfSeasons;

    let numberOfEpisodes=12;
    document.getElementById('episodes').innerHTML= numberOfEpisodes;

    let episodeTime =45;
    document.getElementById('tpsepisodes').innerHTML= episodeTime;

    let commercialTime =5;
    document.getElementById('tpspub').innerHTML= commercialTime;

    let totalShowTime = (numberOfSeasons*(numberOfEpisodes*(episodeTime+commercialTime)))/60;
    document.getElementById('tpstotal').innerHTML= totalShowTime;

    let paragraph = document.querySelector('.info');
    paragraph.innerText = `${numberOfSeasons} seasons, ${numberOfEpisodes} episodes per season
}