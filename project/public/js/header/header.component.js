app.component('headerComponent', {
  template: `<header>
                 <nav>
                     <a ui-sref="school.general">school</a>
                     <a ui-sref="admin.general">administrators</a>
                 </nav>
                 <div id="logo">
                       <span></span>
                       <img src="http://www.coadesign.org/core/wp-content/uploads/2013/11/sof-logo.png" alt="logo">
                       <span></span>
                 </div>
                 <div id="user_wrapper">
                     <span>Hello {{header.userName}},</span>
                     <span class="user_role">{{ header.userRole}}</span>
                     <img class="user_img" ng-src="{{header.userImg}}" alt="user img">
                     <button id="logout_button">Log-Out</button>
                 </div>
            </header>`,
  controller: function($element, DataService) {
      
    this.userName = '';
    this.userRole = '';
    this.userImg = '';
    
    
    DataService.getServerData()
    .then(function(res){
        this.userName = res[3][0].name;
        this.userImg = res[3][0].img;
        this.userRole = res[3][0].roles[0].role;
    }.bind(this))
     
  },
  controllerAs: 'header'
});