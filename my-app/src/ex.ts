const list = [
  { success: true, value: 'A' },
  { success: true, value: 'B' },
  { success: false, value: 'C' },
  { success: false, value: 'D' },
  { success: true, value: 'E' },
  { success: true, value: 'F' },
  { success: false, value: 'G' },
  { success: true, value: 'H' },
  { success: false, value: 'I' },
];
// const list1 = [];
const filterList = list.filter((each) => 
  each.success === true
)
const vals = filterList.map((each)=>{
    return( 
        each.value
        
    )
}) 
function retrieveValue(obj,text){
    
    return  
           obj.text



    
}
const obj = { a: "Text", b: 5 };
const val = retrieveValue(obj, "b");
console.log(val); // 5