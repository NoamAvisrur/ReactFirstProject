app.component('editstudentComponent', {
    template: `<div class="add_student_wrapper">
                  <h2>Add new student</h2>
                  <form ng-submit="editstudent.submit()">
                      <label>
                          <span>name:</span>
                          <input type="text" name="name" ng-model="editstudent.name" maxlength="50" pattern="^[A-Za-z\\s]+$" title="please use english letters only" required>
                      </label>
                      <label>
                          <span>phone:</span>
                          <input type="text" name="phone" ng-model="editstudent.phone" maxlength="10" pattern="^[0-9]{7,10}$" title="please insert 7 - 10 digits only" required>
                      </label>
                      <label>
                          <span>email:</span>
                          <input type="email" name="email" ng-model="editstudent.email" required>
                      </label>
                      <label>
                          <span>image</span>
                          <input type="file" accept="image/*" required>
                      </label>       
                      <h2>Pick student's courses</h2>
                      <label ng-repeat="course in editstudent.data[1] track by $index">
                          <input type="checkbox" value={{course._id}} ng-checked="editstudent.checked{{$index}}" ng-model="editstudent.courses[course._id]">
                          <span class="course_title">{{course.name}}</span>
                      </label>
                      <input type="submit">
                  </form>
               </div>`,
    bindings: {
         data: "="
    },
    controller: function($element, DataService, $state) {

        this.$onInit = function(){    
            this.checkCourses(this.data[1], this.data[0][0].courses);
            this.id = this.data[0][0]._id;
            this.name = this.data[0][0].name;
            this.phone = this.data[0][0].phone;
            this.email = this.data[0][0].email;
            this.courses = {};
            this.pickedCourses = [];
            this.file = '';
        }    

        this.checkCourses = function(courses, checkedCourses){
            courses.forEach(function(course, i){
                var index = 'checked' + i;
                checkedCourses.forEach(function(checkedCourse, idx){
                    if(course._id == checkedCourse._id){
                        this[index] = true;
                    }
                }.bind(this))
            }.bind(this))   
        }
     
        this.submit = function(){
            var keys = Object.keys(this.courses);
            this.pickedCourses = keys.filter(function(key) {
                return this.courses[key];
            }.bind(this));
            if(this.pickedCourses.length === 0){
                alert("please pickup courses for new student");
            }else{ 
                this.file = document.querySelector('input[type=file]').files[0];
                var data = {
                    name: this.name,
                    phone: this.phone,
                    email: this.email,
                    courses: JSON.stringify(this.pickedCourses),
                    file: this.file                    
                } 
                console.log(data);
                console.log(this.courses)
                //DataService.addNewData(this.id, 'school/students', data)
                //.then(function(status){
                //    if(status == 200){
                //        this.clean();
                //        $state.go("school.general",{},{reload: "school"})
                //    }
                //}.bind(this))
            }
        }

        this.clean = function(){    
            this.name = '';
            this.phone = '';
            this.email = '';
            this.courses = {};
            this.pickedCourses = [];
        }        
    },
    controllerAs: 'editstudent'
});