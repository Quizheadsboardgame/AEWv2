const questions = [
    { question: "What year was All Elite Wrestling (AEW) founded?", answers: ["2017", "2018", "2019", "2020"], correct: 2 },
    { question: "Who are the founders of AEW?", answers: ["Tony Khan, Cody Rhodes", "Triple H, Shawn Michaels", "Tony Khan, Cody Rhodes, The Young Bucks, Kenny Omega", "Vince McMahon, Shane McMahon"], correct: 2 },
    { question: "Who is the current President and CEO of AEW?", answers: ["Cody Rhodes", "Tony Khan", "Kenny Omega", "Chris Jericho"], correct: 1 },
    { question: "What was the name of AEW's first official pay-per-view event?", answers: ["Double or Nothing (2019)", "All Out", "Full Gear", "Revolution"], correct: 0 },
    { question: "Which network broadcasts AEW Dynamite in the U.S.?", answers: ["TNT", "USA Network", "TBS", "Fox"], correct: 2 },
    { question: "What day of the week does AEW Dynamite air?", answers: ["Monday", "Tuesday", "Wednesday", "Friday"], correct: 2 },
    { question: "Who was the first-ever AEW World Champion?", answers: ["Chris Jericho", "Jon Moxley", "Kenny Omega", "Cody Rhodes"], correct: 0 },
    { question: "Who defeated Chris Jericho to become the second AEW World Champion?", answers: ["Cody Rhodes", "Jon Moxley", "Kenny Omega", "Hangman Adam Page"], correct: 1 },
    { question: "What is the name of AEW's women's division championship?", answers: ["AEW Women's Championship", "TBS Championship", "AEW World Championship", "NXT Women's Championship"], correct: 0 },
    { question: "Who was the first AEW Women’s World Champion?", answers: ["Riho", "Britt Baker", "Nyla Rose", "Hikaru Shida"], correct: 0 },
    { question: "Which wrestler is known for his catchphrase 'A little bit of the bubbly'?", answers: ["Chris Jericho", "Kenny Omega", "Cody Rhodes", "Orange Cassidy"], correct: 0 },
    { question: "Who is known as “The Cleaner” in AEW?", answers: ["Kenny Omega", "Cody Rhodes", "Chris Jericho", "Hangman Adam Page"], correct: 0 },
    { question: "What AEW faction is known as 'The Inner Circle'?", answers: ["The Elite", "The Inner Circle", "The Pinnacle", "The Dark Order"], correct: 1 },
    { question: "Which tag team in AEW is known as “The Lucha Brothers”?", answers: ["FTR", "Penta El Zero Miedo and Rey Fénix", "SCU", "The Young Bucks"], correct: 1 },
    { question: "Who was the inaugural AEW TNT Champion?", answers: ["Cody Rhodes", "Chris Jericho", "Jon Moxley", "Kenny Omega"], correct: 0 },
    { question: "What year did Jon Moxley make his AEW debut?", answers: ["2018", "2019", "2020", "2021"], correct: 1 },
    { question: "What is the name of AEW’s Friday night show?", answers: ["AEW Rampage", "AEW Dynamite", "AEW Collision", "AEW Dark"], correct: 0 },
    { question: "Which AEW wrestler uses the nickname 'Freshly Squeezed'?", answers: ["Orange Cassidy", "Cody Rhodes", "Chris Jericho", "MJF"], correct: 0 },
    { question: "Who won the AEW World Tag Team Championship at All Out 2021?", answers: ["The Lucha Brothers", "FTR", "SCU", "The Young Bucks"], correct: 0 },
    { question: "What is the name of AEW’s signature Casino Battle Royale match?", answers: ["Casino Royale", "Casino Battle Royale", "Royal Rumble", "Battle Royale"], correct: 1 },
    { question: "Who is the leader of The Elite faction in AEW?", answers: ["Kenny Omega", "Cody Rhodes", "Matt Jackson", "Nick Jackson"], correct: 0 },
    { question: "What is the signature move of AEW wrestler Darby Allin?", answers: ["The Coffin Drop", "The Stunner", "The RKO", "The F5"], correct: 0 },
    { question: "Who is known as 'The Best Bout Machine' in AEW?", answers: ["Kenny Omega", "Chris Jericho", "Cody Rhodes", "Jon Moxley"], correct: 0 },
    { question: "What event marked CM Punk’s return to professional wrestling in AEW?", answers: ["AEW Rampage: The First Dance", "All Out", "Double or Nothing", "Full Gear"], correct: 0 },
    { question: "Who is AEW’s first two-time TNT Champion?", answers: ["Cody Rhodes", "Sammy Guevara", "Jon Moxley", "Kenny Omega"], correct: 0 },
    { question: "What is the name of AEW’s annual November pay-per-view event?", answers: ["Full Gear", "Double or Nothing", "All Out", "Revolution"], correct: 0 },
    { question: "Which AEW wrestler is known as 'The Mad King'?", answers: ["Eddie Kingston", "Chris Jericho", "MJF", "Kenny Omega"], correct: 0 },
    { question: "Who defeated Kenny Omega to become AEW World Champion at Full Gear 2021?", answers: ["Jon Moxley", "Hangman Adam Page", "Cody Rhodes", "MJF"], correct: 1 },
    { question: "Who was the first wrestler to win the AEW Women’s World Championship twice?", answers: ["Hikaru Shida", "Riho", "Britt Baker", "Nyla Rose"], correct: 0 },
    { question: "What faction did MJF lead in AEW?", answers: ["The Pinnacle", "The Inner Circle", "The Elite", "The Dark Order"], correct: 0 },
    { question: "What is AEW’s signature match type that involves two rings surrounded by a cage?", answers: ["WarGames", "Blood & Guts", "Steel Cage Match", "Casino Battle Royale"], correct: 1 },
    { question: "Which WWE Hall of Famer made his AEW debut at Winter Is Coming 2020?", answers: ["Sting", "Chris Jericho", "Kurt Angle", "The Undertaker"], correct: 0 },
    { question: "Who are the members of the tag team FTR in AEW?", answers: ["Dax Harwood and Cash Wheeler", "Matt and Nick Jackson", "Cody Rhodes and Kenny Omega", "The Lucha Brothers"], correct: 0 },
    { question: "What is the name of the AEW title that is defended internationally as a secondary singles championship?", answers: ["AEW World Championship", "AEW International Championship", "AEW TNT Championship", "AEW Women's Championship"], correct: 1 },
    { question: "Which AEW faction is led by Jon Moxley?", answers: ["The Elite", "The Inner Circle", "The Dark Order", "The Blackpool Combat Club"], correct: 3 },
    { question: "Who won the AEW World Title Eliminator Tournament at Full Gear 2020?", answers: ["Kenny Omega", "Jon Moxley", "Cody Rhodes", "MJF"], correct: 0 },
    { question: "Which AEW factions had a cinematic match called the 'Stadium Stampede'?", answers: ["The Elite vs. The Inner Circle", "FTR vs. The Young Bucks", "The Dark Order vs. The Inner Circle", "The Elite vs. The Pinnacle"], correct: 0 },
    { question: "What is the name of AEW’s annual September pay-per-view event?", answers: ["All Out", "Double or Nothing", "Revolution", "Full Gear"], correct: 0 },
    { question: "Who won the inaugural AEW Trios Championship?", answers: ["The Elite", "The Lucha Brothers", "FTR", "SCU"], correct: 0 },
    { question: "Who is known as 'The Bastard' in AEW?", answers: ["PAC", "Kenny Omega", "Cody Rhodes", "Jon Moxley"], correct: 0 },
    { question: "Who faced Jon Moxley in the AEW World Championship match at Double or Nothing 2020?", answers: ["Brodie Lee", "Chris Jericho", "Cody Rhodes", "Kenny Omega"], correct: 0 },
    { question: "What AEW event was held in front of a sold-out crowd in Arthur Ashe Stadium in New York?", answers: ["AEW Dynamite: Grand Slam", "All Out", "Revolution", "Full Gear"], correct: 0 },
    { question: "Who are the tag team champions known as The Young Bucks?", answers: ["Matt and Nick Jackson", "FTR", "The Lucha Brothers", "SCU"], correct: 0 },
    { question: "What signature move does AEW wrestler Cody Rhodes use?", answers: ["The Cross Rhodes", "The RKO", "The Stunner", "The Bionic Elbow"], correct: 0 },
    { question: "Which AEW event featured the exploding barbed wire deathmatch between Kenny Omega and Jon Moxley?", answers: ["Revolution 2021", "Double or Nothing", "Full Gear", "All Out"], correct: 0 },
    { question: "Who did Darby Allin defeat to win his first AEW TNT Championship?", answers: ["Cody Rhodes", "MJF", "Kenny Omega", "Chris Jericho"], correct: 0 },
    { question: "What is the name of the submission move used by Bryan Danielson in AEW?", answers: ["The LeBell Lock", "The Crossface", "The Anaconda Vise", "The Kimura Lock"], correct: 0 },
    { question: "Which AEW wrestler is known for their “cowboy sh*t” catchphrase?", answers: ["'Hangman' Adam Page", "Cody Rhodes", "Kenny Omega", "Chris Jericho"], correct: 0 },
    { question: "What AEW event did Chris Jericho face Kenny Omega in their first match in the promotion?", answers: ["Double or Nothing 2019", "All Out", "Revolution", "Full Gear"], correct: 0 },
    { question: "Who are the members of the Death Triangle faction in AEW?", answers: ["PAC, Penta El Zero Miedo, Rey Fénix", "Kenny Omega, Matt and Nick Jackson", "FTR", "The Lucha Brothers"], correct: 0 },
    { question: "Which female wrestler won the AEW Women’s World Championship at All Out 2021?", answers: ["Dr. Britt Baker, D.M.D.", "Hikaru Shida", "Riho", "Nyla Rose"], correct: 0 },
    { question: "What AEW show was launched in June 2023 on Saturday nights?", answers: ["AEW Collision", "AEW Rampage", "AEW Dark", "AEW Dynamite"], correct: 0 },
    { question: "Who won the first-ever AEW Casino Ladder Match at Double or Nothing 2020?", answers: ["Brian Cage", "Kenny Omega", "Cody Rhodes", "Darby Allin"], correct: 0 },
    { question: "Which AEW wrestler has the nickname 'The Spanish God'?", answers: ["Sammy Guevara", "Kenny Omega", "Chris Jericho", "MJF"], correct: 0 },
    { question: "Who was the first AEW wrestler to appear on a WWE program?", answers: ["Chris Jericho", "Cody Rhodes", "Kenny Omega", "MJF"], correct: 0 },
    { question: "What is the name of AEW’s developmental show that features up-and-coming talent?", answers: ["AEW Dark", "AEW Elevation", "AEW Rampage", "AEW Dynamite"], correct: 0 },
    { question: "Who won the AEW World Tag Team Championship at Revolution 2020?", answers: ["Kenny Omega and 'Hangman' Adam Page", "The Young Bucks", "FTR", "SCU"], correct: 0 },
    { question: "Which AEW wrestler is famous for their entrance song, “Judas”?", answers: ["Chris Jericho", "Kenny Omega", "Cody Rhodes", "MJF"], correct: 0 },
    { question: "Who was the first person to win the AEW All-Atlantic Championship, now known as the AEW International Championship?", answers: ["PAC", "Jon Moxley", "Kenny Omega", "Cody Rhodes"], correct: 0 },
    { question: "What was the main event of AEW Full Gear 2022?", answers: ["Jon Moxley vs. MJF", "Kenny Omega vs. Hangman Page", "Cody Rhodes vs. Chris Jericho", "Darby Allin vs. MJF"], correct: 0 },
    { question: "What was the original name of the AEW International Championship?", answers: ["The AEW All-Atlantic Championship", "The AEW TNT Championship", "The AEW World Championship", "The AEW Women's Championship"], correct: 0 },
    { question: "Who was the first AEW wrestler to win the IWGP United States Heavyweight Championship while also competing in AEW?", answers: ["Jon Moxley", "Kenny Omega", "Cody Rhodes", "Chris Jericho"], correct: 0 },
    { question: "What was the date of AEW’s inaugural episode of Dynamite on TNT?", answers: ["October 2, 2019", "September 4, 2019", "January 1, 2020", "December 4, 2019"], correct: 0 },
    { question: "Who did Hikaru Shida defeat to win her first AEW Women’s World Championship?", answers: ["Nyla Rose", "Riho", "Dr. Britt Baker", "Kenny Omega"], correct: 0 },
    { question: "Which wrestler made a surprise debut as the Joker in the Casino Battle Royale at All Out 2022, winning the match?", answers: ["MJF", "Darby Allin", "Cody Rhodes", "Kenny Omega"], correct: 0 },
    { question: "What match type did AEW introduce at Revolution 2022, featuring barbed wire ropes and a 30-minute countdown?", answers: ["Exploding Barbed Wire Deathmatch", "Steel Cage Match", "Tornado Tag Match", "Casino Battle Royale"], correct: 0 },
    { question: "Which AEW wrestler has a signature move called 'The Dead Eye'?", answers: ["'Hangman' Adam Page", "Kenny Omega", "Cody Rhodes", "Chris Jericho"], correct: 0 },
    { question: "Who was the first wrestler to pin Kenny Omega in AEW after he won the AEW World Championship?", answers: ["Christian Cage", "Cody Rhodes", "Jon Moxley", "Kenny Omega"], correct: 0 },
    { question: "What is the name of the AEW event co-produced with NJPW in 2022?", answers: ["Forbidden Door", "Revolution", "All Out", "Full Gear"], correct: 0 },
    { question: "Who won the AEW World Championship Eliminator Tournament at Full Gear 2022?", answers: ["Ricky Starks", "MJF", "Jon Moxley", "Kenny Omega"], correct: 0 },
    { question: "Which tag team did SCU defeat to become the first-ever AEW World Tag Team Champions?", answers: ["The Lucha Brothers", "The Young Bucks", "FTR", "The Dark Order"], correct: 0 },
    { question: "What was the outcome of Jon Moxley vs. Kenny Omega in their unsanctioned match at Full Gear 2019?", answers: ["Kenny Omega won", "Jon Moxley won", "The match ended in a no contest", "The match was stopped due to injury"], correct: 0 },
    { question: "What is the name of the AEW match type that allows wrestlers to enter the ring one at a time until all participants have entered?", answers: ["Battle Royale", "Ladder Match", "Casino Battle Royale", "Survivor Series Match"], correct: 0 },
    { question: "Which AEW wrestler famously uses the catchphrase 'I'm better than you, and you know it'?", answers: ["MJF", "Cody Rhodes", "Chris Jericho", "Jon Moxley"], correct: 0 },
    { question: "What is the name of the title that AEW introduced as a secondary women's championship?", answers: ["AEW Women's Championship", "TBS Championship", "AEW World Championship", "NXT Women's Championship"], correct: 0 },
    { question: "What is the signature match type for the AEW Women's division?", answers: ["Women's Battle Royale", "TBS Championship Match", "Casino Battle Royale", "Women's Steel Cage Match"], correct: 0 },
    { question: "Which AEW wrestler made history as the first openly transgender wrestler to compete in the promotion?", answers: ["Nyla Rose", "Kenny Omega", "Cody Rhodes", "Chris Jericho"], correct: 0 },
    { question: "What year did AEW launch its YouTube series 'AEW Dark'?", answers: ["2019", "2020", "2021", "2022"], correct: 0 },
    { question: "Which event marked the return of fans to AEW events during the COVID-19 pandemic?", answers: ["Double or Nothing 2021", "Full Gear 2020", "Revolution 2021", "All Out 2020"], correct: 0 },
    { question: "Who was the first AEW wrestler to appear on the cover of Sports Illustrated?", answers: ["Kenny Omega", "Cody Rhodes", "Chris Jericho", "MJF"], correct: 0 },
    { question: "What is the name of the AEW event held in Las Vegas in May 2022?", answers: ["Double or Nothing 2022", "All Out 2022", "Full Gear 2022", "Revolution 2022"], correct: 0 },
    { question: "Who won the AEW World Women's Championship at All Out 2022?", answers: ["Thunder Rosa", "Britt Baker", "Nyla Rose", "Hikaru Shida"], correct: 0 },
    { question: "What is the name of AEW’s annual event featuring a 'Casino Ladder Match'?", answers: ["All Out", "Double or Nothing", "Full Gear", "Revolution"], correct: 0 },
    { question: "Which AEW wrestler is known as 'The Redeemer'?", answers: ["Miro", "Cody Rhodes", "Kenny Omega", "Jon Moxley"], correct: 0 },
    { question: "Who is the only wrestler to have held both the AEW World Championship and the AEW TNT Championship?", answers: ["Cody Rhodes", "Jon Moxley", "Kenny Omega", "Chris Jericho"], correct: 0 },
];

let currentQuestionIndex = 0;

function showQuestion() {
    const questionContainer = document.getElementById("question");
    const answersContainer = document.getElementById("answers-container");

    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;

    answersContainer.innerHTML = ""; // Clear previous answers

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("answer");
        button.onclick = () => selectAnswer(index);
        answersContainer.appendChild(button);
    });
}

function selectAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correct) {
        alert("Correct!");
    } else {
        alert("Incorrect! The correct answer was: " + currentQuestion.answers[currentQuestion.correct]);
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert("Quiz complete!");
    }
}

showQuestion();

