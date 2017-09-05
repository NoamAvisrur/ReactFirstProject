app.component('headerComponent', {
  template: `<header>
                 <nav>
                     <img src="" alt="logo">
                     <a ui-sref="school">school</a>
                     <a ui-sref="admin">administrators</a>
                 </nav>
                 <div>
                     <span>{{header.name}}</span>
                 </div>
            </header>`,
  bindings: {
       name: "="
  },
  controller: function($element) {
     
  },
  controllerAs: 'header'
});