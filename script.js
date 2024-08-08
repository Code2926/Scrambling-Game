document.addEventListener('DOMContentLoaded', () => {
    const words = [
        { word: 'javascript', hint: 'A popular programming language' },
        { word: 'html', hint: 'The standard markup language for web pages' },
        { word: 'css', hint: 'A style sheet language used for describing the presentation of a document' },
        { word: 'python', hint: 'A high-level, interpreted programming language' },
        { word: 'java', hint: 'An object-oriented programming language' },
        { word: 'ruby', hint: 'A dynamic, open-source programming language' },
        { word: 'swift', hint: 'A programming language developed by Apple' },
        { word: 'go', hint: 'A statically typed, compiled, and concise language' },
        { word: 'kotlin', hint: 'A modern, statically typed programming language' },
        { word: 'typescript', hint: 'A superset of JavaScript that adds optional static typing' },
        { word: 'php', hint: 'A server-side scripting language' },
        { word: 'sql', hint: 'A language for managing relational databases' },
        { word: 'mysql', hint: 'A relational database management system' },
        { word: 'mongodb', hint: 'A NoSQL document-based database' },
        { word: 'angular', hint: 'A JavaScript framework for building web applications' },
        { word: 'react', hint: 'A JavaScript library for building user interfaces' },
        { word: 'vue', hint: 'A progressive and flexible JavaScript framework' },
        { word: 'bootstrap', hint: 'A popular front-end framework for building responsive web applications' },
        { word: 'jquery', hint: 'A JavaScript library for simplifying DOM manipulation' },
        { word: 'ajax', hint: 'A technique for loading data asynchronously' },
        { word: 'api', hint: 'An application programming interface' },
        { word: 'algorithm', hint: 'A set of instructions for solving a problem' },
        { word: 'datastructure', hint: 'A way to organize and store data' },
        { word: 'oop', hint: 'Object-oriented programming' },
        { word: 'mvc', hint: 'Model-View-Controller architecture' },
        { word: 'rest', hint: 'Representational State of Resource architecture' },
        { word: 'graphql', hint: 'A query language for APIs' },
        { word: 'aws', hint: 'Amazon Web Services cloud platform' },
        { word: 'azure', hint: 'Microsoft Azure cloud platform' },
        { word: 'googlecloud', hint: 'Google Cloud Platform' },
        { word: 'docker', hint: 'A containerization platform' },
        { word: 'kubernetes', hint: 'A container orchestration system' },
        { word: 'git', hint: 'A version control system' },
        { word: 'github', hint: 'A web-based platform for version control' },
        { word: 'bitbucket', hint: 'A web-based platform for version control' },
        { word: 'agile', hint: 'An iterative approach to project management' },
        { word: 'scrum', hint: 'A framework for managing and completing complex projects' },
        { word: 'kanban', hint: 'A visual system for managing work' },
        { word: 'ux', hint: 'User experience design' },
        { word: 'ui', hint: 'User interface design' },
        { word: 'devops', hint: 'A set of practices for collaboration and communication' },
        { word: 'cloudcomputing', hint: 'A model for delivering computing services over the internet' },
        { word: 'machinelearning', hint: 'A subset of artificial intelligence' },
        { word: 'artificialintelligence', hint: 'The development of intelligent machines' },
        { word: 'naturalanguageprocessing', hint: 'A subfield of artificial intelligence' },
        { word: 'computer vision', hint: 'A field of study focused on enabling computers to interpret images' },
        { word: 'robotics', hint: 'The study of robots and their applications' },
        { word: 'iot', hint: 'The Internet of Things' },
        { word: 'blockchain', hint: 'A decentralized, distributed ledger technology' },
        { word: 'cryptocurrency', hint: 'A digital or virtual currency' },
        { word: 'cybersecurity', hint: 'The practice of protecting computer systems and networks' },
        { word: 'networking', hint: 'The process of connecting devices to exchange data' },
        { word: 'database', hint: 'A collection of organized data' },
        { word: 'apple', hint: 'A sweet, crisp fruit often used in pies' },
        { word: 'banana', hint: 'A long, yellow fruit with a soft, sweet interior' },
        { word: 'orange', hint: 'A citrus fruit known for its bright color and tangy flavor' },
        { word: 'grape', hint: 'Small, round fruit that comes in bunches' },
        { word: 'mango', hint: 'A tropical fruit with a sweet, juicy flesh' },
        { word: 'pineapple', hint: 'A tropical fruit with a spiky exterior and sweet, tangy interior' },
        { word: 'strawberry', hint: 'A red, heart-shaped fruit with tiny seeds on its surface' },
        { word: 'blueberry', hint: 'A small, round fruit with a sweet-tart flavor' },
        { word: 'peach', hint: 'A soft fruit with a fuzzy skin and sweet, juicy flesh' },
        { word: 'cherry', hint: 'A small, round fruit that can be sweet or tart' },
        { word: 'pear', hint: 'A bell-shaped fruit with a sweet, grainy texture' },
        { word: 'plum', hint: 'A juicy fruit with a smooth skin and pit in the center' },
        { word: 'kiwi', hint: 'A small, brown fruit with a green, tangy interior' },
        { word: 'watermelon', hint: 'A large, juicy fruit with a green rind and red, sweet flesh' },
        { word: 'pomegranate', hint: 'A fruit with a thick skin and filled with jewel-like seeds' },
        { word: 'apricot', hint: 'A small, orange fruit with a sweet and tart flavor' },
        { word: 'grapefruit', hint: 'A large citrus fruit with a tangy flavor and segmented flesh' },
        { word: 'raspberry', hint: 'A small, red or black fruit with a sweet-tart taste' },
        { word: 'cantaloupe', hint: 'A type of melon with orange flesh and a netted rind' },
        { word: 'honeydew', hint: 'A green-fleshed melon with a smooth, pale rind' },
        { word: 'avocado', hint: 'A creamy fruit with a large pit, often used in salads' },
        { word: 'tomato', hint: 'A juicy, red fruit commonly used as a vegetable in dishes' },
        { word: 'carrot', hint: 'An orange root vegetable with a crisp texture' },
        { word: 'broccoli', hint: 'A green vegetable with a tree-like appearance' },
        { word: 'spinach', hint: 'A leafy green vegetable often used in salads' },
        { word: 'lettuce', hint: 'A leafy green vegetable commonly used in salads' },
        { word: 'cucumber', hint: 'A green, crisp vegetable with a high water content' },
        { word: 'bell pepper', hint: 'A colorful vegetable available in red, green, yellow, and orange' },
        { word: 'zucchini', hint: 'A green summer squash with a mild flavor' },
        { word: 'eggplant', hint: 'A glossy, purple vegetable with a spongy texture' },
        { word: 'radish', hint: 'A crunchy, spicy root vegetable often used in salads' },
        { word: 'sweet potato', hint: 'A starchy, sweet root vegetable with orange flesh' },
        { word: 'onion', hint: 'A pungent vegetable used to flavor many dishes' },
        { word: 'garlic', hint: 'A strong-flavored bulb used as a seasoning' },
        { word: 'celery', hint: 'A crunchy, green vegetable often used in soups and salads' },
        { word: 'beet', hint: 'A root vegetable with a sweet flavor and deep red color' },
        { word: 'corn', hint: 'A yellow, grain-like vegetable often eaten on the cob' },
        { word: 'pea', hint: 'A small, round vegetable often found in pods' },
        { word: 'green bean', hint: 'A tender, green vegetable often served cooked' },
        { word: 'butternut squash', hint: 'A sweet, nutty squash with a smooth, tan skin' },
        { word: 'kale', hint: 'A leafy green vegetable with a slightly bitter flavor' },
        { word: 'parsnip', hint: 'A root vegetable similar to a carrot but with a milder flavor' },
        { word: 'pumpkin', hint: 'A large, orange squash often used in pies and soups' },
        { word: "artichoke", hint: "A thistle-like vegetable with edible flower buds" },
        { word: 'asparagus', hint: 'A green vegetable with long, tender stalks' },
        { word: 'mushroom', hint: 'A fungus with a soft, spongy texture used in cooking' },
        { word: 'chard', hint: 'A leafy green vegetable with colorful stems' },
        { word: 'rhubarb', hint: 'A tart, red stalk often used in desserts' },
        { word: 'jalapeño', hint: 'A medium-hot chili pepper used to add spice' },
        { word: 'habanero', hint: 'A very hot chili pepper with a fruity flavor' },
        { word: 'cabbage', hint: 'A leafy green or purple vegetable often used in slaws' },
        { word: 'brussels sprout', hint: 'A small, round vegetable resembling a tiny cabbage' },
        { word: 'cauliflower', hint: 'A white vegetable with a compact head of florets' },
        { word: 'bok choy', hint: 'A type of Chinese cabbage with tender, leafy greens' },
        { word: 'collard greens', hint: 'A leafy green vegetable with a mild flavor' },
        { word: 'leek', hint: 'A vegetable with a mild onion flavor and long, white stalk' },
        { word: 'radicchio', hint: 'A bitter, red leafy vegetable often used in salads' },
        { word: 'endive', hint: 'A leafy vegetable with a slightly bitter taste' },
        { word: 'dandelion', hint: 'A leafy green with a slightly bitter flavor, often used in salads' },
        { word: 'fennel', hint: 'A crunchy vegetable with a mild anise flavor' },
        { word: 'kohlrabi', hint: 'A round, bulbous vegetable with a crisp texture' },
        { word: 'turnip', hint: 'A root vegetable with a slightly peppery flavor' },
        { word: 'sweet corn', hint: 'A variety of corn with a sweeter taste' },
        { word: 'snap pea', hint: 'A tender pea with an edible pod' },
        { word: 'soybean', hint: 'A small, round legume often used in tofu' },
        { word: 'okra', hint: 'A green, pod-shaped vegetable with a unique texture' },
        { word: 'jicama', hint: 'A crunchy, slightly sweet root vegetable often used in salads' },
        { word: 'daikon', hint: 'A large, white radish with a mild flavor' },
        { word: 'celeriac', hint: 'A root vegetable with a strong celery flavor' },
        { word: 'watercress', hint: 'A leafy green with a peppery flavor often used in salads' },
        { word: 'beetroot', hint: 'A red root vegetable with a sweet, earthy flavor' },
        { word: 'rutabaga', hint: 'A yellow root vegetable with a slightly sweet taste' },
        { word: 'chayote', hint: 'A green, wrinkled squash with a crisp texture' },
        { word: 'tomatillo', hint: 'A small, green fruit encased in a papery husk' },
        { word: 'sweet pepper', hint: 'A colorful, bell-shaped vegetable with a sweet flavor' },
        { word: 'nopal', hint: 'The pads of the prickly pear cactus, often used in Mexican cuisine' },
        { word: 'salsify', hint: 'A root vegetable with a flavor similar to oysters' },
        { word: 'horseradish', hint: 'A pungent root used as a spicy condiment' },
        { word: 'sunchoke', hint: 'A knobby root vegetable with a nutty flavor' },
        { word: 'ginger', hint: 'A spicy root often used as a seasoning or in teas' },
        { word: 'turmeric', hint: 'A yellow root used as a spice and coloring agent' },
        { word: 'yams', hint: 'Starchy tubers with a sweet flavor, different from sweet potatoes' },
        { word: 'sorrel', hint: 'A leafy green with a sour, lemony flavor' },
        { word: 'mizuna', hint: 'A Japanese leafy green with a mild, peppery taste' },
        { word: 'purslane', hint: 'A succulent green with a slightly sour flavor' },
        { word: 'cress', hint: 'A small, spicy green often used in sandwiches' },
        { word: 'tarragon', hint: 'An herb with a distinctive anise flavor' },
        { word: 'chervil', hint: 'A delicate herb with a subtle anise flavor' },
        { word: 'lavender', hint: 'An herb with fragrant purple flowers used in cooking and aromatherapy' },
        { word: 'lemongrass', hint: 'A stalky herb with a lemony flavor used in Asian cuisine' },
        { word: 'basil', hint: 'A fragrant herb used in many dishes, especially Italian' },
        { word: 'cilantro', hint: 'An herb with a fresh, citrusy flavor often used in Mexican cuisine' },
        { word: 'rosemary', hint: 'An aromatic herb with needle-like leaves used in cooking' },
        { word: 'thyme', hint: 'An herb with small, fragrant leaves used in seasoning' },
        { word: 'dill', hint: 'An herb with feathery leaves and a fresh flavor used in pickles' },
        { word: 'sage', hint: 'An herb with a strong, earthy flavor used in stuffing and sauces' },
        { word: 'parsley', hint: 'A versatile herb used for garnishing and seasoning' },
        { word: 'chive', hint: 'A herb with long, slender leaves and a mild onion flavor' },
        { word: 'bay leaf', hint: 'A dried leaf used to flavor soups and stews' },
        { word: 'marjoram', hint: 'An herb with a sweet, oregano-like flavor used in Mediterranean cuisine' }
        // Add more words and hints here
    ];
    
    let currentWord = '';
let timer;

// Function to scramble a word
function scrambleWord(word) {
    return word.split('').sort(() => Math.random() - 0.5).join('');
}

// Function to get a new word
function getNewWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    const word = words[randomIndex];
    currentWord = word.word;
    document.querySelector('.word').textContent = scrambleWord(currentWord);
    document.querySelector('.hint span').textContent = word.hint;
    document.querySelector('input').value = '';
    resetTimer();
}

// Function to check if the input word is correct
function checkWord() {
    const userWord = document.querySelector('input').value.trim();
    if (userWord === currentWord) {
        alert('Congratulations! You guessed the word correctly!');
        getNewWord();
    } else {
        alert('Incorrect. Try again!');
    }
}

// Function to start or reset the timer
function startTimer() {
    let timeLeft = 30;
    document.querySelector('.time span b').textContent = `${timeLeft}s`;
    timer = setInterval(() => {
        timeLeft--;
        document.querySelector('.time span b').textContent = `${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert('Time is up!');
            getNewWord();
        }
    }, 1000);
}

// Function to reset the timer
function resetTimer() {
    clearInterval(timer);
    startTimer();
}

// Event listeners for buttons
document.querySelector('.refresh-word').addEventListener('click', getNewWord);
document.querySelector('.check-word').addEventListener('click', checkWord);

// Initial call to start the game
getNewWord();

});
