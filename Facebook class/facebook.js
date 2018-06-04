var FacebookAbout = /** @class */ (function () {
    //constructor
    function FacebookAbout(firstName, lastName, Birthday, contact, hometown, FavQuote) {
        var _this = this;
        //methods
        this.getAge = function (Birthday) {
            var today = new Date();
            var birthDate = new Date(Birthday);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age = age - 1;
            }
            return age;
        };
        this.getContact = function () {
            return " Contact number is " + _this.contact;
        };
        this.firstName = firstName;
        this.lastName = lastName;
        this.Birthday = Birthday;
        this.contact = contact,
            this.hometown = hometown;
        this.FavQuote = FavQuote;
    }
    return FacebookAbout;
}());
//Object create from above class
var Akash = new FacebookAbout("Akash", "Thombre", "07/20/1996", 8177971373, "Parbhani", "Live like the Boss");
//User Name
console.log(Akash.firstName);
//Age will be print
var age = Akash.getAge(Akash.Birthday);
console.log(age);
//contact will be print 
console.log(Akash.getContact());
