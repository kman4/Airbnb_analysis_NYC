// var url =  d3.json("/api/borough").then(function(data){
// console.log(data)
// })




var $grid = $('.grid').masonry({
    columnWidth: 120,
    itemSelector: '.grid-item'
  });
  
  $grid.on( 'click', '.grid-item-content', function( event ) {
    $( event.currentTarget ).parent('.grid-item').toggleClass('is-expanded');
    $grid.masonry();
  });
  




