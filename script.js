// ======================================================
// HeritageX - Main JavaScript
// ======================================================


// ======================================================
// CURRENT SELECTED HERITAGE SITE
// ======================================================

let currentSite = {

    id: "thindal",

    name: "Thindal Murugan Temple",

    location: "Erode, Tamil Nadu",

    story:
        "A sacred hill temple dedicated to Lord Murugan and an important cultural landmark in Erode."

};


// ======================================================
// LANGUAGE
// ======================================================

let currentLanguage = "en";

let isTamil = false;


// ======================================================
// AUDIO STATE
// ======================================================

let speechUtterance = null;


// ======================================================
// MODAL ELEMENTS
// ======================================================

const modal =
    document.getElementById("modal");

const sheet =
    document.getElementById("sheet");


// ======================================================
// MODAL FUNCTIONS
// ======================================================

function openModal(title, content) {

    sheet.innerHTML = `

        <button
            class="close"
            onclick="closeModal()"
        >
            ✕
        </button>

        <h2>${title}</h2>

        <p>${content}</p>

    `;

    modal.classList.add("show");

}


function closeModal() {

    modal.classList.remove("show");

}


window.closeModal =
    closeModal;


// CLOSE MODAL OUTSIDE CLICK

modal.addEventListener(

    "click",

    function (event) {

        if (
            event.target === modal
        ) {

            closeModal();

        }

    }

);


// ======================================================
// AI HERITAGE GUIDE - LANGUAGE SUPPORT
// ======================================================

document
    .getElementById("askBtn")
    .addEventListener("click", function () {

        const site = currentSite;

        if (isTamil) {

            sheet.innerHTML = `

                <button
                    class="close"
                    onclick="closeModal()"
                >
                    ←
                </button>

                <div class="ai-guide">

                    <div class="ai-guide-icon">
                        ✦
                    </div>

                    <h2>
                        AI பாரம்பரிய வழிகாட்டி
                    </h2>

                    <p class="ai-intro">
                        <strong>${site.name}</strong>
                        பற்றி ஏதாவது கேளுங்கள்
                    </p>


                    <div class="ai-questions">

                        <button
                            onclick="askHeritageQuestion('importance')"
                        >
                            🏛️ இந்த இடம் ஏன் முக்கியமானது?
                        </button>


                        <button
                            onclick="askHeritageQuestion('history')"
                        >
                            📖 இதன் வரலாற்றைப் பற்றி சொல்லுங்கள்
                        </button>


                        <button
                            onclick="askHeritageQuestion('architecture')"
                        >
                            🏗️ இதன் கட்டிடக்கலையில் சிறப்பு என்ன?
                        </button>


                        <button
                            onclick="askHeritageQuestion('visit')"
                        >
                            📍 பார்வையிடுவதற்கு முன் என்ன தெரிந்து கொள்ள வேண்டும்?
                        </button>

                    </div>


                    <div
                        class="ai-answer"
                        id="aiAnswer"
                    >
                        ஒரு கேள்வியைத் தேர்ந்தெடுத்து மேலும் அறிந்து கொள்ளுங்கள்.
                    </div>

                </div>

            `;

        }


        else {

            sheet.innerHTML = `

                <button
                    class="close"
                    onclick="closeModal()"
                >
                    ←
                </button>

                <div class="ai-guide">

                    <div class="ai-guide-icon">
                        ✦
                    </div>

                    <h2>
                        AI Heritage Guide
                    </h2>

                    <p class="ai-intro">
                        Ask anything about
                        <strong>${site.name}</strong>
                    </p>


                    <div class="ai-questions">

                        <button
                            onclick="askHeritageQuestion('importance')"
                        >
                            🏛️ Why is this place important?
                        </button>


                        <button
                            onclick="askHeritageQuestion('history')"
                        >
                            📖 Tell me about its history
                        </button>


                        <button
                            onclick="askHeritageQuestion('architecture')"
                        >
                            🏗️ What is special about its architecture?
                        </button>


                        <button
                            onclick="askHeritageQuestion('visit')"
                        >
                            📍 What should I know before visiting?
                        </button>

                    </div>


                    <div
                        class="ai-answer"
                        id="aiAnswer"
                    >
                        Select a question to learn more.
                    </div>

                </div>

            `;

        }


        modal.classList.add("show");

    });


// ======================================================
// AI QUESTIONS - TAMIL / ENGLISH
// ======================================================

function askHeritageQuestion(type) {

    const answer =
        document.getElementById("aiAnswer");


    if (!answer) return;


    let response = "";


    // ===============================
    // TAMIL ANSWERS
    // ===============================

    if (isTamil) {


        if (type === "importance") {

            response =
                `${currentSite.name} என்பது ${currentSite.location} பகுதியில் அமைந்துள்ள ஒரு முக்கியமான கலாச்சார மற்றும் பாரம்பரிய தளமாகும். இது இப்பகுதியின் வரலாறு, ஆன்மிகம், கட்டிடக்கலை மற்றும் பாரம்பரியத்தை பிரதிபலிக்கிறது.`;

        }


        else if (type === "history") {

            response =
                `${currentSite.name} வளமான வரலாற்றையும் கலாச்சார முக்கியத்துவத்தையும் கொண்டுள்ளது. பல தலைமுறைகளாக மக்கள் இந்த இடத்துடன் தொடர்பு கொண்டு வருகின்றனர்.`;

        }


        else if (type === "architecture") {

            response =
                `${currentSite.name} அதன் தனித்துவமான கட்டிடக்கலை, கலைநயம், புனித இடங்கள் மற்றும் பாரம்பரிய வடிவமைப்புகளுக்காக சிறப்பு பெற்றுள்ளது.`;

        }


        else if (type === "visit") {

            response =
                `${currentSite.name} வருகையின் போது உள்ளூர் பழக்கவழக்கங்களை மதிக்கவும், தூய்மையைப் பாதுகாக்கவும், தள விதிமுறைகளைப் பின்பற்றவும். இந்த பாரம்பரிய இடத்தின் கலாச்சார முக்கியத்துவத்தைப் புரிந்துகொள்ள நேரம் எடுத்துக்கொள்ளுங்கள்.`;

        }


        answer.innerHTML = `

            <h3>
                ✨ பாரம்பரிய வழிகாட்டி
            </h3>

            <p>
                ${response}
            </p>

        `;

    }


    // ===============================
    // ENGLISH ANSWERS
    // ===============================

    else {


        if (type === "importance") {

            response =
                `${currentSite.name} is an important cultural and heritage site located in ${currentSite.location}. It represents the history, traditions, spirituality, architecture, and cultural identity of the region.`;

        }


        else if (type === "history") {

            response =
                `${currentSite.name} has a rich cultural history. The site has been connected with generations of visitors and local communities, making it an important part of the heritage of ${currentSite.location}.`;

        }


        else if (type === "architecture") {

            response =
                `${currentSite.name} contains unique architectural and artistic features. Visitors can observe its sacred spaces, design, decorations, and cultural details that make the site special.`;

        }


        else if (type === "visit") {

            response =
                `When visiting ${currentSite.name}, respect local customs, maintain cleanliness, follow site rules, and take time to understand the cultural importance of this heritage location.`;

        }


        answer.innerHTML = `

            <h3>
                ✨ Heritage Guide
            </h3>

            <p>
                ${response}
            </p>

        `;

    }

}
// ======================================================
// REPORT ISSUE
// ======================================================

document
    .getElementById("reportBtn")
    .addEventListener(

        "click",

        function () {

            if (
                currentLanguage === "ta"
            ) {

                sheet.innerHTML = `

                    <button
                        class="close"
                        onclick="closeModal()"
                    >
                        ✕
                    </button>

                    <h2>
                        ஒரு பிரச்சினையைப் புகாரளிக்கவும்
                    </h2>

                    <p>
                        இந்த பாரம்பரிய தளத்தைப் பாதுகாக்க உதவுங்கள்.
                    </p>

                    <div class="answers">

                        <button
                            onclick="showSuccess()"
                        >
                            🗑️ குப்பை
                        </button>

                        <button
                            onclick="showSuccess()"
                        >
                            🏛️ தள சேதம்
                        </button>

                        <button
                            onclick="showSuccess()"
                        >
                            🚧 அணுகல் பிரச்சினை
                        </button>

                    </div>

                    <div
                        class="success"
                        id="successMessage"
                    >
                        ✓ நன்றி! உங்கள் புகார் பதிவு செய்யப்பட்டது.
                    </div>

                `;

            }

            else {

                sheet.innerHTML = `

                    <button
                        class="close"
                        onclick="closeModal()"
                    >
                        ✕
                    </button>

                    <h2>
                        Report an Issue
                    </h2>

                    <p>
                        Help protect this heritage site by reporting an issue.
                    </p>

                    <div class="answers">

                        <button
                            onclick="showSuccess()"
                        >
                            🗑️ Litter
                        </button>

                        <button
                            onclick="showSuccess()"
                        >
                            🏛️ Site Damage
                        </button>

                        <button
                            onclick="showSuccess()"
                        >
                            🚧 Access Issue
                        </button>

                    </div>

                    <div
                        class="success"
                        id="successMessage"
                    >
                        ✓ Thank you! Your report has been recorded.
                    </div>

                `;

            }

            modal.classList.add("show");

        }

    );


function showSuccess() {

    const successMessage =
        document.getElementById(
            "successMessage"
        );


    if (
        successMessage
    ) {

        successMessage.style.display =
            "block";

    }

}


window.showSuccess =
    showSuccess;


// ======================================================
// NEARBY CULTURE
// ======================================================

const nearbyCulture = {

    thindal: {

        food: [
            "Traditional Tamil meals",
            "South Indian breakfast",
            "Local snacks and tea shops"
        ],

        artisans: [
            "Traditional handicrafts",
            "Local textile artisans",
            "Handmade cultural products"
        ],

        places: [
            "Thindal Murugan Temple",
            "Erode local markets",
            "Nearby cultural attractions"
        ]

    },


    brihadeeswarar: {

        food: [
            "Traditional Thanjavur meals",
            "South Indian vegetarian food",
            "Local snacks"
        ],

        artisans: [
            "Thanjavur paintings",
            "Traditional bronze sculptures",
            "Handicraft artists"
        ],

        places: [
            "Brihadeeswarar Temple",
            "Thanjavur Palace",
            "Saraswathi Mahal Library"
        ]

    },


    meenakshi: {

        food: [
            "Madurai Jigarthanda",
            "Traditional South Indian meals",
            "Madurai street food"
        ],

        artisans: [
            "Traditional textile shops",
            "Handicraft makers",
            "Local jewellery artisans"
        ],

        places: [
            "Meenakshi Amman Temple",
            "Thirumalai Nayak Palace",
            "Gandhi Memorial Museum"
        ]

    },


    shore: {

        food: [
            "Fresh seafood",
            "Traditional Tamil food",
            "Local coastal snacks"
        ],

        artisans: [
            "Stone sculpture artists",
            "Traditional stone carving",
            "Local handicrafts"
        ],

        places: [
            "Shore Temple",
            "Pancha Rathas",
            "Arjuna's Penance"
        ]

    }

};
// ======================================================
// VIEW ALL NEARBY CULTURE
// ======================================================

document
    .getElementById("allBtn")
    .addEventListener("click", function () {

        showNearbyCulture();

    });


function showNearbyCulture() {

    const culture =
        nearbyCulture[currentSite.id];


    if (!culture) {

        openModal(

            "Nearby Culture",

            `Discover local food, artisans, and interesting places around ${currentSite.name}.`

        );

        return;

    }


    sheet.innerHTML = `

        <button
            class="close"
            onclick="closeModal()"
        >
            ✕
        </button>


        <h2>
            Nearby Culture
        </h2>


        <p class="culture-location">

            Explore around

            <strong>
                ${currentSite.name}
            </strong>

        </p>


        <div class="culture-list">


            <button
                class="culture-card"
                onclick="showCultureCategory('food')"
            >

                <span>
                    🍛
                </span>


                <div>

                    <b>
                        Local Food
                    </b>


                    <small>
                        Discover traditional food nearby
                    </small>

                </div>


                <strong>
                    ›
                </strong>

            </button>


            <button
                class="culture-card"
                onclick="showCultureCategory('artisans')"
            >

                <span>
                    🧵
                </span>


                <div>

                    <b>
                        Local Artisans
                    </b>


                    <small>
                        Explore traditional crafts
                    </small>

                </div>


                <strong>
                    ›
                </strong>

            </button>


            <button
                class="culture-card"
                onclick="showCultureCategory('places')"
            >

                <span>
                    🧭
                </span>


                <div>

                    <b>
                        Places to Explore
                    </b>


                    <small>
                        Discover nearby attractions
                    </small>

                </div>


                <strong>
                    ›
                </strong>

            </button>


        </div>

    `;


    modal.classList.add("show");

}
// ======================================================
// SHOW CULTURE CATEGORY WITH ANIMATION
// ======================================================

function showCultureCategory(category) {

    const culture =
        nearbyCulture[currentSite.id];

    if (!culture) {
        return;
    }

    const items =
        culture[category];

    let title = "";
    let icon = "";

    if (category === "food") {

        title = "Local Food";
        icon = "🍛";

    }

    else if (category === "artisans") {

        title = "Local Artisans";
        icon = "🧵";

    }

    else {

        title = "Places to Explore";
        icon = "🧭";

    }


    let listHTML = "";

    items.forEach(function (item, index) {

        listHTML += `

            <div
                class="culture-item animated-culture-item"
                style="animation-delay: ${index * 0.15}s"
            >

                <span>
                    ${icon}
                </span>

                <p>
                    ${item}
                </p>

            </div>

        `;

    });


    sheet.innerHTML = `

    <button
        class="culture-back"
        id="cultureBackBtn"
    >
        ← Back
    </button>


        <h2 class="culture-title-animation">
            ${title}
        </h2>


        <p class="culture-location">
            Around
            <strong>
                ${currentSite.name}
            </strong>
        </p>


        <div class="culture-items">

            ${listHTML}

        </div>

    `;


    modal.classList.add("show");
    document
    .getElementById("cultureBackBtn")
    .addEventListener("click", function () {

        showNearbyCulture();

    });

}


window.showCultureCategory =
    showCultureCategory;

// ======================================================
// HOME NEARBY CULTURE CARD ANIMATION
// ======================================================

const cultureCards =
    document.querySelectorAll(".place");


cultureCards.forEach(function (card) {

    card.addEventListener("click", function () {

        // Add animation

        card.classList.add(
            "culture-card-clicked"
        );


        // Remove animation after finishing

        setTimeout(function () {

            card.classList.remove(
                "culture-card-clicked"
            );

        }, 500);


        // Get selected category

        const text =
            card.querySelector("b")
                .textContent
                .toLowerCase();


        if (
            text.includes("food")
        ) {

            showCultureCategory(
                "food"
            );

        }


        else if (
            text.includes("artisan")
        ) {

            showCultureCategory(
                "artisans"
            );

        }


        else if (
            text.includes("place")
        ) {

            showCultureCategory(
                "places"
            );

        }

    });

});

// ======================================================
// STORY ELEMENTS
// ======================================================

const chips =
    document.querySelectorAll(".chip");


const storyTitle =
    document.getElementById(
        "storyTitle"
    );


const storyText =
    document.getElementById(
        "storyText"
    );


// ======================================================
// STORY TAB FUNCTION
// ======================================================

function updateStory(type) {


    if (
        currentLanguage === "ta"
    ) {

        if (
            type === "story"
        ) {

            storyTitle.textContent =
                currentSite.name +
                " - பாரம்பரிய கதை";


            storyText.textContent =
                currentSite.name +
                " என்பது முக்கியமான கலாச்சார மற்றும் ஆன்மீக பாரம்பரிய தளமாகும். இதன் வரலாறு மற்றும் மரபுகள் தலைமுறைகளாக பாதுகாக்கப்பட்டு வருகின்றன.";

        }


        else if (
            type === "architecture"
        ) {

            storyTitle.textContent =
                currentSite.name +
                " - கட்டிடக்கலை";


            storyText.textContent =
                currentSite.name +
                " தளத்தின் பாரம்பரிய கட்டிடக்கலை, கலைநயமிக்க வடிவமைப்பு மற்றும் வரலாற்று முக்கியத்துவத்தை ஆராயுங்கள்.";

        }


        else if (
            type === "rituals"
        ) {

            storyTitle.textContent =
                currentSite.name +
                " - சடங்குகள்";


            storyText.textContent =
                currentSite.name +
                " உடன் தொடர்புடைய பாரம்பரிய சடங்குகள், திருவிழாக்கள் மற்றும் கலாச்சார நடைமுறைகளை அறியுங்கள்.";

        }


        else if (
            type === "tips"
        ) {

            storyTitle.textContent =
                currentSite.name +
                " - பார்வையாளர் குறிப்புகள்";


            storyText.textContent =
                "உள்ளூர் மரபுகளை மதிக்கவும், தூய்மையைப் பராமரிக்கவும் மற்றும் " +
                currentSite.name +
                " இன் கலாச்சார முக்கியத்துவத்தைப் புரிந்துகொள்ளவும்.";

        }

    }

    else {

        if (
            type === "story"
        ) {

            storyTitle.textContent =
                currentSite.name;


            storyText.textContent =
                currentSite.story;

        }


        else if (
            type === "architecture"
        ) {

            storyTitle.textContent =
                currentSite.name +
                " - Architecture";


            storyText.textContent =

                "Explore the architectural design, sacred spaces, artistic details, and historical construction of " +
                currentSite.name +
                ".";

        }


        else if (
            type === "rituals"
        ) {

            storyTitle.textContent =
                currentSite.name +
                " - Rituals";


            storyText.textContent =

                "Discover the important rituals, festivals, traditions, and cultural practices connected with " +
                currentSite.name +
                ".";

        }


        else if (
            type === "tips"
        ) {

            storyTitle.textContent =
                "Visitor Tips for " +
                currentSite.name;


            storyText.textContent =

                "Respect local customs, maintain cleanliness, follow visitor guidelines, and take time to understand the cultural importance of " +
                currentSite.name +
                ".";

        }

    }

}


// ======================================================
// STORY TAB CLICK
// ======================================================

chips.forEach(

    function (chip) {

        chip.addEventListener(

            "click",

            function () {

                chips.forEach(

                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }

                );


                chip.classList.add(
                    "active"
                );


                updateStory(
                    chip.dataset.type
                );

            }

        );

    }

);


// ======================================================
// AUDIO PLAY / PAUSE / RESUME
// ======================================================

document
    .getElementById("playBtn")
    .addEventListener(

        "click",

        function () {


            // PAUSE

            if (

                window.speechSynthesis.speaking &&

                !window.speechSynthesis.paused

            ) {

                window.speechSynthesis.pause();


                this.textContent =
                    "▶";


                return;

            }


            // RESUME

            if (

                window.speechSynthesis.paused

            ) {

                window.speechSynthesis.resume();


                this.textContent =
                    "⏸";


                return;

            }


            // NEW AUDIO

            playCurrentAudio();

        }

    );


// ======================================================
// PLAY CURRENT LANGUAGE AUDIO
// ======================================================

function playCurrentAudio() {


    window.speechSynthesis.cancel();


    speechUtterance =
        new SpeechSynthesisUtterance(

            storyText.textContent

        );


    if (
        currentLanguage === "ta"
    ) {

        speechUtterance.lang =
            "ta-IN";

    }

    else {

        speechUtterance.lang =
            "en-IN";

    }


    speechUtterance.rate =
        0.9;


    speechUtterance.onstart =
        function () {

            document
                .getElementById("playBtn")
                .textContent =
                "⏸";

        };


    speechUtterance.onend =
        function () {

            document
                .getElementById("playBtn")
                .textContent =
                "▶";

        };


    speechUtterance.onerror =
        function () {

            document
                .getElementById("playBtn")
                .textContent =
                "▶";

        };


    window.speechSynthesis.speak(
        speechUtterance
    );

}


// ======================================================
// LANGUAGE TOGGLE
// ======================================================

const langButton =
    document.querySelector(
        ".lang"
    );


langButton.addEventListener(

    "click",

    function () {


        // ==================================================
        // TAMIL
        // ==================================================

        if (
            !isTamil
        ) {

            currentLanguage =
                "ta";


            isTamil =
                true;


            langButton.textContent =
                "EN / தமிழ்";


            document
                .querySelector(
                    ".eyebrow"
                )
                .textContent =
                "ஸ்மார்ட் சுற்றுலா துணை";


            document
                .querySelector(
                    ".hero h1"
                )
                .textContent =
                "புகைப்படத்தைத் தாண்டி பாரம்பரியத்தை ஆராயுங்கள்.";


            document
                .querySelector(
                    ".hero p"
                )
                .textContent =
                "நீங்கள் இருக்கும் இடத்திலேயே வரலாறு, கலாச்சாரம் மற்றும் உள்ளூர் அனுபவங்களை அறியுங்கள்.";


            document
                .getElementById(
                    "exploreTitle"
                )
                .textContent =
                "இந்த இடத்தை ஆராயுங்கள்";


            document
                .getElementById(
                    "mapBtn"
                )
                .textContent =
                "வரைபடம் ↗";


            document
                .querySelector(
                    '[data-type="story"]'
                )
                .textContent =
                "📖 கதை";


            document
                .querySelector(
                    '[data-type="architecture"]'
                )
                .textContent =
                "🏛 கட்டிடக்கலை";


            document
                .querySelector(
                    '[data-type="rituals"]'
                )
                .textContent =
                "✨ சடங்குகள்";


            document
                .querySelector(
                    '[data-type="tips"]'
                )
                .textContent =
                "📍 பார்வையாளர் குறிப்புகள்";


            document
                .getElementById(
                    "storyLabel"
                )
                .textContent =
                "பாரம்பரியக் கதை";


            document
                .querySelector(
                    ".guide h3"
                )
                .textContent =
                "உங்கள் AI பாரம்பரிய வழிகாட்டி";


            document
                .querySelector(
                    ".guide p"
                )
                .textContent =
                "தமிழ் அல்லது ஆங்கிலத்தில் எளிய கேள்விகளைக் கேளுங்கள்.";


            document
                .getElementById(
                    "askBtn"
                )
                .textContent =
                "கேளுங்கள்: இந்த கோவில் ஏன் முக்கியமானது?";


            document
                .querySelector(
                    ".places"
                )
                .previousElementSibling
                .querySelector(
                    "h3"
                )
                .textContent =
                "அருகிலுள்ள கலாச்சாரம்";


            document
                .getElementById(
                    "allBtn"
                )
                .textContent =
                "அனைத்தையும் காண்க";


            document
                .querySelector(
                    ".report h3"
                )
                .textContent =
                "இந்த இடத்தைப் பாதுகாக்க உதவுங்கள்";


            document
                .querySelector(
                    ".report p"
                )
                .textContent =
                "குப்பை, சேதம் அல்லது அணுகல் பிரச்சினைகளைப் புகாரளிக்கவும்.";


            document
                .getElementById(
                    "reportBtn"
                )
                .textContent =
                "புகார்";


            const navItems =
                document.querySelectorAll(
                    ".nav-item"
                );


            navItems[0].innerHTML =
                '<span class="nav-icon">⌂</span>முகப்பு';


            navItems[1].innerHTML =
                '<span class="nav-icon">◈</span>பாஸ்போர்ட்';


            navItems[2].innerHTML =
                '<span class="nav-icon">▣</span>ஸ்கேன்';


            navItems[3].innerHTML =
                '<span class="nav-icon">☺</span>சுயவிவரம்';


            updateStory(
                document
                    .querySelector(
                        ".chip.active"
                    )
                    .dataset.type
            );

        }


        // ==================================================
        // ENGLISH
        // ==================================================

        else {

            currentLanguage =
                "en";


            isTamil =
                false;


            langButton.textContent =
                "தமிழ் / EN";


            document
                .querySelector(
                    ".eyebrow"
                )
                .textContent =
                "SMART TOURISM COMPANION";


            document
                .querySelector(
                    ".hero h1"
                )
                .textContent =
                "Explore heritage beyond the photograph.";


            document
                .querySelector(
                    ".hero p"
                )
                .textContent =
                "Discover stories, culture, local traditions, and nearby experiences right where you stand.";


            document
                .getElementById(
                    "exploreTitle"
                )
                .textContent =
                "Explore this site";


            document
                .getElementById(
                    "mapBtn"
                )
                .textContent =
                "Map ↗";


            document
                .querySelector(
                    '[data-type="story"]'
                )
                .textContent =
                "📖 Story";


            document
                .querySelector(
                    '[data-type="architecture"]'
                )
                .textContent =
                "🏛 Architecture";


            document
                .querySelector(
                    '[data-type="rituals"]'
                )
                .textContent =
                "✨ Rituals";


            document
                .querySelector(
                    '[data-type="tips"]'
                )
                .textContent =
                "📍 Visitor Tips";


            document
                .getElementById(
                    "storyLabel"
                )
                .textContent =
                "HERITAGE STORY";


            document
                .querySelector(
                    ".guide h3"
                )
                .textContent =
                "Your AI Heritage Guide";


            document
                .querySelector(
                    ".guide p"
                )
                .textContent =
                "Ask simple questions in Tamil or English.";


            document
                .getElementById(
                    "askBtn"
                )
                .textContent =
                "Try: “Why is this temple important?”";


            document
                .querySelector(
                    ".places"
                )
                .previousElementSibling
                .querySelector(
                    "h3"
                )
                .textContent =
                "Nearby Culture";


            document
                .getElementById(
                    "allBtn"
                )
                .textContent =
                "View all";


            document
                .querySelector(
                    ".report h3"
                )
                .textContent =
                "Help protect this site";


            document
                .querySelector(
                    ".report p"
                )
                .textContent =
                "Report litter, damage, or access issues.";


            document
                .getElementById(
                    "reportBtn"
                )
                .textContent =
                "Report";


            const navItems =
                document.querySelectorAll(
                    ".nav-item"
                );


            navItems[0].innerHTML =
                '<span class="nav-icon">⌂</span>Home';


            navItems[1].innerHTML =
                '<span class="nav-icon">◈</span>Passport';


            navItems[2].innerHTML =
                '<span class="nav-icon">▣</span>Scan';


            navItems[3].innerHTML =
                '<span class="nav-icon">☺</span>Profile';


            updateStory(
                document
                    .querySelector(
                        ".chip.active"
                    )
                    .dataset.type
            );

        }

    }

);

// ======================================================
// HERITAGEX PROFILE + HERITAGE PASSPORT SYSTEM
// ======================================================


// ======================================================
// PROFILE BUTTON
// ======================================================

const profileBtn =
    document.getElementById("profileBtn");

if (profileBtn) {

    profileBtn.addEventListener(
        "click",
        showProfilePage
    );

}


// ======================================================
// HERITAGE PASSPORT
// ======================================================

document
    .getElementById("passportBtn")
    .addEventListener("click", function () {

        openPassport();

    });


// ======================================================
// OPEN HERITAGE PASSPORT
// ======================================================

function openPassport() {

    const visitedSites =
        JSON.parse(
            localStorage.getItem(
                "visitedHeritageSites"
            )
        ) || [];


    sheet.innerHTML = `

        <button
            class="close"
            onclick="closeModal()"
        >
            ✕
        </button>


        <div class="passport-header">

            <div class="passport-icon">
                🎫
            </div>


            <h2>
                ${
                    isTamil
                        ? "பாரம்பரிய பாஸ்போர்ட்"
                        : "Heritage Passport"
                }
            </h2>


            <p>
                ${
                    isTamil
                        ? "உங்கள் பாரம்பரிய பயணம்"
                        : "Your heritage journey"
                }
            </p>

        </div>


        <div class="passport-stats">

            <div class="passport-stat">

                <strong>
                    ${visitedSites.length}
                </strong>

                <span>
                    ${
                        isTamil
                            ? "பார்வையிட்ட இடங்கள்"
                            : "Sites Visited"
                    }
                </span>

            </div>


            <div class="passport-stat">

                <strong>
                    ${visitedSites.length}
                </strong>

                <span>
                    ${
                        isTamil
                            ? "நினைவுகள்"
                            : "Memories"
                    }
                </span>

            </div>

        </div>


        <div class="passport-sites">

            ${
                visitedSites.length === 0

                    ? `

                        <div class="empty-passport">

                            <div class="passport-empty-icon">
                                🏛️
                            </div>


                            <h3>

                                ${
                                    isTamil
                                        ? "இன்னும் எந்த பாரம்பரிய இடமும் பார்வையிடப்படவில்லை"
                                        : "No heritage sites visited yet"
                                }

                            </h3>


                            <p>

                                ${
                                    isTamil
                                        ? "வரைபடத்திலிருந்து ஒரு கோவிலைத் தேர்ந்தெடுத்து உங்கள் பாரம்பரிய பயணத்தைத் தொடங்குங்கள்."
                                        : "Select a temple from the map to start your heritage journey."
                                }

                            </p>

                        </div>

                    `

                    :

                    visitedSites
                        .map(function (site) {

                            return `

                                <div
                                    class="passport-site-card"
                                >

                                    <div
                                        class="passport-site-icon"
                                    >
                                        🛕
                                    </div>


                                    <div
                                        class="passport-site-details"
                                    >

                                        <h3>
                                            ${site.name}
                                        </h3>


                                        <p>
                                            📍
                                            ${site.location}
                                        </p>


                                        <small>
                                            ✓
                                            ${
                                                isTamil
                                                    ? "பார்வையிட்ட தேதி"
                                                    : "Visited on"
                                            }

                                            ${
                                                site.date
                                                    ? site.date
                                                    : ""
                                            }

                                        </small>

                                    </div>

                                </div>

                            `;

                        })
                        .join("")

            }

        </div>

    `;


    modal.classList.add(
        "show"
    );

}


// ======================================================
// SHOW PROFILE PAGE
// ======================================================

function showProfilePage() {

    const savedUser =
        JSON.parse(
            localStorage.getItem(
                "heritageXUser"
            )
        );


    if (savedUser) {

        showUserProfile(
            savedUser
        );

    }

    else {

        showLoginPage();

    }

}


// ======================================================
// PROFILE LOGIN PAGE
// ======================================================

function showLoginPage() {

    sheet.innerHTML = `

        <button
            class="close"
            onclick="closeModal()"
        >
            ←
        </button>


        <div class="profile-page">

            <div class="profile-avatar">
                👤
            </div>


            <h2>

                ${
                    isTamil
                        ? "HeritageX-க்கு வரவேற்கிறோம்"
                        : "Welcome to HeritageX"
                }

            </h2>


            <p>

                ${
                    isTamil
                        ? "உங்கள் பாரம்பரிய பயணத்தைத் தொடங்குங்கள்."
                        : "Start your heritage journey."
                }

            </p>


            <input
                type="text"
                id="userName"
                placeholder="${
                    isTamil
                        ? "உங்கள் பெயர்"
                        : "Enter your name"
                }"
            >


            <input
                type="number"
                id="userAge"
                placeholder="${
                    isTamil
                        ? "உங்கள் வயது"
                        : "Enter your age"
                }"
                min="1"
                max="120"
            >


            <button
                class="profile-action"
                id="saveProfileBtn"
            >

                ${
                    isTamil
                        ? "சுயவிவரத்தை சேமிக்கவும்"
                        : "Save Profile"
                }

            </button>

        </div>

    `;


    modal.classList.add(
        "show"
    );


    document
        .getElementById(
            "saveProfileBtn"
        )
        .addEventListener(

            "click",

            saveUserProfile

        );

}


// ======================================================
// SAVE USER PROFILE
// ======================================================

function saveUserProfile() {

    const nameInput =
        document.getElementById(
            "userName"
        );


    const ageInput =
        document.getElementById(
            "userAge"
        );


    const name =
        nameInput.value.trim();


    const age =
        ageInput.value.trim();


    if (name === "") {

        alert(

            isTamil
                ? "உங்கள் பெயரை உள்ளிடவும்."
                : "Please enter your name."

        );

        nameInput.focus();

        return;

    }


    if (age === "") {

        alert(

            isTamil
                ? "உங்கள் வயதை உள்ளிடவும்."
                : "Please enter your age."

        );

        ageInput.focus();

        return;

    }


    const user = {

        name:
            name,

        age:
            age,

        joined:
            new Date()
                .toLocaleDateString()

    };


    localStorage.setItem(

        "heritageXUser",

        JSON.stringify(
            user
        )

    );


    showUserProfile(
        user
    );

}


// ======================================================
// SHOW USER PROFILE
// ======================================================

function showUserProfile(user) {

    const visitedSites =
        JSON.parse(

            localStorage.getItem(
                "visitedHeritageSites"
            )

        ) || [];


    sheet.innerHTML = `

        <button
            class="close"
            onclick="closeModal()"
        >
            ←
        </button>


        <div class="profile-page">

            <div class="profile-avatar">
                👤
            </div>


            <h2>
                ${user.name}
            </h2>


            <p>

                ${
                    isTamil
                        ? "வயது"
                        : "Age"
                }

                :
                ${user.age}

            </p>


            <div class="profile-info">

                <div class="profile-info-item">

                    <span class="profile-info-icon">
                        🏛️
                    </span>

                    <div>

                        <strong>

                            ${
                                isTamil
                                    ? "பாரம்பரிய ஆராய்ச்சியாளர்"
                                    : "Heritage Explorer"
                            }

                        </strong>

                        <small>

                            ${
                                isTamil
                                    ? "பாரம்பரியத்தை ஆராயுங்கள்"
                                    : "Explore the world of heritage"
                            }

                        </small>

                    </div>

                </div>


                <!-- HERITAGE PASSPORT -->

                <button
                    class="profile-info-item passport-card"
                    id="profilePassportBtn"
                >

                    <span class="profile-info-icon">
                        🎫
                    </span>

                    <div>

                        <strong>

                            ${
                                isTamil
                                    ? "பாரம்பரிய பாஸ்போர்ட்"
                                    : "Heritage Passport"
                            }

                        </strong>

                        <small>

                            ${
                                isTamil
                                    ? "உங்கள் பாரம்பரிய பயணத்தைப் பார்க்கவும்"
                                    : "View your heritage journey"
                            }

                        </small>

                    </div>

                    <span class="profile-arrow">
                        ›
                    </span>

                </button>


                <div class="profile-info-item">

                    <span class="profile-info-icon">
                        📍
                    </span>

                    <div>

                        <strong>

                            ${
                                isTamil
                                    ? "பார்வையிட்ட இடங்கள்"
                                    : "Sites Visited"
                            }

                        </strong>

                        <small>

                            ${visitedSites.length}

                        </small>

                    </div>

                </div>

            </div>


            <button
                class="profile-action"
                id="editProfileBtn"
            >

                ✏️

                ${
                    isTamil
                        ? "சுயவிவரத்தை திருத்து"
                        : "Edit Profile"
                }

            </button>


            <button
                class="profile-action logout-btn"
                id="logoutBtn"
            >

                🚪

                ${
                    isTamil
                        ? "வெளியேறு"
                        : "Logout"
                }

            </button>

        </div>

    `;


    modal.classList.add(
        "show"
    );


    // PASSPORT

    const profilePassportBtn =
        document.getElementById(
            "profilePassportBtn"
        );


    if (profilePassportBtn) {

        profilePassportBtn.addEventListener(

            "click",

            showPassportPage

        );

    }


    // EDIT PROFILE

    const editProfileBtn =
        document.getElementById(
            "editProfileBtn"
        );


    if (editProfileBtn) {

        editProfileBtn.addEventListener(

            "click",

            function () {

                showEditProfile(
                    user
                );

            }

        );

    }


    // LOGOUT

    const logoutBtn =
        document.getElementById(
            "logoutBtn"
        );


    if (logoutBtn) {

        logoutBtn.addEventListener(

            "click",

            logoutUser

        );

    }

}


// ======================================================
// EDIT PROFILE
// ======================================================

function showEditProfile(user) {

    sheet.innerHTML = `

        <button
            class="close"
            onclick="showUserProfile(
                JSON.parse(
                    localStorage.getItem(
                        'heritageXUser'
                    )
                )
            )"
        >
            ←
        </button>


        <div class="profile-page">

            <div class="profile-avatar">
                ✏️
            </div>


            <h2>

                ${
                    isTamil
                        ? "சுயவிவரத்தை திருத்து"
                        : "Edit Profile"
                }

            </h2>


            <input
                type="text"
                id="editName"
                value="${user.name}"
                placeholder="${
                    isTamil
                        ? "உங்கள் பெயர்"
                        : "Enter your name"
                }"
            >


            <input
                type="number"
                id="editAge"
                value="${user.age}"
                min="1"
                max="120"
                placeholder="${
                    isTamil
                        ? "உங்கள் வயது"
                        : "Enter your age"
                }"
            >


            <button
                class="profile-action"
                id="updateProfileBtn"
            >

                💾

                ${
                    isTamil
                        ? "சேமிக்கவும்"
                        : "Update Profile"
                }

            </button>

        </div>

    `;


    const updateProfileBtn =
        document.getElementById(
            "updateProfileBtn"
        );


    updateProfileBtn.addEventListener(

        "click",

        function () {

            const updatedName =
                document
                    .getElementById(
                        "editName"
                    )
                    .value
                    .trim();


            const updatedAge =
                document
                    .getElementById(
                        "editAge"
                    )
                    .value
                    .trim();


            if (

                updatedName === ""

                ||

                updatedAge === ""

            ) {

                alert(

                    isTamil
                        ? "அனைத்து விவரங்களையும் உள்ளிடவும்."
                        : "Please fill all details."

                );

                return;

            }


            const updatedUser = {

                name:
                    updatedName,

                age:
                    updatedAge,

                joined:
                    user.joined

            };


            localStorage.setItem(

                "heritageXUser",

                JSON.stringify(
                    updatedUser
                )

            );


            showUserProfile(
                updatedUser
            );

        }

    );

}


// ======================================================
// HERITAGE PASSPORT PAGE
// ======================================================

function showPassportPage() {

    const user =
        JSON.parse(

            localStorage.getItem(
                "heritageXUser"
            )

        );


    const visitedSites =
        JSON.parse(

            localStorage.getItem(
                "visitedHeritageSites"
            )

        ) || [];


    sheet.innerHTML = `

        <button
            class="close"
            onclick="showProfilePage()"
        >
            ←
        </button>


        <div class="passport-page">

            <div class="passport-header">

                <div class="passport-logo">
                    🏛️
                </div>


                <h2>

                    ${
                        isTamil
                            ? "பாரம்பரிய பாஸ்போர்ட்"
                            : "Heritage Passport"
                    }

                </h2>


                <p>

                    ${
                        isTamil
                            ? "உங்கள் பாரம்பரிய பயணம்"
                            : "Your journey through heritage"
                    }

                </p>

            </div>


            <div class="passport-user">

                <strong>

                    ${
                        user
                            ? user.name
                            : (
                                isTamil
                                    ? "பயணி"
                                    : "Explorer"
                            )
                    }

                </strong>


                <span>

                    ${
                        isTamil
                            ? "பாரம்பரிய ஆராய்ச்சியாளர்"
                            : "Heritage Explorer"
                    }

                </span>

            </div>


            <div class="passport-stats">

                <div>

                    <strong>
                        ${visitedSites.length}
                    </strong>

                    <span>

                        ${
                            isTamil
                                ? "பார்வையிட்ட இடங்கள்"
                                : "Sites Visited"
                        }

                    </span>

                </div>


                <div>

                    <strong>
                        ${visitedSites.length}
                    </strong>

                    <span>

                        ${
                            isTamil
                                ? "சாதனைகள்"
                                : "Achievements"
                        }

                    </span>

                </div>

            </div>


            <h3>

                ${
                    isTamil
                        ? "உங்கள் பாரம்பரிய பயணம்"
                        : "Your Heritage Journey"
                }

            </h3>


            <div class="passport-sites">

                ${
                    visitedSites.length === 0

                        ? `

                            <div class="empty-passport">

                                <div class="empty-passport-icon">
                                    🗺️
                                </div>


                                <p>

                                    ${
                                        isTamil
                                            ? "நீங்கள் இன்னும் எந்த பாரம்பரிய இடத்தையும் பார்வையிடவில்லை."
                                            : "You have not visited any heritage site yet."
                                    }

                                </p>


                                <small>

                                    ${
                                        isTamil
                                            ? "வரைபடத்தில் ஒரு கோவிலைத் தேர்ந்தெடுத்து உங்கள் பயணத்தைத் தொடங்குங்கள்!"
                                            : "Select a temple from the map to start your journey!"
                                    }

                                </small>

                            </div>

                        `

                        :

                        visitedSites

                            .map(function (site) {

                                return `

                                    <div
                                        class="passport-site"
                                    >

                                        <span
                                            class="passport-site-icon"
                                        >
                                            🛕
                                        </span>


                                        <div>

                                            <strong>
                                                ${site.name}
                                            </strong>


                                            <small>
                                                ${site.location}
                                            </small>

                                        </div>


                                        <span
                                            class="visited-check"
                                        >
                                            ✓
                                        </span>

                                    </div>

                                `;

                            })

                            .join("")

                }

            </div>

        </div>

    `;


    modal.classList.add(
        "show"
    );

}


// ======================================================
// SAVE TEMPLE TO PASSPORT
// ======================================================

function saveToHeritagePassport(
    site
) {

    let visitedSites =
        JSON.parse(

            localStorage.getItem(
                "visitedHeritageSites"
            )

        ) || [];


    const alreadyVisited =
        visitedSites.some(

            function (item) {

                return (

                    item.id ===
                    site.id

                );

            }

        );


    if (!alreadyVisited) {

        visitedSites.push({

            id:
                site.id,

            name:
                site.name,

            location:
                site.location

        });


        localStorage.setItem(

            "visitedHeritageSites",

            JSON.stringify(
                visitedSites
            )

        );

    }

}


// ======================================================
// LOGOUT
// ======================================================

function logoutUser() {

    const confirmLogout =
        confirm(

            isTamil

                ? "நிச்சயமாக வெளியேற விரும்புகிறீர்களா?"

                : "Are you sure you want to logout?"

        );


    if (!confirmLogout) {

        return;

    }


    localStorage.removeItem(
        "heritageXUser"
    );


    showLoginPage();

}


// ======================================================
// GLOBAL FUNCTIONS
// ======================================================

window.showProfilePage =
    showProfilePage;


window.showLoginPage =
    showLoginPage;


window.showUserProfile =
    showUserProfile;


window.showEditProfile =
    showEditProfile;


window.showPassportPage =
    showPassportPage;


window.saveUserProfile =
    saveUserProfile;


window.saveToHeritagePassport =
    saveToHeritagePassport;


window.logoutUser =
    logoutUser;
// ======================================================
// QR SCANNER
// ======================================================

document
    .getElementById("scanBtn")
    .addEventListener("click", function () {

        openQRScanner();

    });


// ======================================================
// OPEN QR SCANNER
// ======================================================

function openQRScanner() {

    sheet.innerHTML = `

        <button
            class="close"
            onclick="closeModal()"
        >
            ✕
        </button>


        <div class="scanner-header">

            <div class="scanner-icon">
                📷
            </div>


            <h2>
                Scan Heritage QR
            </h2>


            <p>
                Scan a heritage site QR code to discover its story.
            </p>

        </div>


        <div
            id="qr-reader"
            class="qr-reader"
        ></div>


        <div
            id="scanResult"
            class="scan-result"
        >
        </div>


        <button
            id="startScannerBtn"
            class="start-scanner-btn"
        >
            📷 Start Scanner
        </button>

    `;


    modal.classList.add("show");


    document
        .getElementById("startScannerBtn")
        .addEventListener(
            "click",
            startQRScanner
        );

}
// ======================================================
// START QR SCANNER
// ======================================================

let qrScanner = null;


function startQRScanner() {

    const scannerElement =
        document.getElementById(
            "qr-reader"
        );


    if (!scannerElement) {

        return;

    }


    qrScanner =
        new Html5Qrcode(
            "qr-reader"
        );


    qrScanner.start(

        {
            facingMode:
                "environment"

        },


        {

            fps:
                10,

            qrbox:
                250

        },


        function (decodedText) {

            handleQRCode(
                decodedText
            );


            stopQRScanner();

        },


        function (errorMessage) {

            // Ignore continuous scanning errors

        }

    )
    .catch(function (error) {

        console.error(
            "QR Scanner Error:",
            error
        );


        alert(
            "Camera permission is required to scan QR codes."
        );

    });

}
// ======================================================
// STOP QR SCANNER
// ======================================================

function stopQRScanner() {

    if (qrScanner) {

        qrScanner.stop()

            .then(function () {

                qrScanner.clear();

            })

            .catch(function (error) {

                console.log(
                    "Scanner stop error:",
                    error
                );

            });

    }

}
// ======================================================
// HANDLE QR CODE
// ======================================================

function handleQRCode(
    qrText
) {

    console.log(
        "QR Code Scanned:",
        qrText
    );


    // Example QR text:
    //
    // heritagex://temple/thindal
    //
    // or simply:
    //
    // thindal


    let siteId =
        qrText;


    if (
        qrText.includes(
            "heritagex://temple/"
        )
    ) {

        siteId =
            qrText.replace(
                "heritagex://temple/",
                ""
            );

    }


    const site =
        mapSites.find(function (item) {

            return (

                item.id
                ===
                siteId

            );

        });


    if (!site) {

        const result =
            document.getElementById(
                "scanResult"
            );


        if (result) {

            result.innerHTML = `

                <div class="scan-error">

                    ❌ QR Code Not Recognized

                    <p>
                        This QR code is not connected to HeritageX.
                    </p>

                </div>

            `;

        }


        return;

    }


    // Update HeritageX with selected temple

    updateHeritageSite(
        site.id
    );

}



// ======================================================
// MAP ELEMENTS
// ======================================================

const mapModal =
    document.getElementById(
        "mapModal"
    );


const mapBtn =
    document.getElementById(
        "mapBtn"
    );


const closeMapBtn =
    document.getElementById(
        "closeMapBtn"
    );


const myLocationBtn =
    document.getElementById(
        "myLocationBtn"
    );


let heritageMap =
    null;


let userMarker =
    null;


let userCircle =
    null;


// ======================================================
// TEMPLE DATABASE
// ======================================================

const mapSites = [

    {

        id:
            "thindal",

        name:
            "Thindal Murugan Temple",

        location:
            "Erode, Tamil Nadu",

        lat:
            11.3136,

        lng:
            77.7172,

        story:
            "A sacred hill temple dedicated to Lord Murugan and an important cultural landmark in Erode."

    },


    {

        id:
            "brihadeeswarar",

        name:
            "Brihadeeswarar Temple",

        location:
            "Thanjavur, Tamil Nadu",

        lat:
            10.7828,

        lng:
            79.1318,

        story:
            "A magnificent Chola-era temple famous for its incredible architecture and history."

    },


    {

        id:
            "meenakshi",

        name:
            "Meenakshi Amman Temple",

        location:
            "Madurai, Tamil Nadu",

        lat:
            9.9195,

        lng:
            78.1193,

        story:
            "One of the most famous temples in Tamil Nadu, known for its colourful towers and rich cultural heritage."

    },


    {

        id:
            "shore",

        name:
            "Shore Temple",

        location:
            "Mahabalipuram, Tamil Nadu",

        lat:
            12.6169,

        lng:
            80.1927,

        story:
            "A historic Pallava temple located beside the sea."

    }

];


// ======================================================
// OPEN MAP
// ======================================================

mapBtn.addEventListener(

    "click",

    function () {

        mapModal.classList.add(
            "show"
        );


        setTimeout(

            function () {

                if (
                    !heritageMap
                ) {

                    createMap();

                }


                heritageMap.invalidateSize();


                findUserLocation();

            },

            300

        );

    }

);


// ======================================================
// CREATE MAP
// ======================================================

function createMap() {

    heritageMap =
        L.map(
            "heritageMap"
        );


    heritageMap.setView(

        [

            11.1271,

            78.6569

        ],

        7

    );


    L.tileLayer(

        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",

        {

            attribution:
                "&copy; OpenStreetMap contributors"

        }

    ).addTo(
        heritageMap
    );


    mapSites.forEach(

        function (site) {

            addTempleMarker(
                site
            );

        }

    );

}


// ======================================================
// ADD TEMPLE MARKER
// ======================================================

function addTempleMarker(site) {

    const marker =
        L.marker(

            [

                site.lat,

                site.lng

            ]

        ).addTo(
            heritageMap
        );


    marker.bindPopup(`

        <div class="map-popup">

            <h3>
                ${site.name}
            </h3>

            <p>
                ${site.location}
            </p>

            <button
                class="explore-site"
                data-site-id="${site.id}"
            >
                Explore Heritage
            </button>

        </div>

    `);


    marker.on(

        "popupopen",

        function () {

            const button =
                document.querySelector(

                    `.explore-site[data-site-id="${site.id}"]`

                );


            if (
                button
            ) {

                button.onclick =
                    function () {

                        updateHeritageSite(
                            site.id
                        );

                    };

            }

        }

    );

}


// ======================================================
// FIND USER LOCATION
// ======================================================

function findUserLocation() {

    if (
        !navigator.geolocation
    ) {

        alert(
            "Location is not supported by your browser."
        );


        return;

    }


    navigator.geolocation.getCurrentPosition(

        function (position) {

            const latitude =
                position.coords.latitude;


            const longitude =
                position.coords.longitude;


            showUserLocation(

                latitude,

                longitude

            );


            findNearbyTemples(

                latitude,

                longitude

            );

        },


        function (error) {

            if (
                error.code === 1
            ) {

                alert(
                    "Please allow location access to find nearby temples."
                );

            }

            else {

                alert(
                    "Unable to get your current location."
                );

            }

        },

        {

            enableHighAccuracy:
                true,

            timeout:
                10000,

            maximumAge:
                0

        }

    );

}


// ======================================================
// SHOW USER LOCATION
// ======================================================

function showUserLocation(

    latitude,

    longitude

) {

    const userPosition = [

        latitude,

        longitude

    ];


    if (
        userMarker
    ) {

        heritageMap.removeLayer(
            userMarker
        );

    }


    if (
        userCircle
    ) {

        heritageMap.removeLayer(
            userCircle
        );

    }


    userMarker =
        L.marker(
            userPosition
        )
        .addTo(
            heritageMap
        );


    userMarker.bindPopup(
        "📍 You are here"
    );


    userCircle =
        L.circle(

            userPosition,

            {

                radius:
                    1000,

                color:
                    "#087e86",

                fillColor:
                    "#08b7af",

                fillOpacity:
                    0.15

            }

        )
        .addTo(
            heritageMap
        );


    heritageMap.setView(

        userPosition,

        10

    );

}


// ======================================================
// CALCULATE DISTANCE
// ======================================================

function calculateDistance(

    lat1,

    lon1,

    lat2,

    lon2

) {

    const earthRadius =
        6371;


    const dLat =

        (

            lat2 -
            lat1

        )

        *

        Math.PI
        /
        180;


    const dLon =

        (

            lon2 -
            lon1

        )

        *

        Math.PI
        /
        180;


    const a =

        Math.sin(
            dLat / 2
        )

        *

        Math.sin(
            dLat / 2
        )

        +

        Math.cos(

            lat1 *
            Math.PI /
            180

        )

        *

        Math.cos(

            lat2 *
            Math.PI /
            180

        )

        *

        Math.sin(
            dLon / 2
        )

        *

        Math.sin(
            dLon / 2
        );


    const c =

        2 *
        Math.atan2(

            Math.sqrt(a),

            Math.sqrt(
                1 - a
            )

        );


    return (

        earthRadius *
        c

    );

}


// ======================================================
// FIND NEARBY TEMPLES
// ======================================================

function findNearbyTemples(

    userLatitude,

    userLongitude

) {

    const nearbyTemples =

        mapSites

            .map(

                function (site) {

                    const distance =

                        calculateDistance(

                            userLatitude,

                            userLongitude,

                            site.lat,

                            site.lng

                        );


                    return {

                        site:
                            site,

                        distance:
                            distance

                    };

                }

            )

            .filter(

                function (item) {

                    return (

                        item.distance <=
                        100

                    );

                }

            )

            .sort(

                function (a, b) {

                    return (

                        a.distance -
                        b.distance

                    );

                }

            );


    console.log(

        "Nearby temples:",

        nearbyTemples

    );

}


// ======================================================
// MY LOCATION BUTTON
// ======================================================

myLocationBtn.addEventListener(

    "click",

    function () {

        findUserLocation();

    }

);


// ======================================================
// CLOSE MAP
// ======================================================

closeMapBtn.addEventListener(

    "click",

    function () {

        mapModal.classList.remove(
            "show"
        );

    }

);


// ======================================================
// UPDATE HOME PAGE WHEN A TEMPLE IS SELECTED FROM MAP
// ======================================================

function updateHeritageSite(siteId) {

    // Find the selected temple
    const site = mapSites.find(function (item) {
        return item.id === siteId;
    });

    if (!site) {
        console.error("Temple not found:", siteId);
        return;
    }


    // ==========================================
    // SAVE SELECTED TEMPLE
    // ==========================================

    currentSite = site;
// ==================================================
// SAVE TEMPLE TO HERITAGE PASSPORT
// ==================================================

saveToHeritagePassport(site);
    // ==========================================
// SAVE VISITED HERITAGE SITE
// ==========================================

let visitedSites =
    JSON.parse(
        localStorage.getItem("visitedSites")
    ) || [];


// Avoid duplicate visits

const alreadyVisited =
    visitedSites.some(function (visited) {

        return visited.id === site.id;

    });


if (!alreadyVisited) {

    visitedSites.push({

        id: site.id,

        name: site.name,

        location: site.location,

        date: new Date().toLocaleDateString()

    });


    localStorage.setItem(

        "visitedSites",

        JSON.stringify(visitedSites)

    );

}


    // ==========================================
    // UPDATE TEMPLE NAME AND LOCATION
    // ==========================================

    const siteCard = document.querySelector(".site-card");

    if (siteCard) {

        const templeName =
            siteCard.querySelector("h2");

        const templeLocation =
            siteCard.querySelector("p");


        if (templeName) {
            templeName.textContent = site.name;
        }


        if (templeLocation) {
            templeLocation.textContent = site.location;
        }

    }


    // ==========================================
    // UPDATE HERITAGE STORY
    // ==========================================

    if (storyTitle) {
        storyTitle.textContent = site.name;
    }


    if (storyText) {
        storyText.textContent = site.story;
    }


    // ==========================================
    // RESET STORY TAB TO STORY
    // ==========================================

    chips.forEach(function (chip) {

        chip.classList.remove("active");

    });


    const storyChip =
        document.querySelector(
            '.chip[data-type="story"]'
        );


    if (storyChip) {

        storyChip.classList.add("active");

    }


    // ==========================================
    // CLOSE MAP
    // ==========================================

    mapModal.classList.remove("show");


    // ==========================================
    // GO BACK TO UPDATED HOME TEMPLE
    // ==========================================

    setTimeout(function () {

        const homeSite =
            document.querySelector(".site-card");


        if (homeSite) {

            homeSite.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    }, 200);


    console.log(
        "Home page updated:",
        site.name
    );

}

    // ==================================================
    // SAVE SELECTED TEMPLE
    // ==================================================

    currentSite =
        site;
    addSiteToPassport(site);
    saveToHeritagePassport(site);


    // ==================================================
    // STOP CURRENT AUDIO
    // ==================================================

    window.speechSynthesis.cancel();


    document
        .getElementById(
            "playBtn"
        )
        .textContent =
        "▶";


    // ==================================================
    // UPDATE TEMPLE CARD
    // ==================================================

    const siteCard =
        document.querySelector(
            ".site-card"
        );


    if (
        siteCard
    ) {


        const templeIcon =
            siteCard.querySelector(
                ".temple"
            );


        if (
            templeIcon
        ) {

            templeIcon.textContent =
                "🛕";

        }


        const name =
            siteCard.querySelector(
                "h2"
            );


        if (
            name
        ) {

            name.textContent =
                site.name;

        }


        const location =
            siteCard.querySelector(
                "p"
            );


        if (
            location
        ) {

            location.textContent =
                site.location;

        }

    }


    // ==================================================
    // RESET STORY TAB
    // ==================================================

    chips.forEach(

        function (chip) {

            chip.classList.remove(
                "active"
            );

        }

    );


    const storyChip =
        document.querySelector(

            '.chip[data-type="story"]'

        );


    if (
        storyChip
    ) {

        storyChip.classList.add(
            "active"
        );

    }


    // ==================================================
    // UPDATE SELECTED TEMPLE STORY
    // ==================================================

    updateStory(
        "story"
    );


    // ==================================================
    // CLOSE MAP
    // ==================================================

    mapModal.classList.remove(
        "show"
    );


    // ==================================================
    // SCROLL TO SELECTED HERITAGE
    // ==================================================

    setTimeout(

        function () {

            const siteCard =
                document.querySelector(
                    ".site-card"
                );


            if (
                siteCard
            ) {

                siteCard.scrollIntoView({

                    behavior:
                        "smooth",

                    block:
                        "start"

                });

            }

        },

        300

    );


    console.log(

        "Selected temple:",

        site.name

    );

