/**
 * Created by 1 on 2016/5/16.
 */
// index page

var mongoose=require('mongoose');

var Feedback=mongoose.model('Feedback');

// 分页获取离职公示
exports.get_feedbacks = function(req, res) {
    var curr=req.body.curr;
    //每页大小为10
    var query=Feedback.find({});
    query.skip((curr-1)*10);
    query.limit(10);
    //按照id添加的顺序倒序排列
    query.sort({'_id': -1});
    //计算分页数据
    query.exec(function(err,rs){
        if(err){
            res.send(err);
        }else{
            //计算数据总数
            Feedback.find(function(err,result){
                if(result.length%10>0){
                    pages=result.length/10+1;
                }else{
                    pages=result.length/10;
                }
                jsonArray={data:rs,pages:pages};
                res.json(jsonArray);
            });
        }
    });
};