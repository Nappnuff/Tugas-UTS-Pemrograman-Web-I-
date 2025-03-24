document.getElementsByTagName("h1")[0].style.fontSize = "6vw";

document.getElementById('hamburger-btn').addEventListener('click', function () {
    let menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');

    // Jika menu terlihat, pastikan tetap bisa diklik
    if (!menu.classList.contains('hidden')) {
        menu.classList.add('absolute', 'top-full', 'left-0', 'w-full');
    } else {
        menu.classList.remove('absolute', 'top-full', 'left-0', 'w-full');
    }
});
// mobile navbar


// quiz
const questions = [
    {
        question: "Apa yang dimaksud dengan jaringan komputer?",
        optionA: "Sistem operasi untuk komputer",
        optionB: "Teknologi penyimpanan berbasis cloud",
        optionC: "Perangkat keras untuk menghubungkan komputer",
        optionD: "Jaringan telekomunikasi yang memungkinkan komputer saling berkomunikasi dan bertukar data",
        correctOption: "optionD"
    },

    {
        question: "Apa yang disebut sebagai pihak yang memberikan layanan dalam sistem jaringan client-server?",
        optionA: "Router",
        optionB: "Server",
        optionC: "Modem",
        optionD: "Client",
        correctOption: "optionB"
    },

    {
        question: "Siapakah tokoh yang memimpin proyek pengembangan komputer MODEL I di Universitas Harvard?",
        optionA: "Donald Trump",
        optionB: "Barack Obama",
        optionC: "Abraham Lincoln",
        optionD: "Howard Aiken",
        correctOption: "optionD"
    },

    {
        question: "LAN biasanya digunakan untuk jaringan dalam lingkungan berikut, kecuali...",
        optionA: "Sekolah",
        optionB: "Kantor",
        optionC: "Antar benua",
        optionD: "Rumah",
        correctOption: "optionC"
    },

    {
        question: "Jenis jaringan yang mencakup satu kota disebut...",
        optionA: "WLAN",
        optionB: "LAN",
        optionC: "WAN",
        optionD: "MAN",
        correctOption: "optionD"
    },

    {
        question: "WAN memiliki cakupan wilayah yang lebih luas dibandingkan...",
        optionA: "LAN dan MAN",
        optionB: "Router dan Switch",
        optionC: "ISP dan VPN",
        optionD: "Kabel dan Wireless",
        correctOption: "optionA"
    },

    {
        question: "Apa kepanjangan dari Internet?",
        optionA: "Integrated Network",
        optionB: "International Net",
        optionC: "Interconnected-Network",
        optionD: "Internet Network",
        correctOption: "optionC"
    },

    {
        question: "Apa fungsi utama modem dalam mengakses internet?",
        optionA: "Mengubah sinyal digital menjadi analog dan sebaliknya",
        optionB: "Mengatur kecepatan jaringan",
        optionC: "Menghubungkan komputer ke jaringan lokal",
        optionD: "Menyaring konten berbahaya",
        correctOption: "optionA"
    },

    {
        question: "Manakah yang bukan merupakan contoh browser?",
        optionA: "Mozilla Firefox",
        optionB: "Microsoft Edge",
        optionC: "Google Chrome",
        optionD: "Windows Explorer",
        correctOption: "optionD"
    },

    {
        question: `"Apa tujuan utama dari keamanan jaringan?`,
        optionA: "Menghapus semua data dalam jaringan",
        optionB: "Menghapus virus dari komputer",
        optionC: "Memblokir semua akses pengguna",
        optionD: "Memastikan kerahasiaan, integritas, dan ketersediaan data",
        correctOption: "optionD"
    },

    {
        question: "Apa fungsi dari VPN dalam keamanan jaringan?",
        optionA: "Memblokir akses ke website tertentu",
        optionB: "Mempercepat koneksi internet",
        optionC: "Mengenkripsi komunikasi untuk meningkatkan privasi",
        optionD: "Menghubungkan jaringan LAN dan MAN",
        correctOption: "optionC"
    },

    {
        question: "Teknologi apa yang digunakan untuk mendeteksi dan mencegah ancaman pada jaringan?",
        optionA: "IDS/IPS",
        optionB: "CPU/GPU",
        optionC: "LAN/WAN",
        optionD: "SSD/HDD",
        correctOption: "optionA"
    },


    {
        question: "Apa kepanjangan dari ISP dalam jaringan internet?",
        optionA: "Internet System Protocol",
        optionB: "Internet Service Provider",
        optionC: "Internet Service Provider",
        optionD: "Integrated Server Program",
        correctOption: "optionB"
    },

    {
        question: "Apa fungsi utama dari firewall dalam keamanan jaringan?",
        optionA: "Meningkatkan kecepatan internet",
        optionB: "Menyimpan data pengguna",
        optionC: "Memperkuat sinyal WiFi",
        optionD: "Mencegah akses yang tidak sah ke jaringan",
        correctOption: "optionD"
    },

    {
        question: "Teknologi apa yang digunakan untuk mengenkripsi data agar tidak mudah disadap?",
        optionA: "VPN",
        optionB: "Firewall",
        optionC: "Router",
        optionD: "IDS",
        correctOption: "optionA"
    },

    {
        question: "Apa yang dimaksud dengan autentikasi dua faktor (2FA)?",
        optionA: "Menggunakan dua jaringan berbeda untuk akses internet",
        optionB: "Menghubungkan dua perangkat ke satu jaringan",
        optionC: "Proses verifikasi identitas dengan dua metode keamanan",
        optionD: "Protokol keamanan untuk server",
        correctOption: "optionC"
    },

    {
        question: "Apa protokol yang digunakan untuk komunikasi yang aman di internet?",
        optionA: "HTTPS",
        optionB: "HTTP",
        optionC: "FTP",
        optionD: "SMTP",
        correctOption: "optionA"
    },

    {
        question: "Jenis jaringan apa yang menghubungkan komputer dalam wilayah geografis yang sangat luas?",
        optionA: "LAN",
        optionB: "MAN",
        optionC: "WAN",
        optionD: "PAN",
        correctOption: "optionC"
    },

    {
        question: "Perangkat berikut ini digunakan untuk menghubungkan beberapa komputer dalam jaringan lokal, kecuali...",
        optionA: "Switch",
        optionB: "Modem",
        optionC: "Router",
        optionD: "Monitor",
        correctOption: "optionD"
    },

    {
        question: "Apa tujuan utama dari IDS (Intrusion Detection System)?",
        optionA: "Mendeteksi ancaman dan aktivitas mencurigakan",
        optionB: "Mempercepat koneksi jaringan",
        optionC: "Menghapus virus dari komputer",
        optionD: "Mengatur bandwidth internet",
        correctOption: "optionA"
    },

    {
        question: "Manakah yang merupakan salah satu manfaat dari enkripsi data dalam jaringan?",
        optionA: "Memudahkan pencurian data",
        optionB: "Meningkatkan kecepatan transfer data",
        optionC: "Memblokir semua koneksi internet",
        optionD: "Mencegah akses tidak sah ke informasi",
        correctOption: "optionD"
    },

    {
        question: "Apa yang harus dilakukan untuk menjaga keamanan data dalam jaringan?",
        optionA: "Menggunakan kata sandi yang lemah agar mudah diingat",
        optionB: "Menggunakan firewall dan enkripsi data",
        optionC: "Menggunakan firewall dan enkripsi data",
        optionD: "VMengabaikan pembaruan perangkat lunak",
        correctOption: "optionB"
    },

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 11) { //update this to lenth of questions you want -1 i.e if you want 16 questions then <= 15
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 11) { //update this to number of questions you want -1. determines when there's no more question and should display answer
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
  //playerScore divided by new length of questions
    const playerGrade = (playerScore / 12) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}