function solution(phone_book) {
    let hash={}
    
    for(const a of phone_book){
        hash[a]=true
    }

    for(const a of phone_book){
        for(let i=1; i<a.length; i++){
            let prefix = a.substring(0,i)
            if(hash[prefix]){
                return false
            }
        }
    }
    
    return true
}

