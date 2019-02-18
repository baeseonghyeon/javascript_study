var _BOARD = _BOARD || {
    config : {
        url : 'http://syunoti.cafe24app.com/api/boards/get',
        method : 'GET'
    },
    methods : {
        ui : {
            init : function(){
                $('#optCate').val('');
                $('#optType').val('');
                $('#txtKeyword').val('');
            },
            search : function(){
                _BOARD.methods.data.init({
                    cate : $('#optCate').val(),
                    type : $('#optType').val(),
                    keyword : $('#txtKeyword').val()
                })
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
                $.ajax({
                    url : _BOARD.config.url,
                    method : _BOARD.config.method
                })
                .then(function(res){
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

$(function(){
    console.log(_BOARD);
    _BOARD.methods._data.load({},function(res){
        _BOARD.methods.ui.init();
        _BOARD.methods.board.init(res.data.items);
        _BOARD.methods.page.init(res.data.paging);
    });
});
