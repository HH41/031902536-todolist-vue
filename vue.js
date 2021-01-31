var app= new Vue({
    el: '#app',
    data : {
        list:[],
        inputValue:'test'
    },
    methods:{
      add:function(){
        var data ={ title:this.inputValue ,isDone:false ,isEd:false};
               this.list.push(data);
             },
      editItem:function(item){
          
           item.isEd=true;
      },
      subEdit:function(item){
          
          item.isEd=false;
      },
      delist:function(index){
       var val = this.list[index];
       this.list.splice(index,1);
        val.isDone = true ;
      },
    },
})
