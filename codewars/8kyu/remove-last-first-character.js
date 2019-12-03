function removeChar(str){
    //You got this!
       let str_arr = str.split('');
       return str_arr.filter((e,i) => !((i === 0) || (i === str_arr.length-1)))
       .join('');
   }
   console.log(removeChar('Lakewood'));

   
   // OR

   function removeChar(str){
   return str.substr(1).slice(0,-1);
    //You got this!
   
   };