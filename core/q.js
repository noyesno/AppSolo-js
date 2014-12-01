/* Provide Traversal of Dom Tree */

function $q(selector, base){
  var base = arguments.length==1?document:base;
  var result = null;
  var parts = selector.split('/');
  var self = arguments.callee;
  for(var i=0, b=base, s; b && (s=parts[i]); i++){
    s = s.replace(/^\s+|\s+$/g,'');
    if(s[0]=='<'){
      result = self.closest(b, s.substr(1));
    } else if(s[0]=='^'){
      result = self.prev(b, s.substr(1));
    } else if(s[0]=='$'){
      result = self.next(b, s.substr(1));
    } else {
      result = b.querySelector(s);
    }
    b=result;
  }
  return result;
}

$q.closest = function(el, selector){
  while(p=el.parentNode){
    if(p.querySelector(selector)) return el;
    el = p;
  }
  return null;
}


$q.prev = function(el, selector){
  return el.previousElementSibling;
  // TODO:
  while(p=el.previousElementSibling){
    if(p.querySelector(selector)) return el;
    el = p;
  }
  return null;
}

$q.next = function(el, selector){
  return el.nextElementSibling;
  // TODO:
  while(p=el.nextElementSibling){
    if(p.querySelector(selector)) return el;
    el = p;
  }
  return null;
}
