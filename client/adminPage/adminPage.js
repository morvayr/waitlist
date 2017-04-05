import '../../imports/api/students.js';

Template.adminPage.onCreated(function (){
    Meteor.subscribe('allStudents');
});

Template.adminPage.student = function() {
    return Students.find({}, {sort: {createdAt: 1}});
};


Template.buttonSelections.events({
  'click .check-in, click .glyphicon-log-in' (event) {
       Students.update(this._id, {$set: {currentStatus: "In Advisement"}});
       //$(event.target).closest('.mainRow').css({"background-color":"#16B804","color":"white"});
   },
   'dblclick .check-in, dblclick .glyphicon-log-in' (event) {
       Students.update(this._id, {$set: {currentStatus: "Waiting"}});
       //$(event.target).closest('.mainRow').css({"background-color":"#FAFAFA","color":"black"});
   },
   'click .move'(){
       Students.update(this._id, {$set: {createdAt: new Date()}});
   },
   'click .check-out'() {
       console.log("hey");
       //Students.update(this._id, {$inc: {waitTime: -15}}, {multi:true});
   }
});

Template.expandButton.events({
    'click #expandBtn'(event, temp) {
        temp.$('#expand').toggleClass('glyphicon-plus glyphicon-minus');
    }
});
