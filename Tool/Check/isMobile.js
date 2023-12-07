if (isMobile()) {
            console.log("mobile");
        } else {
            console.log("pc");
        }

        function isMobile() {
            let flag = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            return flag;
        }

/*
作者：Happyileaf
链接：https://juejin.cn/post/6961759437841235982
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/