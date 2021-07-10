<template>
  <div class="container-app">
    <div class="container-quiz">
      <div class="quiz-header">
        <h2>Quiz App</h2>
      </div>

      <div class="progress-bar" :style="{ width: progress + '%' }"></div>

      <div
        class="quiz-main"
        v-for="(element, index) in questions.slice(a, b)"
        :key="index"
        v-show="quiz"
      >
        <div class="box-question">
          <h4>Question {{ b }}/{{ questions.length }}</h4>
          <p>{{ element.question }}</p>
        </div>
        <div class="box-suggestions">
          <ul>
            <li
              v-for="(item, index) in element.suggestions"
              :key="index"
              :class="select ? check(item) : ''"
              @click="selectResponse(item)"
            >
              {{ item.suggestion }}
              <i class="fa fa-check" v-if="select ? item.correct : ''"></i>
              <i class="fa fa-times" v-if="select ? !item.correct : ''"></i>
            </li>
          </ul>
        </div>
      </div>
      <div class="box-score" v-show="score_show">
        <h4>Your score is</h4>
        <h4>{{ score }}/{{ questions.length }}</h4>
        <h4>{{ (score / questions.length) * 100 }}% / 100%</h4>

        <h4
          v-if="score / questions.length < 0.6"
          style="background-color: red; color: white"
        >
          Degree: Low
        </h4>
        <h4
          v-else-if="score / questions.length >= 0.6 && score / questions.length < 0.8"
          style="background-color: orange; color: white"
        >
          Degree: Normal
        </h4>
        <h4 v-else style="background-color: lightgreen; color: white">Degree: High</h4>

        <div class="btn-restart">
          <button @click="restartQuiz">Restart <i class="fa fa-refresh"></i></button>
        </div>
      </div>
      <div class="quiz-footer" v-show="progress < 100">
        <div class="box-button">
          <button
            @click="skipQuestion"
            :style="!next ? 'background-color: rgb(106, 128, 202)' : ''"
          >
            Skip
          </button>
          <button
            @click="nextQuestion"
            :style="next ? 'background-color: rgb(106, 128, 202)' : ''"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      questions: [
        {
          question: "Inside which HTML element do we put the javascript?",
          suggestions: [
            { suggestion: "<script>", correct: true },
            { suggestion: "<js>" },
            { suggestion: "<javascript>" },
            { suggestion: "<scripting>" },
          ],
        },
        {
          question:
            "What is the correct syntax for referring to an external script called 'script.js'?",
          suggestions: [
            { suggestion: '<script href="script.js">' },
            { suggestion: '<script name="script.js">' },
            { suggestion: '<script src="script.js">', correct: true },
            { suggestion: '<script id="script.js">' },
          ],
        },
        {
          question: "How do you write 'Hello World' in a alert box?",
          suggestions: [
            { suggestion: 'msg("Hello World")' },
            { suggestion: 'alertBox("Hello World")' },
            { suggestion: 'msgBox("Hello World")' },
            { suggestion: 'alert("Hello World")', correct: true },
          ],
        },
        {
          question: "How to write an IF statement in JavaScript?",
          suggestions: [
            { suggestion: "if i = 5 then" },
            { suggestion: "if(i == 5)", correct: true },
            { suggestion: "if i == 5 then" },
            { suggestion: "if i = 5" },
          ],
        },
        {
          question: "How can you add a comment in a JavaScript?",
          suggestions: [
            { suggestion: '" This is a comment' },
            { suggestion: "// This is a comment", correct: true },
            { suggestion: "<!-- This is a comment -->" },
            { suggestion: "* This is a comment" },
          ],
        },
      ],
      select: false,
      a: 0,
      b: 1,
      score: 0,
      quiz: true,
      score_show: false,
      next: false,
      progress: 0,
    };
  },
  methods: {
    selectResponse(e) {
      this.select = true;
      this.next = true;
      if (e.correct) {
        this.score++;
      }
    },
    check(status) {
      if (status.correct) {
        return "correct";
      } else {
        return "incorrect";
      }
    },
    nextQuestion() {
      if (!this.next) {
        return;
      }

      this.progress = this.progress + 100 / this.questions.length;

      if (this.questions.length - 1 == this.a) {
        this.score_show = true;
        this.quiz = false;
      } else {
        this.a++;
        this.b++;
        this.select = false;
        this.next = false;
      }
    },
    skipQuestion() {
      if (this.next) {
        return;
      }

      this.progress = this.progress + 100 / this.questions.length;

      if (this.questions.length - 1 == this.a) {
        this.score_show = true;
        this.quiz = false;
      } else {
        this.a++;
        this.b++;
      }
    },
    restartQuiz() {
      Object.assign(this.$data, this.$options.data()); // reset data
    },
  },
};
</script>

<style scoped></style>
