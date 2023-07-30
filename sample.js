new Vue({
  // このelにHTMLのidを指定することで、そのidのDOMでVue.jsのインスタンスがインポートされる
  el: '#app',
  // dataは、定義されたVue.jsのインスタンスが持つ属性（値）
  data: {
    value: 0,
    n: 10,
    formData: {
      name: '北村萌夏',
      course: 'Webエンジニアコース',
      acceptancePeriod: '2021年07月期',
    },
    formValidation: {
      name: false,
    },
    defaultLastId: 3,
    students: [
      { id: 1, name: '野呂浩良', course: '機械学習コース', acceptancePeriod: '2019年01月期' },
      { id: 2, name: '富永修司', course: 'Webエンジニアコース', acceptancePeriod: '2017年11月期' },
      { id: 3, name: '斉藤一起', course: 'Webエンジニアコース', acceptancePeriod: '2017年11月期' }
    ]
  },
  // methodsに、Vue.jsのインスタンスに使用させたいメソッドを記載する
  methods: {
    addStudent() {
      // この function() { } の中にaddStudentメソッド
      // （入力欄に入力された値と、ID値（最後に登録されたID値+1の値）が新たに出現する機能）の処理を書く

      let newStudent = {
        id: this.defaultLastId +=1,
        name: this.formData.name,
        course: this.formData.course,
        acceptancePeriod: this.formData.acceptancePeriod
      }

      if (this.validation) {
        this.formValidation.name = true
      } else {
        this.students.push(newStudent)
        this.validation.name = false
      }

      this.resetInput()
    },
    resetInput() {
      this.formData.name = ""
      this.formData.course = ""
      this.formData.acceptancePeriod = ""
    },
    addValue() {
      this.value += this.n;
    },
  },
  computed: {
    validation: function() {
      return this.formData.name === ""
    },
  },
  // マウント直後に一度だけ実行される
  mounted() {
    this.formData.name = 'きたむらもえか';
  },
})
