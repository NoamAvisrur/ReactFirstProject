app.component('editcourseComponent', {
    template: `<div class="add_course_wrapper">
                  <h2>Edit course</h2>
                  <form ng-submit="editcourse.submit()">
                      <label>
                          <span>title:</span>
                          <input type="text" name="title" ng-model="editcourse.title" maxlength="50" pattern="^[A-Za-z\\s]+$" title="please use english letters only" required>
                      </label>
                      <label>
                          <span>description:</span>
                          <textarea rows="4" name="description" ng-model="editcourse.description" maxlength="220" required></textarea>
                      </label>
                      <label>
                          <span>course image:</span>
                          <input type="file" ng-model="addcourse.image" required>
                      </label>                       
                      <input type="submit">
                  </form>
               </div>`,
    bindings: {
         data: "="
    },
    controller: function($element, DataService, $state) {

        this.$onInit = function(){
            this.id = this.data[0]._id;
            this.title = this.data[0].name;
            this.description = this.data[0].description;
            this.img = '';
        }
        
        this.submit = function(){
            var pattern = new RegExp('^[A-Za-z,.\\s]+$');
            if(!pattern.test(this.description)){
                alert("please use english letters only");
            }else{
                this.file = document.querySelector('input[type=file]').files[0];
                var data = {
                    title: this.title,
                    description: this.description,
                    file: this.file 
                }
                DataService.updateData(this.id, 'school/courses', data)
                .then(function(status){
                    if(status == 200){
                        this.clean();
                        $state.go("school.general",{},{reload: "school"});
                    }
                }.bind(this))
            }
        }

        this.clean = function(){    
            this.title = '';
            this.description = '';
        }        
    },
    controllerAs: 'editcourse'
});