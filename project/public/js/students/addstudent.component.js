app.component('addstudentComponent', {
            template: `<div class="add_student_wrapper">
                          <h2>Add new student</h2>
                          <form ng-submit="addstudent.submit()">
                              <label>
                                  <span>name:</span>
                                  <input type="text" name="name" ng-model="addstudent.name" maxlength="50" pattern="^[A-Za-z\\s]+$" title="please use english letters only" required>
                              </label>
                              <label>
                                  <span>phone:</span>
                                  <input type="text" name="phone" ng-model="addstudent.phone" maxlength="10" pattern="^[0-9]+$" title="please use digits only" required>
                              </label>
                              <label>
                                  <span>email:</span>
                                  <input type="email" name="email" ng-model="addstudent.email" required>
                              </label>
                              <label>
                                  <span>image</span>
                                  <input type="file">
                              </label>       
                              <h2>Pick student's courses</h2>
                              <label ng-repeat="course in addstudent.data[1]">
                                  <input type="checkbox" value={{course._id}} ng-model="addstudent.courses[course._id]">
                                  <span class="course_title">{{course.name}}</span>
                              </label>
                              <input type="submit">
                          </form>
                       </div>`,
  bindings: {
       data: "="
  },
  controller: function($element, DataService) {
      this.name = '';
      this.phone = '';
      this.email = '';
      this.img = '';
      this.courses = {};
      this.finalCourses = [];
      
      this.submit = function(){
          var keys = Object.keys(this.courses);
          var pickedCourses = keys.filter(function(key) {
              return this.courses[key];
          }.bind(this));
          if(pickedCourses.length === 0){
              alert("please pickup courses for new student");
          }else{ 
              this.img = document.querySelector('input[type=file]').files[0].name;
              this.prepateCourses(pickedCourses);
              var data = {
                  name: this.name,
                  phone: this.phone,
                  email: this.email,
                  img: this.img,
                  courses: this.finalCourses
              }    
              DataService.addNewData('school/students', JSON.stringify(data))
              .then(function(status){
                  if(status == 201){
                      console.log(status);
                      this.clean();
                      window.location.href = 'http://localhost:3000/#!/school/general';
                  }
              }.bind(this))
          }
      }
      
      this.prepateCourses = function(courses){
          courses.forEach(function(id) {
              this.finalCourses.push(`ObjectId(${id})`);
          }.bind(this));
      }
      
      this.clean = function(){    
          this.name = '';
          this.phone = '';
          this.email = '';
          this.courses = [];
          this.finalCourses = [];
      }
  },
  controllerAs: 'addstudent'
});