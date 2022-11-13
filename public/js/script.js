let role = ["Front End Developer", "Digital Marketing"]
let increment = 1
setInterval(()=>{
let roleTarget = document.getElementById("role")
if(increment % 2 == 0){
  roleTarget.textContent = role[1]
}else{
  roleTarget.textContent = role[0]
}
increment = increment + 1
}, 2000)


new Vue({
    el: '#app',
    data: {
      html: 90,
      css: 90,
      sass: 73,
      jsc: 85,
      node: 75,
      meteor: 78,
      squarespace: 75,
      wordpress: 90,
      wix: 70,
      handlebars: 85,
      react: 70,
      mongodb: 68,
      sql: 70,
      axure: 85,
      balsamiq: 74,
      invisionapp: 76,
      photoshop: 85,
      illustrator: 50,
      seo: 80,
      cmarketing:80,
      htmlemail:83,
      audacity: 70,
      imovie: 80,
      powerpoint: 88,
      gsheet: 80,
      gform: 80
    }
  });
  