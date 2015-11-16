$(function(){
    // Convert a form in object require name in form
    $.fn.serializeObject = function(){
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
    
// REST: Ajax call params
// endpoint: https://webdevco.firebaseio.com/messages.json
// data: JSON.stringify($(this).serializeObject())
// contentType : 'application/json'

