//
// kanban.js
// Dashkit module
//

'use strict';

(function() {
  
  //
  // Variables
  //

  var categories = document.querySelectorAll('.kanban-category');
  var links = document.querySelectorAll('.kanban-add-link');
  var forms = document.querySelectorAll('.kanban-add-form');


  //
  // Functions
  //

  function init(categories) {
    new Draggable.Sortable(categories, {
      draggable: '.kanban-item',
      mirror: {
        constrainDimensions: true
      }
    });
  }

  function toggleItems(el) {
    var parent = el.closest('.kanban-add');
    var card = parent.querySelector('.card');
    var link = parent.querySelector('.kanban-add-link');
    var form = parent.querySelector('.kanban-add-form');

    link.classList.toggle('d-none');
    form.classList.toggle('d-none');

    if (card) {
      if (card.classList.contains('card-sm')) {
        if (card.classList.contains('card-flush')) {
          card.classList.remove('card-flush');
        } else {
          card.classList.add('card-flush');
        }
      }
    }
  }


  //
  // Events
  //

  if (typeof Draggable !== 'undefined' && categories) {
    init(categories);
  }

  if (links) {
    [].forEach.call(links, function(el) {
      el.addEventListener('click', function() {
        toggleItems(el);
      });
    });
  }

  if (forms) {
    [].forEach.call(forms, function(el) {

      // Reset
      el.addEventListener('reset', function() {
        toggleItems(el);
      });

      // Submit
      el.addEventListener('submit', function(e) {
        e.preventDefault();
      });
    });
  }

})();

//  Photos

var containers = document.querySelectorAll('.photo-upload');

var draggable = new window.Draggable.Sortable(containers, {
  draggable: '.drag-item',
  appendTo: '.photo-upload',
  handle: '.photo-upload__control--drag',
  classes: {
    body: 'draggable-container--is-dragging',
  },
});

draggable.on('sortable:sorted', function() {
  console.log('sorted!');
});

//  Features

var containers = document.querySelectorAll('.vehicle-features__items');

var draggable = new window.Draggable.Swappable(containers, {
  draggable: '.drag-item',
  appendTo: '.vehicle-features__items',
  // handle: '.vehicle-features__feature-handle',
  classes: {
    body: 'draggable-container--is-dragging',
  },
  mirror: {
    constrainDimensions: true,
  },
});

draggable.on('sortable:sorted', function() {
  console.log('sorted!');
});

// Pricing

var containers = document.querySelectorAll('.vehicle-pricing__items');

var draggable = new window.Draggable.Swappable(containers, {
  draggable: '.drag-item',
  appendTo: '.vehicle-pricing__items',
  // handle: '.vehicle-features__feature-handle',
  classes: {
    body: 'draggable-container--is-dragging',
  },
  mirror: {
    constrainDimensions: true,
  },
});

draggable.on('sortable:sorted', function() {
  console.log('sorted!');
});
