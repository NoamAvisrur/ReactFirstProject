app.component('addscourseComponent', {
            template: `<div class="add_course_wrapper">
                          <h2>add course</h2>
                          <form>
                              <label>
                                  <span>title</span>
                                  <input type="text">
                              </label>
                              <label>
                                  <span>description</span>
                                  <textarea rows="4"></textarea>
                              </label>
                          </form>
                       </div>`,
  bindings: {
       data: "="
  },
  controller: function($element) {
     
  },
  controllerAs: 'addcourse'
});