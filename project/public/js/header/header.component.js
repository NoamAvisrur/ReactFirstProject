app.component('headerComponent', {
  template: `<header>
                 <nav>
                     <a ui-sref="school">school</a>
                     <a ui-sref="admin">administrators</a>
                 </nav>
                 <div id="logo">
                       <span></span>
                       <img src="http://www.coadesign.org/core/wp-content/uploads/2013/11/sof-logo.png" alt="logo">
                       <span></span>
                 </div>
                 <div id="user_wrapper">
                     <span>Hello, {{header.user.name}}</span>
                     <img src="{{header.user.img}}" alt="user img">
                     <button id="logout_button">Log-Out</button>
                 </div>
            </header>`,
  bindings: {
       user: "="
  },
  controller: function($element) {
     
  },
  controllerAs: 'header'
});