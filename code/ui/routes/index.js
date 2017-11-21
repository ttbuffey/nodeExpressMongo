var Index = require('../controller/web/index');



module.exports = function(app) {
  //首页
  // app.get('/', Index.index);

  //用户添加反馈信息
  app.post('/post_feedback', Index.post_feedback);
};