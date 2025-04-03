document.addEventListener("DOMContentLoaded", function () {
    const questionEl = document.getElementById("question");
    const optionsEl = document.getElementById("options");
    const timerEl = document.getElementById("time");
    const messageEl = document.getElementById("message");

    let currentQuestion = 0;
    let timeLeft = 10;
    let timer;

    const questions = [
        {
            question: "Who is Batman's real identity?",
            options: ["Bruce Wayne", "Clark Kent", "Tony Stark", "Peter Parker"],
            answer: "Bruce Wayne"
        },
        {
            question: "What is Bruce Wayne’s biggest fear?",
            options: ["Heights", "Snakes", "Bats", "Darkness"],
            answer: "Bats"
        },
        {
            question: "What is the name of Batman's sidekick?",
            options: ["Nightwing", "Robin", "Joker", "Batgir"],
            answer: "Robin"
        },
        {
            question: "Which city does Batman protect?",
            options: ["Metropolis", "Gotham", "New York", "Central City"],
            answer: "Gotham"
        },
        {
            question: "What is the name of the mental asylum where Batman’s villains are often sent?",
            options: ["Belle Reve", "Gotham Penitentiary", "Blackgate Prison", "Arkham Asylum"],
            answer: "Arkham Asylum"
        },
        {
            question: "Which of these villains was originally a psychiatrist at Arkham Asylum?",
            options: ["The Riddler", "Poison Ivy", "Harley Quinn", "Mr. Freeze"],
            answer: "Harley Quinn"
        },
        {
            question: "What is the name of the substance that gives Bane his super strength?",
            options: ["Venom", "Titan", "Lazarus", "Fear Toxin"],
            answer: "Venom"
        },
        {
            question: "What is Batman’s main rule when dealing with criminals?",
            options: ["Never take off the mask", "Never kill", "Never work with the police", "Never use gadgets in a fight"],
            answer: "Never kill"
        },
        {
            question: " What is the name of Batman’s secret underground hideout?",
            options: ["The Bat-Lair", "The Dark Cave", "The Batcave", "Wayne Tower"],
            answer: "The Batcave"
        },
        {
            question: "What is the real name of the villain Two-Face?",
            options: ["Harvey Bullock", "Harvey Dent", "Edward Nygma", "Roman Sionis"],
            answer: "Harvey Dent"
        },
        {
            question: "Who trained Bruce Wayne in martial arts before he became Batman?",
            options: ["Bane", "Ra’s al Ghul", "Commissioner Gordon", "Alfred Pennyworth"],
            answer: "Ra’s al Ghul"
        },
        {
            question: "Which Gotham villain is obsessed with riddles and puzzles?",
            options: ["The Joker", "Scarecrow", "Mr. Freeze", "The Riddler"],
            answer: "The Riddler"
        },
        {
            question: "What is the name of the detective in Gotham who helps Batman fight crime?",
            options: ["Jim Gordon", "Harvey Bullock", "Jason Todd", "Lucius Fox"],
            answer: "Jim Gordon"
        },
        {
            question: " What is the name of the device Batman uses to summon bats?",
            options: ["Bat-Call", "Bat-Beacon", "Sonic Batarang", "Bat-Summoner"],
            answer: "Sonic Batarang"
        }
    ];

    function startQuiz() {
        showQuestion();
        startTimer();
    }

    function showQuestion() {
        if (currentQuestion < questions.length) {
            const q = questions[currentQuestion];
            questionEl.textContent = q.question;
            optionsEl.innerHTML = "";
            q.options.forEach(option => {
                const btn = document.createElement("button");
                btn.textContent = option;
                btn.addEventListener("click", () => checkAnswer(option));
                optionsEl.appendChild(btn);
            });
            timeLeft = 10;
        } else {
            endQuiz();
        }
    }

    function startTimer() {
        clearInterval(timer);
        timer = setInterval(() => {
            timeLeft--;
            timerEl.textContent = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(timer);
                endQuiz(false);
            }
        }, 1000);
    }

    function checkAnswer(selected) {
        if (selected === questions[currentQuestion].answer) {
            currentQuestion++;
            showQuestion();
            timeLeft = 10;
        } else {
            endQuiz(false);
        }
    }

    function endQuiz(success = true) {
        clearInterval(timer);
        questionEl.style.display = "none";
        optionsEl.style.display = "none";
        document.getElementById("timer").style.display = "none";

        if (success) {
            messageEl.classList.remove("hidden");
        } else {
            messageEl.textContent = "😢 You failed Gotham! Try again!";
            messageEl.classList.remove("hidden");
        }
    }

    startQuiz();
});
