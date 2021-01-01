let quotes = [
    ['Réfléchissez constamment à la manière dont vous pourriez améliorer les choses et vous remettre en question.'],
    ['On dit bêtement que l’échec n’est pas une option à la NASA. Ici [chez SpaceX], l’échec est une option. Si vous n’échouez pas, c’est que vous n’innovez pas assez.'],
    ['Si vous vous levez le matin en vous disant que l’avenir sera meilleur, c’est une belle journée. Sinon, ce n’en est pas une.'],
    ['La patience est une vertu, et j’apprends la patience. C’est une leçon difficile.'],
    ['J’aimerais bien mourir sur Mars, mais pas pendant l’impact.'],
    ['Certaines personnes n’aiment pas le changement, mais il faut adopter le changement si la seule alternative est la catastrophe.'],
    ['Quand quelque chose a de l’importance, on le fait, même si les chances ne sont pas de notre côté.'],
    ['La vie est trop courte pour garder de vieilles rancunes.'],
    ['Je pense que les gens ordinaires peuvent choisir d’être extraordinaires.'],
    ['La persévérance est très importante. N’abandonnez jamais à moins d’y être obligé.'],
    ['Créer une entreprise, c’est comme préparer un gâteau : il faut doser chaque ingrédient dans les bonnes proportions.'],
    ['Si nous revenions quelques siècles en arrière, tout ce que nous considérons comme acquis aujourd’hui passerait pour de la magie : parler sur de longues distances, transmettre des images, voler, consulter d’énormes quantités de données…'],
    ['Quand henry Ford a inventé des voitures fiables et bon marché, les gens disaient : « Non, mon cheval fait très bien l’affaire ! » Il a fait un pari très risqué, et ça a fonctionné.'],
    ['J’avais le choix entre regarder les choses se produire, ou en être acteur.'],
    ['Beaucoup de choses sont improbables, seules quelques-unes sont impossibles.'],
    ["Si vous ne pouvez pas battre la machine, le mieux est d'en devenir une."],
    ["Avec l'intelligence artificielle, nous invoquons le démon."],
    ["Recherchez activement et écoutez attentivement les commentaires négatifs."],
    ["La vérité c'est que les prix du pétrole devraient être plus élevés car on n'intègre pas le véritable dégât qui est fait à l'environnent, de même que les coûts cachés qui permettent d'extraire le pétrole et de le transporter jusqu'aux Etats-Unis."],
    ["Il y a une chance sur des milliards que notre réalité soit la bonne."],
    ["Les gens travaillent mieux lorsqu'ils savent quel est l'objectif et pourquoi."],
    ["J'ai commencé SpaceX avec l'espoir d'un échec."]
];

let quote = document.querySelector('.quote');
let musk = document.querySelector('.musk');

let last = 0;
let nombreAleatoire = 0;

function genererNombreEntier(max) {
    return Math.floor(Math.random() * Math.floor(max));
};

musk.addEventListener('click', () => {
    do {
        nombreAleatoire = genererNombreEntier(quotes.length)
    } while (nombreAleatoire == last);

    quote.textContent = quotes[nombreAleatoire];
    last = nombreAleatoire;
});