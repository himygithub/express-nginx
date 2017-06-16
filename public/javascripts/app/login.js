requirejs(['config'],function(config){
	requirejs.config(config);
	requirejs(['jquery'],function($){
		$("#submit1").on("click",function(){
			var name =$("input[name=name1]").val();
			var password =$("input[name=password1]").val();
			console.log("gogogo...="+name);
			$.ajax({
				type:"POST",
				url:"/users/login",
				data:{"name":name,"password":password},
				dataType:"json",
				success:function(data){
				
					if(data && data.res =='ok'){
						window.location.href ='/index';
					}else{
						alert("登录失败")
					}
				},
				error:function(er){
					console.log(er);
				}
			})
		})
		

	});
})