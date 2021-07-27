const fs = require("fs");
const path = require("path")


exports.createFileDirectory = function(val){
    try{
        if(fs.existsSync("./"+ val.dirName))return;
        //保存路径
        let pathName = "./"+ val.dirName
        fs.mkdirSync(pathName)
        // 创建文件 文件夹
        function fun(key, pathName){
            key.dirNameChild.forEach((ele,index) => {
                if(ele.dirNameChild){
                    fs.mkdirSync(path.join(pathName,ele.fileName))
                    fun(ele,path.join(pathName,ele.fileName))
                }else{
                    ele.type == "dir" ?  fs.mkdirSync(path.join(pathName,ele.fileName))  : fs.writeFileSync(pathName +"/"+ele.fileName+"."+ ele.type," ")
                }
            });
        }
        fun(val,pathName)

    }catch(err){
        console.log(err);
        return  ;
    }
}

exports.createFile = function(val){
    try{
        let pathNameS = "./"

        path.parse(val).dir.split("/").forEach(ele=>{
            pathNameS = path.join(pathNameS,ele)
            if(fs.existsSync(pathNameS))return;
            fs.mkdirSync(pathNameS)
        })
        
        if(path.parse(val).ext){
            fs.writeFileSync(val," ")
        }else{
            fs.mkdirSync(val)
        }

    }catch(err){
        console.log(err);
    }
}




