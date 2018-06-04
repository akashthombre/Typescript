//define class Facebook about asection
class FacebookAbout {
    //properties

    firstName : string;
    lastName : string;
    Birthday : string;
    contact : number;
    hometown : string;
    FavQuote : string;

    //constructor
    constructor(firstName:string,lastName:string,Birthday:string,contact:number,hometown:string,FavQuote:string) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.Birthday = Birthday;
        this.contact = contact,
        this.hometown = hometown;
        this.FavQuote = FavQuote;


    }
        //methods

        getAge =(Birthday) => {
            var today = new Date();
            var birthDate = new Date(Birthday);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
            {
                age = age - 1;
            }

            return age;
                }

                

         getContact = () => {
                    return " Contact number is " + this.contact;
                }
}

//Object create from above class

let Akash = new FacebookAbout ("Akash","Thombre","07/20/1996",8177971373,"Parbhani","Live like the Boss");

//User Name
console.log(Akash.firstName);

//Age will be print
let age = Akash.getAge(Akash.Birthday);
console.log(age);

//contact will be print 

console.log(Akash.getContact());
