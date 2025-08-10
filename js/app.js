// Aplicación para Preparación de Examen DIAN
// Versión Completa - 2025

// Variables globales
let selectedCategories = [];
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let timerInterval;
let examTime = 0;
let timeLimit = 0;

// Elementos DOM
const categorySelector = document.getElementById('categorySelector');
const questionCountSelect = document.getElementById('questionCount');
const difficultyLevelSelect = document.getElementById('difficultyLevel');
const timeLimitSelect = document.getElementById('timeLimit');
const startBtn = document.getElementById('startBtn');
const examContainer = document.getElementById('examContainer');
const resultsContainer = document.getElementById('resultsContainer');
const currentQuestionElement = document.getElementById('currentQuestion');
const totalQuestionsElement = document.getElementById('totalQuestions');
const timerDisplay = document.getElementById('timerDisplay');
const questionScenario = document.getElementById('questionScenario');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const finishBtn = document.getElementById('finishBtn');
const scoreDisplay = document.getElementById('scoreDisplay');
const correctAnswers = document.getElementById('correctAnswers');
const incorrectAnswers = document.getElementById('incorrectAnswers');
const examTimeDisplay = document.getElementById('examTime');
const reviewBtn = document.getElementById('reviewBtn');
const newExamBtn = document.getElementById('newExamBtn');
const questionReview = document.getElementById('questionReview');

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    // Cargar categorías
    loadCategories();
    
    // Event listeners
    startBtn.addEventListener('click', startExam);
    prevBtn.addEventListener('click', showPreviousQuestion);
    nextBtn.addEventListener('click', showNextQuestion);
    finishBtn.addEventListener('click', finishExam);
    reviewBtn.addEventListener('click', showQuestionReview);
    newExamBtn.addEventListener('click', resetExam);
});

// Cargar categorías disponibles
function loadCategories() {
    categorySelector.innerHTML = '';
    
    categories.forEach(category => {
        const categoryItem = document.createElement('div');
        categoryItem.className = 'category-item';
        categoryItem.dataset.categoryId = category.id;
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `category-${category.id}`;
        
        const label = document.createElement('label');
        label.htmlFor = `category-${category.id}`;
        label.textContent = category.name;
        
        categoryItem.appendChild(checkbox);
        categoryItem.appendChild(label);
        
        // Verificar si hay preguntas para esta categoría
        const hasQuestions = checkIfCategoryHasQuestions(category.id);
        
        if (!hasQuestions) {
            categoryItem.classList.add('disabled');
            checkbox.disabled = true;
            const badge = document.createElement('span');
            badge.className = 'category-badge';
            badge.textContent = 'Próximamente';
            categoryItem.appendChild(badge);
        }
        
        categoryItem.addEventListener('click', () => {
            if (!checkbox.disabled) {
                checkbox.checked = !checkbox.checked;
                updateSelectedCategories();
            }
        });
        
        categorySelector.appendChild(categoryItem);
    });
}

// Verificar si una categoría tiene preguntas disponibles
function checkIfCategoryHasQuestions(categoryId) {
    // Verificar si existe la variable global con las preguntas de esta categoría
    const variableName = `questions_${categoryId}`;
    return typeof window[variableName] !== 'undefined';
}

// Actualizar las categorías seleccionadas
function updateSelectedCategories() {
    selectedCategories = [];
    const checkboxes = document.querySelectorAll('#categorySelector input[type="checkbox"]:checked');
    
    checkboxes.forEach(checkbox => {
        const categoryId = checkbox.id.replace('category-', '');
        selectedCategories.push(categoryId);
    });
    
    // Habilitar/deshabilitar botón de inicio según selección
    startBtn.disabled = selectedCategories.length === 0;
}

// Iniciar el examen
function startExam() {
    if (selectedCategories.length === 0) {
        alert('Por favor, seleccione al menos una categoría de preguntas.');
        return;
    }
    
    // Obtener configuración del examen
    const questionCount = parseInt(questionCountSelect.value);
    const difficultyLevel = difficultyLevelSelect.value;
    timeLimit = parseInt(timeLimitSelect.value) * 60; // Convertir a segundos
    
    // Preparar preguntas
    prepareQuestions(questionCount, difficultyLevel);
    
    if (currentQuestions.length === 0) {
        alert('No hay suficientes preguntas disponibles con los criterios seleccionados.');
        return;
    }
    
    // Inicializar respuestas del usuario
    userAnswers = Array(currentQuestions.length).fill(null);
    
    // Mostrar contenedor del examen
    document.querySelector('.controls').classList.add('hidden');
    document.querySelector('.app-info').classList.add('hidden');
    examContainer.classList.remove('hidden');
    
    // Actualizar contador de preguntas
    currentQuestionIndex = 0;
    updateQuestionCounter();
    
    // Mostrar primera pregunta
    showQuestion(currentQuestionIndex);
    
    // Iniciar temporizador si hay límite de tiempo
    if (timeLimit > 0) {
        startTimer();
    } else {
        document.getElementById('examTimer').classList.add('hidden');
    }
}

// Preparar preguntas para el examen
function prepareQuestions(count, difficulty) {
    let allQuestions = [];
    
    // Recopilar preguntas de las categorías seleccionadas
    selectedCategories.forEach(categoryId => {
        const questionsVariable = `questions_${categoryId}`;
        
        if (typeof window[questionsVariable] !== 'undefined') {
            const categoryQuestions = window[questionsVariable];
            
            // Filtrar por dificultad si es necesario
            const filteredQuestions = difficulty === 'all' 
                ? categoryQuestions 
                : categoryQuestions.filter(q => q.difficulty === difficulty);
                
            allQuestions = allQuestions.concat(filteredQuestions);
        }
    });
    
    // Mezclar preguntas
    shuffleArray(allQuestions);
    
    // Limitar al número solicitado
    currentQuestions = allQuestions.slice(0, count);
}

// Mostrar pregunta actual
function showQuestion(index) {
    const question = currentQuestions[index];
    
    // Mostrar escenario y pregunta
    questionScenario.textContent = question.text;
    questionText.textContent = question.question;
    
    // Mostrar opciones
    optionsContainer.innerHTML = '';
    question.options.forEach((option, i) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        
        // Marcar opción seleccionada si existe
        if (userAnswers[index] === i) {
            optionElement.classList.add('selected');
        }
        
        optionElement.addEventListener('click', () => {
            // Desmarcar todas las opciones
            document.querySelectorAll('.option').forEach(opt => {
                opt.classList.remove('selected');
            });
            
            // Marcar la opción seleccionada
            optionElement.classList.add('selected');
            
            // Guardar respuesta
            userAnswers[index] = i;
        });
        
        optionsContainer.appendChild(optionElement);
    });
    
    // Actualizar botones de navegación
    updateNavigationButtons();
}

// Actualizar botones de navegación
function updateNavigationButtons() {
    prevBtn.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === currentQuestions.length - 1) {
        nextBtn.classList.add('hidden');
        finishBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        finishBtn.classList.add('hidden');
    }
}

// Mostrar pregunta anterior
function showPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        updateQuestionCounter();
        showQuestion(currentQuestionIndex);
    }
}

// Mostrar siguiente pregunta
function showNextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        updateQuestionCounter();
        showQuestion(currentQuestionIndex);
    }
}

// Actualizar contador de preguntas
function updateQuestionCounter() {
    currentQuestionElement.textContent = currentQuestionIndex + 1;
    totalQuestionsElement.textContent = currentQuestions.length;
}

// Iniciar temporizador
function startTimer() {
    examTime = 0;
    
    timerInterval = setInterval(() => {
        examTime++;
        
        // Actualizar visualización del tiempo
        timerDisplay.textContent = formatTime(examTime);
        
        // Verificar si se alcanzó el límite de tiempo
        if (timeLimit > 0 && examTime >= timeLimit) {
            clearInterval(timerInterval);
            finishExam();
        }
    }, 1000);
}

// Finalizar examen
function finishExam() {
    // Detener temporizador
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    // Ocultar contenedor del examen
    examContainer.classList.add('hidden');
    
    // Calcular resultados
    const results = calculateResults();
    
    // Mostrar resultados
    scoreDisplay.textContent = `${results.percentage}%`;
    correctAnswers.textContent = results.correct;
    incorrectAnswers.textContent = results.incorrect;
    examTimeDisplay.textContent = formatTime(examTime);
    
    // Mostrar contenedor de resultados
    resultsContainer.classList.remove('hidden');
}

// Calcular resultados del examen
function calculateResults() {
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;
    
    userAnswers.forEach((answer, index) => {
        if (answer === null) {
            unanswered++;
        } else if (answer === currentQuestions[index].correctAnswer) {
            correct++;
        } else {
            incorrect++;
        }
    });
    
    const total = currentQuestions.length;
    const percentage = Math.round((correct / total) * 100);
    
    return {
        correct,
        incorrect,
        unanswered,
        total,
        percentage
    };
}

// Mostrar revisión de preguntas
function showQuestionReview() {
    questionReview.innerHTML = '';
    questionReview.classList.remove('hidden');
    
    currentQuestions.forEach((question, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item';
        
        // Escenario y pregunta
        const scenario = document.createElement('div');
        scenario.className = 'review-scenario';
        scenario.textContent = question.text;
        
        const questionElement = document.createElement('div');
        questionElement.className = 'review-question';
        questionElement.textContent = question.question;
        
        // Opciones
        const optionsElement = document.createElement('div');
        optionsElement.className = 'review-options';
        
        question.options.forEach((option, i) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'review-option';
            optionElement.textContent = option;
            
            // Marcar respuesta del usuario
            if (userAnswers[index] === i) {
                optionElement.classList.add('selected');
            }
            
            // Marcar respuesta correcta
            if (i === question.correctAnswer) {
                optionElement.classList.add('correct');
            }
            
            optionsElement.appendChild(optionElement);
        });
        
        // Explicación
        const explanation = document.createElement('div');
        explanation.className = 'review-explanation';
        explanation.textContent = question.explanation;
        
        // Agregar elementos a la revisión
        reviewItem.appendChild(scenario);
        reviewItem.appendChild(questionElement);
        reviewItem.appendChild(optionsElement);
        reviewItem.appendChild(explanation);
        
        questionReview.appendChild(reviewItem);
    });
}

// Reiniciar examen
function resetExam() {
    // Ocultar contenedores
    resultsContainer.classList.add('hidden');
    examContainer.classList.add('hidden');
    
    // Mostrar controles
    document.querySelector('.controls').classList.remove('hidden');
    document.querySelector('.app-info').classList.remove('hidden');
    
    // Reiniciar variables
    selectedCategories = [];
    currentQuestions = [];
    currentQuestionIndex = 0;
    userAnswers = [];
    
    // Desmarcar categorías
    document.querySelectorAll('#categorySelector input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Ocultar revisión de preguntas
    questionReview.classList.add('hidden');
}

// Utilidades

// Mezclar array (algoritmo Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Formatear tiempo (segundos a MM:SS)
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    
    return `${formattedMinutes}:${formattedSeconds}`;
}