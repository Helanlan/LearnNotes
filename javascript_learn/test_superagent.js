var request = require('superagent');
var expect = require('chai').expect;

describe('async.test.js - 异步测试', function() {
  it('异步请求应该返回一个对象', function(done){
    request.get('https://api.github.com').end(function(err, res){
        expect(res).to.be.an('object');
        done();
      });
  });
});
/*http请求测试要先安装superagent在执行
是一个流行的nodejs第三方模块，专注于处理服务端/客户端的http请求。
可以使用 get 、 post 等方法名来声明一个get或者post请求，然后再通过 end() 方法来发出请求
需要注意，只要当调用了end() 方法之后，这个请求才会发出，在调用 end() 之前的所有动作其实都是对请求的配置。
其余的http谓语动词也是可以使用，比如 DELETE 、 HEAD 、 POST 、 PUT 等等。使用的时候，我们只需要变更 request[METHOD] 中的 METHOD 即可
不过，针对 DELETE 方法，有一点不同，因为 delete 是一个保留关键字，所以我在使用的时候应该是使用 del() 而不是 delete() 。
superagent默认的http方法是 GET 。就是说，如果你的请求是 get 请求，那么你可以省略http方法的相关配置。懒人必备。
详情：http://www.codesec.net/view/183926.html*/

/*
   node.js [superAgent] 请求使用示例
post请求：
代码如下:

 request.post('/api/pet')
   .end(function(resp,err){
     if (resp.body.status===200) {
       alert('yay got ' + JSON.stringify(res.body));
     } else {
       return next(resp.body);
     }
   });

get请求：
代码如下:

 request.get('/api/pet')
     ...
   });

delete请求：
代码如下:

 request.del('/api/pet')
     ...
   });
put请求：
代码如下:

 request.put('/api/pet')
     ...
   });*/