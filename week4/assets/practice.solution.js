var _BOARD = _BOARD || {
    config : {
        url : 'http://syunoti.cafe24app.com/api/boards/get',
        method : 'GET',
        connectState : false
    },
    methods : {
        ui : {
            init : function(){
                $('#optCate').val('');
                $('#optType').val('');
                $('#txtKeyword').val('');
            },
            search : function(){
                
                _BOARD.methods._data.load({
                    cate : $('#optCate').val(),
                    type : $('#optType').val(),
                    keyword : $('#txtKeyword').val()
                },function(res){
                    _BOARD.methods.board.init(res.data.items);
                    _BOARD.methods.page.init(res.data.paging);
                });
            },
            reset : function(){
                _BOARD.methods.ui.init();
                _BOARD.methods._data.load({},function(res){
                    _BOARD.methods.board.init(res.data.items);
                    _BOARD.methods.page.init(res.data.paging);
                });
            }
        },
        page : {
            init : function(data){
                console.log(data);
            },
            go : function(){

            }
        },
        board : {
            init : function(data){
                var _mockup = $('.mockup').find('tr');
                var _tbody = $('#tblBoard').find('tbody');
                if(_tbody.children().length > 0){
                    _tbody.children().remove();
                }
                for(var i = 0 ; i < data.length ; i++){
                    var item = data[i];
                    var row = _mockup.clone();
                    if(!item.isNotice){
                        row.find('.seq').text(item.seq);
                    }
                    else {
                        row.find('.seq').text('공지');
                    }

                    row.find('.cate').text(item.cate);
                    row.find('.author').text(item.author);
                    row.find('.date').text(item.date);
                    row.find('.title').find('.link').prop('href' , item.location);
                    row.find('.title').find('.link').text(item.title);
                    _tbody.append(row);
                }
            }
        },
        _data : {
            load : function(options , callback){
                if(_BOARD.config.connectState){alert('불러오는 중입니다. 잠시만 기다려주세요.')}
                else{
                    _BOARD.config.connectState = true;
                    $.ajax({
                        url : _BOARD.config.url,
                        method : _BOARD.config.method,
                        data : options
                    })
                    .then(function(res){
                        _BOARD.config.connectState = false;
                        callback({
                            status : res.code,
                            data : res.data
                        });
                    } , function(data){
                        callback({
                            status : 'ERROR',
                            data : {}
                        });
                    });
                }
                
            }
        }
    }
}

$(function(){
    _BOARD.methods._data.load({},function(res){
        _BOARD.methods.ui.init();
        _BOARD.methods.board.init(res.data.items);
        _BOARD.methods.page.init(res.data.paging);
    });
});
