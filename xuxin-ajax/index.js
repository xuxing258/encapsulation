// ;if(XMLHttpRequest){}else{var XMLHttpRequest=require('xmlhttprequest').XMLHttpRequest};class Ajax{constructor(){this.init()}init(){this.xhr=new XMLHttpRequest();this.xhr.onreadystatechange=this.onReadyStateChange.bind(this)}get(obj,bol=true){this.success=obj.success;this.configurationOpen(obj,bol,obj.type="get");this.setHeader('Content-Type','application/x-www-form-urlencoded');this.configurationSend()}post(obj,bol=true){this.success=obj.success;this.configurationOpen(obj,bol,obj.type="post");this.setHeader('Content-Type','application/x-www-form-urlencoded');this.configurationSend(this.configurationData(obj.data))}ajax(obj){this.success=obj.success;obj.type=="post"?this.post(obj):this.get(obj)}configurationOpen(obj,bol,type){let result="?"+this.configurationData(obj.data)||"";if(type=='post'){result=" "};this.xhr.open(type,obj.url+result,bol)}setHeader(name,value){this.xhr.setRequestHeader(name,value)}configurationSend(value=" "){this.xhr.send(value)}configurationData(value){return value?Object.entries(value).map(item=>item.join("=")).join("&"):""}onReadyStateChange(){if(this.xhr.readyState===4){if(this.xhr.status>=200&&this.xhr.status<300){this.success(this.xhr.responseText)}else{console.log('There was a problem with the request.')}}}}const xuxin=new Ajax();exports.xuxin=xuxin;




if(XMLHttpRequest){
}else{
    var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
}

class Ajax{
    constructor(){
        //初始化
        this.init()
    }
    init(){
        this.xhr = new XMLHttpRequest();
        this.xhr.onreadystatechange = this.onReadyStateChange.bind(this);
    }
    //get请求
    get(obj,bol = true){
        this.success = obj.success;
        this.configurationOpen(obj,bol,obj.type = "get");
        this.setHeader('Content-Type','application/x-www-form-urlencoded');
        this.configurationSend();
    }
    //post请求
    post(obj,bol = true){
        this.success = obj.success;
        this.configurationOpen(obj,bol, obj.type = "post");
        this.setHeader('Content-Type','application/x-www-form-urlencoded');
        this.configurationSend(this.configurationData(obj.data));
    }
    // 合并请求
    ajax(obj){
        this.success = obj.success;
        obj.type == "post" ? this.post(obj) : this.get(obj);
    }
    //配置请求地址和方式
    configurationOpen(obj,bol,type){
        let result = "?" + this.configurationData(obj.data) || ""
        if(type == 'post'){
            result =" ";
        }
        this.xhr.open(type,obj.url + result,bol);
    }
    //配置请求头
    setHeader(name,value){
        this.xhr.setRequestHeader(name,value);
    }
    //发送请求
    configurationSend(value = " "){
        this.xhr.send(value);
    }
    //处理数据结构
    configurationData(value){
        return value ?   Object.entries(value).map(item=>item.join("=")).join("&") : "";
    }
    onReadyStateChange() {
        if (this.xhr.readyState === 4) {
            if (this.xhr.status >= 200 && this.xhr.status < 300) {
                this.success(this.xhr.responseText)
               
            } else {
                console.log('There was a problem with the request.');
            }
        }
    }

}
exports.xuxin  =new Ajax()