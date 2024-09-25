const questions = [
    { question: "What year was All Elite Wrestling (AEW) founded?", answer: "2019" },
    { question: "Who are the founders of AEW?", answer: "Tony Khan, Cody Rhodes, The Young Bucks (Matt and Nick Jackson), and Kenny Omega" },
    { question: "Who is the current President and CEO of AEW?", answer: "Tony Khan" },
    { question: "What was the name of AEW's first official pay-per-view event?", answer: "Double or Nothing (2019)" },
    { question: "Which network broadcasts AEW Dynamite in the U.S.?", answer: "TBS" },
    { question: "What day of the week does AEW Dynamite air?", answer: "Wednesday" },
    { question: "Who was the first-ever AEW World Champion?", answer: "Chris Jericho" },
    { question: "Who defeated Chris Jericho to become the second AEW World Champion?", answer: "Jon Moxley" },
    { question: "What is the name of AEW's women's division championship?", answer: "AEW Women’s World Championship" },
    { question: "Who was the first AEW Women’s World Champion?", answer: "Riho" },
    { question: "Which wrestler is known for his catchphrase 'A little bit of the bubbly'?", answer: "Chris Jericho" },
    { question: "Who is known as “The Cleaner” in AEW?", answer: "Kenny Omega" },
    { question: "What AEW faction is known as 'The Inner Circle'?", answer: "Chris Jericho's group" },
    { question: "Which tag team in AEW is known as “The Lucha Brothers”?", answer: "Penta El Zero Miedo and Rey Fénix" },
    { question: "Who was the inaugural AEW TNT Champion?", answer: "Cody Rhodes" },
    { question: "What year did Jon Moxley make his AEW debut?", answer: "2019 (at Double or Nothing)" },
    { question: "What is the name of AEW’s Friday night show?", answer: "Rampage" },
    { question: "Which AEW wrestler uses the nickname “Freshly Squeezed”?", answer: "Orange Cassidy" },
    { question: "Who won the AEW World Tag Team Championship at All Out 2021?", answer: "The Lucha Brothers (Penta El Zero Miedo and Rey Fénix)" },
    { question: "What is the name of AEW’s signature Casino Battle Royale match?", answer: "The Casino Battle Royale" },
    { question: "Who is the leader of The Elite faction in AEW?", answer: "Kenny Omega" },
    { question: "What is the signature move of AEW wrestler Darby Allin?", answer: "The Coffin Drop" },
    { question: "Who is known as 'The Best Bout Machine' in AEW?", answer: "Kenny Omega" },
    { question: "What event marked CM Punk’s return to professional wrestling in AEW?", answer: "AEW Rampage: The First Dance (2021)" },
    { question: "Who is AEW’s first two-time TNT Champion?", answer: "Cody Rhodes" },
    { question: "What is the name of AEW’s annual November pay-per-view event?", answer: "Full Gear" },
    { question: "Which AEW wrestler is known as 'The Mad King'?", answer: "Eddie Kingston" },
    { question: "Who defeated Kenny Omega to become AEW World Champion at Full Gear 2021?", answer: "'Hangman' Adam Page" },
    { question: "Who was the first wrestler to win the AEW Women’s World Championship twice?", answer: "Hikaru Shida" },
    { question: "What faction did MJF lead in AEW?", answer: "The Pinnacle" },
    { question: "What is AEW’s signature match type that involves two rings surrounded by a cage?", answer: "WarGames (referred to in AEW as Blood & Guts)" },
    { question: "Which WWE Hall of Famer made his AEW debut at Winter Is Coming 2020?", answer: "Sting" },
    { question: "Who are the members of the tag team FTR in AEW?", answer: "Dax Harwood and Cash Wheeler" },
    { question: "What is the name of the AEW title that is defended internationally as a secondary singles championship?", answer: "AEW International Championship" },
    { question: "Which AEW faction is led by Jon Moxley?", answer: "The Blackpool Combat Club" },
    { question: "Who won the AEW World Title Eliminator Tournament at Full Gear 2020?", answer: "Kenny Omega" },
    { question: "Which AEW factions had a cinematic match called the 'Stadium Stampede'?", answer: "The Elite vs. The Inner Circle" },
    { question: "What is the name of AEW’s annual September pay-per-view event?", answer: "All Out" },
    { question: "Who won the inaugural AEW Trios Championship?", answer: "The Elite (Kenny Omega and The Young Bucks)" },
    { question: "Who is known as 'The Bastard' in AEW?", answer: "PAC" },
    { question: "Who faced Jon Moxley in the AEW World Championship match at Double or Nothing 2020?", answer: "Brodie Lee" },
    { question: "What AEW event was held in front of a sold-out crowd in Arthur Ashe Stadium in New York?", answer: "AEW Dynamite: Grand Slam" },
    { question: "Who are the tag team champions known as The Young Bucks?", answer: "Matt and Nick Jackson" },
    { question: "What signature move does AEW wrestler Cody Rhodes use?", answer: "The Cross Rhodes" },
    { question: "Which AEW event featured the exploding barbed wire deathmatch between Kenny Omega and Jon Moxley?", answer: "Revolution 2021" },
    { question: "Who did Darby Allin defeat to win his first AEW TNT Championship?", answer: "Cody Rhodes" },
    { question: "What is the name of the submission move used by Bryan Danielson in AEW?", answer: "The LeBell Lock" },
    { question: "Which AEW wrestler is known for their “cowboy sh*t” catchphrase?", answer: "'Hangman' Adam Page" },
    { question: "What AEW event did Chris Jericho face Kenny Omega in their first match in the promotion?", answer: "Double or Nothing 2019" },
    { question: "Who are the members of the Death Triangle faction in AEW?", answer: "PAC, Penta El Zero Miedo, and Rey Fénix" },
    { question: "Which female wrestler won the AEW Women’s World Championship at All Out 2021?", answer: "Dr. Britt Baker, D.M.D." },
    { question: "What AEW show was launched in June 2023 on Saturday nights?", answer: "AEW Collision" },
    { question: "Who won the first-ever AEW Casino Ladder Match at Double or Nothing 2020?", answer: "Brian Cage" },
    { question: "Which AEW wrestler has the nickname 'The Spanish God'?", answer: "Sammy Guevara" },
    { question: "Who was the first AEW wrestler to appear on a WWE program?", answer: "Chris Jericho" },
    { question: "What is the name of AEW’s developmental show that features up-and-coming talent?", answer: "AEW Dark" },
    { question: "Who won the AEW World Tag Team Championship at Revolution 2020?", answer: "Kenny Omega and 'Hangman' Adam Page" },
    { question: "Which AEW wrestler is famous for their entrance song, 'Judas'?", answer: "Chris Jericho" },
    { question: "Who was the first person to win the AEW All-Atlantic Championship?", answer: "PAC" },
    { question: "What was the main event of AEW Full Gear 2022?", answer: "Jon Moxley vs. MJF for the AEW World Championship" },
    { question: "What was the original name of the AEW International Championship?", answer: "The AEW All-Atlantic Championship" },
    { question: "Who was the first AEW wrestler to win the IWGP United States Heavyweight Championship while also competing in AEW?", answer: "Jon Moxley" },
    { question: "What was the date of AEW’s inaugural episode of Dynamite on TNT?", answer: "October 2, 2019" },
    { question: "Who did Hikaru Shida defeat to win her first AEW Women’s World Championship?", answer: "Nyla Rose" },
    { question: "Which wrestler made a surprise debut as the Joker in the Casino Battle Royale at All Out 2022?", answer: "MJF (under a mask as the Joker)" },
    { question: "What match type did AEW introduce at Revolution 2022, featuring barbed wire ropes and a 30-minute countdown?", answer: "Exploding Barbed Wire Deathmatch" },
    { question: "Which AEW wrestler has a signature move called 'The Dead Eye'?", answer: "'Hangman' Adam Page" },
    { question: "Who was the first wrestler to pin Kenny Omega in AEW after he won the AEW World Championship?", answer: "Christian Cage" },
    { question: "What is the name of the AEW event co-produced with NJPW in 2022?", answer: "Forbidden Door" },
    { question: "Who won the AEW World Championship Eliminator Tournament at Full Gear 2022?", answer: "Ricky Starks" },
    { question: "Which tag team did SCU defeat to become the first-ever AEW World Tag Team Champions?", answer: "The Lucha Brothers" },
    { question: "What was the outcome of Jon Moxley vs. Kenny Omega in their unsanctioned match at Full Gear 2019?", answer: "Jon Moxley won" },
    { question: "Who was Cody Rhodes’ opponent in the first-ever AEW Steel Cage Match in February 2020?", answer: "Wardlow" },
    { question: "Which AEW star turned heel and joined the Blackpool Combat Club in 2023?", answer: "Wheeler Yuta" },
    { question: "What was the final match type in the feud between Sammy Guevara and Matt Hardy at Full Gear 2020?", answer: "Elite Deletion Match" },
    { question: "Who was the first wrestler to hold both the AEW World Championship and the AAA Mega Championship simultaneously?", answer: "Kenny Omega" },
    { question: "Who faced Chris Jericho in the first-ever AEW World Championship match at All Out 2019?", answer: "'Hangman' Adam Page" }
];

let currentQuestionIndex = 0;

function showQuestion() {
    const questionContainer = document.getElementById("question");
    const answerContainer = document.getElementById("answer-container");

    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;

    // Create answer button
    const answerButton = document.createElement("div");
    answerButton.textContent = currentQuestion.answer;
    answerButton.classList.add("answer");
    answerButton.onclick = selectAnswer; // Attach click event to answer

    // Clear previous answers and show new answer
    answerContainer.innerHTML = ""; 
    answerContainer.appendChild(answerButton);
}

function selectAnswer() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert("Quiz complete!");
        currentQuestionIndex = 0; // Reset for replay
        showQuestion(); // Show first question again
    }
}

showQuestion();
