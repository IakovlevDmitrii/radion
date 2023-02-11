const items = document.querySelectorAll('.questions_item');
const isAnswerVisible = {};
const tl = gsap.timeline();

items.forEach((item, currentIndex) => {
    isAnswerVisible[currentIndex] = false

    const currentQuestion = item.querySelector('.questions_question');
    const currentAnswer = item.querySelector('.questions_answer');
    const show = () => showAnswer(currentQuestion, currentAnswer, currentIndex);
    const hidden = () =>hiddenAnswer(currentQuestion, currentAnswer, currentIndex);

    currentQuestion.addEventListener('click', () => {
        isAnswerVisible[currentIndex]
            ? hidden()
            : show();
    })
})

const showAnswer = (question, answer, index) => {

    tl.to(answer, {
        duration: 0.8,
        maxHeight: '20rem',
        padding: '2rem',
        marginTop: '1.25rem',
        ease: 'power4.out',
        autoAlpha: 1,
    })
    tl.to(question, {
        backgroundColor: "var(--red)",
        duration: 0.2,
        ease: 'power4.out',
    }, "<")

    isAnswerVisible[index] = true;
};

const hiddenAnswer = (question, answer, index) => {

    tl.to(answer, {
        duration: 0.2,
        maxHeight: '0',
        padding: '0 2rem',
        marginTop: '0',
        autoAlpha: 0,
    })
    tl.to(question, {
        backgroundColor: "var(--black)",
        duration: 0.2,
        ease: 'power4.out',
    }, "<")

    isAnswerVisible[index] = false;
};
