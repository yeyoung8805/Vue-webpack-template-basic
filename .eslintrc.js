module.exports = {
  env : {
    browser : true,
    mode : true,
  },
  extends : [
    //vue
    // 'plugin:vue/vue3-essential', //Lv1
    'plugin:vue/vue3-strongly-recommended', //Lv2
    // 'plugin:vue/vue3-recommended', //Lv3 가장 강력, 엄격한 규칙

    //js
    'eslint:recommended'
  ],
  parserOptions : {
    parser: 'babel-eslint',
  },
  rules : {
    "vue/html-closing-bracket-newline" : ["error", {
      "singleline" : "never",
      "multiline" : "never", //닫히는 꺽쇠를 다음줄로 넘기지 "않아도 된다."
    }],
    "vue/html-self-closing" : ["error", {
      "html" : {
        "void" : "always", //"항상" 셀프로 닫히는 / 를 끝에 달아준다.
        "normal" : "never", //일반 태그는 닫히는 /를 끝에 절대 달아주지 않는다.
        "cmoponent" : "always",
      },
    }],
  },
}
