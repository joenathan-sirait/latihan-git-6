
// no 3
function menyusunPola3(n){
    let pola = " ";
    for (let i = 0; i < n; i++) {
        for (let j = 1; j < n; j++) {
            if (i == j || i+j===n) {
                pola += "*";
            } else {
                pola += " "
            }       
        }
        pola += " \n "  
    }
    console.log(pola)
}
menyusunPola3(9)


// no 5
function menyusunPola5(n){
    let pola = " ";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i == j || i+j==n-1 || i == 0 || i == n-1 || j == 0 || j == n -1)  {
                pola += "*";
            } else {
                pola += " "
            }       
        }
        pola += " \n "  
    }
    console.log(pola)
}
menyusunPola5(9)

// no 7
function menyusunPola7(n){
    let pola = " ";
    for (let i = 0; i < n; i++) {
        for (let j = n; j > 0; j--) {
            if (i >= j ) {
                pola += "*";
            } else {
                pola += " "
            }       
        }
        pola += " \n "  
    }
    console.log(pola)
    
}
menyusunPola7(9)

//  no 9
function menyusunPola(n){
    let pola = " ";
    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= (2 * n); j++) {
            if (i < j){
                pola += " "
            } else {
            pola += "*";
        }
        
        if (i <= ((2 * n) - j)){
            pola += " "
        } else {
            pola += "*";   
        }
          
        }
        pola += " \n "  
    }
    for(let i = 1; i <= n; i++)
    {
        for(let j = 1; j <= (2 * n); j++)
        {
            if (i > (n - j + 1) ){
                pola += " "
            } else {
                 pola += "*";
            }
            if ((i + n) > j){
                pola += " "
            } else {
                pola += "*"; 
            }
        }
        pola += " \n "  
    }
    console.log(pola)
}
menyusunPola(4)
