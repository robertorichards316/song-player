var buildCollectionTemplate = function() {
  var template =

  '<div class="collection-album-container column fourth">'
   + '  <img src="assets/images/19.png/>'
   + '  <div class="collection-album-info caption">'
   + '    <p>'
   + '      <a class="album-name" href="album.html">Song Album</a>'
   + '      <br/>'
   + '      <a href="album.html">Song </a>'
   + '      <br/>'
   + '      X songs'
   + '      <br/>'
   + '    </p>'
   + '  </div>'
   + '</div>'
   ;
   return $(template);
 };
 $(window).load(function() {
     var $collectionContainer = $('.album-covers');

     $collectionContainer.empty();

     for (var i = 0; i < 12; i++) {
         var $newThumbnail = buildCollectionItemTemplate();
         $collectionContainer.append($newThumbnail);
      }

 });
