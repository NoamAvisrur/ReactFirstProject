app.component('addscourseComponent', {
template: `<div class="add_course_wrapper">
              <h2>Add new course</h2>
              <form ng-submit="addcourse.submit()">
                  <label>
                      <span>title:</span>
                      <input type="text" name="title" ng-model="addcourse.title" maxlength="50" pattern="^[A-Za-z\\s]+$" title="please use english letters only" required>
                  </label>
                  <label>
                      <span>description:</span>
                      <textarea rows="4" name="description" ng-model="addcourse.description" maxlength="220" required></textarea>
                  </label>
                  <label>
                      <span>course image:</span>
                      <input type="file" ng-model="addcourse.image">
                  </label>                       
                  <input type="submit">
              </form>
           </div>`,
  bindings: {
       data: "="
  },
  controller: function($element, DataService) {
      this.title = '';
      this.description = '';
      this.img = '';

      this.submit = function(){
          var pattern = new RegExp('^[A-Za-z,.\\s]+$');
          if(!pattern.test(this.description)){
              alert("please use english letters only");
          }else{
              this.img = document.querySelector('input[type=file]').files[0].name;
              var data = {
                  title: this.title,
                  description: this.description,
                  img: this.img
              }
              DataService.addNewData('school/courses', JSON.stringify(data))
              .then(function(status){
                  if(status == 201){
                      console.log(status);
                      this.clean();
                      window.location.href = 'http://localhost:3000/#!/school/general';
                  }
              }.bind(this))
          }
      }
      
      this.clean = function(){    
          this.title = '';
          this.description = '';
      }
      
  },
  controllerAs: 'addcourse'
});