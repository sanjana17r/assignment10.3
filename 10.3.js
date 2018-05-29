class dog //class named dog is created
{
    constructor(name) //has only one property i.e 'name'.
    {
        this.name=name;
    }
    speak() //method speak inside the class  when called prints 'woof'.
    {
        console.log('woof');
    }

}
class labrador extends dog //another class labrador is created is derived from dog class
{
    constructor(name,color,weight)//it has properties 'color' and 'breedweight'.
    {
        super(name);
        this.breedWeight=weight;
        this.Color=color;
    }
    speak() //again a method 'speak' is created that overrides the previous 'speak' method when called.
    {
        console.log('labrador says WOOF!')
    }
}
var dog1=new dog('tom');
dog1.speak();//consoles out 'woof'
var dog2=new labrador ('timmy','brown',5);
dog2.speak();//consoles out 'labrador says woof'.Because the speak method in labrador overrides the previous method.