function getCommentList(){
    $.ajax({
        method: 'GET',
        url:'http://www.liulongbin.top:3006/api/cmtlist',
        success: function(res){
            if(res.status !==200)
                return alert('failed')
            
            var rows=[];
            $.each(res.data,function(i,item){
                var str ='<li class="list-group-item"><span class="badge">评论时间:'+item.time+'</span><span class="badge">评论人: '+item.username+'</span>'+item.content+'</li>';
                rows.push(str);    
            })
            $('#cmt-list').empty().append(rows.join(''))
        }
    })
}
getCommentList()
$(function(){
    $('#formAddCmt').on('submit',function(e){
        e.preventDefault();
        var data = $(this).serialize()
        $.post('http://www.liulongbin.top:3006/api/addcmt',data,
        function(res){
            if(res.status !== 201){
                return alert('发表失败')
            }
            getCommentList();
            $('#formAddCmt')[0].reset();
        })
    })
})