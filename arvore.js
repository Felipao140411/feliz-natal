function arrow (c){ 
        console.log(c[0],c[1],c[2],c[3],c[4],c[5],
        c[6],c[7],c[8],c[9],c[10],
        c[11],c[12],c[13],c[14],c[15],
        c[16],c[17],c[18],c[19],c[20],
        c[21],c[22],c[23],c[24],c[25],
        c[26],c[27],c[28],c[29])
}
let c = [];

for (let i = 1; i <= 30; ++i){
    c.push(" ")
}

let a = [...c]

c.splice (12, 7 , 0 , 0 , 0 , 0 , 0,0,0 )

let b = [...c]

let d = []
for (let i = 1; i <= 30; ++i){
    d.push(" ")
}

d.splice(15, 1, 0)
let e = [...d]
arrow(d)
arrow(d)
arrow(b)
e.splice(16 , 1 , 0  )
e.splice(14 , 1 , 0  )
arrow(e)
e.splice(16 , 1 , " "  )
e.splice(14 , 1 , " " )
e.splice(17 , 1 , 0  )
e.splice(13 , 1 , 0  )
arrow(e)

for (let i = 0 ; i <=2; i++ ){
    a.splice(15 + i , 1 , 0)
    a.splice(15 - i , 1 , 0)
    arrow(a)
}

let n = 3
for(let j = 4 ; j >=1 ; --j){
 for(let i = 0 ; i <=3; ++i ){
  
    c.splice( 15 + (i+n) , 1 , 0);
    c.splice( 15 - (i+n), 1 ,  0 )
     arrow(c)
 
} 
n = ++n
b.splice(15+n, 1 ,0)
b.splice(15-n, 1 ,0)
c = [...b]
}

for ( let i = 4 ; i>=1; --i){
    arrow(a)
}