var express = require('express');
var router = express.Router();

const getProductsList = require('./lib/data')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
      code:0,
      message:'获取数据成功',
      result:getProductsList(req.query.pageSize),
      isNext:req.query.pageNumber <= 3 ? true : false
  })

  res.end()
});

module.exports = router;
