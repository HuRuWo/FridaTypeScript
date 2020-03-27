
function frida_Java() {

    Java.perform(function () {

        if(Java.available){
            console.log("JVM加载成功")

            Java.perform(function () {
                 Java.use("")
            })


            let api_h = Java.use("com.ss.android.ugc.aweme.feed.api.FeedApi");
            api_h.a .overload('int', 'long', 'long', 'int', 'java.lang.Integer', 'java.lang.String', 'int', 'int', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'long', 'com.ss.android.ugc.aweme.feed.cache.e').implementation = function () {
                console.log("hook成功")
            }
        }else{
            //未能正常加载JAVA VM
            console.log("失败");
        }
    })

}

setImmediate(frida_Java,0);
