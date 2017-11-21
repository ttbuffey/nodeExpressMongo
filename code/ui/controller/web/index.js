var mongoose=require('mongoose');
var Feedback=mongoose.model('Feedback');
/*处理时间*/
var Moment = require('moment');


//联系我们页面用户反馈
//添加用户反馈
exports.post_feedback = function(req, res) {
    var name=req.body.name;
    var email=req.body.email;
    var phone=req.body.phone;
    var message=req.body.message;
    var time=Moment().format('YYYY-MM-DD HH:mm');

    var data=new Feedback(
        {
            name:name,
            email:email,
            phone:phone,
            message:message,
            time:time,
            status:'0'
        }
    );
    data.save(function(err){
        if(err){
            res.json({"status":"error"})
        }else{
            res.json({"status":"success"});
        }
    });
};
