function solution(phone_book) {
   const hashMap = new Map()
   
   for(const a of phone_book){
       hashMap.set(a,true)
   }

    for(const a of phone_book){
        for(let i=1; i<a.length; i++){
            let prefix= a.substring(0,i)
            if(hashMap.has(prefix)){
                return false
            }
        }
    }
    return true
}

