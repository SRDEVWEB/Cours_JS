function bonjour()
{
    let div_a_écrire = document.getElementById('bienvenue');
    div_a_écrire.innerHTML = "Bonjour et bienvenue,";

    let numberOfSeasons = 6;
    document.getElementById('saisons').innerHTML= numberOfSeasons;

    let numberOfEpisodes=12;
    document.getElementById('episodes').innerHTML= numberOfEpisodes;
}