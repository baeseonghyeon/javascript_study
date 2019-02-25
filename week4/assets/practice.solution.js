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
                var _prevItem = $('.pagination').find('.prev');
                var _nextItem = $('.pagination').find('.next');
                
                $('.pagination .page-item').not(".prev").not(".next").remove();

                if(data.data.length > 0){
                    if(data.data[0].val <= 1){
                        _prevItem.attr('onclick' , '_BOARD.methods.page.go(-1)');    
                    }
                    else{
                        _prevItem.attr('onclick' , '_BOARD.methods.page.go('+ (data.data[0].val - 1) +')');
                    }

                    if(data.data.length < 10){ 
                        _nextItem.attr('onclick' , '_BOARD.methods.page.go(-2)');
                    }
                    else{
                        _nextItem.attr('onclick' , '_BOARD.methods.page.go('+ (data.data[9].val + 1) +')');
                    }
                    
                    for(var idx = 0 ; idx < data.data.length ; idx++){
                        var _page = data.data[idx];
                        var _pageItem = _prevItem.clone().removeClass('prev');
                        if(_page.selected){
                            _pageItem.addClass('active');
                        }
                        _pageItem.find('.page-link').text(_page.val);
                        _pageItem.attr('onclick' , '_BOARD.methods.page.go('+ _page.val +')');
                        _nextItem.before(_pageItem);
                    }
                }
                else{
                    $('.pagination').hide();
                }
            },
            go : function(page){
                if(page === -1){
                    alert('맨 앞 페이지입니다.');
                }
                else if(page === -2){
                    alert('마지막 페이지입니다.');
                }
                else{
                    var _options = {};
                    _options.cate = $('#optCate').val().trim() || undefined;
                    _options.type = $('#optType').val().trim() || undefined;
                    _options.keyword = $('#txtKeyword').val().trim() || undefined;
                    _options.page = page;
    
                    _BOARD.methods._data.load(_options , function(res){
                        _BOARD.methods.board.init(res.data.items);
                        _BOARD.methods.page.init(res.data.paging);
                    });
                }
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
                    $('.covered').addClass('active');
                    $.ajax({
                        url : _BOARD.config.url,
                        method : _BOARD.config.method,
                        data : options
                    })
                    .then(function(res){
                        _BOARD.config.connectState = false;
                        $('.covered').removeClass('active');
                        callback({
                            status : res.code,
                            data : res.data
                        });
                    } , function(data){
                        _BOARD.config.connectState = false;
                        $('.covered').removeClass('active');
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

// $(function(){
$(document).ready(function(){
    _BOARD.methods._data.load({},function(res){
        _BOARD.methods.ui.init();
        _BOARD.methods.board.init(res.data.items);
        // _BOARD.methods.page.init(res.data.paging);
    });
});


// 서버에 요청해서 그 결과를 게시판 형태의 table로 만들어라 

// 1. 서버에 요청해서
// 2. 그결과를 게시판형의 table로
