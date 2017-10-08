app.component('headerComponent', {
  template: `<header>
                 <nav>
                     <a ui-sref="school.general">school</a>
                     <a ui-sref="admin.general" ng-show="header.showAdmins">administrators</a>
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
                     <button id="logout_button" ng-click="header.logout()">Log-Out</button>
                 </div>
            </header>`,
  controller: function($element, DataService) {
      
    this.showAdmins = true;  
    this.userName = '';
    this.userRole = '';
    this.userImg = '';
    
    DataService.getUserData()
    .then(function(res){
        this.userName = res[0].name;
        this.userImg = res[0].img;
        this.userRole = res[0].roles[0].role;
        if(res[0].roles[0].role == 'sales'){
            this.showAdmins = false;
        }
    }.bind(this));
    
    this.logout = function(){
        var confirmLogout = confirm("are you sure you want to log-out?");
        if(confirmLogout){
            DataService.logOut()
            .then(function(status){
                if(status == 205){
                    window.location = "http://localhost:3000/login";    
                }
            }.bind(this));
        }
    }              
     
  },
  controllerAs: 'header'
});