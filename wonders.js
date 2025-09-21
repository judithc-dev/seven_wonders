console.log("This is Ajax");

let img_1 = document.getElementById('wonder1');
img_1.addEventListener('click' , wonderDetail1);

let img_2 = document.getElementById('wonder2');
img_2.addEventListener('click' , wonderDetail2);

let img_3 = document.getElementById('wonder3');
img_3.addEventListener('click' , wonderDetail3);

let img_4 = document.getElementById('wonder4');
img_4.addEventListener('click' , wonderDetail4);

let img_5 = document.getElementById('wonder5');
img_5.addEventListener('click' , wonderDetail5);

let img_6 = document.getElementById('wonder6');
img_6.addEventListener('click' , wonderDetail6);

let img_7 = document.getElementById('wonder7');
img_7.addEventListener('click' , wonderDetail7);

let img_8 = document.getElementById('wonder8');
img_8.addEventListener('click' , wonderDetail8);

function wonderDetail1(){
    let name = 
    str = `<h2> The Colosseum <br></h2> Rome, Italy, hosts <a href="https://www.worldatlas.com/articles/why-was-the-colosseum-built.html">the Colosseum</a>, which is one of the world's seven wonders. Sometimes called the Flavian Amphitheatre, the Colosseum is an oval-shaped amphitheater in the center of the city. Constructed from concrete and sand,it is the largest amphitheater in the world. The Colosseum's construction was initiated in AD 72 by Emperor Vespasian and was finished by AD 80 by his successor, Titus. Domitian, another emperor of the Flavian dynasty later made certain modifications to the amphitheater. The labor of tens of thousands of slaves were used to build this magnificent structure. The Colosseum had the capacity to host about 80,000 spectators and 80 entrances at the time of its construction.`;
    let picture1 = document.getElementById('pic1')  
    picture1.innerHTML = str;
}

function wonderDetail2(){
    str = `<h2> The Taj Mahal <br></h2> The Taj Mahal is well known across the world for its historical value, its tale of love, and its stunning beauty. The Taj Mahal is located in the historic Indian city of Agra. It houses the tomb of Mumtaz Mahal, the wife of the Mughal Emperor Shah Jahan.It is said that the Emperor loved his wife dearly and was prompted to build the Taj Mahal after her death as a testament to his love.`;

    let picture2 = document.getElementById('pic1');
    picture2.innerHTML = str;
}

function wonderDetail3(){
    str = `<h2> The Great Wall of China <br></h2> A series of walls were initially built by Chinese empires and states over a period of many years, beginning as early as the 7th century BCE. Over 20 dynasties/states contributed to the building of the wall. These walls were then joined together to result in the Great Wall of China. It was not just a wall but a kind of fortification with watchtowers, beacon towers, trenches, etc., built at intervals as protection from enemy forces. The official length of the Great Wall of China is 21,196.18 km (13,170.7 mi). However, nearly one-third of the Great Wall has disappeared over time. UNESCO inscribed the site as a UNESCO World Heritage site in 1987.`;

    let picture3 = document.getElementById('pic1');
    picture3.innerHTML = str;
}

function wonderDetail4(){
    str = `<h2> The Great Pyramid <br></h2> Although the Great Pyramid of Giza was not officially selected as one of the seven wonders of the world, it was assigned an honorary title because of its undeniable importance. The Great Pyramid of Giza is the biggest and the oldest one among the three pyramids forming the Giza Pyramid Complex. Egyptologists believe that this pyramid was built over a period of 10 to 20 years and completed by around 2560 BC. For over 3,800 years, the Great Pyramid of Giza stood tall as the world’s tallest structure until this position was replaced by the skyscrapers of the modern world. The Pyramid has baffled engineers and architects across the world as to how it was constructed in times when modern infrastructural facilities did not exist. The pyramid houses the tomb of Khufu, the Fourth Dynasty Egyptian pharaoh.`
    let picture4 = document.getElementById('pic1');
    picture4.innerHTML = str;
}

function wonderDetail5(){
    str = `<h2> Petra, a Jordanian wonder <br></h2> Petra, a Jordanian wonder, is also listed among the seven wonders of the world. Petra is also nicknamed as the “Rose City” due to the stone color from which it is carved. It has immense archaeological, historical, and architectural value that makes it a jaw-dropping tourist attraction. The water conduit system and the rock-cut architecture are the two most notable features of this ancient city. The water conduit system installed by the ancient Nabataeans helped give rise to a flourishing city in a desert. The Royal Tombs which are large mausoleums with impressive facades carved into rock are a major attraction in Petra.`
    let picture5 = document.getElementById('pic1');
    picture5.innerHTML = str;
}

function wonderDetail6(){
    str = `<h2> The Ark Deco <br></h2> One of Brazil's most iconic symbols, the Art Deco styled statue of Jesus Christ in Rio de Janeiro is one of the seven wonders of the world. The credit of building the statue goes to Paul Landowski, a French sculptor. The Romanian sculptor, Gheorghe Leonida, was responsible for fashioning the face. The sculpture cost a total of $250,000 which was donated by individuals from in and around Brazil.`
    let picture6 = document.getElementById('pic1');
    picture6.innerHTML = str;
}

function wonderDetail7(){
    str = `<h2> Machu Picchu <br></h2>The dream destination of millions of people across the world, Machu Picchu is one of the seven wonders of the world. It is located in the Cusco Region of Peru’s Machupicchu District. According to the majority of archaeologists, the Inca emperor Pachacuti built Machu Picchu as an estate around the year 1450. The site developed as a city but was abandoned a century later during the Spanish Conquest. The site remained largely unknown to the rest of the world until its discovery by the American explorer Hiram Bingham. A new theory suggests that Machu Pichu could have been the end stage of an ancient pilgrimage route of the Inca people.`
    let picture7 = document.getElementById('pic1');
    picture7.innerHTML = str;
}

function wonderDetail8(){
    str = `<h2> Chinese Itza <br></h2> Chichen Itza is an archaeological site located in Mexico’s Yucatán State. It is a pre-Columbian city that was built during the Terminal Classic period by the Maya people. Chichen Itza's structures like the temples, arcades, and pyramids were sacred to the ancient Maya people. Chichen Itza is believed to have been one of the major cities of the ancient Mayan world and constructions in the city exhibit a variety of architectural styles.`
    let picture8 = document.getElementById('pic1');
    picture8.innerHTML = str;
}