class student {
    constructor(name,age,marks) {
        this.name=name;
        this.age=age;
        this.marks=marks;
    }
    setPlacementAge(minPlacementAge){
        console.log(this);
        return (minMarks)=>{
            console.log('inside egligibleForCurrentCompany',this)
            if(this.marks>minMarks && this.age>minPlacementAge){
                console.log(this.name + "is ready for placements")
            }else{
                console.log(this.name + "is not ready for placements")
            }
        }
    }
}
   const Swathi=new student('swathi',25,75);
   const Vetri=new student('vetri',13,35);

   Swathi.setPlacementAge(18)(40);
   Vetri.setPlacementAge(18)(40);