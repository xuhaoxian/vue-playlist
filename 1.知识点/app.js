//实例化vue对象
new Vue({
  el:"#vue-app",
  data:{
    name:"xhx",
    job:"web开发",
    website:"http://www.baidu.com",
    websiteTag:"<a href='http://www.baidu.com'>111</a>",
    age:30,
    x:0,
    y:0,
    a:0,
    b:0,
    age:20,
    changeColor:false,
    changeLength:false,
    error:false,
    success:false,
    characters:["a", "b", "c"],
    users:[
      {name:"H",age:30},
      {name:"B",age:25},
      {name:"E",age:18},
    ]
  },
  methods:{
    greet:function (time) {
      return 'Good '+ time + " " + this.name +"!";
    },
    add:function (num) {
      this.age += num;
    },
    subtract:function (num) {
      this.age -= num;
    },
    updateXY:function (event) {
      console.log(event)
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    stopMoving:function (event) {
      event.stopPropagation();
    },
    alert:function () {
      alert('hello');
    },
    logName:function () {
      this.name = this.$refs.name.value;
      // console.log(this.$refs.name.value);
    },
    logAge:function () {
      this.age = this.$refs.age.value;
      // console.log(this.$refs.age.value);
    },

  },
  computed:{
    addToA:function () {
      console.log('add to a');
      return this.a + this.age;
    },
    addToB:function () {
      console.log('add to b');
      return this.b + this.age;
    },
    compClasses:function () {
      return {
        changeColor:this.changeColor,
        changeLength:this.changeLength
      }
    }
  }
});

/*
 el:element 需要获取的元素,一定是html中的根容器元素
 data:用于数据的存储 this.name
 methods:用于存储各种方法 this.greet

 v-bind dom属性绑定值
 v-html dom中插入html代码

 v-on/@  dom事件绑定方法  button click
 时间绑定修饰符
 stop 阻止事件
 prevent 阻止dom默认事件 a标签跳转
 once 事件只能触发一次

 v-model  /input/select/textarea 双向绑定data中的数据

 computed  计算属性 返回计算的值  与方法不同的是性能更好，不用每次都重新加载js  一般在搜索框经常变化的使用

 动态绑定css  用v-bind将class设置成一个计算属性   计算属性中return对象 样式名:(true,false)用data属性控制

 v-if v-else-if   不符合条件 不存在dom
 v-show       存在dom 修改display而已

 v-for 循环遍历

 */
