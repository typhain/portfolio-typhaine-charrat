const typography=document.createElement('link');
typography.rel='stylesheet';
typography.href='fonts.css';
document.head.appendChild(typography);

const protocolIntro=document.querySelector('.transform-intro');
if(protocolIntro){
  const protocolLead=protocolIntro.querySelector('p:not(.section-no)');
  if(protocolLead) protocolLead.textContent='Le protocole définit les conditions d’apparition de la forme plutôt que son résultat.';
  const principles=document.createElement('dl');
  principles.className='principles';
  principles.innerHTML=[
    ['Endogénéité','partir de ce qui est déjà là'],
    ['Milieu','laisser agir pente, gravité, usage, climat'],
    ['Contrainte','composer avec ce qui bloque, porte ou canalise'],
    ['Temporalité','montrer un état d’un processus'],
    ['Nécessité','pouvoir expliquer pourquoi la forme apparaît ici'],
    ['Parcimonie','retirer ce qui n’a qu’une fonction spectaculaire']
  ].map(([term,definition])=>`<div><dt>${term}</dt><dd>${definition}</dd></div>`).join('');
  protocolIntro.appendChild(principles);
}

/* Texte éditorial validé : conserver les formulations, sans nouvelle réécriture. */
const heroStatement=document.querySelector('.hero-copy>p:last-child');
if(heroStatement) heroStatement.textContent='Construire les conditions d’une pratique capable de se transformer.';

const originCopy=document.querySelector('.origin-copy');
if(originCopy) originCopy.innerHTML=`
  <p class="section-no">01 / Cosmologie héritée</p>
  <h2>Une manière de voir peut devenir une habitude.</h2>
  <p>Membranes, réseaux, enveloppes et ramifications ont progressivement constitué une grammaire familière. Le dessin m’a appris à observer, mais aussi à reconnaître ce que mon regard répète. Peu à peu, cet imaginaire a commencé à recouvrir les formes rencontrées de significations familières, faisant obstacle à une véritable rencontre avec elles.</p>`;

const saturationCopy=document.querySelector('.sat-copy');
if(saturationCopy) saturationCopy.innerHTML=`
  <p class="section-no">02 / Saturation</p>
  <h2>À force de reconnaître, je vois revenir les mêmes formes.</h2>
  <p>Une perforation devient membrane, une coulure devient veine, une structure appelle une croissance organique. La matière introduit pourtant des accidents, mais mon vocabulaire les absorbe à son tour et les ramène vers des formes familières. Mon imaginaire regarde parfois le monde à ma place.</p>
  <blockquote>Comment intervenir sans que tout devienne la proie de ma vision&nbsp;?</blockquote>`;
const isheraqCaption=document.createElement('p');
isheraqCaption.className='isheraq-caption';
isheraqCaption.innerHTML='<em>Ishéraq, paysage en relief</em><br>Mousse expansive, gel acrylique, résine époxy, pâte fimo';
document.querySelector('.saturation')?.appendChild(isheraqCaption);

const mirrorCopy=document.querySelector('.mirror-copy');
if(mirrorCopy) mirrorCopy.innerHTML=`
  <p class="section-no">03 / Expériences de prompt</p>
  <h2>La machine exagère.</h2>
  <p>Translucide, organique, proliférant, spectaculaire : la machine produit avec une facilité déconcertante un monde que je reconnais comme le mien. Débarrassée des hésitations et des résistances du dessin, ma grammaire y apparaît presque caricaturale.</p>`;
const mirrorConclusion=document.querySelector('.mirror-conclusion');
if(mirrorConclusion) mirrorConclusion.textContent='À moi désormais de construire les conditions capables de les désamorcer.';

const handCopy=document.querySelector('.hand-copy');
if(handCopy) handCopy.innerHTML=`
  <h2>Le geste se laisse désorienter.</h2>
  <p>Un réseau déjà tracé, un bord, une densité, une résistance du papier ou de l’encre peuvent commencer à organiser la suite. Je cherche moins à exprimer mon imaginaire qu’à le faire composer avec ce qui lui échappe.</p>
  <blockquote>Assourdir la volonté, sans renoncer au geste.<br>Desserrer l’attention pour être plus disponible.</blockquote>`;

const materialCopy=document.querySelector('.material-copy');
if(materialCopy) materialCopy.innerHTML=`
  <p class="section-no">06 / De l’image à la situation matérielle</p>
  <h2>La matière commence à décider.</h2>
  <p>Chauffer, plier, fixer, déposer : le polyéthylène conserve ses plis, les fibres s’épaississent, les couches réagissent. Certaines décisions ne deviennent possibles qu’après avoir observé ce que la couche précédente a fait.</p>`;
const skin=document.querySelector('.skin');
if(skin){
  const caption=document.createElement('p');
  caption.className='artwork-caption skin-caption';
  caption.innerHTML='<em>Peau fossile</em><br>Polyéthylène thermoformé, lichen et graines de peuplier · 2026';
  skin.insertAdjacentElement('afterend',caption);
}
const sedimentation=document.querySelector('.material-work');
if(sedimentation){
  const caption=document.createElement('p');
  caption.className='artwork-caption sedimentation-caption';
  caption.innerHTML='<em>Rêveries en sédimentation</em><br>50 × 50 cm · 2026';
  sedimentation.insertAdjacentElement('afterend',caption);
  const provenance=document.createElement('div');
  provenance.className='material-provenance';
  provenance.innerHTML=`
    <p><strong>Lichen</strong> — fragments prélevés dans les massifs des Écrins et du Tanargue</p>
    <p><strong>Pollen</strong> — transporté dans un pull, collecté au bord du lac Daumesnil</p>
    <p><strong>Coquilles</strong> — ramassées le long de la Durance, près d’une zone industrielle, et sous les haies du bois de Vincennes</p>
    <p><strong>Cactus</strong> — vestige domestique effondré sur le rebord d’une fenêtre</p>
    <p><strong>Polyéthylène</strong> — membrane issue d’un emballage logistique IKEA</p>
    <p><strong>Mousse expansive</strong> — matière industrielle de comblement, Leroy Merlin</p>`;
  caption.insertAdjacentElement('afterend',provenance);
}

const libraryCopy=document.querySelector('.library-copy');
if(libraryCopy) libraryCopy.innerHTML=`
  <p class="section-no">07 / Matériauthèque</p>
  <h2>Une matière peut m’intéresser sans avoir à justifier immédiatement sa présence par une forme à produire.</h2>
  <p>Je collecte, nettoie, fais sécher, dégraisse ou stabilise. Ce temps sans destination permet de découvrir les propriétés et les transformations sans les réduire immédiatement à un usage.</p>`;
const objectProvenances=[
  ['Samares','parc du site IFPEN, Rueil'],
  ['Cire','don d’une amie apicultrice'],
  ['Champignon','forêt de Fontainebleau'],
  ['Graines de peuplier','bord du lac Daumesnil'],
  ['Dentelle','napperon acheté sur Le Bon Coin'],
  ['Charbon','reste de barbecue, don d’une collègue'],
  ['Liège','trouvé sur un sentier en Espagne'],
  ['Coquilles','repérées sous les haies'],
  ['Feuilles','stabilisées à la glycérine végétale'],
  ['Os','petits mammifères trouvés dans un champ']
];
document.querySelectorAll('.objects figure').forEach((figure,index)=>{
  const caption=figure.querySelector('figcaption');
  const item=objectProvenances[index];
  if(caption&&item) caption.innerHTML=`<strong>${item[0]}</strong><span>${item[1]}</span>`;
});

const cycleCopy=document.querySelector('.cycle-copy');
if(cycleCopy) cycleCopy.innerHTML=`
  <p class="section-no">08 / Nouvelle intention</p>
  <h2>Le fossile était produit.<br>L’os est rencontré.</h2>
  <p>Je travaille désormais davantage avec des formes, des matières et des objets qui existaient avant mon geste. Leur architecture, leurs usages antérieurs, leurs fragilités et leurs résistances deviennent des conditions avec lesquelles composer.</p>
  <blockquote>La rêverie, ici, n’est ni une fuite hors du réel ni un déploiement de l’imaginaire. Elle désigne un régime d’attention qui rend disponible à ce qui résiste, déplace ou transforme l’intention.</blockquote>`;

const lampCopy=document.querySelector('.lamp-copy');
if(lampCopy) lampCopy.innerHTML=`
  <p class="section-no">09 / La forme précède le geste</p>
  <h2>Composer à partir d’une présence.</h2>
  <p>Un projet associant os, laiton, dentelle, lumière et matières végétales. La forme n’est pas appliquée à l’objet : elle émerge de la négociation entre ses résistances, les outils et les gestes successifs.</p>`;
const lampSketch=document.querySelector('.lamp-sketch');
if(lampSketch){
  const caption=document.createElement('p');
  caption.className='artwork-caption lamp-caption';
  caption.innerHTML='<em>Lampe os</em> · projet en cours<br>Os, laiton, dentelle, gaze, samares et lumière · 2026';
  lampSketch.insertAdjacentElement('afterend',caption);
}

const cosmoplasty=document.querySelector('.cosmoplasty');
if(cosmoplasty) cosmoplasty.innerHTML=`
  <p class="section-no">10 / Ce que le travail transforme en retour</p>
  <div>
    <p>Cette trajectoire construit une pratique dans laquelle l’intention compose avec ce qu’elle ne peut entièrement prévoir.</p>
  </div>
  <div>
    <h2>Cosmoplastie du sensible</h2>
    <p>Les situations que je construis transforment ma manière de percevoir et d’agir. Cette sensibilité transformée modifie, en retour, ce que je suis capable de construire.</p>
    <p><em>Une manière de pratiquer l’art autant qu’une manière d’habiter le monde.</em></p>
  </div>`;

const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('nav');
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));
